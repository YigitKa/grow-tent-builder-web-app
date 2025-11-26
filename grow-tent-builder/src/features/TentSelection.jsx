import { useState } from 'react';
import { useBuilder } from '../context/BuilderContext';
import { useSettings } from '../context/SettingsContext';

const TENT_PRESETS = [
    { label: '2x2 (Small)', width: 2, depth: 2, height: 4 },
    { label: '2x4 (Compact)', width: 2, depth: 4, height: 5 },
    { label: '3x3 (Medium)', width: 3, depth: 3, height: 6 },
    { label: '4x4 (Standard)', width: 4, depth: 4, height: 7 },
    { label: '5x5 (Large)', width: 5, depth: 5, height: 7 },
    { label: '4x8 (X-Large)', width: 4, depth: 8, height: 7 },
];

export default function TentSelection() {
    const { state, dispatch } = useBuilder();
    const { t, unitSystem, formatUnit, getUnitLabel } = useSettings();
    const { tentSize } = state;

    const [custom, setCustom] = useState(false);
    // Use tentSize directly as the source of truth, with local state only for uncommitted custom dimensions
    const [customDims, setCustomDims] = useState({
        width: tentSize.width,
        depth: tentSize.depth,
        height: tentSize.height
    });

    const handlePresetClick = (preset) => {
        setCustom(false);
        dispatch({ type: 'SET_TENT_SIZE', payload: { width: preset.width, depth: preset.depth, height: preset.height, unit: 'ft' } });
    };

    const applyCustom = () => {
        // dims state is already stored in feet (converted in onChange handlers)
        // So we can directly dispatch without additional conversion
        dispatch({
            type: 'SET_TENT_SIZE',
            payload: {
                width: customDims.width,
                depth: customDims.depth,
                height: customDims.height,
                unit: 'ft'
            }
        });
    };

    const handleNext = () => {
        dispatch({ type: 'NEXT_STEP' });
    };

    const unitLabel = getUnitLabel('length');
    const areaLabel = getUnitLabel('area');
    const volLabel = getUnitLabel('volume');

    return (
        <div>
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{t('selectTent')}</h2>
            <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                {t('tentDesc')}
            </p>

            <div style={{
                marginBottom: '2rem',
                padding: '0.75rem 1rem',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)'
            }}>
                <strong style={{ color: 'var(--color-primary)' }}>ℹ️ {unitSystem === 'METRIC' ? 'Kısaltmalar' : 'Abbreviations'}:</strong>{' '}
                {unitSystem === 'METRIC'
                    ? 'G = Genişlik • D = Derinlik • Y = Yükseklik'
                    : 'W = Width • D = Depth • H = Height'
                }
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                {TENT_PRESETS.map((preset) => {
                    const isSelected = !custom &&
                        state.tentSize.width === preset.width &&
                        state.tentSize.depth === preset.depth;

                    const area = preset.width * preset.depth;
                    const volume = preset.width * preset.depth * preset.height;

                    return (
                        <button
                            key={preset.label}
                            onClick={() => handlePresetClick(preset)}
                            className="card-interactive"
                            style={{
                                padding: '1.5rem',
                                background: isSelected ? 'var(--bg-surface-hover)' : 'var(--bg-card)',
                                border: `2px solid ${isSelected ? 'var(--color-primary)' : 'var(--border-color)'}`,
                                borderRadius: 'var(--radius-md)',
                                cursor: 'pointer',
                                textAlign: 'left',
                                position: 'relative',
                                color: 'var(--text-primary)'
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <div style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    color: 'var(--text-primary)',
                                    marginBottom: '0.5rem'
                                }}>
                                    {unitSystem === 'METRIC'
                                        ? `G:${formatUnit(preset.width)} ${unitLabel} x D:${formatUnit(preset.depth)} ${unitLabel} x Y:${formatUnit(preset.height)} ${unitLabel}`
                                        : `W:${formatUnit(preset.width)} ${unitLabel} x D:${formatUnit(preset.depth)} ${unitLabel} x H:${formatUnit(preset.height)} ${unitLabel}`
                                    }
                                </div>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>{t('area')}:</span>
                                        <span style={{ fontWeight: '500' }}>{formatUnit(area, 'area')} {areaLabel}</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>{t('volume')}:</span>
                                        <span style={{ fontWeight: '500' }}>{formatUnit(volume, 'volume')} {volLabel}</span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>

            <div style={{ marginBottom: '2rem' }}>
                <button
                    onClick={() => setCustom(!custom)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-primary)',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        marginBottom: '1rem',
                        fontSize: '0.9rem'
                    }}
                >
                    {custom ? 'Hide Custom Dimensions' : t('customDim')}
                </button>

                {custom && (
                    <div className="fade-in glass-panel" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', padding: '1.5rem', borderRadius: 'var(--radius-md)' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('width')} ({unitLabel})</label>
                            <input
                                type="number"
                                name="width"
                                value={unitSystem === 'METRIC' ? (customDims.width * 30.48).toFixed(0) : customDims.width}
                                onChange={(e) => {
                                    const val = parseFloat(e.target.value) || 0;
                                    const ftValue = unitSystem === 'METRIC' ? val / 30.48 : val;
                                    setCustomDims(prev => ({ ...prev, width: ftValue }));
                                }}
                                style={inputStyle}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('depth')} ({unitLabel})</label>
                            <input
                                type="number"
                                name="depth"
                                value={unitSystem === 'METRIC' ? (customDims.depth * 30.48).toFixed(0) : customDims.depth}
                                onChange={(e) => {
                                    const val = parseFloat(e.target.value) || 0;
                                    const ftValue = unitSystem === 'METRIC' ? val / 30.48 : val;
                                    setCustomDims(prev => ({ ...prev, depth: ftValue }));
                                }}
                                style={inputStyle}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('height')} ({unitLabel})</label>
                            <input
                                type="number"
                                name="height"
                                value={unitSystem === 'METRIC' ? (customDims.height * 30.48).toFixed(0) : customDims.height}
                                onChange={(e) => {
                                    const val = parseFloat(e.target.value) || 0;
                                    const ftValue = unitSystem === 'METRIC' ? val / 30.48 : val;
                                    setCustomDims(prev => ({ ...prev, height: ftValue }));
                                }}
                                style={inputStyle}
                            />
                        </div>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <button
                                onClick={applyCustom}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    background: 'var(--bg-surface)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: 'var(--radius-sm)',
                                    cursor: 'pointer',
                                    fontSize: '0.875rem',
                                    color: 'var(--text-primary)',
                                    width: '100%'
                                }}
                            >
                                Apply Custom Dimensions
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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

const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    background: 'rgba(0, 0, 0, 0.2)',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    outline: 'none'
};
