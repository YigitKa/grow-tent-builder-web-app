import React, { useState, useEffect } from 'react';
import { useSettings } from '../../context/SettingsContext';
import Navbar from '../Navbar';
import Footer from '../Footer';

const conversionData = {
    // Metric
    'cubic_km': { factor: 1e12, label: 'Kübik kilometre (km³)', category: 'Metric' },
    'cubic_m': { factor: 1000, label: 'Metreküp (m³)', category: 'Metric' },
    'hl': { factor: 100, label: 'Hektolitre (hl)', category: 'Metric' },
    'dal': { factor: 10, label: 'Dekalitre (dal)', category: 'Metric' },
    'l': { factor: 1, label: 'Litre (l)', category: 'Metric' }, // BASE UNIT
    'dl': { factor: 0.1, label: 'Desilitre (dl)', category: 'Metric' },
    'cl': { factor: 0.01, label: 'Centiliter (cl)', category: 'Metric' },
    'cubic_cm': { factor: 0.001, label: 'Santimetre küp (cm³)', category: 'Metric' },
    'ml': { factor: 0.001, label: 'Mililitre (ml)', category: 'Metric' },
    'cubic_mm': { factor: 1e-6, label: 'Kübik milimetre (mm³)', category: 'Metric' },
    'ul': { factor: 1e-6, label: 'Mikrolitre (µl)', category: 'Metric' },

    // Imperial (UK)
    'uk_barrel': { factor: 163.659, label: 'Barrel (UK)', category: 'Imperial' },
    'uk_bushel': { factor: 36.3687, label: 'Bushel (UK)', category: 'Imperial' },
    'uk_peck': { factor: 9.09218, label: 'Peck (UK)', category: 'Imperial' },
    'uk_gal': { factor: 4.54609, label: 'Galon (UK)', category: 'Imperial' },
    'uk_qt': { factor: 1.13652, label: 'Quart (UK)', category: 'Imperial' },
    'uk_pt': { factor: 0.568261, label: 'Pint (UK)', category: 'Imperial' },
    'uk_fl_oz': { factor: 0.0284131, label: 'Sıvı ons (UK oz)', category: 'Imperial' },

    // US Liquid
    'acre_foot': { factor: 1233480, label: 'Acre foot', category: 'US Liquid' },
    'cubic_yd': { factor: 764.555, label: 'Yard küp (yd³)', category: 'US Liquid' },
    'us_barrel': { factor: 119.24, label: 'Barrel (US)', category: 'US Liquid' },
    'cubic_ft': { factor: 28.3168, label: 'Foot küp (ft³)', category: 'US Liquid' },
    'us_gal': { factor: 3.78541, label: 'Galon (US)', category: 'US Liquid' },
    'us_qt': { factor: 0.946353, label: 'Quart (US)', category: 'US Liquid' },
    'us_pt': { factor: 0.473176, label: 'Pint (US)', category: 'US Liquid' },
    'us_gill': { factor: 0.118294, label: 'Gill (US)', category: 'US Liquid' },
    'us_fl_oz': { factor: 0.0295735, label: 'Sıvı ons (US oz)', category: 'US Liquid' },
    'cubic_in': { factor: 0.0163871, label: 'İnç küp (in³)', category: 'US Liquid' },
    'us_fl_dram': { factor: 0.00369669, label: 'Sıvı dram (US)', category: 'US Liquid' },
    'us_minim': { factor: 0.0000616115, label: 'Minim (US)', category: 'US Liquid' },

    // US Dry
    'us_dry_barrel': { factor: 115.627, label: 'Barrel (US Dry)', category: 'US Dry' },
    'us_dry_bushel': { factor: 35.2391, label: 'Bushel (US Dry)', category: 'US Dry' },
    'us_dry_peck': { factor: 8.80977, label: 'Peck (US Dry)', category: 'US Dry' },
    'us_dry_gal': { factor: 4.40488, label: 'Galon (US Dry)', category: 'US Dry' },
    'us_dry_qt': { factor: 1.10122, label: 'Quart (US Dry)', category: 'US Dry' },
    'us_dry_pt': { factor: 0.55061, label: 'Pint (US Dry)', category: 'US Dry' },
    'us_dry_gill': { factor: 0.137652, label: 'Gill (US Dry)', category: 'US Dry' },
    'board_foot': { factor: 2.35974, label: 'Board foot (FBM)', category: 'US Dry' },

    // Japanese
    'jp_koku': { factor: 180.39, label: 'Koku', category: 'Japanese' },
    'jp_to': { factor: 18.039, label: 'To', category: 'Japanese' },
    'jp_sho': { factor: 1.8039, label: 'Sho', category: 'Japanese' },
    'jp_go': { factor: 0.18039, label: 'Go', category: 'Japanese' },

    // Cooking (US)
    'us_cup': { factor: 0.236588, label: 'Cup (US)', category: 'Cooking (US)' },
    'us_tbsp': { factor: 0.0147868, label: 'Yemek kaşığı (US)', category: 'Cooking (US)' },
    'us_tsp': { factor: 0.00492892, label: 'Tatlı kaşığı (US)', category: 'Cooking (US)' },

    // Cooking (Metric)
    'metric_tbsp': { factor: 0.015, label: 'Yemek kaşığı (Metric)', category: 'Cooking (Metric)' },
    'metric_tsp': { factor: 0.005, label: 'Tatlı kaşığı (Metric)', category: 'Cooking (Metric)' },
    'metric_spice': { factor: 0.001, label: 'Baharat ölçüsü', category: 'Cooking (Metric)' },
};

const UnitConverter = () => {
    const { language } = useSettings();
    const [amount, setAmount] = useState(1);
    const [fromUnit, setFromUnit] = useState('l');
    const [toUnit, setToUnit] = useState('us_gal');
    const [result, setResult] = useState(0);

    useEffect(() => {
        const fromFactor = conversionData[fromUnit].factor;
        const toFactor = conversionData[toUnit].factor;
        // Convert to liters first, then to target unit
        const inLiters = amount * fromFactor;
        const finalResult = inLiters / toFactor;
        setResult(finalResult);
    }, [amount, fromUnit, toUnit]);

    const t = {
        en: {
            title: "Universal Unit Converter",
            subtitle: "Convert between Metric, Imperial, US, Japanese, and Cooking units",
            amount: "Amount",
            from: "From",
            to: "To",
            result: "Result",
            tableTitle: "Conversion Table (Reference to 1 Liter)"
        },
        tr: {
            title: "Evrensel Birim Dönüştürücü",
            subtitle: "Metrik, İngiliz, ABD, Japon ve Mutfak birimleri arasında dönüşüm yapın",
            amount: "Miktar",
            from: "Şuradan",
            to: "Şuna",
            result: "Sonuç",
            tableTitle: "Dönüşüm Tablosu (1 Litre Referans)"
        }
    }[language];

    // Group units by category for select dropdown
    const categories = [...new Set(Object.values(conversionData).map(u => u.category))];

    return (
        <div className="page-container">
            <Navbar />
            <div className="tool-content">
                <div className="tool-card">
                    <div className="tool-header">
                        <div className="tool-icon">🔄</div>
                        <h1>{t.title}</h1>
                        <p>{t.subtitle}</p>
                    </div>

                    <div className="converter-form">
                        <div className="input-group">
                            <label>{t.amount}</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                                className="amount-input"
                            />
                        </div>

                        <div className="conversion-row">
                            <div className="select-group">
                                <label>{t.from}</label>
                                <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                                    {categories.map(cat => (
                                        <optgroup key={cat} label={cat}>
                                            {Object.entries(conversionData)
                                                .filter(([_, data]) => data.category === cat)
                                                .map(([key, data]) => (
                                                    <option key={key} value={key}>{data.label}</option>
                                                ))}
                                        </optgroup>
                                    ))}
                                </select>
                            </div>

                            <div className="arrow-icon">➜</div>

                            <div className="select-group">
                                <label>{t.to}</label>
                                <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                                    {categories.map(cat => (
                                        <optgroup key={cat} label={cat}>
                                            {Object.entries(conversionData)
                                                .filter(([_, data]) => data.category === cat)
                                                .map(([key, data]) => (
                                                    <option key={key} value={key}>{data.label}</option>
                                                ))}
                                        </optgroup>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="result-display">
                            <span className="result-label">{t.result}:</span>
                            <span className="result-value">
                                {result < 0.0001 && result > 0 ? result.toExponential(4) : result.toLocaleString(undefined, { maximumFractionDigits: 6 })}
                            </span>
                            <span className="result-unit">{conversionData[toUnit].label}</span>
                        </div>
                    </div>
                </div>

                <div className="reference-table-container">
                    <h2>{t.tableTitle}</h2>
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Unit</th>
                                    <th>Liters (Approx)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(conversionData).map(([key, data]) => (
                                    <tr key={key}>
                                        <td>{data.category}</td>
                                        <td>{data.label}</td>
                                        <td>{data.factor.toExponential(2)} L</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />

            <style>{`
                .page-container {
                    min-height: 100vh;
                    background: #0a0a0a;
                    color: white;
                    display: flex;
                    flex-direction: column;
                }

                .tool-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 4rem 1rem;
                    gap: 4rem;
                }

                .tool-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1.5rem;
                    padding: 3rem;
                    max-width: 800px;
                    width: 100%;
                    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
                }

                .tool-header {
                    text-align: center;
                    margin-bottom: 2.5rem;
                }

                .tool-icon {
                    font-size: 3.5rem;
                    margin-bottom: 1rem;
                }

                .tool-header h1 {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .tool-header p {
                    color: #94a3b8;
                }

                .converter-form {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .amount-input {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    padding: 1rem;
                    border-radius: 0.75rem;
                    font-size: 1.5rem;
                    width: 100%;
                    text-align: center;
                }

                .conversion-row {
                    display: flex;
                    align-items: flex-end;
                    gap: 1rem;
                }

                .select-group {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                select {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    padding: 1rem;
                    border-radius: 0.75rem;
                    font-size: 1rem;
                    width: 100%;
                    cursor: pointer;
                }

                select option {
                    background: #1e293b;
                }

                .arrow-icon {
                    font-size: 1.5rem;
                    color: #94a3b8;
                    padding-bottom: 0.75rem;
                }

                .result-display {
                    background: rgba(168, 85, 247, 0.1);
                    border: 1px solid rgba(168, 85, 247, 0.2);
                    padding: 2rem;
                    border-radius: 1rem;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .result-label {
                    color: #a855f7;
                    font-size: 0.875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .result-value {
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: white;
                    word-break: break-all;
                }

                .result-unit {
                    color: #e2e8f0;
                    font-size: 1.1rem;
                }

                .reference-table-container {
                    width: 100%;
                    max-width: 800px;
                }

                .reference-table-container h2 {
                    color: white;
                    margin-bottom: 1.5rem;
                    font-size: 1.5rem;
                    text-align: center;
                }

                .table-wrapper {
                    overflow-x: auto;
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: 1rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    color: #cbd5e1;
                }

                th, td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
                }

                th {
                    background: rgba(255, 255, 255, 0.05);
                    color: #a855f7;
                    font-weight: 600;
                }

                tr:last-child td {
                    border-bottom: none;
                }

                tr:hover {
                    background: rgba(255, 255, 255, 0.02);
                }

                @media (max-width: 640px) {
                    .conversion-row {
                        flex-direction: column;
                        align-items: center;
                    }
                    .arrow-icon {
                        transform: rotate(90deg);
                        padding: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default UnitConverter;
