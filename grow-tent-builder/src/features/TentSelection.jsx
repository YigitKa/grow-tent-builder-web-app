import { useState, useEffect } from 'react';
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
    const [dims, setDims] = useState({
        width: tentSize.width,
        depth: tentSize.depth,
        height: tentSize.height
    });

    // Update local state when global state changes
    useEffect(() => {
        setDims({
            width: tentSize.width,
            depth: tentSize.depth,
            height: tentSize.height
        });
    }, [tentSize]);

    const handlePresetClick = (preset) => {
        setCustom(false);
        dispatch({ type: 'SET_TENT_SIZE', payload: { width: preset.width, depth: preset.depth, height: preset.height, unit: 'ft' } });
    };

    const handleCustomChange = (e) => {
        const { name, value } = e.target;
        setDims(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    };

    const applyCustom = () => {
        let width = dims.width;
        let depth = dims.depth;
        let height = dims.height;

        if (unitSystem === 'METRIC') {
            width = width / 30.48;
            depth = depth / 30.48;
            height = height / 30.48;
        }

        dispatch({ type: 'SET_TENT_SIZE', payload: { width, depth, height, unit: 'ft' } });
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
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                {t('tentDesc')}
            </p>

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
                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem', color: isSelected ? 'var(--color-primary)' : 'var(--text-primary)' }}>
                                {preset.label}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>{t('dimensions')}:</span>
                                    <span style={{ fontWeight: '500' }}>{formatUnit(preset.width)} x {formatUnit(preset.depth)} x {formatUnit(preset.height)} {unitLabel}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>{t('area')}:</span>
                                    <span style={{ fontWeight: '500' }}>{formatUnit(area, 'area')} {areaLabel}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>{t('volume')}:</span>
                                    <span style={{ fontWeight: '500' }}>{formatUnit(volume, 'volume')} {volLabel}</span>
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
                                value={unitSystem === 'METRIC' ? (dims.width * 30.48).toFixed(0) : dims.width}
                                onChange={(e) => setDims(prev => ({ ...prev, width: parseFloat(e.target.value) || 0 }))}
                                style={inputStyle}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('depth')} ({unitLabel})</label>
                            <input
                                type="number"
                                name="depth"
                                value={unitSystem === 'METRIC' ? (dims.depth * 30.48).toFixed(0) : dims.depth}
                                onChange={(e) => setDims(prev => ({ ...prev, depth: parseFloat(e.target.value) || 0 }))}
                                style={inputStyle}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{t('height')} ({unitLabel})</label>
                            <input
                                type="number"
                                name="height"
                                value={unitSystem === 'METRIC' ? (dims.height * 30.48).toFixed(0) : dims.height}
                                onChange={(e) => setDims(prev => ({ ...prev, height: parseFloat(e.target.value) || 0 }))}
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
