// CANNA Feeding Schedule Data
// Comprehensive nutrient schedules for all CANNA growing systems
// Systems: AQUA, COCO, COGr, SUBSTRA, TERRA

// Growing Systems
export const CANNA_SYSTEMS = {
    AQUA: 'aqua',
    COCO: 'coco',
    COGR: 'cogr',
    SUBSTRA: 'substra',
    TERRA: 'terra'
};

// System Information
export const SYSTEM_INFO = {
    aqua: {
        id: 'aqua',
        name: 'CANNA AQUA',
        name_key: 'cannaAquaName',
        description_key: 'cannaAquaDesc',
        icon: '💧',
        color: '#0EA5E9',
        features: ['Recirculating Systems', 'pH Self-Regulating', 'NFT Compatible'],
        features_keys: ['cannaAquaFeature1', 'cannaAquaFeature2', 'cannaAquaFeature3']
    },
    coco: {
        id: 'coco',
        name: 'CANNA COCO',
        name_key: 'cannaCocoName',
        description_key: 'cannaCocoDesc',
        icon: '🥥',
        color: '#78350F',
        features: ['Coco Substrate', 'Combined A&B Formula', 'Organic Feel + Precision'],
        features_keys: ['cannaCocoFeature1', 'cannaCocoFeature2', 'cannaCocoFeature3']
    },
    cogr: {
        id: 'cogr',
        name: 'CANNA COGr',
        name_key: 'cannaCOGrName',
        description_key: 'cannaCOGrDesc',
        icon: '📦',
        color: '#92400E',
        features: ['Compressed Coco Slabs', 'Buffering Required', 'Expert Level'],
        features_keys: ['cannaCOGrFeature1', 'cannaCOGrFeature2', 'cannaCOGrFeature3']
    },
    substra: {
        id: 'substra',
        name: 'CANNA SUBSTRA',
        name_key: 'cannaSubstraName',
        description_key: 'cannaSubstraDesc',
        icon: '🔬',
        color: '#7C3AED',
        features: ['Run-to-Waste', 'Hard/Soft Water Versions', 'Inert Media'],
        features_keys: ['cannaSubstraFeature1', 'cannaSubstraFeature2', 'cannaSubstraFeature3']
    },
    terra: {
        id: 'terra',
        name: 'CANNA TERRA',
        name_key: 'cannaTerraName',
        description_key: 'cannaTerraDesc',
        icon: '🌱',
        color: '#15803D',
        features: ['Soil-Based', 'Indoor/Outdoor', 'Forgiving Medium'],
        features_keys: ['cannaTerraFeature1', 'cannaTerraFeature2', 'cannaTerraFeature3']
    }
};

// Plant-Specific Schedules Available per System
export const PLANT_SCHEDULES = {
    aqua: ['general', 'wasabi'],
    coco: ['general', 'basil', 'cucumber', 'tomatoes', 'orchids'],
    cogr: ['general'],
    substra: ['general'],
    terra: ['general', 'basil', 'grape']
};

// Plant Information
export const PLANT_INFO = {
    general: { name_key: 'plantGeneral', icon: '🌿' },
    wasabi: { name_key: 'plantWasabi', icon: '🌶️' },
    basil: { name_key: 'plantBasil', icon: '🌿' },
    cucumber: { name_key: 'plantCucumber', icon: '🥒' },
    tomatoes: { name_key: 'plantTomatoes', icon: '🍅' },
    orchids: { name_key: 'plantOrchids', icon: '🌸' },
    grape: { name_key: 'plantGrape', icon: '🍇' }
};

// Product Categories
export const PRODUCT_CATEGORIES = {
    base_nutrient: {
        name_key: 'catBaseNutrient',
        icon: '🌱',
        name: 'Base Nutrients',
        color: '#22C55E'
    },
    root_stimulator: {
        name_key: 'catRootStim',
        icon: '🌳',
        name: 'Root Stimulators',
        color: '#8B5CF6'
    },
    bloom_booster: {
        name_key: 'catBloomBooster',
        icon: '🌺',
        name: 'Bloom Boosters',
        color: '#EC4899'
    },
    enzyme: {
        name_key: 'catEnzyme',
        icon: '🔬',
        name: 'Enzymes',
        color: '#34D399'
    },
    booster: {
        name_key: 'catBooster',
        icon: '⚡',
        name: 'Boosters',
        color: '#F59E0B'
    },
    buffer: {
        name_key: 'catBuffer',
        icon: '⚗️',
        name: 'Buffering Agents',
        color: '#6366F1'
    }
};

// CANNA Products Database
export const CANNA_PRODUCTS = [
    // === AQUA PRODUCTS ===
    {
        id: 'aqua-vega-a',
        product_name: 'CANNA AQUA VEGA A',
        system: 'aqua',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#22C55E',
        function_key: 'funcBaseNutrientVeg',
        function_detailed: 'Vejetatif Dönem Beslenmesi (Hydroponic)',
        key_properties: 'NFT ve sirkülasyonlu hidroponik sistemler için özel formül. pH dengeli, hızlı emilim sağlar. A ve B birlikte kullanılır.',
        description_key: 'descAquaVega',
        paired_with: 'aqua-vega-b',
        image: '/images/canna/prod-canna-aqua-vega.png.webp',
        short_info_key: 'infoAquaVega',
        tags: ['tagVEGA', 'tagHydroponic', 'tagGrowth'],
        available_packaging: ['1L', '5L', '10L'],
        price: 650,
        icon: '💧'
    },
    {
        id: 'aqua-vega-b',
        product_name: 'CANNA AQUA VEGA B',
        system: 'aqua',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#22C55E',
        function_key: 'funcBaseNutrientVeg',
        function_detailed: 'Vejetatif Dönem Beslenmesi (Hydroponic)',
        key_properties: 'NFT ve sirkülasyonlu hidroponik sistemler için özel formül. pH dengeli, hızlı emilim sağlar. A ve B birlikte kullanılır.',
        description_key: 'descAquaVega',
        paired_with: 'aqua-vega-a',
        image: '/images/canna/prod-canna-aqua-vega.png.webp',
        short_info_key: 'infoAquaVega',
        tags: ['tagVEGA', 'tagHydroponic', 'tagGrowth'],
        available_packaging: ['1L', '5L', '10L'],
        price: 650,
        icon: '💧'
    },
    {
        id: 'aqua-flores-a',
        product_name: 'CANNA AQUA FLORES A',
        system: 'aqua',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#EC4899',
        function_key: 'funcBaseNutrientBloom',
        function_detailed: 'Çiçeklenme Dönemi Beslenmesi (Hydroponic)',
        key_properties: 'Sirkülasyonlu hidroponik sistemlerde çiçeklenme için optimize edilmiş PK oranları. Yoğun çiçek ve meyve üretimini destekler.',
        description_key: 'descAquaFlores',
        paired_with: 'aqua-flores-b',
        image: '/images/canna/prod-canna-aqua-flores.png.webp',
        short_info_key: 'infoAquaFlores',
        tags: ['tagFLORES', 'tagHydroponic', 'tagBloom'],
        available_packaging: ['1L', '5L', '10L'],
        price: 680,
        icon: '🌸'
    },
    {
        id: 'aqua-flores-b',
        product_name: 'CANNA AQUA FLORES B',
        system: 'aqua',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#EC4899',
        function_key: 'funcBaseNutrientBloom',
        function_detailed: 'Çiçeklenme Dönemi Beslenmesi (Hydroponic)',
        key_properties: 'Sirkülasyonlu hidroponik sistemlerde çiçeklenme için optimize edilmiş PK oranları. Yoğun çiçek ve meyve üretimini destekler.',
        description_key: 'descAquaFlores',
        paired_with: 'aqua-flores-a',
        image: '/images/canna/prod-canna-aqua-flores.png.webp',
        short_info_key: 'infoAquaFlores',
        tags: ['tagFLORES', 'tagHydroponic', 'tagBloom'],
        available_packaging: ['1L', '5L', '10L'],
        price: 680,
        icon: '🌸'
    },

    // === COCO PRODUCTS ===
    {
        id: 'coco-a',
        product_name: 'CANNA COCO A',
        system: 'coco',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#78350F',
        function_key: 'funcBaseNutrientAll',
        function_detailed: 'Coco Ortamı İçin Tam Dönem Besini',
        key_properties: 'Coco coir ortamının özel ihtiyaçları için tasarlanmış A+B sistemi. Kalsiyum ve demir zenginleştirilmiş formül, tüm büyüme dönemlerinde kullanılabilir.',
        description_key: 'descCoco',
        paired_with: 'coco-b',
        image: '/images/canna/prod-canna-coco-ab.png.webp',
        short_info_key: 'infoCoco',
        tags: ['tagCoco', 'tagAB', 'tagAllPhases'],
        available_packaging: ['1L', '5L', '10L'],
        price: 620,
        icon: '🥥'
    },
    {
        id: 'coco-b',
        product_name: 'CANNA COCO B',
        system: 'coco',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#78350F',
        function_key: 'funcBaseNutrientAll',
        function_detailed: 'Coco Ortamı İçin Tam Dönem Besini',
        key_properties: 'Coco coir ortamının özel ihtiyaçları için tasarlanmış A+B sistemi. Kalsiyum ve demir zenginleştirilmiş formül, tüm büyüme dönemlerinde kullanılabilir.',
        description_key: 'descCoco',
        paired_with: 'coco-a',
        image: '/images/canna/prod-canna-coco-ab.png.webp',
        short_info_key: 'infoCoco',
        tags: ['tagCoco', 'tagAB', 'tagAllPhases'],
        available_packaging: ['1L', '5L', '10L'],
        price: 620,
        icon: '🥥'
    },

    // === COGr PRODUCTS ===
    {
        id: 'cogr-vega-a',
        product_name: 'CANNA COGr VEGA A',
        system: 'cogr',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#92400E',
        function_key: 'funcBaseNutrientVeg',
        function_detailed: 'COGr Slab Vejetatif Besleme',
        key_properties: 'Sıkıştırılmış coco slab sistemleri için optimize edilmiş büyüme besini. Silikon zenginleştirilmiş formül ile güçlü gövde yapısı sağlar.',
        description_key: 'descCOGrVega',
        paired_with: 'cogr-vega-b',
        image: '/images/canna/prod-canna-cogr-vega.png.webp',
        short_info_key: 'infoCOGrVega',
        tags: ['tagCOGr', 'tagVEGA', 'tagSilicon'],
        available_packaging: ['1L', '5L', '10L'],
        price: 700,
        icon: '📦'
    },
    {
        id: 'cogr-vega-b',
        product_name: 'CANNA COGr VEGA B',
        system: 'cogr',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#92400E',
        function_key: 'funcBaseNutrientVeg',
        function_detailed: 'COGr Slab Vejetatif Besleme',
        key_properties: 'Sıkıştırılmış coco slab sistemleri için optimize edilmiş büyüme besini. Silikon zenginleştirilmiş formül ile güçlü gövde yapısı sağlar.',
        description_key: 'descCOGrVega',
        paired_with: 'cogr-vega-a',
        image: '/images/canna/prod-canna-cogr-vega.png.webp',
        short_info_key: 'infoCOGrVega',
        tags: ['tagCOGr', 'tagVEGA', 'tagSilicon'],
        available_packaging: ['1L', '5L', '10L'],
        price: 700,
        icon: '📦'
    },
    {
        id: 'cogr-flores-a',
        product_name: 'CANNA COGr FLORES A',
        system: 'cogr',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#EC4899',
        function_key: 'funcBaseNutrientBloom',
        function_detailed: 'COGr Slab Çiçeklenme Besleme',
        key_properties: 'COGr sistemlerinde çiçeklenme için fulvik asit zenginleştirilmiş formül. Yoğun çiçek ve meyve üretimini destekler.',
        description_key: 'descCOGrFlores',
        paired_with: 'cogr-flores-b',
        image: '/images/canna/prod-canna-cogr-flores.png.webp',
        short_info_key: 'infoCOGrFlores',
        tags: ['tagCOGr', 'tagFLORES', 'tagFulvicAcid'],
        available_packaging: ['1L', '5L', '10L'],
        price: 720,
        icon: '🌺'
    },
    {
        id: 'cogr-flores-b',
        product_name: 'CANNA COGr FLORES B',
        system: 'cogr',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#EC4899',
        function_key: 'funcBaseNutrientBloom',
        function_detailed: 'COGr Slab Çiçeklenme Besleme',
        key_properties: 'COGr sistemlerinde çiçeklenme için fulvik asit zenginleştirilmiş formül. Yoğun çiçek ve meyve üretimini destekler.',
        description_key: 'descCOGrFlores',
        paired_with: 'cogr-flores-a',
        image: '/images/canna/prod-canna-cogr-flores.png.webp',
        short_info_key: 'infoCOGrFlores',
        tags: ['tagCOGr', 'tagFLORES', 'tagFulvicAcid'],
        available_packaging: ['1L', '5L', '10L'],
        price: 720,
        icon: '🌺'
    },
    {
        id: 'cogr-buffer-agent',
        product_name: 'COGr Buffering Agent',
        system: 'cogr',
        category_key: 'buffer',
        dose_unit: 'ml/L',
        color: '#6366F1',
        function_key: 'funcBuffer',
        function_detailed: 'COGr Slab Tamponlama',
        key_properties: 'COGr slablarını kullanmadan önce tamponlamak için gerekli ürün. Kalsiyum ve magnezyum dengesini optimize eder.',
        description_key: 'descCOGrBuffer',
        image: '/images/canna/prod-canna-cogr-buffer-agent.png.webp',
        short_info_key: 'infoCOGrBuffer',
        tags: ['tagCOGr', 'tagBuffer', 'tagSlabPrep'],
        available_packaging: ['1L', '5L'],
        price: 480,
        icon: '⚗️'
    },

    // === SUBSTRA PRODUCTS ===
    {
        id: 'substra-vega-a-hw',
        product_name: 'CANNA SUBSTRA VEGA A (Hard Water)',
        system: 'substra',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#7C3AED',
        function_key: 'funcBaseNutrientVeg',
        function_detailed: 'Run-to-Waste Vejetatif (Sert Su)',
        key_properties: 'İnert ortamlar (perlit, kaya yünü) için run-to-waste sistemi. Sert su için özel formül, kalsiyum dengelenmiş.',
        description_key: 'descSubstraVega',
        water_type: 'hard',
        paired_with: 'substra-vega-b-hw',
        short_info_key: 'infoSubstraVega',
        tags: ['tagSUBSTRA', 'tagHardWater', 'tagVEGA'],
        available_packaging: ['1L', '5L', '10L'],
        price: 680,
        icon: '🔬'
    },
    {
        id: 'substra-vega-b-hw',
        product_name: 'CANNA SUBSTRA VEGA B (Hard Water)',
        system: 'substra',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#7C3AED',
        function_key: 'funcBaseNutrientVeg',
        function_detailed: 'Run-to-Waste Vejetatif (Sert Su)',
        key_properties: 'İnert ortamlar (perlit, kaya yünü) için run-to-waste sistemi. Sert su için özel formül, kalsiyum dengelenmiş.',
        description_key: 'descSubstraVega',
        water_type: 'hard',
        paired_with: 'substra-vega-a-hw',
        short_info_key: 'infoSubstraVega',
        tags: ['tagSUBSTRA', 'tagHardWater', 'tagVEGA'],
        available_packaging: ['1L', '5L', '10L'],
        price: 680,
        icon: '🔬'
    },
    {
        id: 'substra-vega-a-sw',
        product_name: 'CANNA SUBSTRA VEGA A (Soft Water)',
        system: 'substra',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#A78BFA',
        function_key: 'funcBaseNutrientVeg',
        function_detailed: 'Run-to-Waste Vejetatif (Yumuşak Su)',
        key_properties: 'İnert ortamlar için run-to-waste sistemi. Yumuşak su veya RO su kullanıcıları için ekstra kalsiyum eklenmiş formül.',
        description_key: 'descSubstraVega',
        water_type: 'soft',
        paired_with: 'substra-vega-b-sw',
        short_info_key: 'infoSubstraVega',
        tags: ['tagSUBSTRA', 'tagSoftWater', 'tagVEGA'],
        available_packaging: ['1L', '5L', '10L'],
        price: 680,
        icon: '🔬'
    },
    {
        id: 'substra-vega-b-sw',
        product_name: 'CANNA SUBSTRA VEGA B (Soft Water)',
        system: 'substra',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#A78BFA',
        function_key: 'funcBaseNutrientVeg',
        function_detailed: 'Run-to-Waste Vejetatif (Yumuşak Su)',
        key_properties: 'İnert ortamlar için run-to-waste sistemi. Yumuşak su veya RO su kullanıcıları için ekstra kalsiyum eklenmiş formül.',
        description_key: 'descSubstraVega',
        water_type: 'soft',
        paired_with: 'substra-vega-a-sw',
        short_info_key: 'infoSubstraVega',
        tags: ['tagSUBSTRA', 'tagSoftWater', 'tagVEGA'],
        available_packaging: ['1L', '5L', '10L'],
        price: 680,
        icon: '🔬'
    },
    {
        id: 'substra-flores-a-hw',
        product_name: 'CANNA SUBSTRA FLORES A (Hard Water)',
        system: 'substra',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#EC4899',
        function_key: 'funcBaseNutrientBloom',
        function_detailed: 'Run-to-Waste Çiçeklenme (Sert Su)',
        key_properties: 'Run-to-waste sistemlerinde çiçeklenme için optimize edilmiş PK oranları. Sert su formülü.',
        description_key: 'descSubstraFlores',
        water_type: 'hard',
        paired_with: 'substra-flores-b-hw',
        short_info_key: 'infoSubstraFlores',
        tags: ['tagSUBSTRA', 'tagHardWater', 'tagFLORES'],
        available_packaging: ['1L', '5L', '10L'],
        price: 700,
        icon: '🌸'
    },
    {
        id: 'substra-flores-b-hw',
        product_name: 'CANNA SUBSTRA FLORES B (Hard Water)',
        system: 'substra',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#EC4899',
        function_key: 'funcBaseNutrientBloom',
        function_detailed: 'Run-to-Waste Çiçeklenme (Sert Su)',
        key_properties: 'Run-to-waste sistemlerinde çiçeklenme için optimize edilmiş PK oranları. Sert su formülü.',
        description_key: 'descSubstraFlores',
        water_type: 'hard',
        paired_with: 'substra-flores-a-hw',
        short_info_key: 'infoSubstraFlores',
        tags: ['tagSUBSTRA', 'tagHardWater', 'tagFLORES'],
        available_packaging: ['1L', '5L', '10L'],
        price: 700,
        icon: '🌸'
    },
    {
        id: 'substra-flores-a-sw',
        product_name: 'CANNA SUBSTRA FLORES A (Soft Water)',
        system: 'substra',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#F472B6',
        function_key: 'funcBaseNutrientBloom',
        function_detailed: 'Run-to-Waste Çiçeklenme (Yumuşak Su)',
        key_properties: 'Run-to-waste sistemlerinde çiçeklenme için optimize edilmiş formül. Yumuşak su veya RO su için tasarlanmış.',
        description_key: 'descSubstraFlores',
        water_type: 'soft',
        paired_with: 'substra-flores-b-sw',
        short_info_key: 'infoSubstraFlores',
        tags: ['tagSUBSTRA', 'tagSoftWater', 'tagFLORES'],
        available_packaging: ['1L', '5L', '10L'],
        price: 700,
        icon: '🌸'
    },
    {
        id: 'substra-flores-b-sw',
        product_name: 'CANNA SUBSTRA FLORES B (Soft Water)',
        system: 'substra',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#F472B6',
        function_key: 'funcBaseNutrientBloom',
        function_detailed: 'Run-to-Waste Çiçeklenme (Yumuşak Su)',
        key_properties: 'Run-to-waste sistemlerinde çiçeklenme için optimize edilmiş formül. Yumuşak su veya RO su için tasarlanmış.',
        description_key: 'descSubstraFlores',
        water_type: 'soft',
        paired_with: 'substra-flores-a-sw',
        short_info_key: 'infoSubstraFlores',
        tags: ['tagSUBSTRA', 'tagSoftWater', 'tagFLORES'],
        available_packaging: ['1L', '5L', '10L'],
        price: 700,
        icon: '🌸'
    },

    // === TERRA PRODUCTS ===
    {
        id: 'terra-vega',
        product_name: 'CANNA TERRA VEGA',
        system: 'terra',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#15803D',
        function_key: 'funcBaseNutrientVeg',
        function_detailed: 'Toprak Ortamı Vejetatif Besleme',
        key_properties: 'Toprak ve turba bazlı ortamlar için geliştirilmiş vejetatif dönem besini. Yavaş salınımlı formül ile aşırı beslenme riskini azaltır.',
        description_key: 'descTerraVega',
        image: '/images/canna/prod-canna-terra-vega.png.webp',
        short_info_key: 'infoTerraVega',
        tags: ['tagTERRA', 'tagSoil', 'tagGrowth'],
        available_packaging: ['1L', '5L', '10L'],
        price: 580,
        icon: '🌱'
    },
    {
        id: 'terra-flores',
        product_name: 'CANNA TERRA FLORES',
        system: 'terra',
        category_key: 'base_nutrient',
        dose_unit: 'ml/L',
        color: '#EC4899',
        function_key: 'funcBaseNutrientBloom',
        function_detailed: 'Toprak Ortamı Çiçeklenme Besleme',
        key_properties: 'Toprak ortamlarında çiçeklenme için optimize edilmiş PK oranları. Meyve ve çiçek oluşumunu destekler, tat ve aroma geliştirici.',
        description_key: 'descTerraFlores',
        image: '/images/canna/prod-canna-terra-flores.png.webp',
        short_info_key: 'infoTerraFlores',
        tags: ['tagTERRA', 'tagSoil', 'tagBloom'],
        available_packaging: ['1L', '5L', '10L'],
        price: 600,
        icon: '🌸'
    },

    // === UNIVERSAL ADDITIVES (work with all systems) ===
    {
        id: 'rhizotonic',
        product_name: 'RHIZOTONIC',
        system: 'all',
        category_key: 'root_stimulator',
        dose_unit: 'ml/L',
        color: '#8B5CF6',
        function_key: 'funcRootStim',
        function_detailed: 'Kök Stimülatörü',
        key_properties: 'Oligosakkaritler ve vitaminler içeren güçlü kök stimülatörü. Stresli bitkileri canlandırır, kök gelişimini hızlandırır. Çelik köklendirmede de etkili.',
        description_key: 'descRhizotonic',
        image: '/images/canna/prod-additives-canna-rhizotonic.png.webp',
        short_info_key: 'infoRhizotonic',
        tags: ['tagRootDev', 'tagStartPhase', 'tagGrowth'],
        available_packaging: ['250ML', '500ML', '1L', '5L', '10L'],
        price: 750,
        icon: '🌳'
    },
    {
        id: 'cannazym',
        product_name: 'CANNAZYM',
        system: 'all',
        category_key: 'enzyme',
        dose_unit: 'ml/L',
        color: '#34D399',
        function_key: 'funcEnzymes',
        function_detailed: 'Enzim Kompleksi',
        key_properties: '20\'den fazla enzim içeren yüksek kaliteli ürün. Ölü kök kalıntılarını parçalar, besin döngüsünü iyileştirir. Substrat yeniden kullanımında dozaj iki katına çıkarılabilir.',
        description_key: 'descCannazym',
        image: '/images/canna/prod-additives-cannazym.png.webp',
        short_info_key: 'infoCannazym',
        tags: ['tagEnzyme', 'tagSubstrateRenew', 'tagAllPhases'],
        available_packaging: ['250ML', '500ML', '1L', '5L', '10L'],
        price: 680,
        icon: '🔬'
    },
    {
        id: 'pk-13-14',
        product_name: 'PK 13/14',
        system: 'all',
        category_key: 'bloom_booster',
        dose_unit: 'ml/L',
        color: '#EC4899',
        function_key: 'funcBloomBooster',
        function_detailed: 'Çiçeklenme Destekleyici (PK)',
        key_properties: 'Fosfor ve potasyum konsantresi. Çiçeklenmenin kritik döneminde tek seferlik veya kısa süreli kullanım için. Meyve/çiçek ağırlığını ve yoğunluğunu artırır.',
        description_key: 'descPK1314',
        image: '/images/canna/prod-additives-canna-pk-1314.png.webp',
        short_info_key: 'infoPK1314',
        tags: ['tagPK', 'tagMassBoost', 'tagGenerative'],
        available_packaging: ['250ML', '500ML', '1L', '5L', '10L'],
        price: 520,
        icon: '💪'
    },
    {
        id: 'cannaboost',
        product_name: 'CANNABOOST Accelerator',
        system: 'all',
        category_key: 'booster',
        dose_unit: 'ml/L',
        color: '#F59E0B',
        function_key: 'funcBooster',
        function_detailed: 'Metabolizma Hızlandırıcı',
        key_properties: 'Bitkinin metabolizmasını hızlandıran doğal çiçeklenme destekleyici. Verim artışı ve tat geliştirme sağlar. Tüm CANNA sistemleriyle uyumlu.',
        description_key: 'descCannaboost',
        image: '/images/canna/prod-additives-cannaboost.png.webp',
        short_info_key: 'infoCannaboost',
        tags: ['tagBloomBoost', 'tagAccelerator', 'tagIntenseFlower'],
        available_packaging: ['250ML', '500ML', '1L', '5L', '10L'],
        price: 980,
        icon: '🚀'
    }
];

// Phase definitions for different schedule types
export const PHASE_INFO = {
    // Standard phases (general growing)
    standard: {
        rooting: { label_key: 'cannaPhaseRooting', color: '#8B5CF6', icon: '🌱' },
        vegetative: { label_key: 'cannaPhaseVegetative', color: '#22C55E', icon: '🌿' },
        generative1: { label_key: 'cannaPhaseGenerative1', color: '#F59E0B', icon: '🌼' },
        generative2: { label_key: 'cannaPhaseGenerative2', color: '#EC4899', icon: '🌸' },
        generative3: { label_key: 'cannaPhaseGenerative3', color: '#EF4444', icon: '🍎' },
        final: { label_key: 'cannaPhaseFinal', color: '#6B7280', icon: '🏁' }
    },
    // Wasabi specific (long cycle)
    wasabi: {
        rooting: { label_key: 'cannaPhaseRooting', color: '#8B5CF6', weeks: '3-5 weeks' },
        vegetative: { label_key: 'cannaPhaseVegetative', color: '#22C55E', weeks: '18-24 months' },
        final: { label_key: 'cannaPhaseFinal', color: '#6B7280', weeks: '2 weeks' }
    },
    // Orchid specific
    orchids: {
        start: { label_key: 'cannaPhaseStart', color: '#8B5CF6', weeks: '2-8 weeks' },
        vegetative: { label_key: 'cannaPhaseVegetative', color: '#22C55E', weeks: '18-52 weeks' },
        flowering: { label_key: 'cannaPhaseFlowering', color: '#EC4899', weeks: '4+ weeks' },
        recovery: { label_key: 'cannaPhaseRecovery', color: '#6B7280', weeks: 'Variable' }
    },
    // Grape specific
    grape: {
        budBreak: { label_key: 'cannaPhaseBudBreak', color: '#8B5CF6', weeks: '1 week' },
        vegetative: { label_key: 'cannaPhaseVegetative', color: '#22C55E', weeks: '1-2 weeks' },
        generative1: { label_key: 'cannaPhaseGenerative1', color: '#F59E0B', weeks: '2-4 weeks' },
        generative2: { label_key: 'cannaPhaseGenerative2', color: '#EC4899', weeks: '2 weeks' },
        generative3: { label_key: 'cannaPhaseGenerative3', color: '#EF4444', weeks: '2 weeks' },
        dormancy: { label_key: 'cannaPhaseDormancy', color: '#6B7280', weeks: 'Hold' }
    }
};

// =============================================
// FEEDING SCHEDULES BY SYSTEM AND PLANT
// =============================================

// AQUA System Schedules
export const AQUA_SCHEDULES = {
    general: {
        plant_type: 'General Fast-Growing Plant',
        weeks: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
        phases: {
            'W1': 'rooting',
            'W2-W3': 'vegetative1',
            'W4-W5': 'vegetative2',
            'W6-W7': 'generative1',
            'W8': 'generative2',
            'W9-W10': 'generative3',
            'W11-W12': 'generative4'
        },
        stages: [
            { name: 'Start / rooting', name_key: 'stageRooting', duration: '<1 week', light_hours: 18, ec_plus: '0.7-1.1', ppm_plus: '520-810' },
            { name: 'Vegetative phase I', name_key: 'stageVeg1', duration: '0-3 weeks', light_hours: 18, ec_plus: '0.9-1.3', ppm_plus: '670-960' },
            { name: 'Vegetative phase II', name_key: 'stageVeg2', duration: '2-4 weeks', light_hours: 12, ec_plus: '1.2-1.6', ppm_plus: '890-1180' },
            { name: 'Generative Period I', name_key: 'stageGen1', duration: '2-3 weeks', light_hours: 12, ec_plus: '1.4-1.8', ppm_plus: '1040-1330' },
            { name: 'Generative Period II', name_key: 'stageGen2', duration: '1 week', light_hours: 12, ec_plus: '1.6-2.0', ppm_plus: '1180-1480' },
            { name: 'Generative Period III', name_key: 'stageGen3', duration: '2-3 weeks', light_hours: 12, ec_plus: '1.0-1.4', ppm_plus: '740-1040' },
            { name: 'Generative Period IV', name_key: 'stageGen4', duration: '1-2 weeks', light_hours: '10-12', ec_plus: '0.0', ppm_plus: '0' }
        ],
        products: {
            // Doses converted from ml/gallon to ml/L (÷3.785)
            'aqua-vega-a': { 'W1': 2, 'W2': 2.5, 'W3': 3, 'W4': null, 'W5': null },
            'aqua-vega-b': { 'W1': 2, 'W2': 2.5, 'W3': 3, 'W4': null, 'W5': null },
            'aqua-flores-a': { 'W4': 3, 'W5': 3, 'W6': 3.5, 'W7': 4, 'W8': 4, 'W9': 3, 'W10': 2.5, 'W11': null },
            'aqua-flores-b': { 'W4': 3, 'W5': 3, 'W6': 3.5, 'W7': 4, 'W8': 4, 'W9': 3, 'W10': 2.5, 'W11': null },
            'rhizotonic': { 'W1': 2.5, 'W2': 2.5, 'W3': 2.5, 'W4': 2.5, 'W5': 2.5, 'W6': 2.5, 'W7': 2.5, 'W8': 2.5, 'W9': 2.5, 'W10': 2.5 },
            'cannazym': { 'W2': 2.5, 'W3': 2.5, 'W4': 2.5, 'W5': 2.5, 'W6': 2.5, 'W7': 2.5, 'W8': 2.5, 'W9': 2.5, 'W10': 2.5, 'W11': 2.5 },
            'pk-13-14': { 'W8': 1.5 },
            'cannaboost': { 'W4': 2, 'W5': 2, 'W6': 2, 'W7': 4, 'W8': 4, 'W9': 4, 'W10': 4 }
        },
        ec_range: { min: 0.7, max: 2.0, unit: 'mS/cm' },
        notes: [
            { key: 'aquaNote1' },
            { key: 'aquaNote2' },
            { key: 'aquaNote3' },
            { key: 'aquaNote4' },
            { key: 'aquaNote5' }
        ]
    },
    wasabi: {
        plant_type: 'Wasabi',
        stages: [
            { name: 'Start', name_key: 'stageStart', description_key: 'descStageStartPlugs', duration: '3-5 weeks', light_hours_key: 'valShade', ec_plus: '0.3-0.9', ppm_plus: '200-560' },
            { name: 'Vegetative stage', name_key: 'stageVeg', description_key: 'descStageVeg', duration: '18-24 months', light_hours_key: 'valShade', ec_plus: '0.3-0.9', ppm_plus: '200-560' },
            { name: 'Final stage', name_key: 'stageFinal', description_key: 'descStageFinal', duration: '2 weeks', light_hours_key: 'valShade', ec_plus: '0.3-0.9', ppm_plus: '200-560' }
        ],
        products: {
            // Doses in ml/L (converted from ml/gallon)
            'rhizotonic': { 'Start': 2.6, 'Vegetative stage': 0.5, 'Final stage': null },
            'aqua-vega-a': { 'Start': 1.3, 'Vegetative stage': 1.3, 'Final stage': 1.3 },
            'aqua-vega-b': { 'Start': 1.3, 'Vegetative stage': 1.3, 'Final stage': 1.3 }
        },
        notes: [
            { key: 'wasabiNote1' },
            { key: 'wasabiNote2' },
            { key: 'wasabiNote3' },
            { key: 'wasabiNote4' },
            { key: 'wasabiNote5' },
            { key: 'wasabiNote6' }
        ],
        special_requirements: [
            { key: 'wasabiLight', label_key: 'wasabiLight', value_key: 'valWasabiLight' },
            { key: 'wasabiWaterTemp', label_key: 'wasabiWaterTemp', value_key: 'valWasabiWaterTemp' },
            { key: 'wasabiAirTemp', label_key: 'wasabiAirTemp', value_key: 'valWasabiAirTemp' },
            { key: 'wasabiStartEC', label_key: 'wasabiStartEC', value_key: 'valWasabiStartEC' }
        ]
    }
};

// COCO System Schedules
export const COCO_SCHEDULES = {
    general: {
        plant_type: 'General Fast-Growing Plant',
        weeks: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
        phases: {
            'W1': 'rooting',
            'W2-W3': 'vegetative1',
            'W4-W5': 'vegetative2',
            'W6-W7': 'generative1',
            'W8': 'generative2',
            'W9-W10': 'generative3',
            'W11-W12': 'generative4'
        },
        stages: [
            { name: 'Start / rooting', name_key: 'stageRooting', duration: '<1 week', light_hours: 18, ec_plus: '0.7-1.1', ppm_plus: '520-810', description_key: 'descStageStart' },
            { name: 'Vegetative phase I', name_key: 'stageVeg1', duration: '0-3 weeks', light_hours: 18, ec_plus: '0.9-1.3', ppm_plus: '670-960', description_key: 'descStageVeg' },
            { name: 'Vegetative phase II', name_key: 'stageVeg2', duration: '2-4 weeks', light_hours: 12, ec_plus: '1.1-1.5', ppm_plus: '810-1110', description_key: 'descStageVegDev' },
            { name: 'Generative Period I', name_key: 'stageGen1', duration: '2-3 weeks', light_hours: 12, ec_plus: '1.4-1.8', ppm_plus: '1040-1330', description_key: 'descStageGen1' },
            { name: 'Generative Period II', name_key: 'stageGen2', duration: '1 week', light_hours: 12, ec_plus: '1.6-2.0', ppm_plus: '1180-1480', description_key: 'descStageGen2Fruit' },
            { name: 'Generative Period III', name_key: 'stageGen3', duration: '2-3 weeks', light_hours: 12, ec_plus: '1.0-1.4', ppm_plus: '740-1040', description_key: 'descStageGen3Fruit' },
            { name: 'Generative Period IV', name_key: 'stageGen4', duration: '1-2 weeks', light_hours: '10-12', ec_plus: '0.0', ppm_plus: '0', description_key: 'descStageRecovery' }
        ],
        products: {
            // Doses in ml/L (converted from ml/gallon ÷3.785)
            'coco-a': { 'W1': 2, 'W2': 2.5, 'W3': 3, 'W4': 3, 'W5': 3.5, 'W6': 3.5, 'W7': 4, 'W8': 4, 'W9': 3, 'W10': 2.5, 'W11': null },
            'coco-b': { 'W1': 2, 'W2': 2.5, 'W3': 3, 'W4': 3, 'W5': 3.5, 'W6': 3.5, 'W7': 4, 'W8': 4, 'W9': 3, 'W10': 2.5, 'W11': null },
            'rhizotonic': { 'W1': 2.5, 'W2': 2.5, 'W3': 2.5, 'W4': 2.5, 'W5': 2.5, 'W6': 2.5, 'W7': 2.5, 'W8': 2.5, 'W9': 2.5, 'W10': 2.5 },
            'cannazym': { 'W2': 2.5, 'W3': 2.5, 'W4': 2.5, 'W5': 2.5, 'W6': 2.5, 'W7': 2.5, 'W8': 2.5, 'W9': 2.5, 'W10': 2.5, 'W11': 2.5 },
            'pk-13-14': { 'W8': 1.5 },
            'cannaboost': { 'W4': 2, 'W5': 2, 'W6': 2, 'W7': 4, 'W8': 4, 'W9': 4, 'W10': 4 }
        },
        ec_range: { min: 0.7, max: 2.2, unit: 'mS/cm' },
        notes: [
            { key: 'cocoNote1' },
            { key: 'cocoNote2' },
            { key: 'cocoNote3' },
            { key: 'cocoNote4' },
            { key: 'cocoNote5' }
        ]
    },
    basil: {
        plant_type: 'Basil',
        stages: [
            { name: 'Start', name_key: 'stageStart', description_key: 'descStageStart', duration: '~1 week', light_hours: 11, ec_plus: '0.8-1.2', ppm_plus: '560-840' },
            { name: 'Vegetative stage', name_key: 'stageVeg', description_key: 'descStageVeg', duration: '1-3 weeks', light_hours: 11, ec_plus: '1.1-1.5', ppm_plus: '840-1120' },
            { name: 'Generative stage 1', name_key: 'stageGen1', description_key: 'descStageGen1', duration: '1-10 weeks', light_hours: 11, ec_plus: '1.2-1.6', ppm_plus: '840-1260' }
        ],
        products: {
            'coco-a': { 'Start': 2.4, 'Vegetative stage': 3, 'Generative stage 1': 3.3 },
            'coco-b': { 'Start': 2.4, 'Vegetative stage': 3, 'Generative stage 1': 3.3 },
            'rhizotonic': { 'Start': 2.5, 'Vegetative stage': 2.5, 'Generative stage 1': 2.5 },
            'cannazym': { 'Vegetative stage': 2.5, 'Generative stage 1': 2.5 }
        },
        notes: [
            { key: 'basilNote1' },
            { key: 'basilNote2' }
        ]
    },
    cucumber: {
        plant_type: 'Cucumber',
        stages: [
            { name: 'Start at Seedling', name_key: 'stageSeedling', description_key: 'descStageSeedling', duration: '~1 week', light_hours: 14, ec_plus: '1.0-1.2', ppm_plus: '700-840' },
            { name: 'Vegetative stage', name_key: 'stageVeg', description_key: 'descStageVeg', duration: '1-3 weeks', light_hours: 14, ec_plus: '1.0-1.4', ppm_plus: '700-1120' },
            { name: 'Generative stage 1', name_key: 'stageGen1', description_key: 'descStageGen1Fruit', duration: '1-2 weeks', light_hours: 14, ec_plus: '1.2-1.6', ppm_plus: '840-1120' },
            { name: 'Generative stage 2', name_key: 'stageGen2', description_key: 'descStageGen2Fruit', duration: '~1 week', light_hours: 14, ec_plus: '1.2-1.6', ppm_plus: '840-1120' },
            { name: 'Generative stage 3', name_key: 'stageGen3', description_key: 'descStageGen3Fruit', duration: '2-3 weeks', light_hours: 14, ec_plus: '1.2-1.6', ppm_plus: '840-1120' }
        ],
        products: {
            'coco-a': { 'Start at Seedling': 2.4, 'Vegetative stage': 3.2, 'Generative stage 1': 3.2, 'Generative stage 2': 3.2, 'Generative stage 3': 3.2 },
            'coco-b': { 'Start at Seedling': 2.4, 'Vegetative stage': 3.2, 'Generative stage 1': 3.2, 'Generative stage 2': 3.2, 'Generative stage 3': 3.2 },
            'rhizotonic': { 'Start at Seedling': 2.5, 'Vegetative stage': 2.5, 'Generative stage 1': 2.5, 'Generative stage 2': 2.5, 'Generative stage 3': 2.5 },
            'cannazym': { 'Vegetative stage': 2.5, 'Generative stage 1': 2.5, 'Generative stage 2': 2.5, 'Generative stage 3': 2.5 }
        },
        notes: [
            { key: 'cucumberNote1' },
            { key: 'cucumberNote2' }
        ]
    },
    tomatoes: {
        plant_type: 'Tomatoes',
        stages: [
            { name: 'Start', name_key: 'stageStart', description_key: 'descStageStart', duration: '~1 week', light_hours: 14, ec_plus: '0.8-1.2', ppm_plus: '560-840' },
            { name: 'Vegetative stage', name_key: 'stageVeg', description_key: 'descStageVeg', duration: '1-3 weeks', light_hours: 14, ec_plus: '1.2-1.6', ppm_plus: '840-1120' },
            { name: 'Generative stage 1', name_key: 'stageGen1', description_key: 'descStageGen1Fruit', duration: '1-2 weeks', light_hours: 14, ec_plus: '1.2-1.8', ppm_plus: '840-1260' },
            { name: 'Generative stage 2', name_key: 'stageGen2', description_key: 'descStageGen2Fruit', duration: '~1 week', light_hours: 14, ec_plus: '1.2-1.8', ppm_plus: '840-1260' },
            { name: 'Generative stage 3', name_key: 'stageGen3', description_key: 'descStageGen3Size', duration: '2-3 weeks', light_hours: 14, ec_plus: '1.2-1.8', ppm_plus: '840-1260' }
        ],
        products: {
            'coco-a': { 'Start': 2.4, 'Vegetative stage': 3.3, 'Generative stage 1': 3.4, 'Generative stage 2': 3.4, 'Generative stage 3': 3.4 },
            'coco-b': { 'Start': 2.4, 'Vegetative stage': 3.3, 'Generative stage 1': 3.4, 'Generative stage 2': 3.4, 'Generative stage 3': 3.4 },
            'rhizotonic': { 'Start': 2.5, 'Vegetative stage': 2.5, 'Generative stage 1': 2.5, 'Generative stage 2': 2.5, 'Generative stage 3': 2.5 },
            'cannazym': { 'Vegetative stage': 2.5, 'Generative stage 1': 2.5, 'Generative stage 2': 2.5, 'Generative stage 3': 2.5 }
        },
        notes: [
            { key: 'tomatoNote1' },
            { key: 'tomatoNote2' }
        ]
    },
    orchids: {
        plant_type: 'Orchids',
        stages: [
            { name: 'Start', name_key: 'stageStart', description_key: 'descStageStartCuttings', duration: '2-8 weeks', light_hours: 12, ec_plus: '0.6-0.8', ppm_plus: '600-770' },
            { name: 'Vegetative stage', name_key: 'stageVeg', description_key: 'descStageVegDev', duration: '18-52 weeks', light_hours: 12, ec_plus: '0.8-1.0', ppm_plus: '770-840' },
            { name: 'Flower stage', name_key: 'stageFlower', description_key: 'descStageFlower', duration: '4+ weeks', light_hours: 12, ec_plus: '0.8-1.0', ppm_plus: '770-840' },
            { name: 'Recovery stage', name_key: 'stageRecovery', description_key: 'descStageRecovery', duration: 'Variable (based on seasonality)', light_hours: 12, ec_plus: '0.8-1.0', ppm_plus: '770-840' }
        ],
        products: {
            'coco-a': { 'Start': 1.8, 'Vegetative stage': 2.5, 'Flower stage': 2.5, 'Recovery stage': 2.5 },
            'coco-b': { 'Start': 1.8, 'Vegetative stage': 2.5, 'Flower stage': 2.5, 'Recovery stage': 2.5 },
            'rhizotonic': { 'Start': 2.5, 'Vegetative stage': 2.5, 'Flower stage': 2.5, 'Recovery stage': 2.5 },
            'cannazym': { 'Vegetative stage': 2.4, 'Flower stage': 2.4, 'Recovery stage': 2.4 }
        },
        notes: [
            { key: 'orchidNote1' },
            { key: 'orchidNote2' },
            { key: 'orchidNote3' },
            { key: 'orchidNote4' },
            { key: 'orchidNote5' }
        ],
        special_requirements: [
            { key: 'orchidDayTemp', label_key: 'orchidDayTemp', value_key: 'valOrchidDayTemp' },
            { key: 'orchidNightTemp', label_key: 'orchidNightTemp', value_key: 'valOrchidNightTemp' },
            { key: 'orchidWatering', label_key: 'orchidWatering', value_key: 'valOrchidWatering' },
            { key: 'orchidFeeding', label_key: 'orchidFeeding', value_key: 'valOrchidFeeding' },
            { key: 'orchidStartEC', label_key: 'orchidStartEC', value_key: 'valOrchidStartEC' }
        ]
    }
};

// COGr System Schedules
export const COGR_SCHEDULES = {
    general: {
        plant_type: 'General Fast-Growing Plant',
        weeks: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
        phases: {
            'W1': 'rooting',
            'W2-W3': 'vegetative1',
            'W4-W5': 'vegetative2',
            'W6-W7': 'generative1',
            'W8': 'generative2',
            'W9-W10': 'generative3',
            'W11-W12': 'generative4'
        },
        stages: [
            { name: 'Start / rooting', name_key: 'stageRooting', duration: '<1 week', light_hours: 18, ec_plus: '0.7-1.1', ppm_plus: '520-810', description_key: 'descStageStart' },
            { name: 'Vegetative phase I', name_key: 'stageVeg1', duration: '0-3 weeks', light_hours: 18, ec_plus: '0.9-1.3', ppm_plus: '670-960', description_key: 'descStageVeg' },
            { name: 'Vegetative phase II', name_key: 'stageVeg2', duration: '2-4 weeks', light_hours: 12, ec_plus: '1.2-1.6', ppm_plus: '890-1180', description_key: 'descStageVegDev' },
            { name: 'Generative Period I', name_key: 'stageGen1', duration: '2-3 weeks', light_hours: 12, ec_plus: '1.4-1.8', ppm_plus: '1040-1330', description_key: 'descStageGen1' },
            { name: 'Generative Period II', name_key: 'stageGen2', duration: '1 week', light_hours: 12, ec_plus: '1.6-2.0', ppm_plus: '1180-1480', description_key: 'descStageGen2Fruit' },
            { name: 'Generative Period III', name_key: 'stageGen3', duration: '2-3 weeks', light_hours: 12, ec_plus: '1.0-1.4', ppm_plus: '740-1040', description_key: 'descStageGen3Fruit' },
            { name: 'Generative Period IV', name_key: 'stageGen4', duration: '1-2 weeks', light_hours: '10-12', ec_plus: '0.0', ppm_plus: '0', description_key: 'descStageRecovery' }
        ],
        products: {
            'cogr-vega-a': { 'W1': 2, 'W2': 2.5, 'W3': 3, 'W4': 3, 'W5': null },
            'cogr-vega-b': { 'W1': 2, 'W2': 2.5, 'W3': 3, 'W4': 3, 'W5': null },
            'cogr-flores-a': { 'W5': 3, 'W6': 3.5, 'W7': 4, 'W8': 4, 'W9': 3, 'W10': 2.5, 'W11': null },
            'cogr-flores-b': { 'W5': 3, 'W6': 3.5, 'W7': 4, 'W8': 4, 'W9': 3, 'W10': 2.5, 'W11': null },
            'rhizotonic': { 'W1': 2.5, 'W2': 2.5, 'W3': 2.5, 'W4': 2.5, 'W5': 2.5, 'W6': 2.5, 'W7': 2.5, 'W8': 2.5, 'W9': 2.5, 'W10': 2.5 },
            'cannazym': { 'W2': 2.5, 'W3': 2.5, 'W4': 2.5, 'W5': 2.5, 'W6': 2.5, 'W7': 2.5, 'W8': 2.5, 'W9': 2.5, 'W10': 2.5, 'W11': 2.5 },
            'pk-13-14': { 'W8': 1.5 },
            'cannaboost': { 'W4': 2, 'W5': 2, 'W6': 2, 'W7': 4, 'W8': 4, 'W9': 4, 'W10': 4 }
        },
        ec_range: { min: 0.7, max: 2.2, unit: 'mS/cm' },
        notes: [
            { key: 'cogrNote1' },
            { key: 'cogrNote2' },
            { key: 'cogrNote3' },
            { key: 'cogrNote4' },
            { key: 'cogrNote5' },
            { key: 'cogrBufferNote' }
        ]
    }
};

// SUBSTRA System Schedules
export const SUBSTRA_SCHEDULES = {
    general: {
        plant_type: 'General Fast-Growing Plant',
        weeks: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
        phases: {
            'W1': 'rooting',
            'W2-W3': 'vegetative1',
            'W4-W5': 'vegetative2',
            'W6-W7': 'generative1',
            'W8': 'generative2',
            'W9-W10': 'generative3',
            'W11-W12': 'generative4'
        },
        stages: [
            { name: 'Start / rooting', name_key: 'stageRooting', duration: '<1 week', light_hours: 18, ec_plus: '0.7-1.1', ppm_plus: '520-810' },
            { name: 'Vegetative phase I', name_key: 'stageVeg1', duration: '0-3 weeks', light_hours: 18, ec_plus: '0.9-1.3', ppm_plus: '670-960' },
            { name: 'Vegetative phase II', name_key: 'stageVeg2', duration: '2-4 weeks', light_hours: 12, ec_plus: '1.2-1.6', ppm_plus: '890-1180' },
            { name: 'Generative Period I', name_key: 'stageGen1', duration: '2-3 weeks', light_hours: 12, ec_plus: '1.4-1.8', ppm_plus: '1040-1330' },
            { name: 'Generative Period II', name_key: 'stageGen2', duration: '1 week', light_hours: 12, ec_plus: '1.6-2.0', ppm_plus: '1180-1480' },
            { name: 'Generative Period III', name_key: 'stageGen3', duration: '2-3 weeks', light_hours: 12, ec_plus: '1.0-1.4', ppm_plus: '740-1040' },
            { name: 'Generative Period IV', name_key: 'stageGen4', duration: '1-2 weeks', light_hours: '10-12', ec_plus: '0.0', ppm_plus: '0' }
        ],
        products_hard_water: {
            'substra-vega-a-hw': { 'W1': 2, 'W2': 2.5, 'W3': 3, 'W4': 3, 'W5': null },
            'substra-vega-b-hw': { 'W1': 2, 'W2': 2.5, 'W3': 3, 'W4': 3, 'W5': null },
            'substra-flores-a-hw': { 'W5': 3, 'W6': 3.5, 'W7': 4, 'W8': 4, 'W9': 3, 'W10': 2.5, 'W11': null },
            'substra-flores-b-hw': { 'W5': 3, 'W6': 3.5, 'W7': 4, 'W8': 4, 'W9': 3, 'W10': 2.5, 'W11': null },
            'rhizotonic': { 'W1': 2.5, 'W2': 2.5, 'W3': 2.5, 'W4': 2.5, 'W5': 2.5, 'W6': 2.5, 'W7': 2.5, 'W8': 2.5, 'W9': 2.5, 'W10': 2.5 },
            'cannazym': { 'W2': 2.5, 'W3': 2.5, 'W4': 2.5, 'W5': 2.5, 'W6': 2.5, 'W7': 2.5, 'W8': 2.5, 'W9': 2.5, 'W10': 2.5, 'W11': 2.5 },
            'pk-13-14': { 'W8': 1.5 },
            'cannaboost': { 'W4': 2, 'W5': 2, 'W6': 2, 'W7': 4, 'W8': 4, 'W9': 4, 'W10': 4 }
        },
        products_soft_water: {
            'substra-vega-a-sw': { 'W1': 2, 'W2': 2.5, 'W3': 3, 'W4': 3, 'W5': null },
            'substra-vega-b-sw': { 'W1': 2, 'W2': 2.5, 'W3': 3, 'W4': 3, 'W5': null },
            'substra-flores-a-sw': { 'W5': 3, 'W6': 3.5, 'W7': 4, 'W8': 4, 'W9': 3, 'W10': 2.5, 'W11': null },
            'substra-flores-b-sw': { 'W5': 3, 'W6': 3.5, 'W7': 4, 'W8': 4, 'W9': 3, 'W10': 2.5, 'W11': null },
            'rhizotonic': { 'W1': 2.5, 'W2': 2.5, 'W3': 2.5, 'W4': 2.5, 'W5': 2.5, 'W6': 2.5, 'W7': 2.5, 'W8': 2.5, 'W9': 2.5, 'W10': 2.5 },
            'cannazym': { 'W2': 2.5, 'W3': 2.5, 'W4': 2.5, 'W5': 2.5, 'W6': 2.5, 'W7': 2.5, 'W8': 2.5, 'W9': 2.5, 'W10': 2.5, 'W11': 2.5 },
            'pk-13-14': { 'W8': 1.5 },
            'cannaboost': { 'W4': 2, 'W5': 2, 'W6': 2, 'W7': 4, 'W8': 4, 'W9': 4, 'W10': 4 }
        },
        ec_range: { min: 0.7, max: 2.4, unit: 'mS/cm' },
        notes: [
            { key: 'substraNote1', en: 'This period varies depending on the species and number of plants per m². Mother plants remain in this phase until the end (6-12 months).', tr: 'Bu süre türe ve metrekareye düşen bitki sayısına göre değişir. Ana bitkiler bu aşamada sonuna kadar kalır (6-12 ay).' },
            { key: 'substraNote2', en: 'The changeover from 18 to 12 hours varies depending on the variety. The rule of thumb is to change after 2 weeks.', tr: '18 saatten 12 saate geçiş çeşide göre değişir. Genel kural 2 hafta sonra değiştirmektir.' },
            { key: 'substraNote3', en: 'Reduce hours of light if ripening goes too fast. Watch out for increasing Relative Humidity.', tr: 'Olgunlaşma çok hızlı giderse ışık saatlerini azaltın. Artan Bağıl Neme dikkat edin.' },
            { key: 'substraNote4', en: 'Double CANNAZYM dosage to 5 ml/L if substrate is reused.', tr: 'Substrat yeniden kullanılıyorsa CANNAZYM dozunu 5 ml/L\'ye iki katına çıkarın.' },
            { key: 'substraNote5', en: 'pH: Recommended pH is between 5.2 and 6.2. Use pH- grow in vegetative phase, pH- bloom in generative phase.', tr: 'pH: Önerilen pH 5.2 ile 6.2 arasındadır. Vejetatif aşamada pH- grow, generatif aşamada pH- bloom kullanın.' }
        ]
    }
};

// TERRA System Schedules
export const TERRA_SCHEDULES = {
    general: {
        plant_type: 'General Fast-Growing Plant',
        weeks: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'],
        phases: {
            'W1': 'rooting',
            'W2-W3': 'vegetative1',
            'W4-W5': 'vegetative2',
            'W6-W7': 'generative1',
            'W8': 'generative2',
            'W9-W10': 'generative3',
            'W11-W12': 'generative4'
        },
        stages: [
            { name: 'Start / rooting', name_key: 'stageRooting', duration: '<1 week', light_hours: 18, ec_plus: '0.7-1.1', ppm_plus: '520-810' },
            { name: 'Vegetative phase I', name_key: 'stageVeg1', duration: '0-3 weeks', light_hours: 18, ec_plus: '0.9-1.3', ppm_plus: '670-960' },
            { name: 'Vegetative phase II', name_key: 'stageVeg2', duration: '2-4 weeks', light_hours: 12, ec_plus: '1.2-1.6', ppm_plus: '890-1180' },
            { name: 'Generative Period I', name_key: 'stageGen1', duration: '2-3 weeks', light_hours: 12, ec_plus: '1.4-1.8', ppm_plus: '1040-1330' },
            { name: 'Generative Period II', name_key: 'stageGen2', duration: '1 week', light_hours: 12, ec_plus: '1.6-2.0', ppm_plus: '1180-1480' },
            { name: 'Generative Period III', name_key: 'stageGen3', duration: '2-3 weeks', light_hours: 12, ec_plus: '1.0-1.4', ppm_plus: '740-1040' },
            { name: 'Generative Period IV', name_key: 'stageGen4', duration: '1-2 weeks', light_hours: '10-12', ec_plus: '0.0', ppm_plus: '0' }
        ],
        products: {
            'terra-vega': { 'W1': 2, 'W2': 2.5, 'W3': 3, 'W4': 3, 'W5': null },
            'terra-flores': { 'W5': 3, 'W6': 3.5, 'W7': 4, 'W8': 4, 'W9': 3, 'W10': 2.5, 'W11': null },
            'rhizotonic': { 'W1': 2.5, 'W2': 2.5, 'W3': 2.5, 'W4': 2.5, 'W5': 2.5, 'W6': 2.5, 'W7': 2.5, 'W8': 2.5, 'W9': 2.5, 'W10': 2.5 },
            'cannazym': { 'W2': 2.5, 'W3': 2.5, 'W4': 2.5, 'W5': 2.5, 'W6': 2.5, 'W7': 2.5, 'W8': 2.5, 'W9': 2.5, 'W10': 2.5, 'W11': 2.5 },
            'pk-13-14': { 'W8': 1.5 },
            'cannaboost': { 'W4': 2, 'W5': 2, 'W6': 2, 'W7': 4, 'W8': 4, 'W9': 4, 'W10': 4 }
        },
        ec_range: { min: 0.7, max: 2.0, unit: 'mS/cm' },
        notes: [
            { key: 'terraNote1', en: 'This period varies depending on the species and number of plants per m². Mother plants remain in this phase until the end (6-12 months).', tr: 'Bu süre türe ve metrekareye düşen bitki sayısına göre değişir. Ana bitkiler bu aşamada sonuna kadar kalır (6-12 ay).' },
            { key: 'terraNote2', en: 'The changeover from 18 to 12 hours varies depending on the variety. The rule of thumb is to change after 2 weeks.', tr: '18 saatten 12 saate geçiş çeşide göre değişir. Genel kural 2 hafta sonra değiştirmektir.' },
            { key: 'terraNote3', en: 'Double CANNAZYM dosage to 5 ml/L if substrate is reused.', tr: 'Substrat yeniden kullanılıyorsa CANNAZYM dozunu 5 ml/L\'ye iki katına çıkarın.' },
            { key: 'terraNote4', en: '2 ml/L standard. Increase to a maximum of 4 ml/L for extra flowering power.', tr: '2 ml/L standart. Ekstra çiçeklenme gücü için maksimum 4 ml/L\'ye çıkarın.' },
            { key: 'terraNote5', en: 'pH: Recommended pH is between 5.8 and 6.2. Use pH- grow in vegetative phase, pH- bloom in generative phase.', tr: 'pH: Önerilen pH 5.8 ile 6.2 arasındadır. Vejetatif aşamada pH- grow, generatif aşamada pH- bloom kullanın.' }
        ]
    },
    basil: {
        plant_type: 'Basil',
        stages: [
            { name: 'Start', name_key: 'stageStart', description: 'Formation of roots', duration: '~1 week', light_hours: '8-12', ec_plus: '1.0-1.2', ppm_plus: '700-840' },
            { name: 'Vegetative stage 1', name_key: 'stageVeg1', description: 'Fast growth', duration: '2-16 weeks', light_hours: '8-14', ec_plus: '1.0-1.2', ppm_plus: '700-840' },
            { name: 'Final Stage', name_key: 'stageFinal', description: 'Pre-harvest', duration: '~2 weeks', light_hours: '8-14', ec_plus: '1.0-1.2', ppm_plus: '700-840' }
        ],
        products: {
            'terra-vega': { 'Start': 2.5, 'Vegetative stage 1': 3, 'Final Stage': 3 },
            'rhizotonic': { 'Start': 2.5, 'Vegetative stage 1': 2.5, 'Final Stage': 2.5 },
            'cannazym': { 'Vegetative stage 1': 2.5, 'Final Stage': 2.5 }
        },
        notes: [
            { key: 'basilTerraNote1', en: 'Timing on stages is dependent on cropping method, container size, finish size, and temperature.', tr: 'Aşamaların zamanlaması yetiştirme yöntemine, saksı boyutuna, bitiş boyutuna ve sıcaklığa bağlıdır.' },
            { key: 'basilTerraNote2', en: 'Constant feed only, no intermittent plain water applications.', tr: 'Sadece sürekli besleme, aralıklı sade su uygulaması yapmayın.' }
        ]
    },
    grape: {
        plant_type: 'Grape',
        stages: [
            { name: 'Start', name_key: 'stageStart', description_key: 'descStageStart', duration: '~1 week', light_hours_key: 'valNatural', ec_plus: '1.0-1.2', ppm_plus: '700-840' },
            { name: 'Vegetative stage 1', name_key: 'stageVeg1', description_key: 'descStageVeg', duration: '1-2 weeks', light_hours_key: 'valNatural', ec_plus: '1.0-1.2', ppm_plus: '700-840' },
            { name: 'Generative stage 1', name_key: 'stageGen1', description_key: 'descStageGen1', duration: '2-4 weeks', light_hours_key: 'valNatural', ec_plus: '0.9-1.2', ppm_plus: '630-840' },
            { name: 'Generative stage 2', name_key: 'stageGen2', description_key: 'descStageGen2Fruit', duration: '~2 weeks', light_hours_key: 'valNatural', ec_plus: '0.6-0.7', ppm_plus: '420-490' },
            { name: 'Generative stage 3', name_key: 'stageGen3', description_key: 'descStageGen3Fruit', duration: '~2 weeks', light_hours_key: 'valNatural', ec_plus: '0.8-0.9', ppm_plus: '560-630' },
            { name: 'Harvest to dormancy', name_key: 'stageDormancy', description_key: 'descStageRecovery', duration: 'Hold', light_hours_key: 'valNatural', ec_plus: '-', ppm_plus: '-' }
        ],
        products: {
            'terra-vega': { 'Start': 2.5, 'Vegetative stage 1': 3, 'Generative stage 1': 2.5 },
            'terra-flores': { 'Generative stage 1': 2.5, 'Generative stage 2': 3, 'Generative stage 3': 3 },
            'rhizotonic': { 'Start': 2.5, 'Vegetative stage 1': 2.5, 'Generative stage 1': 2.5, 'Generative stage 2': 2.5, 'Generative stage 3': 2.5 },
            'cannazym': { 'Vegetative stage 1': 2.5, 'Generative stage 1': 2.5, 'Generative stage 2': 2.5, 'Generative stage 3': 2.5, 'Harvest to dormancy': 2.5 },
            'pk-13-14': { 'Generative stage 2': 1 },
            'cannaboost': { 'Generative stage 2': 2, 'Generative stage 3': 2 }
        },
        notes: [
            { key: 'grapeNote1', en: 'Timing on stages is dependent on variety.', tr: 'Aşamaların zamanlaması çeşide bağlıdır.' },
            { key: 'grapeNote2', en: 'Calcium can be the limiting factor, add a liquid Calcium source when necessary. This can be progressively seen as the fruit ripens.', tr: 'Kalsiyum sınırlayıcı faktör olabilir, gerektiğinde sıvı Kalsiyum kaynağı ekleyin. Bu, meyve olgunlaştıkça giderek daha fazla görülebilir.' },
            { key: 'grapeNote3', en: 'Proper pH control is essential to develop the taste.', tr: 'Tadı geliştirmek için uygun pH kontrolü esastır.' },
            { key: 'grapeNote4', en: 'This chart is for Peat based medium AND sandy loam mineral soils. In heavier clay soils use less fertilizer and more in sandy soils.', tr: 'Bu tablo Turba bazlı ortam VE kumlu tınlı mineral topraklar içindir. Ağır killi topraklarda daha az, kumlu topraklarda daha fazla gübre kullanın.' },
            { key: 'grapeNote5', en: 'Grapes like deep roots and sandy soils for heavy root systems. It is not advisable to grow grapes in containers long-term.', tr: 'Üzümler derin kökler ve ağır kök sistemleri için kumlu toprakları sever. Üzümleri uzun vadeli saksılarda yetiştirmek tavsiye edilmez.' }
        ],
        special_requirements: [
            { key: 'grapeCalcium', value: 'Calcium can be limiting - add liquid Ca source if needed' },
            { key: 'grapeContainer', value: 'Not recommended for long-term container growing' },
            { key: 'grapeLightHours', value: 'Natural day length' }
        ]
    }
};

// EC+ Note - applies to all schedules
export const EC_NOTE = {
    key: 'ecNote',
    text_en: 'EC+ values are calculated assuming tap water EC of 0.0 mS/cm. Add your tap water EC to the recommended values.',
    text_tr: 'EC+ değerleri şebeke suyunun EC değeri 0.0 mS/cm kabul edilerek hesaplanmıştır. Önerilen EC değerine kendi şebeke suyunuzun EC değerini ekleyin.'
};

// Default product selections per system
export const DEFAULT_SELECTED_PRODUCTS = {
    aqua: ['aqua-vega-a', 'aqua-vega-b', 'aqua-flores-a', 'aqua-flores-b', 'rhizotonic', 'cannazym'],
    coco: ['coco-a', 'coco-b', 'rhizotonic', 'cannazym'],
    cogr: ['cogr-vega-a', 'cogr-vega-b', 'cogr-flores-a', 'cogr-flores-b', 'rhizotonic', 'cannazym'],
    substra: ['substra-vega-a-hw', 'substra-vega-b-hw', 'substra-flores-a-hw', 'substra-flores-b-hw', 'rhizotonic', 'cannazym'],
    terra: ['terra-vega', 'terra-flores', 'rhizotonic', 'cannazym']
};

// Helper functions
export const getProductsBySystem = (system) => {
    if (system === 'all') {
        return CANNA_PRODUCTS;
    }
    return CANNA_PRODUCTS.filter(p => p.system === system || p.system === 'all');
};

export const getScheduleBySystemAndPlant = (system, plant) => {
    const scheduleMap = {
        aqua: AQUA_SCHEDULES,
        coco: COCO_SCHEDULES,
        cogr: COGR_SCHEDULES,
        substra: SUBSTRA_SCHEDULES,
        terra: TERRA_SCHEDULES
    };

    const systemSchedules = scheduleMap[system];
    if (!systemSchedules) return null;

    return systemSchedules[plant] || systemSchedules.general;
};

export const getAvailablePlantsForSystem = (system) => {
    return PLANT_SCHEDULES[system] || ['general'];
};
