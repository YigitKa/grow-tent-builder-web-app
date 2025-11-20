/**
 * Calculates the PPFD at a specific point on the floor from a single light source.
 * Uses the Lambertian distribution model: I(r) = I_max * cos(theta)
 * 
 * @param {Object} light - The light object containing maxPPFD, beamAngle, etc.
 * @param {number} targetX - The x-coordinate of the target point (in feet).
 * @param {number} targetY - The y-coordinate of the target point (in feet).
 * @param {number} lightX - The x-coordinate of the light source (in feet).
 * @param {number} lightY - The y-coordinate of the light source (in feet).
 * @param {number} height - The mounting height of the light above the floor (in feet).
 * @returns {number} The calculated PPFD value at the target point.
 */
export function calculatePPFD(light, targetX, targetY, lightX, lightY, height) {
    if (!light.maxPPFD) return 0;

    // Calculate horizontal distance from light center to target point
    const dx = targetX - lightX;
    const dy = targetY - lightY;
    const r = Math.sqrt(dx * dx + dy * dy);

    // Calculate angle theta
    // theta = arctan(r / h)
    const theta = Math.atan(r / height);

    // Check if the point is within the beam angle
    // Beam angle is usually FWHM (Full Width Half Maximum) or total spread.
    // For simplicity and standard modeling, we'll assume the light falls off naturally
    // but we can clamp it if it exceeds the beam angle significantly if needed.
    // Here we use the cosine law which naturally tapers off.

    // However, if r is very large, theta approaches 90 degrees, cos(theta) approaches 0.
    // Let's add a beam angle cutoff if strictly required, but usually spill light exists.
    // For now, we'll stick to the cosine law as requested: I(r) = I_max * cos(theta)
    // Note: The user mentioned I(r) = I_max * cos(theta). 
    // Strictly speaking, for a flat surface, the irradiance E = (I / d^2) * cos(theta).
    // Where d is the slant distance: d = h / cos(theta).
    // So E = (I_0 * cos(theta) / (h/cos(theta))^2) * cos(theta) = (I_0 / h^2) * cos^4(theta) for Lambertian source.
    // BUT, the user explicitly asked for: "PPFD oranı da I(r) = I_max × cos(θ) olarak alınabilir".
    // This is a simplified model often used for approximate distribution in these contexts 
    // or they might be referring to relative intensity.
    // Let's follow the user's formula: PPFD = maxPPFD * cos(theta)
    // We might need to adjust 'maxPPFD' to be 'PPFD at height h' which it likely is in our data.

    // If maxPPFD is measured at the *recommended height*, and we are at a *different* height,
    // we should scale by inverse square law: (recommended_h / current_h)^2

    let ppfdAtHeight = light.maxPPFD;
    if (light.recommendedHeight) {
        const recH = light.recommendedHeight / 12; // convert inches to feet
        // Scale based on height difference (Inverse Square Law)
        // limit height to avoid division by zero or extreme values
        const effectiveHeight = Math.max(0.5, height);
        const scale = Math.pow(recH / effectiveHeight, 2);
        ppfdAtHeight = light.maxPPFD * scale;
    }

    // User formula: I(r) = I_max * cos(theta)
    // This models the angular falloff.
    const cosTheta = Math.cos(theta);

    // We can also add a beam angle factor. If theta > beamAngle/2, it drops off sharply.
    // Let's assume the user's simple model is sufficient for now, but we can clamp it.
    const halfBeamRad = (light.beamAngle || 120) * Math.PI / 180 / 2;
    if (theta > halfBeamRad) {
        // Simple linear falloff or hard cut? Let's do a smooth drop to 0 slightly past beam angle
        // or just let cos(theta) handle it if beam angle is wide.
        // For a spotlight, cos(theta) isn't enough.
        // Let's stick to the requested simple model for now.
    }

    return ppfdAtHeight * cosTheta;
}

/**
 * Generates a 2D grid of PPFD values for the entire tent floor.
 * 
 * @param {number} tentWidth - Width of the tent in feet.
 * @param {number} tentDepth - Depth of the tent in feet.
 * @param {Array} lights - Array of light objects with positions.
 * @param {number} gridResolution - Number of cells per foot (default 4, i.e., 3 inch cells).
 * @param {number} globalHeight - Global hanging height in feet (optional override).
 * @returns {Array<Array<number>>} 2D array of PPFD values.
 */
export function generatePPFDMap(tentWidth, tentDepth, lights, gridResolution = 4, globalHeight = null) {
    const cols = Math.ceil(tentWidth * gridResolution);
    const rows = Math.ceil(tentDepth * gridResolution);
    const map = Array(rows).fill(0).map(() => Array(cols).fill(0));

    // Helper to convert grid index to physical coordinates (center of cell)
    const getCoord = (index) => (index + 0.5) / gridResolution;

    lights.forEach(light => {
        const quantity = light.quantity || 1;
        const positions = light.positions || [];

        for (let i = 0; i < quantity; i++) {
            const pos = positions[i] || { x: 0.5, y: 0.5 };
            const lightX = pos.x * tentWidth;
            const lightY = pos.y * tentDepth;

            // Determine height for this light
            // If globalHeight is provided, use it.
            // Otherwise use light's recommended height (converted to feet) or default to 1.5ft
            let h = globalHeight;
            if (h === null) {
                h = light.recommendedHeight ? light.recommendedHeight / 12 : 1.5;
            }

            for (let r = 0; r < rows; r++) {
                const cellY = getCoord(r);
                for (let c = 0; c < cols; c++) {
                    const cellX = getCoord(c);
                    const ppfd = calculatePPFD(light, cellX, cellY, lightX, lightY, h);
                    map[r][c] += ppfd;
                }
            }
        }
    });

    return map;
}

/**
 * Calculates metrics from the PPFD map.
 * 
 * @param {Array<Array<number>>} ppfdMap 
 * @returns {Object} { average, min, max, uniformity }
 */
export function calculateMetrics(ppfdMap) {
    let total = 0;
    let min = Infinity;
    let max = -Infinity;
    let count = 0;

    for (let r = 0; r < ppfdMap.length; r++) {
        for (let c = 0; c < ppfdMap[r].length; c++) {
            const val = ppfdMap[r][c];
            total += val;
            if (val < min) min = val;
            if (val > max) max = val;
            count++;
        }
    }

    if (count === 0) return { average: 0, min: 0, max: 0, uniformity: 0 };

    const average = total / count;
    // Uniformity is often defined as Min / Avg or Min / Max. Let's use Min / Avg.
    const uniformity = average > 0 ? min / average : 0;

    return {
        average: Math.round(average),
        min: Math.round(min),
        max: Math.round(max),
        uniformity: parseFloat(uniformity.toFixed(2))
    };
}
