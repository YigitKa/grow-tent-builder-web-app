/**
 * Ready-to-Use Grow Tent Sets / Hazır Kabin Setleri
 * Pre-configured complete grow tent packages
 * Based on actual sets from readytousesets.md
 */

// ============================================
// PRESET SETS DEFINITIONS
// ============================================

export const PRESET_SETS = [
    // ============================================
    // PREMIUM PRO SETS - Mars Hydro & Harvest Master
    // ============================================
    {
        id: 'set-150-mh-fc1000w',
        name: {
            en: 'Mars Hydro FC-1000W Premium Set',
            tr: 'Mars Hydro FC-1000W Premium Set'
        },
        description: {
            en: 'Professional 150x150 setup with Mars Hydro FC-1000W (2810 PPF)',
            tr: '2810 PPF Mars Hydro FC-1000W ile profesyonel 150x150 kurulum'
        },
        tier: 'pro',
        tentSize: '150x150x200',
        mediaType: 'coco',
        nutrientBrand: 'CANNA',
        plantCount: 9,
        items: {
            tent: 'sj-hs150',
            lighting: [{ id: 'mh-fc1000w', qty: 1 }],
            ventilation: {
                fan: 'sp-td500',
                filter: 'cf-480',
                controller: 'fan-controller-ac'
            },
            substrate: [{ id: 'canna-coco-50l', qty: 4 }],
            pots: [{ id: 'airpot-20l', qty: 9 }],
            nutrients: ['canna-coco-a-1l', 'canna-coco-b-1l', 'canna-rhizotonic-250ml', 'canna-pk1314-500ml', 'canna-cannazym-250ml'],
            monitoring: ['hygro-pro-wifi', 'ph-ec-combo', 'pipette-set'],
            accessories: ['timer-digital', 'hanger-light-4', 'scrog-net-150', 'trellis-net']
        },
        totalPrice: 95000,
        image: '/images/sets/150-mh-fc1000w.jpg'
    },
    {
        id: 'set-150-hm-rio1000',
        name: {
            en: 'Harvest Master Rio 1000 Pro Set',
            tr: 'Harvest Master Rio 1000 Pro Set'
        },
        description: {
            en: 'Premium 150x150 setup with Harvest Master Rio 1000 (2800 PPF, IP65)',
            tr: '2800 PPF IP65 Harvest Master Rio 1000 ile premium 150x150 kurulum'
        },
        tier: 'pro',
        tentSize: '150x150x200',
        mediaType: 'soil',
        nutrientBrand: 'BioBizz',
        plantCount: 9,
        items: {
            tent: 'sj-hs150',
            lighting: [{ id: 'hm-rio-1000', qty: 1 }],
            ventilation: {
                fan: 'sp-td500',
                filter: 'cf-480',
                controller: 'fan-controller-ac'
            },
            substrate: [{ id: 'biobizz-allmix-50l', qty: 4 }],
            pots: [{ id: 'airpot-20l', qty: 9 }],
            nutrients: ['biobizz-grow-1l', 'biobizz-bloom-1l', 'biobizz-topmax-500ml', 'biobizz-rootjuice-250ml', 'biobizz-acti-vera-250ml'],
            monitoring: ['hygro-pro-wifi', 'ph-ec-combo', 'pipette-set'],
            accessories: ['timer-digital', 'hanger-light-4', 'scrog-net-150', 'trellis-net']
        },
        totalPrice: 42000,
        image: '/images/sets/150-hm-rio1000.jpg'
    },
    {
        id: 'set-150-mh-fc6500',
        name: {
            en: 'Mars Hydro FC-6500 Premium Set',
            tr: 'Mars Hydro FC-6500 Premium Set'
        },
        description: {
            en: 'Professional 150x150 setup with Mars Hydro FC-6500 (1997 PPF, 2.8 μmol/J)',
            tr: 'Mars Hydro FC-6500 ile profesyonel 150x150 kurulum'
        },
        tier: 'pro',
        tentSize: '150x150x200',
        mediaType: 'coco',
        nutrientBrand: 'Advanced Nutrients',
        plantCount: 9,
        items: {
            tent: 'sj-hs150',
            lighting: [{ id: 'mh-fc6500', qty: 1 }],
            ventilation: {
                fan: 'sp-td500',
                filter: 'cf-480',
                controller: 'fan-controller-ac'
            },
            substrate: [{ id: 'canna-coco-50l', qty: 4 }],
            pots: [{ id: 'airpot-20l', qty: 9 }],
            nutrients: ['an-sensi-coco-grow-a-1l', 'an-sensi-coco-grow-b-1l', 'an-sensi-coco-bloom-a-1l', 'an-sensi-coco-bloom-b-1l', 'an-voodoo-juice-250ml', 'an-big-bud-coco-250ml'],
            monitoring: ['hygro-pro-wifi', 'ph-ec-combo', 'pipette-set'],
            accessories: ['timer-digital', 'hanger-light-4', 'scrog-net-150', 'trellis-net']
        },
        totalPrice: 72000,
        image: '/images/sets/150-mh-fc6500.jpg'
    },
    {
        id: 'set-120-hm-rio720',
        name: {
            en: 'Harvest Master Rio 720 Standard Set',
            tr: 'Harvest Master Rio 720 Standart Set'
        },
        description: {
            en: 'Professional 120x120 setup with Harvest Master Rio 720 (2016 PPF, IP65)',
            tr: '2016 PPF IP65 Harvest Master Rio 720 ile profesyonel 120x120 kurulum'
        },
        tier: 'standard',
        tentSize: '120x120x200',
        mediaType: 'soil',
        nutrientBrand: 'BioBizz',
        plantCount: 4,
        items: {
            tent: 'sj-hs120',
            lighting: [{ id: 'hm-rio-720', qty: 1 }],
            ventilation: {
                fan: 'sp-td350',
                filter: 'cf-350',
                controller: 'fan-controller-ac'
            },
            substrate: [{ id: 'biobizz-allmix-50l', qty: 3 }],
            pots: [{ id: 'airpot-20l', qty: 4 }],
            nutrients: ['biobizz-grow-1l', 'biobizz-bloom-1l', 'biobizz-topmax-250ml', 'biobizz-rootjuice-250ml'],
            monitoring: ['hygro-pro', 'ph-ec-combo', 'pipette-set'],
            accessories: ['timer-digital', 'hanger-light-4', 'scrog-net-120']
        },
        totalPrice: 35000,
        image: '/images/sets/120-hm-rio720.jpg'
    },
    {
        id: 'set-120-mh-fc4800',
        name: {
            en: 'Mars Hydro FC-4800 Standard Set',
            tr: 'Mars Hydro FC-4800 Standart Set'
        },
        description: {
            en: 'Professional 120x120 setup with Mars Hydro FC-4800 (1368 PPF, 2.85 μmol/J)',
            tr: 'Mars Hydro FC-4800 ile profesyonel 120x120 kurulum'
        },
        tier: 'standard',
        tentSize: '120x120x200',
        mediaType: 'coco',
        nutrientBrand: 'CANNA',
        plantCount: 4,
        items: {
            tent: 'sj-hs120',
            lighting: [{ id: 'mh-fc4800', qty: 1 }],
            ventilation: {
                fan: 'sp-td350',
                filter: 'cf-350',
                controller: 'fan-controller-ac'
            },
            substrate: [{ id: 'canna-coco-50l', qty: 2 }],
            pots: [{ id: 'airpot-20l', qty: 4 }],
            nutrients: ['canna-coco-a-1l', 'canna-coco-b-1l', 'canna-rhizotonic-250ml', 'canna-pk1314-250ml'],
            monitoring: ['hygro-pro', 'ph-ec-combo', 'pipette-set'],
            accessories: ['timer-digital', 'hanger-light-4', 'scrog-net-120']
        },
        totalPrice: 55000,
        image: '/images/sets/120-mh-fc4800.jpg'
    },
    {
        id: 'set-80-rosette200',
        name: {
            en: 'Rosette 200W Compact Pro Set',
            tr: 'Rosette 200W Kompakt Pro Set'
        },
        description: {
            en: 'Compact 80x80 setup with Rosette 200W LED',
            tr: 'Rosette 200W LED ile kompakt 80x80 kurulum'
        },
        tier: 'standard',
        tentSize: '80x80x180',
        mediaType: 'soil',
        nutrientBrand: 'BioBizz',
        plantCount: 2,
        items: {
            tent: 'generic-80x80x180',
            lighting: [{ id: 'rosette-200w', qty: 1 }],
            ventilation: {
                fan: 'sp-td250',
                filter: 'cf-250'
            },
            substrate: [{ id: 'biobizz-lightmix-50l', qty: 1 }],
            pots: [{ id: 'airpot-15l', qty: 2 }],
            nutrients: ['biobizz-grow-500ml', 'biobizz-bloom-500ml', 'biobizz-topmax-250ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set'],
            accessories: ['timer-digital', 'hanger-light-2']
        },
        totalPrice: 8500,
        image: '/images/sets/80-rosette200.jpg'
    },

    // ============================================
    // ENTRY LEVEL SETS (40-60cm tents)
    // ============================================
    {
        id: 'set-hs40-biobizz',
        name: {
            en: 'Secret Jardin HS40 BioBizz Starter Set',
            tr: 'Secret Jardin HS40 BioBizz Başlangıç Seti'
        },
        description: {
            en: 'Perfect starter kit for beginners with compact 40x40 tent',
            tr: 'Kompakt 40x40 kabinle yeni başlayanlar için mükemmel başlangıç seti'
        },
        tier: 'entry',
        tentSize: '40x40x120',
        mediaType: 'soil',
        nutrientBrand: 'BioBizz',
        plantCount: 1,
        items: {
            tent: 'sj-hs40',
            lighting: [{ id: 'led-100w-board', qty: 1 }],
            ventilation: {
                fan: 'mini-axial-100',
                filter: 'cf-150',
                ducting: 'duct-1.5m'
            },
            substrate: [{ id: 'biobizz-lightmix-20l', qty: 1 }],
            pots: [{ id: 'plastic-14l', qty: 1 }],
            nutrients: ['biobizz-grow-250ml', 'biobizz-bloom-250ml'],
            monitoring: ['hygro-mini', 'ph-pen', 'pipette-set'],
            accessories: ['timer-mechanical', 'hanger-light-2', 'clamp-set', 'duct-tape']
        },
        totalPrice: 2850,
        image: '/images/sets/hs40-biobizz.jpg'
    },
    {
        id: 'set-hs40-canna',
        name: {
            en: 'Secret Jardin HS40 CANNA Starter Set',
            tr: 'Secret Jardin HS40 CANNA Başlangıç Seti'
        },
        description: {
            en: 'Compact setup with CANNA Terra nutrients',
            tr: 'CANNA Terra besinleriyle kompakt kurulum'
        },
        tier: 'entry',
        tentSize: '40x40x120',
        mediaType: 'soil',
        nutrientBrand: 'CANNA',
        plantCount: 1,
        items: {
            tent: 'sj-hs40',
            lighting: [{ id: 'led-120w-board', qty: 1 }],
            ventilation: {
                fan: 'mini-axial-100',
                filter: 'cf-150',
                ducting: 'duct-1.5m'
            },
            substrate: [{ id: 'mantar-lightmix-50l', qty: 1 }],
            pots: [{ id: 'mantar-fabric-19l', qty: 1 }],
            nutrients: ['canna-terra-vega-500ml', 'canna-terra-flores-500ml'],
            monitoring: ['hygro-mini', 'ph-pen-digital', 'pipette-set'],
            accessories: ['timer-mechanical', 'hanger-light-2', 'clamp-set', 'duct-tape']
        },
        totalPrice: 3200,
        image: '/images/sets/hs40-canna.jpg'
    },

    // ============================================
    // SMALL SETS (60cm tents)
    // ============================================
    {
        id: 'set-60-biobizz',
        name: {
            en: '60x60 BioBizz Organic Set',
            tr: '60x60 BioBizz Organik Set'
        },
        description: {
            en: 'Organic growing setup for 1-2 plants',
            tr: '1-2 bitki için organik yetiştirme seti'
        },
        tier: 'entry',
        tentSize: '60x60x180',
        mediaType: 'soil',
        nutrientBrand: 'BioBizz',
        plantCount: 2,
        items: {
            tent: 'generic-60x60x180',
            lighting: [{ id: 'led-240w', qty: 1 }],
            ventilation: {
                set: 'set-190'
            },
            substrate: [{ id: 'mantar-lightmix-50l', qty: 1 }],
            pots: [{ id: 'mantar-fabric-15l', qty: 2 }],
            nutrients: ['biobizz-grow-250ml', 'biobizz-bloom-250ml', 'biobizz-topmax-250ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-mechanical', 'hanger-light-4', 'duct-102-2.5m']
        },
        totalPrice: 3500,
        image: '/images/sets/60-biobizz.jpg'
    },
    {
        id: 'set-60-canna',
        name: {
            en: '60x60 CANNA Terra Set',
            tr: '60x60 CANNA Terra Seti'
        },
        description: {
            en: 'Professional CANNA nutrients in compact tent',
            tr: 'Kompakt kabinde profesyonel CANNA besinleri'
        },
        tier: 'entry',
        tentSize: '60x60x180',
        mediaType: 'soil',
        nutrientBrand: 'CANNA',
        plantCount: 2,
        items: {
            tent: 'generic-60x60x180',
            lighting: [{ id: 'led-240w', qty: 1 }],
            ventilation: {
                set: 'set-190'
            },
            substrate: [{ id: 'mantar-lightmix-50l', qty: 1 }],
            pots: [{ id: 'mantar-fabric-15l', qty: 2 }],
            nutrients: ['canna-terra-vega-500ml', 'canna-terra-flores-500ml', 'canna-rhizotonic-250ml', 'canna-pk1314-250ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-mechanical', 'hanger-light-4', 'duct-102-2.5m']
        },
        totalPrice: 3800,
        image: '/images/sets/60-canna.jpg'
    },
    {
        id: 'set-sj60-rosette',
        name: {
            en: 'Secret Jardin 60 Premium Set',
            tr: 'Secret Jardin 60 Premium Set'
        },
        description: {
            en: 'Premium compact setup with LED',
            tr: 'LED ile premium kompakt kurulum'
        },
        tier: 'standard',
        tentSize: '60x60x160',
        mediaType: 'soil',
        nutrientBrand: 'Terra Aquatica',
        plantCount: 2,
        items: {
            tent: 'sj-hs60',
            lighting: [{ id: 'rosette-mkii-200w', qty: 1 }],
            ventilation: {
                set: 'set-190'
            },
            substrate: [{ id: 'plagron-lightmix-25l', qty: 1 }],
            pots: [{ id: 'serapot-11l', qty: 2 }],
            nutrients: ['ta-pro-organic-grow-500ml', 'ta-pro-organic-bloom-500ml'],
            monitoring: ['hygro-basic', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-digital', 'hanger-light-2']
        },
        totalPrice: 4200,
        image: '/images/sets/sj60-rosette.jpg'
    },
    {
        id: 'set-60-biobizz-single',
        name: {
            en: '60x60 BioBizz Single Plant Set',
            tr: '60x60 BioBizz Tek Bitki Seti'
        },
        description: {
            en: 'Perfect for single large plant growing',
            tr: 'Tek büyük bitki yetiştirmek için ideal'
        },
        tier: 'standard',
        tentSize: '60x60x160',
        mediaType: 'soil',
        nutrientBrand: 'BioBizz',
        plantCount: 1,
        items: {
            tent: 'generic-60x60x180',
            lighting: [{ id: 'led-240w', qty: 1 }],
            ventilation: {
                fan: 'sp-td160',
                filter: 'cf-190',
                ducting: 'duct-102-2.5m',
                filterHanger: 'filter-hanger-80'
            },
            substrate: [{ id: 'mantar-lightmix-50l', qty: 1 }],
            pots: [{ id: 'serapot-38l', qty: 1 }],
            nutrients: ['biobizz-grow-500ml', 'biobizz-bloom-1l', 'biobizz-topmax-250ml', 'biobizz-rootjuice-250ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-digital', 'hanger-light-2', 'co2-bag']
        },
        totalPrice: 4500,
        image: '/images/sets/60-biobizz-single.jpg'
    },

    // ============================================
    // MEDIUM SETS (80-100cm tents)
    // ============================================
    {
        id: 'set-80-coco',
        name: {
            en: '80x80 CANNA Coco Set',
            tr: '80x80 CANNA Coco Seti'
        },
        description: {
            en: 'Coco coir growing setup with CANNA nutrients',
            tr: 'CANNA besinleriyle hindistan cevizi lifi kurulumu'
        },
        tier: 'standard',
        tentSize: '80x80x180',
        mediaType: 'coco',
        nutrientBrand: 'CANNA',
        plantCount: 2,
        items: {
            tent: 'generic-80x80x180',
            lighting: [{ id: 'led-240w', qty: 1 }],
            ventilation: {
                fan: 'sp-td250',
                filter: 'cf-330',
                ducting: 'duct-102-2.5m',
                filterHanger: 'filter-hanger-80'
            },
            substrate: [{ id: 'mantar-cocomix-50l', qty: 1 }],
            pots: [{ id: 'mantar-fabric-19l', qty: 2 }],
            nutrients: ['canna-coco-ab-1l', 'canna-boost-250ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-digital', 'hanger-light-2', 'co2-bag']
        },
        totalPrice: 4800,
        image: '/images/sets/80-coco.jpg'
    },
    {
        id: 'set-100-biobizz',
        name: {
            en: '100x100 BioBizz Standard Set',
            tr: '100x100 BioBizz Standart Set'
        },
        description: {
            en: 'Standard growing setup for 4 plants',
            tr: '4 bitki için standart yetiştirme seti'
        },
        tier: 'standard',
        tentSize: '100x100x200',
        mediaType: 'soil',
        nutrientBrand: 'BioBizz',
        plantCount: 4,
        items: {
            tent: 'generic-100x100x200',
            lighting: [{ id: 'led-480w', qty: 1 }],
            ventilation: {
                fan: 'sp-td250',
                filter: 'cf-330',
                ducting: 'duct-102-2.5m',
                filterHanger: 'filter-hanger-80'
            },
            substrate: [{ id: 'mantar-lightmix-50l', qty: 2 }],
            pots: [{ id: 'mantar-fabric-19l', qty: 4 }],
            nutrients: ['biobizz-grow-500ml', 'biobizz-bloom-1l', 'biobizz-rootjuice-250ml', 'biobizz-topmax-500ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-mechanical', 'hanger-light-4', 'co2-bag']
        },
        totalPrice: 5500,
        image: '/images/sets/100-biobizz.jpg'
    },
    {
        id: 'set-100-canna',
        name: {
            en: '100x100 CANNA Terra Set',
            tr: '100x100 CANNA Terra Seti'
        },
        description: {
            en: 'CANNA nutrients with quality tent setup',
            tr: 'Kaliteli kabin kurulumu ile CANNA besinleri'
        },
        tier: 'standard',
        tentSize: '100x100x200',
        mediaType: 'soil',
        nutrientBrand: 'CANNA',
        plantCount: 4,
        items: {
            tent: 'generic-100x100x200',
            lighting: [{ id: 'led-480w', qty: 1 }],
            ventilation: {
                fan: 'sp-td250',
                filter: 'cf-330',
                ducting: 'duct-102-2.5m',
                filterHanger: 'filter-hanger-80'
            },
            substrate: [{ id: 'mantar-lightmix-50l', qty: 2 }],
            pots: [{ id: 'mantar-fabric-19l', qty: 4 }],
            nutrients: ['canna-terra-vega-1l', 'canna-terra-flores-1l', 'canna-rhizotonic-500ml', 'canna-boost-250ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-mechanical', 'hanger-light-4', 'co2-bag']
        },
        totalPrice: 5800,
        image: '/images/sets/100-canna.jpg'
    },
    {
        id: 'set-sj100-coco',
        name: {
            en: 'Secret Jardin HS100 Coco Pro Set',
            tr: 'Secret Jardin HS100 Coco Pro Seti'
        },
        description: {
            en: 'Professional coco setup with Terra Aquatica nutrients',
            tr: 'Terra Aquatica besinleriyle profesyonel coco kurulumu'
        },
        tier: 'standard',
        tentSize: '100x100x200',
        mediaType: 'coco',
        nutrientBrand: 'Terra Aquatica',
        plantCount: 4,
        items: {
            tent: 'sj-hs100',
            lighting: [{ id: 'led-480w', qty: 1 }],
            ventilation: {
                set: 'set-330'
            },
            substrate: [
                { id: 'plagron-cocos-50l', qty: 1 },
                { id: 'perlit-40l', qty: 1 }
            ],
            pots: [{ id: 'serapot-15l', qty: 4 }],
            nutrients: ['ta-dualpart-coco-grow-1l', 'ta-dualpart-coco-bloom-1l', 'ta-proroots-60ml', 'canna-pk1314-250ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-digital', 'hanger-light-2']
        },
        totalPrice: 6500,
        image: '/images/sets/sj100-coco.jpg'
    },
    {
        id: 'set-sj100-rosa',
        name: {
            en: 'Secret Jardin HS100 Premium Set',
            tr: 'Secret Jardin HS100 Premium Seti'
        },
        description: {
            en: 'Premium setup with 400W LED',
            tr: '400W LED ile premium kurulum'
        },
        tier: 'pro',
        tentSize: '100x100x200',
        mediaType: 'coco',
        nutrientBrand: 'Terra Aquatica',
        plantCount: 4,
        items: {
            tent: 'sj-hs100',
            lighting: [{ id: 'rosa-400w', qty: 1 }],
            ventilation: {
                set: 'set-330'
            },
            substrate: [
                { id: 'plagron-cocos-50l', qty: 1 },
                { id: 'perlit-40l', qty: 1 }
            ],
            pots: [{ id: 'serapot-15l', qty: 4 }],
            nutrients: ['ta-dualpart-coco-grow-1l', 'ta-dualpart-coco-bloom-1l', 'ta-proroots-60ml', 'canna-pk1314-250ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-digital', 'hanger-light-2']
        },
        totalPrice: 7800,
        image: '/images/sets/sj100-rosa.jpg'
    },
    {
        id: 'set-sj100-tripart',
        name: {
            en: 'Secret Jardin HS100 TriPart Soil Set',
            tr: 'Secret Jardin HS100 TriPart Toprak Seti'
        },
        description: {
            en: 'Versatile soil setup with Terra Aquatica TriPart',
            tr: 'Terra Aquatica TriPart ile çok yönlü toprak kurulumu'
        },
        tier: 'pro',
        tentSize: '100x100x200',
        mediaType: 'soil',
        nutrientBrand: 'Terra Aquatica',
        plantCount: 4,
        items: {
            tent: 'sj-hs100',
            lighting: [{ id: 'rosa-400w', qty: 1 }],
            ventilation: {
                set: 'set-330'
            },
            substrate: [{ id: 'plagron-lightmix-50l', qty: 1 }],
            pots: [{ id: 'serapot-15l', qty: 4 }],
            nutrients: ['ta-tripart-grow-1l', 'ta-tripart-bloom-1l', 'ta-tripart-micro-1l', 'ta-proroots-60ml', 'canna-pk1314-250ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-digital', 'hanger-light-2']
        },
        totalPrice: 8200,
        image: '/images/sets/sj100-tripart.jpg'
    },

    // ============================================
    // LARGE SETS (120cm tents)
    // ============================================
    {
        id: 'set-sj120-biobizz',
        name: {
            en: 'Secret Jardin HS120 BioBizz Pro Set',
            tr: 'Secret Jardin HS120 BioBizz Pro Seti'
        },
        description: {
            en: 'Professional organic growing for 6 plants',
            tr: '6 bitki için profesyonel organik yetiştirme'
        },
        tier: 'standard',
        tentSize: '120x120x200',
        mediaType: 'soil',
        nutrientBrand: 'BioBizz',
        plantCount: 6,
        items: {
            tent: 'sj-hs120',
            lighting: [{ id: 'led-720w', qty: 1 }],
            ventilation: {
                fan: 'sp-td350',
                filter: 'cf-467',
                ducting: 'duct-127-2.5m'
            },
            substrate: [{ id: 'mantar-lightmix-50l', qty: 3 }],
            pots: [{ id: 'mantar-fabric-19l', qty: 6 }],
            nutrients: ['biobizz-grow-500ml', 'biobizz-bloom-1l', 'biobizz-rootjuice-250ml', 'biobizz-topmax-500ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-mechanical', 'hanger-heavy-4', 'co2-bag']
        },
        totalPrice: 7200,
        image: '/images/sets/sj120-biobizz.jpg'
    },
    {
        id: 'set-sj120-canna',
        name: {
            en: 'Secret Jardin HS120 CANNA Pro Set',
            tr: 'Secret Jardin HS120 CANNA Pro Seti'
        },
        description: {
            en: 'Professional CANNA setup for 6 plants',
            tr: '6 bitki için profesyonel CANNA kurulumu'
        },
        tier: 'standard',
        tentSize: '120x120x200',
        mediaType: 'soil',
        nutrientBrand: 'CANNA',
        plantCount: 6,
        items: {
            tent: 'sj-hs120',
            lighting: [{ id: 'led-720w', qty: 1 }],
            ventilation: {
                fan: 'sp-td350',
                filter: 'cf-467',
                ducting: 'duct-127-2.5m'
            },
            substrate: [{ id: 'mantar-lightmix-50l', qty: 3 }],
            pots: [{ id: 'mantar-fabric-19l', qty: 6 }],
            nutrients: ['canna-terra-vega-1l', 'canna-terra-flores-1l', 'canna-rhizotonic-500ml', 'canna-boost-250ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-mechanical', 'hanger-heavy-4', 'co2-bag']
        },
        totalPrice: 7500,
        image: '/images/sets/sj120-canna.jpg'
    },
    {
        id: 'set-sj120-biobizz-mykos',
        name: {
            en: 'Secret Jardin HS120 BioBizz Mykos Premium Set',
            tr: 'Secret Jardin HS120 BioBizz Mykos Premium Seti'
        },
        description: {
            en: 'Premium organic with mycorrhizae boost',
            tr: 'Mikoriza desteğiyle premium organik'
        },
        tier: 'pro',
        tentSize: '120x120x200',
        mediaType: 'soil',
        nutrientBrand: 'BioBizz',
        plantCount: 4,
        items: {
            tent: 'sj-hs120',
            lighting: [{ id: 'led-720w', qty: 1 }],
            ventilation: {
                set: 'set-467'
            },
            substrate: [{ id: 'mantar-lightmix-50l', qty: 3 }],
            pots: [{ id: 'mantar-fabric-26l', qty: 4 }],
            nutrients: ['biobizz-grow-1l', 'biobizz-bloom-1l', 'biobizz-topmax-1l', 'xtreme-mykos-454g'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-digital', 'hanger-light-4', 'co2-bag']
        },
        totalPrice: 8500,
        image: '/images/sets/sj120-mykos.jpg'
    },
    {
        id: 'set-sj120-an',
        name: {
            en: 'Secret Jardin HS120 Advanced Nutrients Set',
            tr: 'Secret Jardin HS120 Advanced Nutrients Seti'
        },
        description: {
            en: 'pH Perfect technology for hassle-free growing',
            tr: 'Zahmetsiz yetiştirme için pH Perfect teknolojisi'
        },
        tier: 'pro',
        tentSize: '120x120x200',
        mediaType: 'soil',
        nutrientBrand: 'Advanced Nutrients',
        plantCount: 4,
        items: {
            tent: 'sj-hs120',
            lighting: [{ id: 'led-720w', qty: 1 }],
            ventilation: {
                set: 'set-467'
            },
            substrate: [{ id: 'mantar-lightmix-50l', qty: 3 }],
            pots: [{ id: 'mantar-fabric-26l', qty: 4 }],
            nutrients: ['an-ph-perfect-grow-1l', 'an-ph-perfect-micro-1l', 'an-ph-perfect-bloom-1l', 'an-big-bud-500ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-digital', 'hanger-light-4', 'co2-bag']
        },
        totalPrice: 9200,
        image: '/images/sets/sj120-an.jpg'
    },
    {
        id: 'set-sj120-coral',
        name: {
            en: 'Secret Jardin HS120 Premium Set',
            tr: 'Secret Jardin HS120 Premium Seti'
        },
        description: {
            en: 'Premium setup with 600W LED',
            tr: '600W LED ile premium kurulum'
        },
        tier: 'pro',
        tentSize: '120x120x200',
        mediaType: 'soil',
        nutrientBrand: 'BioBizz',
        plantCount: 9,
        items: {
            tent: 'sj-hs120',
            lighting: [{ id: 'coral-600w', qty: 1 }],
            ventilation: {
                set: 'set-467',
                intakeFan: 'mini-axial-125'
            },
            substrate: [{ id: 'biobizz-lightmix-50l', qty: 5 }],
            pots: [{ id: 'serapot-26l', qty: 9 }],
            nutrients: ['organic-soil-heavens-set'],
            monitoring: ['hygro-basic', 'ph-pen-digital', 'pipette-set-5', 'watering-can-1l'],
            accessories: ['timer-digital', 'hanger-light-4']
        },
        totalPrice: 12500,
        image: '/images/sets/sj120-coral.jpg'
    },

    // ============================================
    // XL SETS (150cm tents)
    // ============================================
    {
        id: 'set-sj150-canna',
        name: {
            en: 'Secret Jardin HS150 CANNA Master Set',
            tr: 'Secret Jardin HS150 CANNA Master Seti'
        },
        description: {
            en: 'Large scale professional growing for 9 plants',
            tr: '9 bitki için büyük ölçekli profesyonel yetiştirme'
        },
        tier: 'pro',
        tentSize: '150x150x200',
        mediaType: 'soil',
        nutrientBrand: 'CANNA',
        plantCount: 9,
        items: {
            tent: 'sj-hs150',
            lighting: [{ id: 'led-960w', qty: 1 }],
            ventilation: {
                fan: 'sp-td500',
                filter: 'cf-665',
                ducting: 'duct-152-2.5m'
            },
            substrate: [{ id: 'mantar-lightmix-50l', qty: 3 }],
            pots: [{ id: 'mantar-fabric-19l', qty: 9 }],
            nutrients: ['canna-terra-vega-1l', 'canna-terra-flores-1l', 'canna-rhizotonic-250ml', 'canna-boost-250ml'],
            monitoring: ['hygro-basic', 'ph-pen', 'pipette-set', 'watering-can-1l'],
            accessories: ['timer-mechanical', 'hanger-heavy-4', 'co2-bag']
        },
        totalPrice: 11000,
        image: '/images/sets/sj150-canna.jpg'
    },

    // ============================================
    // XXL SETS (120x240cm tents)
    // ============================================
    {
        id: 'set-sj120x240-soil',
        name: {
            en: 'Secret Jardin 120x240 Grandmaster Soil Set',
            tr: 'Secret Jardin 120x240 Grandmaster Toprak Seti'
        },
        description: {
            en: 'Ultimate setup for 15 plants with dual LEDs',
            tr: 'Çift LED ile 15 bitki için nihai kurulum'
        },
        tier: 'pro',
        tentSize: '120x240x200',
        mediaType: 'soil',
        nutrientBrand: 'Advanced Nutrients',
        plantCount: 15,
        items: {
            tent: 'sj-hs120x240',
            lighting: [{ id: 'coral-600w', qty: 2 }],
            ventilation: {
                set: 'set-895',
                intakeFan: 'mini-axial-150'
            },
            substrate: [{ id: 'plagron-lightmix-50l', qty: 12 }],
            pots: [{ id: 'serapot-38l', qty: 15 }],
            nutrients: ['an-connoisseur-grandmaster-pack', 'an-sensi-calmag-500ml'],
            extras: ['ta-ph-down-1l', 'ta-ph-up-500ml', 'ona-block'],
            monitoring: ['hygro-co2', 'ph-pen', 'ec-pen', 'pipette-set-15', 'watering-can-1l', 'watering-can-1l'],
            accessories: ['timer-digital', 'timer-digital', 'hanger-light-8']
        },
        totalPrice: 22000,
        image: '/images/sets/sj120x240-soil.jpg'
    },
    {
        id: 'set-sj120x240-coco',
        name: {
            en: 'Secret Jardin 120x240 Grandmaster Coco Set',
            tr: 'Secret Jardin 120x240 Grandmaster Coco Seti'
        },
        description: {
            en: 'Ultimate coco setup for maximum yields',
            tr: 'Maksimum verim için nihai coco kurulumu'
        },
        tier: 'pro',
        tentSize: '120x240x200',
        mediaType: 'coco',
        nutrientBrand: 'Advanced Nutrients',
        plantCount: 15,
        items: {
            tent: 'sj-hs120x240',
            lighting: [{ id: 'coral-600w', qty: 2 }],
            ventilation: {
                set: 'set-895',
                intakeFan: 'mini-axial-150'
            },
            substrate: [
                { id: 'plagron-cocos-50l', qty: 12 },
                { id: 'perlit-200l', qty: 1 }
            ],
            pots: [{ id: 'serapot-38l', qty: 15 }],
            nutrients: ['an-connoisseur-grandmaster-pack', 'an-sensi-calmag-500ml'],
            extras: ['ta-ph-down-1l', 'ona-block'],
            monitoring: ['hygro-co2', 'ph-pen', 'ec-pen', 'pipette-set-15', 'watering-can-1l', 'watering-can-1l'],
            accessories: ['timer-digital', 'timer-digital', 'hanger-light-8']
        },
        totalPrice: 23500,
        image: '/images/sets/sj120x240-coco.jpg'
    }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get sets by tier
 */
export function getSetsByTier(tier) {
    return PRESET_SETS.filter(set => set.tier === tier);
}

/**
 * Get sets by tent size
 */
export function getSetsByTentSize(tentSize) {
    return PRESET_SETS.filter(set => set.tentSize === tentSize);
}

/**
 * Get sets by media type
 */
export function getSetsByMediaType(mediaType) {
    return PRESET_SETS.filter(set => set.mediaType === mediaType);
}

/**
 * Get sets by nutrient brand
 */
export function getSetsByNutrientBrand(brand) {
    return PRESET_SETS.filter(set => set.nutrientBrand === brand);
}

/**
 * Get sets filtered by multiple criteria
 */
export function getFilteredSets(filters = {}) {
    let result = [...PRESET_SETS];
    
    if (filters.tier) {
        result = result.filter(set => set.tier === filters.tier);
    }
    if (filters.tentSize) {
        result = result.filter(set => set.tentSize === filters.tentSize);
    }
    if (filters.mediaType) {
        result = result.filter(set => set.mediaType === filters.mediaType);
    }
    if (filters.nutrientBrand) {
        result = result.filter(set => set.nutrientBrand === filters.nutrientBrand);
    }
    if (filters.maxPrice) {
        result = result.filter(set => set.totalPrice <= filters.maxPrice);
    }
    if (filters.minPlantCount) {
        result = result.filter(set => set.plantCount >= filters.minPlantCount);
    }
    
    return result;
}

/**
 * Get unique tent sizes
 */
export function getUniqueTentSizes() {
    return [...new Set(PRESET_SETS.map(set => set.tentSize))];
}

/**
 * Get unique nutrient brands
 */
export function getUniqueNutrientBrands() {
    return [...new Set(PRESET_SETS.map(set => set.nutrientBrand))];
}

/**
 * Get set by ID
 */
export function getSetById(id) {
    return PRESET_SETS.find(set => set.id === id);
}

export default PRESET_SETS;
