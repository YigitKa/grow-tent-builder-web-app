// BioBizz Beslenme Programı Verileri
// Haftalık dozaj bilgileri ve uygulama talimatları
// Substrat bazlı iki farklı program: ALL·MIX ve LIGHT·MIX/COCO·MIX

// Substrat Tipleri
export const SUBSTRATE_TYPES = {
  ALL_MIX: 'all-mix',
  LIGHT_MIX: 'light-mix',
  COCO_MIX: 'coco-mix'
};

// Substrat Grupları (hangi programın kullanılacağını belirler)
export const SUBSTRATE_SCHEDULE_MAP = {
  'all-mix': 'SCHEDULE_ALLMIX',
  'light-mix': 'SCHEDULE_LIGHTMIX_COCOMIX',
  'coco-mix': 'SCHEDULE_LIGHTMIX_COCOMIX'
};

export const FEEDING_SCHEDULE_DATA = [
  {
    id: 'root-juice',
    product_name: 'Root·Juice™',
    category_key: 'stimulator_root',
    dose_unit: 'ml/L',
    application_type_key: 'appTypeWater',
    usage_phase_key: 'phaseRooting',
    color: '#8B5CF6', // Purple
    function_key: 'funcRootStim',
    short_desc_key: 'descRootJuice',
    benefits_key: 'benefitsRootJuice',
    // Tüm substratlar için aynı dozaj
    schedule: {
      'WK 1': 4,
      'WK 2': 4,
      'WK 3': 'N/A',
      'WK 4': 'N/A',
      'WK 5': 'N/A',
      'WK 6': 'N/A',
      'WK 7': 'N/A',
      'WK 8': 'N/A',
      'WK 9': 'N/A',
      'WK 10': 'N/A',
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    }
  },
  {
    id: 'bio-grow',
    product_name: 'Bio·Grow®',
    category_key: 'base_nutrient',
    dose_unit: 'ml/L',
    application_type_key: 'appTypeWater',
    usage_phase_key: 'phaseNutrition',
    color: '#22C55E', // Green
    function_key: 'funcBaseNutrientVeg',
    short_desc_key: 'descBioGrow',
    benefits_key: 'benefitsBioGrow',
    // ALL·MIX için düşük dozaj (ağır gübrelenmiş toprak)
    schedule_allmix: {
      'WK 1': 1,
      'WK 2': 1,
      'WK 3': 1,
      'WK 4': 1,
      'WK 5': 1,
      'WK 6': 1,
      'WK 7': 4,
      'WK 8': 4,
      'WK 9': 4,
      'WK 10': 4,
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    },
    // LIGHT·MIX / COCO·MIX için yüksek dozaj
    schedule_lightmix_coco: {
      'WK 1': 2,
      'WK 2': 2,
      'WK 3': 2,
      'WK 4': 3,
      'WK 5': 3,
      'WK 6': 4,
      'WK 7': 4,
      'WK 8': 4,
      'WK 9': 4,
      'WK 10': 4,
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    },
    // Varsayılan schedule (ALL·MIX bazlı)
    schedule: {
      'WK 1': 1,
      'WK 2': 1,
      'WK 3': 1,
      'WK 4': 1,
      'WK 5': 1,
      'WK 6': 1,
      'WK 7': 4,
      'WK 8': 4,
      'WK 9': 4,
      'WK 10': 4,
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    },
    note_key: 'noteBioGrow'
  },
  {
    id: 'fish-mix',
    product_name: 'Fish·Mix™',
    category_key: 'base_nutrient',
    dose_unit: 'ml/L',
    application_type_key: 'appTypeWaterFoliar',
    usage_phase_key: 'phaseNutrition',
    color: '#06B6D4', // Cyan
    function_key: 'funcNutrientSoil',
    short_desc_key: 'descFishMix',
    benefits_key: 'benefitsFishMix',
    // ALL·MIX için Indoor/Outdoor schedule (düşük dozaj)
    schedule_allmix_indoor: {
      'WK 1': 1,
      'WK 2': 1,
      'WK 3': 1,
      'WK 4': 1,
      'WK 5': 1,
      'WK 6': 1,
      'WK 7': 1,
      'WK 8': 1,
      'WK 9': 1,
      'WK 10': 'N/A',
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    },
    schedule_allmix_outdoor: {
      'WK 1': 1,
      'WK 2': 1,
      'WK 3': 1,
      'WK 4': 1,
      'WK 5': 1,
      'WK 6': 1,
      'WK 7': 1,
      'WK 8': 1,
      'WK 9': 1,
      'WK 10': 'N/A',
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    },
    // LIGHT·MIX / COCO·MIX için yüksek dozaj
    schedule_lightmix_coco_indoor: {
      'WK 1': 2,
      'WK 2': 2,
      'WK 3': 2,
      'WK 4': 3,
      'WK 5': 3,
      'WK 6': 4,
      'WK 7': 4,
      'WK 8': 4,
      'WK 9': 4,
      'WK 10': 'N/A',
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    },
    schedule_lightmix_coco_outdoor: {
      'WK 1': 1,
      'WK 2': 1,
      'WK 3': 1,
      'WK 4': 1,
      'WK 5': 1,
      'WK 6': 1,
      'WK 7': 1,
      'WK 8': 1,
      'WK 9': 1,
      'WK 10': 'N/A',
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    },
    // Varsayılan schedule (Indoor)
    schedule_indoor: {
      'WK 1': 2,
      'WK 2': 2,
      'WK 3': 2,
      'WK 4': 3,
      'WK 5': 3,
      'WK 6': 4,
      'WK 7': 4,
      'WK 8': 4,
      'WK 9': 4,
      'WK 10': 'N/A',
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    },
    schedule_outdoor: {
      'WK 1': 1,
      'WK 2': 1,
      'WK 3': 1,
      'WK 4': 1,
      'WK 5': 1,
      'WK 6': 1,
      'WK 7': 1,
      'WK 8': 1,
      'WK 9': 1,
      'WK 10': 'N/A',
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    },
    foliar_dose_key: 'foliarDoseFishMix'
  },
  {
    id: 'bio-bloom',
    product_name: 'Bio·Bloom™',
    category_key: 'base_nutrient',
    dose_unit: 'ml/L',
    application_type_key: 'appTypeWater',
    usage_phase_key: 'phaseBlooming',
    color: '#EC4899', // Pink
    function_key: 'funcBaseNutrientBloom',
    short_desc_key: 'descBioBloom',
    benefits_key: 'benefitsBioBloom',
    schedule: {
      'WK 1': 1,
      'WK 2': 2,
      'WK 3': 2,
      'WK 4': 3,
      'WK 5': 3,
      'WK 6': 4,
      'WK 7': 4,
      'WK 8': 4,
      'WK 9': 4,
      'WK 10': 4,
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    }
  },
  {
    id: 'top-max',
    product_name: 'Top·Max™',
    category_key: 'stimulator_bloom',
    dose_unit: 'ml/L',
    application_type_key: 'appTypeWater',
    usage_phase_key: 'phaseBloomStim',
    color: '#F59E0B', // Amber
    function_key: 'funcBloomStim',
    short_desc_key: 'descTopMax',
    benefits_key: 'benefitsTopMax',
    schedule: {
      'WK 1': 1,
      'WK 2': 1,
      'WK 3': 1,
      'WK 4': 1,
      'WK 5': 1,
      'WK 6': 4,
      'WK 7': 4,
      'WK 8': 4,
      'WK 9': 4,
      'WK 10': 4,
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    }
  },
  {
    id: 'bio-heaven',
    product_name: 'Bio·Heaven™',
    category_key: 'booster',
    dose_unit: 'ml/L',
    application_type_key: 'appTypeWater',
    usage_phase_key: 'phaseBoosting',
    color: '#EAB308', // Yellow
    function_key: 'funcEnergyBoost',
    short_desc_key: 'descBioHeaven',
    benefits_key: 'benefitsBioHeaven',
    schedule: {
      'WK 1': 2,
      'WK 2': 2,
      'WK 3': 2,
      'WK 4': 2,
      'WK 5': 3,
      'WK 6': 4,
      'WK 7': 4,
      'WK 8': 5,
      'WK 9': 5,
      'WK 10': 5,
      'WK 11': 5,
      'WK 12': 5
    }
  },
  {
    id: 'acti-vera',
    product_name: 'Acti·Vera™',
    category_key: 'activator',
    dose_unit: 'ml/L',
    application_type_key: 'appTypeWaterFoliar',
    usage_phase_key: 'phaseBoostingPreventing',
    color: '#84CC16', // Lime
    function_key: 'funcStrengthPrevent',
    short_desc_key: 'descActiVera',
    benefits_key: 'benefitsActiVera',
    schedule: {
      'WK 1': 2,
      'WK 2': 2,
      'WK 3': 2,
      'WK 4': 2,
      'WK 5': 3,
      'WK 6': 4,
      'WK 7': 4,
      'WK 8': 5,
      'WK 9': 5,
      'WK 10': 5,
      'WK 11': 5,
      'WK 12': 5
    },
    foliar_dose_key: 'foliarDoseGeneral'
  },
  {
    id: 'alg-a-mic',
    product_name: 'Alg·A·Mic™',
    category_key: 'stimulator_vitality',
    dose_unit: 'ml/L',
    application_type_key: 'appTypeWaterFoliar',
    usage_phase_key: 'phaseStimPrevent',
    color: '#14B8A6', // Teal
    function_key: 'funcVitalityPrevent',
    short_desc_key: 'descAlgAMic',
    benefits_key: 'benefitsAlgAMic',
    schedule: {
      'WK 1': 1,
      'WK 2': 2,
      'WK 3': 2,
      'WK 4': 3,
      'WK 5': 3,
      'WK 6': 4,
      'WK 7': 4,
      'WK 8': 4,
      'WK 9': 4,
      'WK 10': 4,
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    },
    foliar_dose_key: 'foliarDoseGeneral'
  },
  {
    id: 'microbes',
    product_name: 'Biobizz Microbes',
    category_key: 'microorganisms',
    dose_unit: 'g/L',
    application_type_key: 'appTypeWaterPowder',
    usage_phase_key: 'phaseAllStages',
    color: '#A855F7', // Purple
    function_key: 'funcNpkBoost',
    short_desc_key: 'descMicrobes',
    benefits_key: 'benefitsMicrobes',
    schedule: {
      'WK 1': 0.4,
      'WK 2': 0.2,
      'WK 3': 0.2,
      'WK 4': 0.4,
      'WK 5': 0.4,
      'WK 6': 0.4,
      'WK 7': 0.2,
      'WK 8': 0.2,
      'WK 9': 0.2,
      'WK 10': 0.4,
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    },
    note_key: 'noteMicrobes'
  },
  {
    id: 'calmag',
    product_name: 'CALMAG',
    category_key: 'supplement',
    dose_unit: 'ml/L',
    application_type_key: 'appTypeWater',
    usage_phase_key: 'phaseAllStagesSupp',
    color: '#6366F1', // Indigo
    function_key: 'funcCaMgSupp',
    short_desc_key: 'descCalmag',
    benefits_key: 'benefitsCalmag',
    schedule_prevention_substrate: {
      'WK 1-6': '0.3-0.8',
      'WK 6-8': '0.5-0.8',
      'WK 8-10': '0.8-1.2'
    },
    schedule_prevention_hydro_coco: {
      'WK 1-6': '0.5-0.8',
      'WK 6-8': '1-1.4',
      'WK 8-10': '1-1.4'
    },
    schedule: {
      'WK 1': 0.5,
      'WK 2': 0.5,
      'WK 3': 0.5,
      'WK 4': 0.5,
      'WK 5': 0.5,
      'WK 6': 0.8,
      'WK 7': 0.8,
      'WK 8': 1,
      'WK 9': 1,
      'WK 10': 1,
      'WK 11': 'FLUSH',
      'WK 12': 'HARVEST'
    },
    note_key: 'noteCalmag'
  },
  {
    id: 'leaf-coat',
    product_name: 'Leaf·Coat™',
    category_key: 'protector',
    dose_unit: 'readyToUse',
    application_type_key: 'appTypeFoliar',
    usage_phase_key: 'phaseVegBloom',
    color: '#10B981', // Emerald
    function_key: 'funcProtector',
    short_desc_key: 'descLeafCoat',
    benefits_key: 'benefitsLeafCoat',
    schedule: {
      'WK 1': '✓',
      'WK 2': '✓',
      'WK 3': '✓',
      'WK 4': '✓',
      'WK 5': '✓',
      'WK 6': '✓',
      'WK 7': '✓',
      'WK 8': '✓',
      'WK 9': '✓',
      'WK 10': 'STOP',
      'WK 11': 'N/A',
      'WK 12': 'HARVEST'
    },
    note_key: 'noteLeafCoat'
  },
  {
    id: 'bio-down',
    product_name: 'Bio·Down',
    category_key: 'ph_regulator',
    dose_unit: 'asNeeded',
    application_type_key: 'appTypeWaterHydro',
    usage_phase_key: 'phaseVegBloom',
    color: '#EF4444', // Red
    function_key: 'funcPhReg',
    short_desc_key: 'descBioDown',
    benefits_key: 'benefitsBioDown',
    schedule: null,
    note_key: 'noteBioDown'
  },
  {
    id: 'bio-up',
    product_name: 'Bio·Up',
    category_key: 'ph_regulator',
    dose_unit: 'asNeeded',
    application_type_key: 'appTypeWaterHydro',
    usage_phase_key: 'phaseVegBloom',
    color: '#3B82F6', // Blue
    function_key: 'funcPhReg',
    short_desc_key: 'descBioUp',
    benefits_key: 'benefitsBioUp',
    schedule: null,
    note_key: 'noteBioUp'
  }
];

// Substrat bilgileri
export const SUBSTRATE_INFO = {
  'all-mix': {
    name: 'All·Mix®',
    description_key: 'subDescAllMix',
    type: 'substrate'
  },
  'light-mix': {
    name: 'Light·Mix®',
    description_key: 'subDescLightMix',
    type: 'substrate'
  },
  'coco-mix': {
    name: 'Coco·Mix™',
    description_key: 'subDescCocoMix',
    type: 'substrate'
  },
  'worm-humus': {
    name: 'Worm·Humus™',
    description_key: 'subDescWormHumus',
    type: 'amendment'
  },
  'pre-mix': {
    name: 'Pre·Mix™',
    description_key: 'subDescPreMix',
    type: 'amendment'
  }
};

// Hafta etiketleri
export const WEEK_LABELS = [
  'WK 1', 'WK 2', 'WK 3', 'WK 4', 'WK 5', 'WK 6',
  'WK 7', 'WK 8', 'WK 9', 'WK 10', 'WK 11', 'WK 12'
];

// Faz bilgileri
export const PHASE_INFO = {
  rooting: { weeks: [1, 2], label_key: 'phaseLabelRooting', color: '#8B5CF6' },
  vegetative: { weeks: [3, 4, 5, 6], label_key: 'phaseLabelVeg', color: '#22C55E' },
  flowering: { weeks: [7, 8, 9, 10], label_key: 'phaseLabelFlower', color: '#EC4899' },
  flush: { weeks: [11], label_key: 'phaseLabelFlush', color: '#6B7280' },
  harvest: { weeks: [12], label_key: 'phaseLabelHarvest', color: '#F59E0B' }
};

// Varsayılan seçili ürünler (temel set)
export const DEFAULT_SELECTED_PRODUCTS = [
  'bio-grow',
  'bio-bloom',
  'top-max',
  'root-juice'
];

// Kategori grupları
export const PRODUCT_CATEGORIES = {
  base_nutrient: { name_key: 'catBaseNutrient', icon: '🌱' },
  stimulator_root: { name_key: 'catStimRoot', icon: '🌳' },
  stimulator_bloom: { name_key: 'catStimBloom', icon: '🌸' },
  stimulator_vitality: { name_key: 'catStimVitality', icon: '✨' },
  booster: { name_key: 'catBooster', icon: '⚡' },
  activator: { name_key: 'catActivator', icon: '🔋' },
  microorganisms: { name_key: 'catMicrobes', icon: '🦠' },
  supplement: { name_key: 'catSupplement', icon: '💊' },
  protector: { name_key: 'catProtector', icon: '🛡️' },
  ph_regulator: { name_key: 'catPhReg', icon: '⚖️' }
};
