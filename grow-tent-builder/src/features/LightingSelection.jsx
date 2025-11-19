import { useBuilder } from '../context/BuilderContext';
import { useSettings } from '../context/SettingsContext';

const LIGHT_OPTIONS = [
    { id: 'led-100', name: 'Quantum Board 100W LED', type: 'LED', watts: 100, price: 85, coverage: 4 }, // 2x2
    { id: 'led-240', name: 'Quantum Board 240W LED', type: 'LED', watts: 240, price: 180, coverage: 9 }, // 3x3
    { id: 'led-480', name: 'Bar Style 480W LED', type: 'LED', watts: 480, price: 420, coverage: 16 }, // 4x4
    { id: 'led-650', name: 'Bar Style 650W LED', type: 'LED', watts: 650, price: 600, coverage: 25 }, // 5x5
    { id: 'hps-600', name: '600W HPS Kit', type: 'HPS', watts: 600, price: 150, coverage: 16 },
    { id: 'hps-1000', name: '1000W DE HPS Kit', type: 'HPS', watts: 1000, price: 220, coverage: 25 },
];

export default function LightingSelection() {
    const { state, dispatch } = useBuilder();
    const { t, formatPrice, formatUnit, getUnitLabel } = useSettings();
    const { tentSize, selectedItems } = state;
    const selectedLights = selectedItems.lighting;

    const area = tentSize.width * tentSize.depth;
    const recommendedWatts = area * 30; // Rule of thumb: 30w per sq ft for LED

    const handleToggleItem = (item) => {
        const isSelected = selectedLights.find(i => i.id === item.id);
        if (isSelected) {
            dispatch({ type: 'REMOVE_ITEM', payload: { category: 'lighting', itemId: item.id } });
        } else {
            dispatch({ type: 'ADD_ITEM', payload: { category: 'lighting', item } });
        }
    };

    const handleNext = () => {
        dispatch({ type: 'NEXT_STEP' });
    };

    const handleBack = () => {
        dispatch({ type: 'PREV_STEP' });
    };

    const areaLabel = getUnitLabel('area');

    return (
        <div>
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{t('step2')}</h2>

            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('yourSpace')}</div>
                    <div style={{ fontWeight: 'bold' }}>{formatUnit(area, 'area')} {areaLabel}</div>
                </div>
                <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('recPower')}</div>
                    <div style={{ fontWeight: 'bold' }}>~{recommendedWatts}W (LED)</div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {LIGHT_OPTIONS.map((item) => {
                    const isSelected = selectedLights.find(i => i.id === item.id);
                    const isBestFit = Math.abs(item.coverage - area) < 5;

                    return (
                        <div
                            key={item.id}
                            onClick={() => handleToggleItem(item)}
                            style={{
                                padding: '1rem',
                                background: isSelected ? 'var(--bg-surface-hover)' : 'var(--bg-card)',
                                border: `2px solid ${isSelected ? 'var(--color-primary)' : 'var(--border-color)'}`,
                                borderRadius: 'var(--radius-md)',
                                cursor: 'pointer',
                                position: 'relative',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {isBestFit && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-10px',
                                    right: '10px',
                                    background: 'var(--color-primary)',
                                    color: '#000',
                                    fontSize: '0.75rem',
                                    padding: '2px 8px',
                                    borderRadius: '10px',
                                    fontWeight: 'bold'
                                }}>
                                    {t('bestFit')}
                                </div>
                            )}
                            <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{item.name}</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                {item.watts}W • {formatUnit(item.coverage, 'area')} {areaLabel} coverage
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
                        cursor: 'pointer'
                    }}
                >
                    {t('next')} &rarr;
                </button>
            </div>
        </div>
    );
}
