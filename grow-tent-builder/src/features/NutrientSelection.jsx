import { useBuilder } from '../context/BuilderContext';
import { useSettings } from '../context/SettingsContext';

const NUTRIENT_OPTIONS = [
    // Soil Options
    { id: 'soil-kit', name: 'Organic Soil Starter Kit', type: 'Media', mediaType: 'soil', price: 45, description: 'Premium potting mix + amendments' },
    { id: 'nutes-soil-basic', name: 'Organic Nutrient Trio', type: 'Nutrients', mediaType: 'soil', price: 35, description: 'Grow, Bloom, and Micro for Soil' },

    // Coco Options
    { id: 'coco-kit', name: 'Coco Coir + Perlite Brick', type: 'Media', mediaType: 'coco', price: 35, description: '70/30 mix for high drainage' },
    { id: 'nutes-coco-ab', name: 'Coco A+B Nutrients', type: 'Nutrients', mediaType: 'coco', price: 40, description: 'Specific formula for Coco Coir' },
    { id: 'calmag', name: 'CalMag Supplement', type: 'Nutrients', mediaType: 'coco', price: 20, description: 'Essential for Coco grows' },

    // Hydro Options
    { id: 'dwc-bucket', name: 'DWC Hydro Bucket (Single)', type: 'System', mediaType: 'hydro', price: 40, description: 'Deep Water Culture system' },
    { id: 'rdwc-4', name: 'RDWC System (4 Site)', type: 'System', mediaType: 'hydro', price: 350, description: 'Recirculating Deep Water Culture' },
    { id: 'nutes-hydro-pro', name: 'Hydro Pro Series', type: 'Nutrients', mediaType: 'hydro', price: 85, description: 'Complete sterile nutrient line' },
    { id: 'hydroguard', name: 'Root Inoculant', type: 'Additives', mediaType: 'hydro', price: 30, description: 'Prevents root rot' },

    // Universal / Automated
    { id: 'autopot-2', name: 'AutoPot System (2 Pot)', type: 'System', mediaType: 'soil', price: 120, description: 'Gravity fed watering system' },
];

export default function NutrientSelection() {
    const { state, dispatch } = useBuilder();
    const { t, formatPrice } = useSettings();
    const { selectedItems, mediaType } = state;
    const selectedNutrients = selectedItems.nutrients;

    const handleToggleItem = (item) => {
        const isSelected = selectedNutrients.find(i => i.id === item.id);
        if (isSelected) {
            dispatch({ type: 'REMOVE_ITEM', payload: { category: 'nutrients', itemId: item.id } });
        } else {
            dispatch({ type: 'ADD_ITEM', payload: { category: 'nutrients', item } });
        }
    };

    const handleNext = () => {
        dispatch({ type: 'NEXT_STEP' });
    };

    const handleBack = () => {
        dispatch({ type: 'PREV_STEP' });
    };

    // Filter options based on global mediaType
    const filteredOptions = NUTRIENT_OPTIONS.filter(item => item.mediaType === mediaType || !item.mediaType);

    return (
        <div className="fade-in">
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{t('step6')}</h2>

            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                {t('nutesDesc')}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {filteredOptions.map((item) => {
                    const isSelected = selectedNutrients.find(i => i.id === item.id);
                    return (
                        <div
                            key={item.id}
                            onClick={() => handleToggleItem(item)}
                            className="card-interactive"
                            style={{
                                padding: '1rem',
                                background: isSelected ? 'var(--bg-surface-hover)' : 'var(--bg-card)',
                                border: `2px solid ${isSelected ? 'var(--color-primary)' : 'var(--border-color)'}`,
                                borderRadius: 'var(--radius-md)',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <span style={{ fontWeight: 'bold', color: isSelected ? 'var(--color-primary)' : 'var(--text-primary)' }}>{item.name}</span>
                                <span style={{ fontSize: '0.75rem', background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px', color: 'var(--text-muted)' }}>{item.type}</span>
                            </div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                {item.description}
                            </div>
                            <div style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{formatPrice(item.price)}</div>
                        </div>
                    );
                })}
            </div>

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
                    &larr; {t('back')}
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
                    {t('next')} &rarr;
                </button>
            </div>
        </div>
    );
}
