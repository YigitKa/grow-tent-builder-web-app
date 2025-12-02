import { useBuilder } from '../context/BuilderContext';
import { useSettings } from '../context/SettingsContext';
import { MONITORING_PRODUCTS, TIMER_PRODUCTS } from '../data/builderProducts';

// Combine monitoring and timer products
const MONITORING_OPTIONS = [
    ...MONITORING_PRODUCTS.map(m => ({
        id: m.id,
        name: m.fullName || m.name,
        type: m.type || 'Sensor',
        price: m.price,
        description: m.features?.join(', ') || '',
        tier: m.tier
    })),
    ...TIMER_PRODUCTS.map(t => ({
        id: t.id,
        name: t.fullName || t.name,
        type: 'Timer',
        price: t.price,
        description: t.features?.join(', ') || '',
        tier: t.tier
    }))
];

export default function MonitoringSelection() {
    const { state, dispatch } = useBuilder();
    const { t, language, formatPrice } = useSettings();
    const selectedMonitoring = state.selectedItems.monitoring;

    const handleToggleItem = (item) => {
        const isSelected = selectedMonitoring.find(i => i.id === item.id);
        if (isSelected) {
            dispatch({ type: 'REMOVE_ITEM', payload: { category: 'monitoring', itemId: item.id } });
        } else {
            dispatch({ type: 'ADD_ITEM', payload: { category: 'monitoring', item } });
        }
    };

    const handleNext = () => {
        dispatch({ type: 'NEXT_STEP' });
    };

    const handleBack = () => {
        dispatch({ type: 'PREV_STEP' });
    };

    const totalSelectedPrice = selectedMonitoring.reduce((sum, m) => sum + (m.price * (m.quantity || 1)), 0);

    return (
        <div>
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{t('step6')}</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                {t('monitorDesc')}
            </p>

            {/* Show selected monitoring items */}
            {selectedMonitoring.length > 0 && (
                <div style={{
                    marginBottom: '2rem',
                    padding: '1rem 1.5rem',
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05))',
                    border: '2px solid var(--color-primary)',
                    borderRadius: 'var(--radius-md)',
                }}>
                    <div style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--color-primary)', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.75rem'
                    }}>
                        ✓ {language === 'tr' ? 'Seçili İzleme Ekipmanları' : 'Selected Monitoring Equipment'} ({selectedMonitoring.length})
                    </div>
                    {selectedMonitoring.map((item, idx) => (
                        <div key={item.id} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.5rem 0',
                            borderBottom: idx < selectedMonitoring.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none'
                        }}>
                            <span style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>
                                {item.quantity > 1 && `${item.quantity}x `}{item.name}
                            </span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
                                    {formatPrice(item.price * (item.quantity || 1))}
                                </span>
                                <button
                                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { category: 'monitoring', itemId: item.id } })}
                                    style={{
                                        background: 'rgba(255,82,82,0.2)',
                                        border: 'none',
                                        color: '#ff5252',
                                        padding: '0.25rem 0.5rem',
                                        borderRadius: 'var(--radius-sm)',
                                        cursor: 'pointer',
                                        fontSize: '0.75rem'
                                    }}
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                    ))}
                    <div style={{
                        marginTop: '0.75rem',
                        paddingTop: '0.75rem',
                        borderTop: '1px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        fontSize: '0.875rem'
                    }}>
                        <span style={{ fontWeight: 'bold', color: 'var(--color-primary)' }}>
                            {formatPrice(totalSelectedPrice)}
                        </span>
                    </div>
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {MONITORING_OPTIONS.map((item) => {
                    const isSelected = selectedMonitoring.find(i => i.id === item.id);
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
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                                <span style={{ fontWeight: 'bold' }}>{item.name}</span>
                                <span style={{ fontSize: '0.75rem', background: 'var(--bg-surface)', padding: '2px 6px', borderRadius: '4px' }}>{item.type}</span>
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
                        cursor: 'pointer'
                    }}
                >
                    {t('finish')} &rarr;
                </button>
            </div>
        </div>
    );
}
