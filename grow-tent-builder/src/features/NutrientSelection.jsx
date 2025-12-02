import { useState, useMemo } from 'react';
import { useBuilder } from '../context/BuilderContext';
import { useSettings } from '../context/SettingsContext';
import { BIOBIZZ_PRODUCTS, PRODUCT_CATEGORIES } from '../data/biobizzProducts';
import { CANNA_PRODUCTS } from '../data/cannaData';
import { ADVANCED_NUTRIENTS_DATA, PRODUCT_CATEGORIES as AN_CATEGORIES } from '../data/advancedNutrientsData';

// Nutrient brands available in the builder
const NUTRIENT_BRANDS = [
    {
        id: 'biobizz',
        name: 'BioBizz',
        icon: '🌿',
        color: '#22C55E',
        description: {
            tr: 'Organik besin çözümleri',
            en: 'Organic nutrient solutions'
        },
        logo: '/images/cropped-Biobizz-Icon-Brown-Texture-180x180.jpg',
        mediaTypes: ['soil', 'coco']
    },
    {
        id: 'canna',
        name: 'CANNA',
        icon: '🌱',
        color: '#16A34A',
        description: {
            tr: 'Profesyonel besin sistemleri',
            en: 'Professional nutrient systems'
        },
        logo: '/images/canna-logo.svg',
        mediaTypes: ['soil', 'coco', 'hydro']
    },
    {
        id: 'advanced-nutrients',
        name: 'Advanced Nutrients',
        icon: '🧪',
        color: '#7C3AED',
        description: {
            tr: 'pH Perfect teknolojisi',
            en: 'pH Perfect technology'
        },
        logo: '/images/advanced-nutrients-logo.png',
        mediaTypes: ['soil', 'coco', 'hydro']
    }
];

// Filter BioBizz products to exclude substrates
const getBioBizzNutrients = (mediaType) => {
    return BIOBIZZ_PRODUCTS.filter(product => 
        product.category_key !== 'substrate' && 
        product.category_key !== 'substrate_booster' &&
        product.compatible_media.includes(mediaType)
    );
};

// Filter CANNA products by media type
const getCannaProducts = (mediaType) => {
    const systemMap = {
        'soil': 'terra',
        'coco': 'coco',
        'hydro': 'aqua'
    };
    const system = systemMap[mediaType] || 'terra';
    return CANNA_PRODUCTS.filter(p => p.system === system || p.system === 'all');
};

// Filter Advanced Nutrients products by media type
const getAdvancedNutrientsProducts = (mediaType) => {
    // Advanced Nutrients products work with all media types
    // Add default price and normalize product structure
    const normalizeProduct = (product) => ({
        ...product,
        name: product.product_name, // Normalize name field
        price: product.price || 850, // Default price in TL
        description: product.function_key ? `${product.product_name}` : '',
        compatible_media: product.id.includes('-coco-') ? ['coco'] : ['soil', 'coco', 'hydro']
    });
    
    // Filter based on product name patterns for coco-specific products
    if (mediaType === 'coco') {
        // Include both coco-specific and universal products
        return ADVANCED_NUTRIENTS_DATA.map(normalizeProduct);
    } else if (mediaType === 'hydro') {
        // Exclude coco-specific products for hydro
        return ADVANCED_NUTRIENTS_DATA.filter(p => !p.id.includes('-coco-')).map(normalizeProduct);
    } else {
        // Soil - exclude coco-specific products
        return ADVANCED_NUTRIENTS_DATA.filter(p => !p.id.includes('-coco-')).map(normalizeProduct);
    }
};

// Group products by category
const groupProductsByCategory = (products, brandId = 'biobizz') => {
    const grouped = {};
    const categories = brandId === 'advanced-nutrients' ? AN_CATEGORIES : PRODUCT_CATEGORIES;
    
    products.forEach(product => {
        const category = product.category_key;
        if (!grouped[category]) {
            grouped[category] = [];
        }
        grouped[category].push(product);
    });
    
    // Sort categories
    const sortedCategories = Object.keys(grouped).sort((a, b) => {
        return (categories[a]?.order || 99) - (categories[b]?.order || 99);
    });
    
    const sortedGrouped = {};
    sortedCategories.forEach(category => {
        sortedGrouped[category] = grouped[category];
    });
    
    return sortedGrouped;
};

export default function NutrientSelection() {
    const { state, dispatch } = useBuilder();
    const { t, formatPrice, language } = useSettings();
    const { selectedItems, mediaType, selectedPreset } = state;
    const selectedNutrients = selectedItems.nutrients;
    
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [expandedCategories, setExpandedCategories] = useState({});
    const [selectedPackaging, setSelectedPackaging] = useState({});
    const [quantities, setQuantities] = useState({});

    // Check if there are preset-selected nutrients
    const hasPresetNutrients = selectedPreset && selectedNutrients.length > 0;

    // Get products based on selected brand and media type
    const filteredProducts = useMemo(() => {
        if (!selectedBrand) return [];
        
        switch (selectedBrand) {
            case 'biobizz':
                return getBioBizzNutrients(mediaType);
            case 'canna':
                return getCannaProducts(mediaType);
            case 'advanced-nutrients':
                return getAdvancedNutrientsProducts(mediaType);
            default:
                return [];
        }
    }, [selectedBrand, mediaType]);

    const groupedProducts = useMemo(() => {
        return groupProductsByCategory(filteredProducts, selectedBrand);
    }, [filteredProducts, selectedBrand]);

    const handleQuantityChange = (itemId, delta) => {
        setQuantities(prev => {
            const current = prev[itemId] || 1;
            const newQty = Math.max(1, current + delta);
            return { ...prev, [itemId]: newQty };
        });

        // Update quantity in selected items
        const existingItem = selectedNutrients.find(i => i.id === itemId);
        if (existingItem) {
            const newQty = Math.max(1, (quantities[itemId] || 1) + delta);
            const updatedItem = { ...existingItem, quantity: newQty };
            dispatch({ type: 'REMOVE_ITEM', payload: { category: 'nutrients', itemId } });
            dispatch({ type: 'ADD_ITEM', payload: { category: 'nutrients', item: updatedItem } });
        }
    };

    const handleToggleItem = (item) => {
        const packaging = selectedPackaging[item.id] || (item.available_packaging ? item.available_packaging[0] : '1L');
        const quantity = quantities[item.id] || 1;
        const itemWithDetails = { 
            ...item, 
            selectedPackaging: packaging,
            quantity: quantity,
            brand: selectedBrand === 'biobizz' ? 'BioBizz' : 
                   selectedBrand === 'canna' ? 'CANNA' : 'Advanced Nutrients'
        };
        
        const isSelected = selectedNutrients.find(i => i.id === item.id);
        if (isSelected) {
            dispatch({ type: 'REMOVE_ITEM', payload: { category: 'nutrients', itemId: item.id } });
        } else {
            dispatch({ type: 'ADD_ITEM', payload: { category: 'nutrients', item: itemWithDetails } });
        }
    };

    const handlePackagingChange = (itemId, packaging) => {
        setSelectedPackaging(prev => ({ ...prev, [itemId]: packaging }));
        
        const existingItem = selectedNutrients.find(i => i.id === itemId);
        if (existingItem) {
            const updatedItem = { ...existingItem, selectedPackaging: packaging };
            dispatch({ type: 'REMOVE_ITEM', payload: { category: 'nutrients', itemId } });
            dispatch({ type: 'ADD_ITEM', payload: { category: 'nutrients', item: updatedItem } });
        }
    };

    const handleNext = () => {
        dispatch({ type: 'NEXT_STEP' });
    };

    const handleBack = () => {
        dispatch({ type: 'PREV_STEP' });
    };

    const toggleCategory = (categoryKey) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryKey]: !prev[categoryKey]
        }));
    };

    // Get available brands based on media type
    const availableBrands = NUTRIENT_BRANDS.filter(brand => 
        brand.mediaTypes.includes(mediaType)
    );

    return (
        <div className="fade-in">
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{t('step6')}</h2>

            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t('nutesDesc')}
            </p>

            {/* Preset Selected Nutrients Banner */}
            {hasPresetNutrients && (
                <div style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)',
                    border: '2px solid var(--color-primary)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        marginBottom: '1rem'
                    }}>
                        <span style={{ fontSize: '1.5rem' }}>✓</span>
                        <h3 style={{ margin: 0, color: 'var(--color-primary)' }}>
                            {language === 'tr' ? 'Setten Seçilen Besinler' : 'Selected from Preset'}
                        </h3>
                    </div>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', 
                        gap: '1rem' 
                    }}>
                        {selectedNutrients.map(nutrient => (
                            <div 
                                key={nutrient.id}
                                style={{
                                    background: 'var(--bg-card)',
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-md)',
                                    border: '1px solid var(--color-primary)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.5rem'
                                }}
                            >
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start'
                                }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ 
                                            fontWeight: 'bold', 
                                            color: 'var(--text-primary)',
                                            fontSize: '0.9rem'
                                        }}>
                                            {nutrient.name || nutrient.product_name}
                                        </div>
                                        <div style={{ 
                                            fontSize: '0.75rem', 
                                            color: 'var(--color-primary)',
                                            fontWeight: 'bold' 
                                        }}>
                                            {nutrient.brand}
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            dispatch({ type: 'REMOVE_ITEM', payload: { category: 'nutrients', itemId: nutrient.id } });
                                        }}
                                        style={{
                                            background: 'rgba(239, 68, 68, 0.1)',
                                            border: '1px solid rgba(239, 68, 68, 0.3)',
                                            color: '#ef4444',
                                            borderRadius: '4px',
                                            padding: '2px 6px',
                                            fontSize: '0.7rem',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div style={{ 
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>
                                    <div style={{ 
                                        fontSize: '0.75rem', 
                                        color: 'var(--text-secondary)' 
                                    }}>
                                        {nutrient.packaging || nutrient.selectedPackaging}
                                    </div>
                                    {/* Quantity control */}
                                    <div style={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        gap: '0.25rem',
                                        background: 'var(--bg-surface)',
                                        borderRadius: '4px',
                                        padding: '2px'
                                    }}>
                                        <button
                                            onClick={() => {
                                                const newQty = Math.max(1, (nutrient.quantity || 1) - 1);
                                                const updatedItem = { ...nutrient, quantity: newQty };
                                                dispatch({ type: 'REMOVE_ITEM', payload: { category: 'nutrients', itemId: nutrient.id } });
                                                dispatch({ type: 'ADD_ITEM', payload: { category: 'nutrients', item: updatedItem } });
                                            }}
                                            style={{
                                                width: '24px',
                                                height: '24px',
                                                border: 'none',
                                                background: 'var(--bg-card)',
                                                color: 'var(--text-primary)',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                fontSize: '1rem'
                                            }}
                                        >−</button>
                                        <span style={{ 
                                            minWidth: '24px', 
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            fontSize: '0.85rem'
                                        }}>
                                            {nutrient.quantity || 1}
                                        </span>
                                        <button
                                            onClick={() => {
                                                const newQty = (nutrient.quantity || 1) + 1;
                                                const updatedItem = { ...nutrient, quantity: newQty };
                                                dispatch({ type: 'REMOVE_ITEM', payload: { category: 'nutrients', itemId: nutrient.id } });
                                                dispatch({ type: 'ADD_ITEM', payload: { category: 'nutrients', item: updatedItem } });
                                            }}
                                            style={{
                                                width: '24px',
                                                height: '24px',
                                                border: 'none',
                                                background: 'var(--bg-card)',
                                                color: 'var(--text-primary)',
                                                borderRadius: '4px',
                                                cursor: 'pointer',
                                                fontSize: '1rem'
                                            }}
                                        >+</button>
                                    </div>
                                </div>
                                <div style={{ 
                                    color: 'var(--color-primary)', 
                                    fontWeight: 'bold',
                                    fontSize: '0.875rem'
                                }}>
                                    {formatPrice((nutrient.price || 0) * (nutrient.quantity || 1))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <p style={{ 
                        marginTop: '1rem', 
                        fontSize: '0.85rem', 
                        color: 'var(--text-muted)',
                        fontStyle: 'italic'
                    }}>
                        {language === 'tr' 
                            ? 'Bu besinler hazır setten gelmiştir. İsterseniz değiştirebilir veya ek ürünler ekleyebilirsiniz.' 
                            : 'These nutrients came from your preset. You can modify or add more products.'}
                    </p>
                </div>
            )}

            {/* Brand Selection */}
            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ 
                    marginBottom: '1rem', 
                    color: 'var(--text-primary)',
                    fontSize: '1.1rem'
                }}>
                    {language === 'tr' ? '🏷️ Marka Seçin' : '🏷️ Select Brand'}
                </h3>
                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: '1.5rem',
                    maxWidth: '900px'
                }}>
                    {availableBrands.map(brand => (
                        <div
                            key={brand.id}
                            onClick={() => setSelectedBrand(brand.id)}
                            style={{
                                padding: '1.5rem',
                                background: selectedBrand === brand.id 
                                    ? `linear-gradient(145deg, ${brand.color}15, ${brand.color}08)` 
                                    : 'var(--bg-card)',
                                border: `2px solid ${selectedBrand === brand.id ? brand.color : 'var(--border-color)'}`,
                                borderRadius: '16px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                gap: '1rem',
                                position: 'relative',
                                boxShadow: selectedBrand === brand.id 
                                    ? `0 8px 32px ${brand.color}30` 
                                    : '0 4px 12px rgba(0,0,0,0.1)',
                                transform: selectedBrand === brand.id ? 'translateY(-4px)' : 'translateY(0)'
                            }}
                        >
                            {selectedBrand === brand.id && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    right: '-10px',
                                    width: '28px',
                                    height: '28px',
                                    borderRadius: '50%',
                                    background: brand.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    boxShadow: `0 4px 12px ${brand.color}50`
                                }}>✓</div>
                            )}
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '12px',
                                boxShadow: selectedBrand === brand.id 
                                    ? `0 4px 20px ${brand.color}25, inset 0 2px 4px rgba(255,255,255,0.8)` 
                                    : '0 4px 16px rgba(0,0,0,0.08), inset 0 2px 4px rgba(255,255,255,0.8)',
                                border: selectedBrand === brand.id 
                                    ? `3px solid ${brand.color}` 
                                    : '3px solid transparent',
                                transition: 'all 0.3s ease'
                            }}>
                                <img 
                                    src={brand.logo} 
                                    alt={brand.name}
                                    style={{ 
                                        width: '100%', 
                                        height: '100%', 
                                        objectFit: 'contain',
                                        filter: selectedBrand === brand.id ? 'none' : 'grayscale(20%)',
                                        transition: 'filter 0.3s ease'
                                    }}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `<span style="font-size: 2.5rem">${brand.icon}</span>`;
                                    }}
                                />
                            </div>
                            <div>
                                <div style={{ 
                                    fontWeight: '700', 
                                    fontSize: '1.15rem',
                                    color: selectedBrand === brand.id ? brand.color : 'var(--text-primary)',
                                    marginBottom: '0.35rem',
                                    transition: 'color 0.3s ease'
                                }}>
                                    {brand.name}
                                </div>
                                <div style={{ 
                                    fontSize: '0.85rem', 
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.4'
                                }}>
                                    {brand.description[language] || brand.description.en}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Products by Category */}
            {selectedBrand && (
                <div style={{ marginBottom: '2rem' }}>
                    <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        marginBottom: '1.5rem',
                        padding: '0.75rem 1rem',
                        background: `linear-gradient(135deg, ${NUTRIENT_BRANDS.find(b => b.id === selectedBrand)?.color}15, transparent)`,
                        borderRadius: 'var(--radius-md)',
                        border: `1px solid ${NUTRIENT_BRANDS.find(b => b.id === selectedBrand)?.color}30`
                    }}>
                        <span style={{ fontSize: '1.25rem' }}>
                            {NUTRIENT_BRANDS.find(b => b.id === selectedBrand)?.icon}
                        </span>
                        <span style={{ 
                            fontWeight: 'bold', 
                            color: NUTRIENT_BRANDS.find(b => b.id === selectedBrand)?.color 
                        }}>
                            {NUTRIENT_BRANDS.find(b => b.id === selectedBrand)?.name}
                        </span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                            {language === 'tr' ? 'Ürünleri' : 'Products'}
                        </span>
                    </div>

                    {Object.keys(groupedProducts).length === 0 ? (
                        <div style={{
                            padding: '2rem',
                            textAlign: 'center',
                            color: 'var(--text-muted)',
                            background: 'var(--bg-surface)',
                            borderRadius: 'var(--radius-md)'
                        }}>
                            {language === 'tr' 
                                ? 'Bu medya tipi için ürün bulunamadı.' 
                                : 'No products found for this media type.'}
                        </div>
                    ) : (
                        Object.entries(groupedProducts).map(([categoryKey, products]) => {
                            const category = PRODUCT_CATEGORIES[categoryKey];
                            const isExpanded = expandedCategories[categoryKey] !== false;

                            return (
                                <div key={categoryKey} style={{ marginBottom: '1rem' }}>
                                    <div
                                        onClick={() => toggleCategory(categoryKey)}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            padding: '0.75rem 1rem',
                                            background: 'var(--bg-surface)',
                                            borderRadius: 'var(--radius-md)',
                                            cursor: 'pointer',
                                            marginBottom: isExpanded ? '0.75rem' : 0,
                                            transition: 'all 0.2s ease'
                                        }}
                                    >
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ fontSize: '1.25rem' }}>{category?.icon || '📦'}</span>
                                            <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>
                                                {category?.name || categoryKey}
                                            </span>
                                            <span style={{ 
                                                fontSize: '0.75rem', 
                                                background: 'var(--bg-card)', 
                                                padding: '2px 8px', 
                                                borderRadius: '12px', 
                                                color: 'var(--text-muted)' 
                                            }}>
                                                {products.length}
                                            </span>
                                        </div>
                                        <span style={{ 
                                            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                            transition: 'transform 0.2s ease',
                                            color: 'var(--text-muted)'
                                        }}>▼</span>
                                    </div>

                                    {isExpanded && (
                                        <div style={{ 
                                            display: 'grid', 
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                                            gap: '1rem' 
                                        }}>
                                            {products.map((item) => {
                                                const isSelected = selectedNutrients.find(i => i.id === item.id);
                                                const currentPackaging = selectedPackaging[item.id] || 
                                                    (item.available_packaging ? item.available_packaging[0] : '1L');
                                                const currentQty = quantities[item.id] || 1;

                                                return (
                                                    <div
                                                        key={item.id}
                                                        style={{
                                                            padding: '1rem',
                                                            background: isSelected ? 'var(--bg-surface-hover)' : 'var(--bg-card)',
                                                            border: `2px solid ${isSelected ? 'var(--color-primary)' : 'var(--border-color)'}`,
                                                            borderRadius: 'var(--radius-md)',
                                                            transition: 'all 0.2s ease'
                                                        }}
                                                    >
                                                        <div 
                                                            onClick={() => handleToggleItem(item)}
                                                            style={{ cursor: 'pointer' }}
                                                        >
                                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                                                <span style={{ fontSize: '1.5rem' }}>{item.icon || '🧪'}</span>
                                                                <div style={{ flex: 1 }}>
                                                                    <span style={{ 
                                                                        fontWeight: 'bold', 
                                                                        color: isSelected ? 'var(--color-primary)' : 'var(--text-primary)',
                                                                        fontSize: '0.95rem'
                                                                    }}>
                                                                        {item.product_name}
                                                                    </span>
                                                                </div>
                                                                {isSelected && (
                                                                    <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem' }}>✓</span>
                                                                )}
                                                            </div>

                                                            {item.function_detailed && (
                                                                <div style={{ 
                                                                    fontSize: '0.8rem', 
                                                                    color: 'var(--color-primary)', 
                                                                    marginBottom: '0.5rem',
                                                                    opacity: 0.9
                                                                }}>
                                                                    {item.function_detailed}
                                                                </div>
                                                            )}

                                                            {item.key_properties && (
                                                                <div style={{ 
                                                                    fontSize: '0.8rem', 
                                                                    color: 'var(--text-secondary)', 
                                                                    marginBottom: '0.75rem',
                                                                    lineHeight: 1.4
                                                                }}>
                                                                    {item.key_properties.length > 120 
                                                                        ? item.key_properties.substring(0, 120) + '...' 
                                                                        : item.key_properties}
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Packaging selection */}
                                                        {item.available_packaging && (
                                                            <div style={{ marginBottom: '0.75rem' }}>
                                                                <div style={{ 
                                                                    fontSize: '0.7rem', 
                                                                    color: 'var(--text-muted)', 
                                                                    marginBottom: '0.25rem' 
                                                                }}>
                                                                    {t('packaging') || 'Ambalaj'}:
                                                                </div>
                                                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                                                                    {item.available_packaging.map(pkg => (
                                                                        <button
                                                                            key={pkg}
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                handlePackagingChange(item.id, pkg);
                                                                            }}
                                                                            style={{
                                                                                padding: '0.25rem 0.5rem',
                                                                                fontSize: '0.7rem',
                                                                                background: currentPackaging === pkg 
                                                                                    ? 'var(--color-primary)' 
                                                                                    : 'var(--bg-surface)',
                                                                                color: currentPackaging === pkg 
                                                                                    ? '#000' 
                                                                                    : 'var(--text-secondary)',
                                                                                border: 'none',
                                                                                borderRadius: '4px',
                                                                                cursor: 'pointer',
                                                                                transition: 'all 0.2s ease'
                                                                            }}
                                                                        >
                                                                            {pkg}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}

                                                        {/* Quantity and Price */}
                                                        <div style={{ 
                                                            display: 'flex', 
                                                            justifyContent: 'space-between', 
                                                            alignItems: 'center',
                                                            gap: '0.5rem'
                                                        }}>
                                                            {/* Quantity control */}
                                                            <div style={{ 
                                                                display: 'flex', 
                                                                alignItems: 'center', 
                                                                gap: '0.25rem',
                                                                background: 'var(--bg-surface)',
                                                                borderRadius: '4px',
                                                                padding: '2px'
                                                            }}>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleQuantityChange(item.id, -1);
                                                                    }}
                                                                    style={{
                                                                        width: '28px',
                                                                        height: '28px',
                                                                        border: 'none',
                                                                        background: 'var(--bg-card)',
                                                                        color: 'var(--text-primary)',
                                                                        borderRadius: '4px',
                                                                        cursor: 'pointer',
                                                                        fontSize: '1rem'
                                                                    }}
                                                                >−</button>
                                                                <span style={{ 
                                                                    minWidth: '28px', 
                                                                    textAlign: 'center',
                                                                    fontWeight: 'bold',
                                                                    fontSize: '0.9rem'
                                                                }}>
                                                                    {currentQty}
                                                                </span>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        handleQuantityChange(item.id, 1);
                                                                    }}
                                                                    style={{
                                                                        width: '28px',
                                                                        height: '28px',
                                                                        border: 'none',
                                                                        background: 'var(--bg-card)',
                                                                        color: 'var(--text-primary)',
                                                                        borderRadius: '4px',
                                                                        cursor: 'pointer',
                                                                        fontSize: '1rem'
                                                                    }}
                                                                >+</button>
                                                            </div>

                                                            <div style={{ 
                                                                color: 'var(--color-primary)', 
                                                                fontWeight: 'bold',
                                                                fontSize: '1rem'
                                                            }}>
                                                                {formatPrice((item.price || 0) * currentQty)}
                                                            </div>

                                                            <button
                                                                onClick={() => handleToggleItem(item)}
                                                                style={{
                                                                    padding: '0.4rem 0.8rem',
                                                                    fontSize: '0.8rem',
                                                                    background: isSelected 
                                                                        ? 'rgba(239, 68, 68, 0.2)' 
                                                                        : 'rgba(16, 185, 129, 0.2)',
                                                                    color: isSelected 
                                                                        ? '#ef4444' 
                                                                        : 'var(--color-primary)',
                                                                    border: 'none',
                                                                    borderRadius: 'var(--radius-sm)',
                                                                    cursor: 'pointer',
                                                                    transition: 'all 0.2s ease'
                                                                }}
                                                            >
                                                                {isSelected ? (t('remove') || 'Kaldır') : (t('add') || 'Ekle')}
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    )}
                </div>
            )}

            {/* No brand selected message */}
            {!selectedBrand && !hasPresetNutrients && (
                <div style={{
                    padding: '3rem',
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: '2rem'
                }}>
                    <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🏷️</span>
                    {language === 'tr' 
                        ? 'Ürünleri görmek için yukarıdan bir marka seçin' 
                        : 'Select a brand above to see products'}
                </div>
            )}

            {/* Selected Products Summary */}
            {selectedNutrients.length > 0 && (
                <div style={{
                    padding: '1rem',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--radius-md)',
                    marginBottom: '2rem',
                    border: '1px solid var(--border-color)'
                }}>
                    <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        marginBottom: '0.5rem'
                    }}>
                        <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>
                            {t('selectedProducts') || 'Seçilen Ürünler'} ({selectedNutrients.length})
                        </span>
                        <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
                            {formatPrice(selectedNutrients.reduce((sum, item) => 
                                sum + ((item.price || 0) * (item.quantity || 1)), 0))}
                        </span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {selectedNutrients.map(item => (
                            <span 
                                key={item.id}
                                style={{
                                    padding: '0.25rem 0.5rem',
                                    background: 'var(--bg-card)',
                                    borderRadius: '4px',
                                    fontSize: '0.8rem',
                                    color: 'var(--text-secondary)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.25rem'
                                }}
                            >
                                {item.icon || '🧪'} {item.product_name || item.name}
                                {item.quantity > 1 && (
                                    <span style={{ 
                                        fontWeight: 'bold', 
                                        color: 'var(--color-primary)' 
                                    }}>x{item.quantity}</span>
                                )}
                                {item.selectedPackaging && (
                                    <span style={{ opacity: 0.7 }}>({item.selectedPackaging})</span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button
                    onClick={handleBack}
                    style={{
                        padding: '0.75rem 2rem',
                        background: 'transparent',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '1rem',
                        cursor: 'pointer'
                    }}
                >
                    ← {t('back')}
                </button>

                <button
                    onClick={handleNext}
                    style={{
                        padding: '0.75rem 2rem',
                        background: 'var(--color-primary)',
                        color: '#000',
                        fontWeight: 'bold',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        border: 'none',
                        boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.39)'
                    }}
                >
                    {t('next')} →
                </button>
            </div>
        </div>
    );
}
