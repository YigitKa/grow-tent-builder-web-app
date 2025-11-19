import { useBuilder } from '../context/BuilderContext';
import { useSettings } from '../context/SettingsContext';

const VENTILATION_OPTIONS = [
    { id: 'fan-4', name: '4" Inline Fan + Filter', type: 'Inline Fan', cfm: 200, watts: 30, price: 110 },
    { id: 'fan-6', name: '6" Inline Fan + Filter', type: 'Inline Fan', cfm: 400, watts: 50, price: 160 },
    { id: 'fan-8', name: '8" Inline Fan + Filter', type: 'Inline Fan', cfm: 750, watts: 110, price: 240 },
    { id: 'circ-6', name: '6" Clip-on Fan', type: 'Circulation', cfm: 150, watts: 15, price: 30 },
    { id: 'circ-osc', name: 'Oscillating Clip-on Fan', type: 'Circulation', cfm: 180, watts: 20, price: 50 },
];

export default function VentilationSelection() {
    const { state, dispatch } = useBuilder();
    const { t, formatPrice } = useSettings();
    const { totals, selectedItems } = state;
    const selectedVentilation = selectedItems.ventilation;

    const handleToggleItem = (item) => {
        const isSelected = selectedVentilation.find(i => i.id === item.id);
        if (isSelected) {
            dispatch({ type: 'REMOVE_ITEM', payload: { category: 'ventilation', itemId: item.id } });
        } else {
            dispatch({ type: 'ADD_ITEM', payload: { category: 'ventilation', item } });
        }
    };

    const handleNext = () => {
        dispatch({ type: 'NEXT_STEP' });
    };

    const handleBack = () => {
        dispatch({ type: 'PREV_STEP' });
    };

    const selectedFanCFM = selectedVentilation
        .filter(i => i.type === 'Inline Fan')
        .reduce((acc, i) => acc + i.cfm, 0);

    return (
        <div>
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{t('step3')}</h2>

            <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', background: 'var(--bg-card)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('reqCFM')}</div>
                    <div style={{ fontWeight: 'bold' }}>{totals.cfmRequired} CFM</div>
                </div>
                <div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('selFanPower')}</div>
                    <div style={{ fontWeight: 'bold', color: selectedFanCFM >= totals.cfmRequired ? 'var(--color-secondary)' : '#ff5252' }}>
                        {selectedFanCFM} CFM
                    </div>
                </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>{t('inlineFans')}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                    {VENTILATION_OPTIONS.filter(i => i.type === 'Inline Fan').map((item) => {
                        const isSelected = selectedVentilation.find(i => i.id === item.id);
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
                                    {item.cfm} CFM • {item.watts}W
                                </div>
                                <div style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{formatPrice(item.price)}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>{t('circFans')}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                    {VENTILATION_OPTIONS.filter(i => i.type === 'Circulation').map((item) => {
                        const isSelected = selectedVentilation.find(i => i.id === item.id);
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
                                    {item.cfm} CFM • {item.watts}W
                                </div>
                                <div style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>{formatPrice(item.price)}</div>
                            </div>
                        );
                    })}
                </div>
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
