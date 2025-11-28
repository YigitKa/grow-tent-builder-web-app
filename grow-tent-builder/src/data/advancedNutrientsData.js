// Advanced Nutrients Feeding Schedule Data
// Based on the provided briefing for Connoisseur and Sensi series

export const SUBSTRATE_TYPES = {
    COCO: 'coco',
    HYDRO: 'hydro'
};

export const RECIPES = {
    TOP_SHELF: 'top-shelf',
    MASTER: 'master'
};

export const BASE_NUTRIENT_OPTIONS = [
    { 
        id: 'gmb', 
        label: 'pH Perfect® Grow Micro Bloom', 
        shortLabel: 'Grow Micro Bloom',
        products: ['gmb-grow', 'gmb-micro', 'gmb-bloom'], 
        schedule_key: 'schedule_hydro_master',
        icon: '🧪',
        color: '#7C3AED',
        badge: '3-Part',
        description: 'Esnek 3 parçalı temel sistem - Tüm dönemler',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Grow-Micro-Bloom-1L.jpg'
    },
    { 
        id: 'sensi', 
        label: 'pH Perfect® Sensi Grow & Bloom', 
        shortLabel: 'Sensi Grow & Bloom',
        products: ['sensi-grow-a', 'sensi-grow-b', 'sensi-bloom-a', 'sensi-bloom-b'], 
        schedule_key: 'schedule_hydro_master',
        icon: '💧',
        color: '#2563EB',
        badge: 'Professional',
        description: 'pH Perfect teknolojisi ile profesyonel besin sistemi',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Sensi-Grow-Bloom-1L.png'
    },
    { 
        id: 'sensi-coco', 
        label: 'pH Perfect® Sensi Coco Grow & Bloom', 
        shortLabel: 'Sensi Coco Grow & Bloom',
        products: ['sensi-coco-grow-a', 'sensi-coco-grow-b', 'sensi-coco-bloom-a', 'sensi-coco-bloom-b'], 
        schedule_key: 'schedule_coco_master',
        icon: '🥥',
        color: '#0891B2',
        badge: 'Coco',
        description: 'Coco coir ortamları için özel formül',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Sensi-Coco-Grow-Bloom-1L.png'
    },
    { 
        id: 'connoisseur', 
        label: 'pH Perfect® Connoisseur® Grow & Bloom', 
        shortLabel: 'Connoisseur Grow & Bloom',
        products: ['conn-grow-a', 'conn-grow-b', 'conn-bloom-a', 'conn-bloom-b'], 
        schedule_key: 'schedule_hydro_master',
        icon: '🏆',
        color: '#DC2626',
        badge: 'Premium',
        description: 'Üst düzey profesyonel besin serisi',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Connoisseur-Grow-Bloom-1L-v2.png'
    },
    { 
        id: 'connoisseur-coco', 
        label: 'pH Perfect® Connoisseur® Coco Grow & Bloom', 
        shortLabel: 'Connoisseur Coco Grow & Bloom',
        products: ['conn-coco-grow-a', 'conn-coco-grow-b', 'conn-coco-bloom-a', 'conn-coco-bloom-b'], 
        schedule_key: 'schedule_coco_master',
        icon: '👑',
        color: '#B91C1C',
        badge: 'Premium Coco',
        description: 'Premium Coco ortamları için en üst düzey formül',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Connoisseur-Coco-Grow-Bloom-1L.png'
    },
    { 
        id: 'iguana', 
        label: 'OG Organics™ Iguana Juice® Grow & Bloom', 
        shortLabel: 'Iguana Juice Grow & Bloom',
        products: ['iguana-grow', 'iguana-bloom'], 
        schedule_key: 'schedule_hydro_master',
        icon: '🦎',
        color: '#16A34A',
        badge: 'Organic',
        description: '100% Organik sertifikalı besin serisi',
        image: '/images/advanced-nutrients/OG-Organics-Iguana-Juice-Grow-Bloom-Advanced-Nutrients-1L-EU.jpg'
    },
    { 
        id: 'jungle', 
        label: 'Jungle Juice® Grow Micro Bloom', 
        shortLabel: 'Jungle Juice GMB',
        products: ['jungle-grow', 'jungle-micro', 'jungle-bloom'], 
        schedule_key: 'schedule_hydro_master',
        icon: '🌴',
        color: '#059669',
        badge: 'Budget',
        description: 'Ekonomik 3 parçalı temel sistem',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Jungle-Juice-GMB-1L-300x243-v2.jpg'
    },
];

export const PRODUCT_CATEGORIES = {
    base_nutrient: { 
        name_key: 'catBaseNutrient', 
        icon: '🌱',
        name: 'Temel Besinler',
        nameEn: 'BASE NUTRIENTS',
        description: 'Bitkinin ana büyüme ve çiçeklenme aşamaları için gerekli olan temel besin çözeltileri.',
        color: '#22C55E'
    },
    root_expanders: { 
        name_key: 'catRootExpanders', 
        icon: '🌳',
        name: 'Kök Genişleticiler',
        nameEn: 'ROOT EXPANDERS',
        description: 'Kök sistemi gelişimini destekleyen ürünler.',
        color: '#8B5CF6'
    },
    bigger_buds: { 
        name_key: 'catBiggerBuds', 
        icon: '🌺',
        name: 'Büyük Tomurcuklar',
        nameEn: 'BIGGER BUDS',
        description: 'Tomurcuk boyutunu ve ağırlığını artırmayı hedefleyen destekleyiciler.',
        color: '#EF4444'
    },
    bud_potency: { 
        name_key: 'catBudPotency', 
        icon: '💪',
        name: 'Tomurcuk Potansiyeli & Gövde Güçlendirici',
        nameEn: 'BUD POTENCY & STALK STRENGTHENER',
        description: 'Bitki gücünü, gövde yapısını ve tomurcuk potansiyelini destekleyen ürünler.',
        color: '#F59E0B'
    },
    grow_medium: { 
        name_key: 'catGrowMedium', 
        icon: '🍂',
        name: 'Büyüme Ortamı Düzenleyici',
        nameEn: 'GROW MEDIUM CONDITIONER',
        description: 'Yetiştirme ortamının koşullarını iyileştirmeyi amaçlayan ürünler.',
        color: '#34D399'
    },
    taste_terpene: { 
        name_key: 'catTasteTerpene', 
        icon: '🍬',
        name: 'Tomurcuk Tadı & Terpen Geliştirici',
        nameEn: 'BUD TASTE & TERPENE ENHANCEMENT',
        description: 'Mahsulün tadını ve aroma profilini (terpen) geliştirmeyi hedefleyen ürünler.',
        color: '#EC4899'
    }
};

export const WEEK_LABELS = [
    'Grow W1', 'Grow W2', 'Grow W3', 'Grow W4',
    'Bloom W1', 'Bloom W2', 'Bloom W3', 'Bloom W4',
    'Bloom W5', 'Bloom W6', 'Bloom W7', 'Bloom W8'
];

export const PHASE_INFO = {
    vegetative: { weeks: [1, 2, 3, 4], label_key: 'phaseLabelVeg', color: '#22C55E' },
    flowering: { weeks: [5, 6, 7, 8, 9, 10, 11], label_key: 'phaseLabelFlower', color: '#EC4899' },
    flush: { weeks: [12], label_key: 'phaseLabelFlush', color: '#6B7280' }
};

export const ADVANCED_NUTRIENTS_DATA = [
    // --- Base Nutrients ---
    // Connoisseur Coco
    {
        id: 'conn-coco-grow-a',
        product_name: 'pH Perfect® Connoisseur® Coco Grow A',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#DC2626',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Connoisseur-Coco-Grow-Bloom-1L.png',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 3, 'Grow W4': 4 }
    },
    {
        id: 'conn-coco-grow-b',
        product_name: 'pH Perfect® Connoisseur® Coco Grow B',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#DC2626',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Connoisseur-Coco-Grow-Bloom-1L.png',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 3, 'Grow W4': 4 }
    },
    {
        id: 'conn-coco-bloom-a',
        product_name: 'pH Perfect® Connoisseur® Coco Bloom A',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#DB2777',
        function_key: 'funcBaseNutrientBloom',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Connoisseur-Coco-Grow-Bloom-1L.png',
        schedule_default: { 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    {
        id: 'conn-coco-bloom-b',
        product_name: 'pH Perfect® Connoisseur® Coco Bloom B',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#DB2777',
        function_key: 'funcBaseNutrientBloom',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Connoisseur-Coco-Grow-Bloom-1L.png',
        schedule_default: { 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    // Sensi Coco
    {
        id: 'sensi-coco-grow-a',
        product_name: 'pH Perfect® Sensi Coco Grow™ A',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#16A34A',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Sensi-Coco-Grow-Bloom-1L.png',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 3, 'Grow W4': 4 }
    },
    {
        id: 'sensi-coco-grow-b',
        product_name: 'pH Perfect® Sensi Coco Grow™ B',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#16A34A',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Sensi-Coco-Grow-Bloom-1L.png',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 3, 'Grow W4': 4 }
    },
    {
        id: 'sensi-coco-bloom-a',
        product_name: 'pH Perfect® Sensi Coco Bloom™ A',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#BE185D',
        function_key: 'funcBaseNutrientBloom',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Sensi-Coco-Grow-Bloom-1L.png',
        schedule_default: { 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    {
        id: 'sensi-coco-bloom-b',
        product_name: 'pH Perfect® Sensi Coco Bloom™ B',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#BE185D',
        function_key: 'funcBaseNutrientBloom',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Sensi-Coco-Grow-Bloom-1L.png',
        schedule_default: { 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    // Sensi (Hydro/Soil)
    {
        id: 'sensi-grow-a',
        product_name: 'pH Perfect® Sensi Grow™ A',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#059669',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Sensi-Grow-Bloom-1L.png',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 3, 'Grow W4': 4 }
    },
    {
        id: 'sensi-grow-b',
        product_name: 'pH Perfect® Sensi Grow™ B',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#059669',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Sensi-Grow-Bloom-1L.png',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 3, 'Grow W4': 4 }
    },
    {
        id: 'sensi-bloom-a',
        product_name: 'pH Perfect® Sensi Bloom™ A',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#9D174D',
        function_key: 'funcBaseNutrientBloom',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Sensi-Grow-Bloom-1L.png',
        schedule_default: { 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    {
        id: 'sensi-bloom-b',
        product_name: 'pH Perfect® Sensi Bloom™ B',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#9D174D',
        function_key: 'funcBaseNutrientBloom',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Sensi-Grow-Bloom-1L.png',
        schedule_default: { 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    // Connoisseur (Hydro/Soil) - NEW
    {
        id: 'conn-grow-a',
        product_name: 'pH Perfect® Connoisseur® Grow A',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#DC2626',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Connoisseur-Grow-Bloom-1L-v2.png',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 3, 'Grow W4': 4 }
    },
    {
        id: 'conn-grow-b',
        product_name: 'pH Perfect® Connoisseur® Grow B',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#DC2626',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Connoisseur-Grow-Bloom-1L-v2.png',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 3, 'Grow W4': 4 }
    },
    {
        id: 'conn-bloom-a',
        product_name: 'pH Perfect® Connoisseur® Bloom A',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#DB2777',
        function_key: 'funcBaseNutrientBloom',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Connoisseur-Grow-Bloom-1L-v2.png',
        schedule_default: { 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    {
        id: 'conn-bloom-b',
        product_name: 'pH Perfect® Connoisseur® Bloom B',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#DB2777',
        function_key: 'funcBaseNutrientBloom',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Connoisseur-Grow-Bloom-1L-v2.png',
        schedule_default: { 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    // Grow Micro Bloom (3-Part) - NEW
    {
        id: 'gmb-grow',
        product_name: 'pH Perfect® Grow',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#16A34A',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Grow-Micro-Bloom-1L.jpg',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 4, 'Grow W4': 4, 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    {
        id: 'gmb-micro',
        product_name: 'pH Perfect® Micro',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#7C3AED',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Grow-Micro-Bloom-1L.jpg',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 4, 'Grow W4': 4, 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    {
        id: 'gmb-bloom',
        product_name: 'pH Perfect® Bloom',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#DC2626',
        function_key: 'funcBaseNutrientBloom',
        image: '/images/advanced-nutrients/Advanced-Nutrients-pH-Perfect-Grow-Micro-Bloom-1L.jpg',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 4, 'Grow W4': 4, 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    // Sensi Terra - NEW
    {
        id: 'sensi-terra-grow',
        product_name: 'Sensi Terra™ Grow',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#16A34A',
        function_key: 'funcBaseNutrientVeg',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 3, 'Grow W3': 5, 'Grow W4': 5 }
    },
    {
        id: 'sensi-terra-bloom',
        product_name: 'Sensi Terra™ Bloom',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#BE185D',
        function_key: 'funcBaseNutrientBloom',
        schedule_default: { 'Bloom W1': 3, 'Bloom W2': 5, 'Bloom W3': 5, 'Bloom W4': 5, 'Bloom W5': 5, 'Bloom W6': 5, 'Bloom W7': 3 }
    },
    // OG Organics Iguana Juice - NEW
    {
        id: 'iguana-grow',
        product_name: 'OG Organics™ Iguana Juice® Grow',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#65A30D',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/OG-Organics-Iguana-Juice-Grow-Bloom-Advanced-Nutrients-1L-EU.jpg',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 4, 'Grow W4': 4 }
    },
    {
        id: 'iguana-bloom',
        product_name: 'OG Organics™ Iguana Juice® Bloom',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#BE185D',
        function_key: 'funcBaseNutrientBloom',
        image: '/images/advanced-nutrients/OG-Organics-Iguana-Juice-Grow-Bloom-Advanced-Nutrients-1L-EU.jpg',
        schedule_default: { 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    // Jungle Juice - NEW
    {
        id: 'jungle-grow',
        product_name: 'Jungle Juice™ Grow',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#16A34A',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Jungle-Juice-GMB-1L-300x243-v2.jpg',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 4, 'Grow W4': 4, 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    {
        id: 'jungle-micro',
        product_name: 'Jungle Juice™ Micro',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#7C3AED',
        function_key: 'funcBaseNutrientVeg',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Jungle-Juice-GMB-1L-300x243-v2.jpg',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 4, 'Grow W4': 4, 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },
    {
        id: 'jungle-bloom',
        product_name: 'Jungle Juice™ Bloom',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#DC2626',
        function_key: 'funcBaseNutrientBloom',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Jungle-Juice-GMB-1L-300x243-v2.jpg',
        schedule_default: { 'Grow W1': 1, 'Grow W2': 2, 'Grow W3': 4, 'Grow W4': 4, 'Bloom W1': 4, 'Bloom W2': 4, 'Bloom W3': 4, 'Bloom W4': 4, 'Bloom W5': 4, 'Bloom W6': 4, 'Bloom W7': 4 }
    },

    // --- Root Expanders ---
    {
        id: 'voodoo-juice',
        product_name: 'Voodoo Juice®',
        category_key: 'root_expanders',
        dose_unit: 'ml/L',
        color: '#8B5CF6',
        function_key: 'funcRootStim',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Voodoo-Juice-1L.png',
        schedule_coco_topshelf: { 'Grow W1': 2, 'Grow W2': 2, 'Bloom W1': 2, 'Bloom W2': 2 },
        schedule_coco_master: { 'Grow W1': 2, 'Grow W2': 2, 'Bloom W1': 2, 'Bloom W2': 2 },
        schedule_hydro_master: { 'Grow W1': 2, 'Grow W2': 2, 'Bloom W1': 2, 'Bloom W2': 2 }
    },
    {
        id: 'piranha',
        product_name: 'Piranha®',
        category_key: 'root_expanders',
        dose_unit: 'ml/L',
        color: '#A78BFA',
        function_key: 'funcRootFungi',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Piranha-Liquid-1L.png',
        schedule_coco_master: { 'Grow W1': 2, 'Grow W2': 2, 'Bloom W1': 2, 'Bloom W2': 2 },
        schedule_hydro_master: { 'Grow W1': 2, 'Grow W2': 2, 'Bloom W1': 2, 'Bloom W2': 2 }
    },
    {
        id: 'tarantula',
        product_name: 'Tarantula®',
        category_key: 'root_expanders',
        dose_unit: 'ml/L',
        color: '#7C3AED',
        function_key: 'funcRootBacteria',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Tarantula-Liquid-1L.png',
        schedule_coco_master: { 'Grow W1': 2, 'Grow W2': 2, 'Bloom W1': 2, 'Bloom W2': 2 },
        schedule_hydro_master: { 'Grow W1': 2, 'Grow W2': 2, 'Bloom W1': 2, 'Bloom W2': 2 }
    },

    // --- Bud Potency & Stalk Strengthener ---
    {
        id: 'b-52',
        product_name: 'B-52®',
        category_key: 'bud_potency',
        dose_unit: 'ml/L',
        color: '#F59E0B',
        function_key: 'funcVitaminBoost',
        image: '/images/advanced-nutrients/Advanced-Nutrients-B-52-1L.png',
        schedule_coco_topshelf: { 'Grow W3': 2, 'Grow W4': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2, 'Bloom W7': 2 },
        schedule_coco_master: { 'Grow W1': 2, 'Grow W2': 2, 'Grow W3': 2, 'Grow W4': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2, 'Bloom W7': 2 },
        schedule_hydro_master: { 'Grow W1': 2, 'Grow W2': 2, 'Grow W3': 2, 'Grow W4': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2, 'Bloom W7': 2 }
    },
    {
        id: 'rhino-skin',
        product_name: 'Rhino Skin®',
        category_key: 'bud_potency',
        dose_unit: 'ml/L',
        color: '#64748B',
        function_key: 'funcSilica',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Rhino-Skin-1L.png',
        schedule_coco_master: { 'Grow W3': 2, 'Grow W4': 2, 'Bloom W1': 2, 'Bloom W2': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2 },
        schedule_hydro_master: { 'Grow W3': 2, 'Grow W4': 2, 'Bloom W1': 2, 'Bloom W2': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2 }
    },
    {
        id: 'bud-factor-x',
        product_name: 'Bud Factor X®',
        category_key: 'bud_potency',
        dose_unit: 'ml/L',
        color: '#EC4899',
        function_key: 'funcResin',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Bud-Factor-X-1L.png',
        schedule_coco_master: { 'Bloom W1': 2, 'Bloom W2': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2, 'Bloom W7': 2 },
        schedule_hydro_master: { 'Bloom W1': 2, 'Bloom W2': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2, 'Bloom W7': 2 }
    },

    // --- Bigger Buds ---
    {
        id: 'bud-ignitor',
        product_name: 'Bud Ignitor®',
        category_key: 'bigger_buds',
        dose_unit: 'ml/L',
        color: '#EF4444',
        function_key: 'funcEarlyFlower',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Bud-Ignitor-1L.png',
        schedule_coco_topshelf: { 'Bloom W1': 2, 'Bloom W2': 2 },
        schedule_coco_master: { 'Bloom W1': 2, 'Bloom W2': 2 },
        schedule_hydro_master: { 'Bloom W1': 2, 'Bloom W2': 2 }
    },
    {
        id: 'big-bud-coco',
        product_name: 'Big Bud Coco®',
        category_key: 'bigger_buds',
        dose_unit: 'ml/L',
        color: '#FCD34D',
        function_key: 'funcBloomBooster',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Big-Bud-Coco-1L-1.png',
        schedule_coco_topshelf: { 'Bloom W2': 2, 'Bloom W3': 2, 'Bloom W4': 2 },
        schedule_coco_master: { 'Bloom W2': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2 }
    },
    {
        id: 'big-bud',
        product_name: 'Big Bud®',
        category_key: 'bigger_buds',
        dose_unit: 'ml/L',
        color: '#FCD34D',
        function_key: 'funcBloomBooster',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Big-Bud-Liquid.png',
        schedule_hydro_master: { 'Bloom W2': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2 }
    },
    {
        id: 'overdrive',
        product_name: 'Overdrive®',
        category_key: 'bigger_buds',
        dose_unit: 'ml/L',
        color: '#D946EF',
        function_key: 'funcLateBloom',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Overdrive-1L.png',
        schedule_coco_topshelf: { 'Bloom W6': 2, 'Bloom W7': 2 },
        schedule_coco_master: { 'Bloom W6': 2, 'Bloom W7': 2 },
        schedule_hydro_master: { 'Bloom W6': 2, 'Bloom W7': 2 }
    },

    // --- Taste & Terpene ---
    {
        id: 'bud-candy',
        product_name: 'Bud Candy®',
        category_key: 'taste_terpene',
        dose_unit: 'ml/L',
        color: '#F472B6',
        function_key: 'funcCarbs',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Bud-Candy-1L.png',
        schedule_coco_topshelf: { 'Grow W1': 2, 'Grow W2': 2, 'Grow W3': 2, 'Grow W4': 2, 'Bloom W1': 2, 'Bloom W2': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2, 'Bloom W7': 2 },
        schedule_coco_master: { 'Grow W1': 2, 'Grow W2': 2, 'Grow W3': 2, 'Grow W4': 2, 'Bloom W1': 2, 'Bloom W2': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2, 'Bloom W7': 2 },
        schedule_hydro_master: { 'Grow W1': 2, 'Grow W2': 2, 'Grow W3': 2, 'Grow W4': 2, 'Bloom W1': 2, 'Bloom W2': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2, 'Bloom W7': 2 }
    },
    {
        id: 'nirvana',
        product_name: 'Tasty Terpenes® (Nirvana®)',
        category_key: 'taste_terpene',
        dose_unit: 'ml/L',
        color: '#A3E635',
        function_key: 'funcOrganics',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Tasty-Terpenes-1L.png',
        schedule_coco_master: { 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2, 'Bloom W7': 2 },
        schedule_hydro_master: { 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2, 'Bloom W7': 2 }
    },

    // --- Grow Medium Conditioner ---
    {
        id: 'sensizym',
        product_name: 'Sensizym®',
        category_key: 'grow_medium',
        dose_unit: 'ml/L',
        color: '#34D399',
        function_key: 'funcEnzymes',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Sensizym-1L.png',
        schedule_coco_master: { 'Grow W1': 2, 'Grow W2': 2, 'Grow W3': 2, 'Grow W4': 2, 'Bloom W1': 2, 'Bloom W2': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2, 'Bloom W7': 2 },
        schedule_hydro_master: { 'Grow W1': 2, 'Grow W2': 2, 'Grow W3': 2, 'Grow W4': 2, 'Bloom W1': 2, 'Bloom W2': 2, 'Bloom W3': 2, 'Bloom W4': 2, 'Bloom W5': 2, 'Bloom W6': 2, 'Bloom W7': 2 }
    },

    // --- Bud Taste & Terpene Enhancement ---
    {
        id: 'flawless-finish',
        product_name: 'Flawless Finish®',
        category_key: 'taste_terpene',
        dose_unit: 'ml/L',
        color: '#9CA3AF',
        function_key: 'funcFlush',
        image: '/images/advanced-nutrients/Advanced-Nutrients-Flawless-Finish-1L.png',
        schedule_coco_topshelf: { 'Bloom W8': 2 },
        schedule_coco_master: { 'Bloom W8': 2 },
        schedule_hydro_master: { 'Bloom W8': 2 }
    }
];

export const DEFAULT_SELECTED_PRODUCTS_COCO_TOPSHELF = [
    'conn-coco-grow-a', 'conn-coco-grow-b', 'conn-coco-bloom-a', 'conn-coco-bloom-b',
    'voodoo-juice', 'b-52', 'bud-ignitor', 'big-bud-coco', 'overdrive', 'bud-candy', 'flawless-finish'
];
