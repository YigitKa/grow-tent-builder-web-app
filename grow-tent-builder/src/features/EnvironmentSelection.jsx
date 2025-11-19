import { useBuilder } from '../context/BuilderContext';
import { useSettings } from '../context/SettingsContext';

const ENVIRONMENT_OPTIONS = [
    { id: 'humid-4l', name: '4L Humidifier', type: 'Humidifier', watts: 30, price: 40, capacity: 'Small Tents' },
    { id: 'humid-6l', name: '6L Smart Humidifier', type: 'Humidifier', watts: 45, price: 70, capacity: 'Medium Tents' },
    { id: 'dehumid-30', name: '30 Pint Dehumidifier', type: 'Dehumidifier', watts: 280, price: 150, capacity: 'Up to 4x4' },
    { id: 'dehumid-50', name: '50 Pint Dehumidifier', type: 'Dehumidifier', watts: 450, price: 220, capacity: 'Large Rooms' },
    { id: 'heater-oil', name: 'Oil Radiator Heater', type: 'Heater', watts: 700, price: 60, capacity: 'Safe Heat' },
    { id: 'heater-ceramic', name: 'Ceramic Heater', type: 'Heater', watts: 1500, price: 40, capacity: 'Fast Heat' },
    { id: 'ac-portable', name: 'Portable AC (8000 BTU)', type: 'AC', watts: 900, price: 300, capacity: 'Cooling' },
];

export default function EnvironmentSelection() {
    const { state, dispatch } = useBuilder();
    const { t, formatPrice } = useSettings();
    const selectedEnvironment = state.selectedItems.environment;

    const handleToggleItem = (item) => {
        const isSelected = selectedEnvironment.find(i => i.id === item.id);
        if (isSelected) {
            dispatch({ type: 'REMOVE_ITEM', payload: { category: 'environment', itemId: item.id } });
        } else {
            dispatch({ type: 'ADD_ITEM', payload: { category: 'environment', item } });
        }
    };

    const handleNext = () => {
        dispatch({ type: 'NEXT_STEP' });
    };

    const handleBack = () => {
        dispatch({ type: 'PREV_STEP' });
    };

    const categories = ['Humidifier', 'Dehumidifier', 'Heater', 'AC'];

    return (
        <div>
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{t('step4')}</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                {t('envDesc')}
            </p>

            {categories.map(category => (
                <div key={category} style={{ marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                        {t(category.toLowerCase() + 's')}
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                        {ENVIRONMENT_OPTIONS.filter(i => i.type === category).map((item) => {
                            const isSelected = selectedEnvironment.find(i => i.id === item.id);
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
                                    <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>{item.name}</div>
                                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                                        {item.capacity} • {item.watts}W
                                    </div>
                                    <div style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{formatPrice(item.price)}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
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
