import React, { useMemo, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Grid, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { generatePPFDMap } from '../../utils/lightingUtils';

// Color scale helper
const getVoxelColor = (ppfd) => {
    const color = new THREE.Color();
    let opacity = 0.1; // Base opacity
    let category = 'low';

    if (ppfd < 200) {
        const t = ppfd / 200;
        color.setRGB(0.12 + (0.2 * t), 0.12 + (0.2 * t), 0.12 + (0.2 * t));
        opacity = 0.05;
        category = 'low';
    } else if (ppfd < 400) {
        const t = (ppfd - 200) / 200;
        color.setRGB(0, 0.2 * t, 0.6 + (0.4 * t));
        opacity = 0.1;
        category = 'seedling';
    } else if (ppfd < 600) {
        const t = (ppfd - 400) / 200;
        color.setRGB(0.2 * (1 - t), 0.6 + (0.4 * t), 0.2 * (1 - t));
        opacity = 0.2;
        category = 'veg';
    } else if (ppfd < 900) {
        const t = (ppfd - 600) / 300;
        color.setRGB(0.8 + (0.2 * t), 0.8 + (0.2 * (1 - t * 0.5)), 0);
        opacity = 0.4;
        category = 'flower';
    } else if (ppfd < 1200) {
        const t = (ppfd - 900) / 300;
        color.setRGB(1, 0.4 * (1 - t), 0);
        opacity = 0.6;
        category = 'high';
    } else {
        color.setRGB(1, 1, 1);
        opacity = 0.8;
        category = 'extreme';
    }
    return { color, opacity, category };
};

const VoxelGrid = ({ dimensions, activeLights, width, depth, height, unit, activeFilters }) => {
    const meshRef = useRef();
    const [hovered, setHover] = useState(null);

    // Grid Resolution (Number of cubes per axis)
    const resX = 12;
    const resZ = 12;
    const resY = 10;

    const { data, count } = useMemo(() => {
        if (!dimensions.width || !dimensions.height) return { data: [], count: 0 };

        const widthFt = unit === 'cm' ? dimensions.width / 30.48 : dimensions.width;
        const depthFt = unit === 'cm' ? dimensions.depth / 30.48 : dimensions.depth;
        const totalHeightFt = unit === 'cm' ? dimensions.height / 30.48 : dimensions.height;

        const voxels = [];
        const tempColor = new THREE.Color();

        // Loop Y (Height layers)
        for (let y = 0; y < resY; y++) {
            const layerY = y / (resY - 1); // 0 to 1
            const distanceFromLight = totalHeightFt * (1 - layerY);

            const resolutionX = resX / widthFt;

            for (let x = 0; x < resX; x++) {
                for (let z = 0; z < resZ; z++) {
                    // Voxel Center Coordinates (Physical Feet)
                    const vx = (x + 0.5) * (widthFt / resX);
                    const vz = (z + 0.5) * (depthFt / resZ);

                    // Calculate PPFD manually for this point
                    let ppfd = 0;
                    activeLights.forEach(light => {
                        const quantity = light.quantity || 1;
                        const positions = light.positions || [];
                        for (let i = 0; i < quantity; i++) {
                            const pos = positions[i] || { x: 0.5, y: 0.5 };
                            const lx = pos.x * widthFt;
                            const lz = pos.y * depthFt;

                            const dx = vx - lx;
                            const dz = vz - lz;
                            const dy = distanceFromLight;

                            const dist = Math.sqrt(dx * dx + dz * dz + dy * dy);
                            const theta = Math.acos(dy / dist);

                            const beamAngle = (light.beamAngle || 120) * Math.PI / 180;
                            if (theta > beamAngle / 2) continue;

                            let ppfdAtHeight = light.maxPPFD;
                            if (light.recommendedHeight) {
                                const recH = light.recommendedHeight / 12;
                                const effectiveHeight = Math.max(0.5, distanceFromLight);
                                const scale = Math.pow(recH / effectiveHeight, 2);
                                ppfdAtHeight = light.maxPPFD * scale;
                            }

                            ppfd += ppfdAtHeight * (dy / dist);
                        }
                    });

                    // Visual Position (World Units)
                    const posX = (x / resX) * width - width / 2 + (width / resX) / 2;
                    const posZ = (z / resZ) * depth - depth / 2 + (depth / resZ) / 2;
                    const posY = (y / resY) * height + (height / resY) / 2;

                    const { color, opacity, category } = getVoxelColor(ppfd);

                    // Filter Logic
                    if (activeFilters && !activeFilters[category]) {
                        continue; // Skip this voxel if its category is unchecked
                    }

                    voxels.push({
                        position: [posX, posY, posZ],
                        color: color,
                        opacity: opacity,
                        ppfd: Math.round(ppfd)
                    });
                }
            }
        }

        return { data: voxels, count: voxels.length };
    }, [dimensions, activeLights, unit, width, depth, height, activeFilters]);

    useEffect(() => {
        if (!meshRef.current) return;

        const tempObject = new THREE.Object3D();
        const tempColor = new THREE.Color();

        for (let i = 0; i < count; i++) {
            const { position, color } = data[i];
            tempObject.position.set(...position);
            tempObject.updateMatrix();
            meshRef.current.setMatrixAt(i, tempObject.matrix);
            meshRef.current.setColorAt(i, color);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
        if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;

    }, [data, count]);

    // Voxel Geometry size
    const boxSizeX = (width / resX) * 0.9;
    const boxSizeY = (height / resY) * 0.9;
    const boxSizeZ = (depth / resZ) * 0.9;

    return (
        <instancedMesh
            ref={meshRef}
            args={[null, null, count]}
        >
            <boxGeometry args={[boxSizeX, boxSizeY, boxSizeZ]} />
            <meshStandardMaterial
                transparent
                opacity={0.3}
                roughness={0.1}
                metalness={0.1}
            />
        </instancedMesh>
    );
};

const TentBox = ({ width, depth, height }) => {
    return (
        <group>
            <Grid
                position={[0, 0, 0]}
                args={[width, depth]}
                cellSize={width / 10}
                sectionSize={width / 2}
                fadeDistance={width * 2}
                sectionColor="#10b981"
                cellColor="#333"
            />
            <lineSegments position={[0, height / 2, 0]}>
                <edgesGeometry args={[new THREE.BoxGeometry(width, height, depth)]} />
                <lineBasicMaterial color="#10b981" opacity={0.3} transparent />
            </lineSegments>
        </group>
    );
};

const Lights = ({ activeLights, width, depth, height }) => {
    return (
        <group position={[0, height, 0]}>
            {activeLights.map((light) => {
                const pos = light.positions[0];
                const x = (pos.x - 0.5) * width;
                const z = (pos.y - 0.5) * depth;
                return (
                    <group key={light.instanceId} position={[x, 0, z]} rotation={[0, -pos.rotation * Math.PI / 180, 0]}>
                        <mesh>
                            <boxGeometry args={[light.physicalWidth || 1, 0.2, light.physicalDepth || 1]} />
                            <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={0.5} />
                        </mesh>
                        <spotLight
                            intensity={2}
                            angle={light.beamAngle ? light.beamAngle * Math.PI / 360 : Math.PI / 3}
                            penumbra={0.5}
                            distance={height * 1.5}
                            color="#fff"
                            target-position={[0, -height, 0]}
                        />
                    </group>
                );
            })}
        </group>
    );
};

export default function PPFD3DScene({ ppfdMap, dimensions, activeLights, unit, activeFilters }) {
    const scaleFactor = unit === 'cm' ? 0.1 : 3.0;
    const width = (dimensions.width || 1) * scaleFactor;
    const depth = (dimensions.depth || 1) * scaleFactor;
    const height = (dimensions.height || 1) * scaleFactor;

    return (
        <div style={{ width: '100%', height: '100%', minHeight: '500px', background: '#050505' }}>
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[width * 1.5, height * 1.2, width * 1.5]} fov={50} />
                <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2} />

                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                {/* Voxel Grid */}
                <VoxelGrid
                    dimensions={dimensions}
                    activeLights={activeLights}
                    width={width}
                    depth={depth}
                    height={height}
                    unit={unit}
                    activeFilters={activeFilters}
                />

                <TentBox width={width} depth={depth} height={height} />
                <Lights activeLights={activeLights} width={width} depth={depth} height={height} />
                <axesHelper args={[5]} />
            </Canvas>
        </div>
    );
}
