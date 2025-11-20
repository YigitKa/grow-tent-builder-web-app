import { useSettings, CURRENCIES, UNITS } from '../context/SettingsContext';
import { useState } from 'react';
import ElectricCostEstimator from './ElectricCostEstimator';

export default function SettingsBar() {
    const {
        language, setLanguage,
        currency, setCurrency,
        unitSystem, setUnitSystem
    } = useSettings();

    const [showEstimator, setShowEstimator] = useState(false);

    return (
        <div className="glass-header" style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: '0.75rem 0'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                flexWrap: 'wrap'
            }}>
                {/* Logo */}
                <div style={{
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    minWidth: 'fit-content'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>🌿</span> GrowBuilder
                </div>

                {/* Settings and Actions Container */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end'
                }}>
                    {/* Settings Group */}
                    <div className="settings-stack-mobile" style={{
                        display: 'flex',
                        gap: '0.5rem',
                        fontSize: '0.875rem',
                        alignItems: 'center'
                    }}>
                        {/* Language Toggle */}
                        <select
                            value={language}
                            onChange={(e) => setLanguage(e.target.value)}
                            className="modern-select"
                        >
                            <option value="en">🇺🇸 English</option>
                            <option value="tr">🇹🇷 Türkçe</option>
                        </select>

                        {/* Currency Toggle */}
                        <select
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            className="modern-select"
                        >
                            {Object.keys(CURRENCIES).map(c => (
                                <option key={c} value={c}>{CURRENCIES[c].symbol} {c}</option>
                            ))}
                        </select>

                        {/* Unit Toggle */}
                        <select
                            value={unitSystem}
                            onChange={(e) => setUnitSystem(e.target.value)}
                            className="modern-select"
                        >
                            <option value="IMPERIAL">📏 Imperial (ft)</option>
                            <option value="METRIC">📏 Metric (cm)</option>
                        </select>
                    </div>

                    {/* Cost Button */}
                    <button
                        onClick={() => setShowEstimator(s => !s)}
                        className="modern-select cost-button"
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        ⚡ Maliyet
                    </button>
                </div>
            </div>
            {showEstimator && (
                <div style={{ position: 'absolute', right: 16, top: 68, zIndex: 1100 }}>
                    <ElectricCostEstimator onClose={() => setShowEstimator(false)} />
                </div>
            )}
            <style>{`
                .modern-select {
                    background: rgba(255, 255, 255, 0.05);
                    color: var(--text-primary);
                    border: 1px solid var(--border-color);
                    border-radius: var(--radius-full);
                    padding: 0.5rem 1rem;
                    font-size: 0.875rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    outline: none;
                    white-space: nowrap;
                    line-height: 1.2;
                }
                .modern-select:hover, .modern-select:focus {
                    background: rgba(255, 255, 255, 0.1);
                    border-color: var(--color-primary);
                    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.1);
                }
                .cost-button {
                    background: rgba(16, 185, 129, 0.15);
                    border-color: var(--color-primary);
                }
                .cost-button:hover {
                    background: rgba(16, 185, 129, 0.25);
                    box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
                }
                
                /* Mobile specific fixes */
                @media (max-width: 768px) {
                    .glass-header .container {
                        justify-content: center !important;
                        text-align: center;
                    }
                    .glass-header {
                        padding: 0.5rem 0 !important;
                    }
                    .settings-stack-mobile {
                        flex-wrap: wrap !important;
                        gap: 0.35rem !important;
                        justify-content: center !important;
                    }
                    .modern-select {
                        padding: 0.4rem 0.75rem;
                        font-size: 0.75rem;
                    }
                }
                
                @media (max-width: 480px) {
                    .glass-header .container > div:first-child {
                        width: 100%;
                        justify-content: center;
                        margin-bottom: 0.5rem;
                    }
                }
            `}</style>
        </div>
    );
}
