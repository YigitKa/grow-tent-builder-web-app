/**
 * Preset Sets API Service
 * Fetches preset/ready-to-use sets from Supabase
 */

import { supabase, isSupabaseConfigured } from '../supabase';

// Cache for preset sets data
let presetSetsCache = null;

/**
 * Fetch all preset sets from Supabase
 * @returns {Promise<Array>} Array of preset sets
 */
export async function fetchPresetSets() {
    if (!isSupabaseConfigured()) {
        console.warn('Supabase not configured, returning empty array');
        return [];
    }

    // Return cached data if available
    if (presetSetsCache) {
        return presetSetsCache;
    }

    const { data, error } = await supabase
        .from('preset_sets')
        .select('*')
        .order('tier', { ascending: true })
        .order('total_price', { ascending: true });

    if (error) {
        console.error('Error fetching preset sets:', error);
        throw error;
    }

    // Transform data to match the expected format
    const transformedData = (data || []).map(set => ({
        id: set.id,
        name: set.name,
        description: set.description,
        tier: set.tier,
        tentSize: set.tent_size,
        mediaType: set.media_type,
        nutrientBrand: set.nutrient_brand,
        plantCount: set.plant_count,
        items: set.items,
        totalPrice: set.total_price,
        image: set.image_url
    }));

    // Cache the data
    presetSetsCache = transformedData;
    return presetSetsCache;
}

/**
 * Fetch a single preset set by ID
 * @param {string} id - Preset set ID
 * @returns {Promise<Object|null>} Preset set object or null
 */
export async function fetchPresetSetById(id) {
    if (!isSupabaseConfigured()) {
        console.warn('Supabase not configured, returning null');
        return null;
    }

    // Check cache first
    if (presetSetsCache) {
        return presetSetsCache.find(set => set.id === id) || null;
    }

    const { data, error } = await supabase
        .from('preset_sets')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        if (error.code === 'PGRST116') {
            // No rows returned
            return null;
        }
        console.error('Error fetching preset set:', error);
        throw error;
    }

    if (!data) return null;

    return {
        id: data.id,
        name: data.name,
        description: data.description,
        tier: data.tier,
        tentSize: data.tent_size,
        mediaType: data.media_type,
        nutrientBrand: data.nutrient_brand,
        plantCount: data.plant_count,
        items: data.items,
        totalPrice: data.total_price,
        image: data.image_url
    };
}

/**
 * Fetch preset sets filtered by tier
 * @param {string} tier - Tier name (entry, standard, pro)
 * @returns {Promise<Array>} Filtered preset sets
 */
export async function fetchPresetSetsByTier(tier) {
    const allSets = await fetchPresetSets();
    return allSets.filter(set => set.tier === tier);
}

/**
 * Fetch preset sets filtered by nutrient brand
 * @param {string} brand - Nutrient brand name
 * @returns {Promise<Array>} Filtered preset sets
 */
export async function fetchPresetSetsByBrand(brand) {
    const allSets = await fetchPresetSets();
    return allSets.filter(set => set.nutrientBrand === brand);
}

/**
 * Get unique nutrient brands from preset sets
 * @returns {Promise<Array<string>>} Array of unique brand names
 */
export async function getUniqueBrands() {
    const allSets = await fetchPresetSets();
    return [...new Set(allSets.map(set => set.nutrientBrand))];
}

/**
 * Clear cache (useful for development/testing)
 */
export function clearPresetSetsCache() {
    presetSetsCache = null;
}
