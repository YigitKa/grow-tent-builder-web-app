import { useBuilder } from '../context/BuilderContext';
import { useSettings } from '../context/SettingsContext';

const MONITORING_OPTIONS = [
    { id: 'hygro', name: 'Digital Thermo-Hygrometer', type: 'Sensor', price: 15, description: 'Basic temp/humidity' },
    { id: 'smart-sensor', name: 'WiFi Smart Sensor', type: 'Sensor', price: 45, description: 'App connected logging' },
    { id: 'ph-pen', name: 'pH Pen Tester', type: 'Tester', price: 20, description: 'Essential for water checks' },
    { id: 'ec-pen', name: 'EC/TDS Meter', type: 'Tester', price: 15, description: 'Measure nutrient strength' },
    { id: 'timer-mech', name: 'Mechanical Timer', type: 'Controller', price: 10, description: 'Simple light control' },
    { id: 'timer-digital', name: 'Digital Timer Strip', type: 'Controller', price: 25, description: 'Programmable outlets' },
    { id: 'env-controller', name: 'Environmental Controller', type: 'Controller', price: 150, description: 'Auto fan/temp control' },
    { id: 'camera', name: 'WiFi Camera', type: 'Controller', price: 35, description: 'Monitor from anywhere' },
];

export default function MonitoringSelection() {
    const { state, dispatch } = useBuilder();
    const { t, formatPrice } = useSettings();
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

    return (
        <div>
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{t('step6')}</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                {t('monitorDesc')}
            </p>

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
