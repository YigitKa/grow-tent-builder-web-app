import React, { useState } from 'react';
import { useSettings } from '../../context/SettingsContext';
import Navbar from '../Navbar';
import Footer from '../Footer';

const CO2Calculator = () => {
    const { language } = useSettings();
    const [width, setWidth] = useState(120);
    const [length, setLength] = useState(120);
    const [height, setHeight] = useState(200);
    const [targetPPM, setTargetPPM] = useState(1200);
    const [fillTime, setFillTime] = useState(15); // Minutes

    // Volume in cubic meters
    const volumeM3 = (width * length * height) / 1000000;
    // Volume in cubic feet
    const volumeFt3 = volumeM3 * 35.3147;

    // Required CO2 in cubic feet to reach target from ambient (approx 400ppm)
    const ambientPPM = 400;
    const requiredPPM = Math.max(0, targetPPM - ambientPPM);
    const requiredCO2Ft3 = (volumeFt3 * requiredPPM) / 1000000;
    const requiredCO2Liters = requiredCO2Ft3 * 28.3168;

    // Flow rate estimation
    const flowRateCFM = requiredCO2Ft3 / fillTime;
    const flowRateLPM = requiredCO2Liters / fillTime;

    const t = {
        en: {
            title: "CO₂ Grow Room Calculator",
            subtitle: "Optimize your grow space with precise CO₂ calculations",
            dims: "Room Dimensions (cm)",
            target: "Target CO₂ Level (PPM)",
            fillTime: "Desired Fill Time (minutes)",
            volume: "Room Volume",
            required: "Required CO₂ Amount",
            flow: "Required Flow Rate",
            calculate: "Calculate",
            content: {
                introTitle: "How much CO₂ to add to a grow room?",
                introText: "Find out how much CO2 to add to a grow room with our CO2 grow room calculator! Read on to learn the optimum CO2 level for plant growth and how to calculate the CO2 flow rate of a tank to reach that level. But first, let's answer the most critical question: why would you add CO2 to a grow room?",
                introText2: "As you may or may not know, plants perform photosynthesis, transforming carbon dioxide, water, and sunlight into oxygen and compounds they use to grow. While we have plenty of CO2 in the atmosphere (around 420 ppm), adding more CO2 may be beneficial if you care about yield. However, adding CO2 alone won't do much. You also need to provide enough nutrients, water, and light. Even if you add plenty of CO2, the amount of light can be a limiting factor if it's not intense enough, and the CO2 will go to waste.",
                calcTitle: "How to use the CO₂ grow room calculator?",
                calcText: "To calculate the volume of CO2 for a grow tent, you need to know the following:",
                calcList: [
                    "The dimensions or volume of the room/tent",
                    "The current and desired CO2 levels in parts per million (ppm)"
                ],
                calcText2: "Then you can use the calculator above to find how much CO2 you need to add to your grow room.",
                faqTitle: "FAQs",
                faqs: [
                    { q: "What is the optimal CO2 level?", a: "For most plants, 1200-1500 PPM is considered optimal during the flowering stage with high light intensity." },
                    { q: "When should I add CO2?", a: "CO2 should only be added when the lights are ON. Plants do not use CO2 during the dark period." },
                    { q: "Do I need to seal my room?", a: "Yes, a sealed room is best to prevent CO2 from escaping. If using an exhaust fan, it should be timed or controlled to minimize waste." }
                ]
            }
        },
        tr: {
            title: "CO₂ Yetiştirme Odası Hesaplayıcı",
            subtitle: "Hassas CO₂ hesaplamalarıyla yetiştirme alanınızı optimize edin",
            dims: "Oda Boyutları (cm)",
            target: "Hedef CO₂ Seviyesi (PPM)",
            fillTime: "İstenen Dolum Süresi (dakika)",
            volume: "Oda Hacmi",
            required: "Gerekli CO₂ Miktarı",
            flow: "Gerekli Akış Hızı",
            calculate: "Hesapla",
            content: {
                introTitle: "Yetiştirme odasına ne kadar CO₂ eklenmeli?",
                introText: "CO2 yetiştirme odası hesaplayıcımızla yetiştirme odasına ne kadar CO2 ekleneceğini öğrenin! Bitki büyümesi için optimum CO2 seviyesini ve bu seviyeye ulaşmak için bir tankın CO2 akış hızını nasıl hesaplayacağınızı öğrenmek için okumaya devam edin. Ama önce en kritik soruyu cevaplayalım: neden bir yetiştirme odasına CO2 ekleyesiniz?",
                introText2: "Bildiğiniz veya bilmediğiniz gibi, bitkiler fotosentez yapar; karbondioksit, su ve güneş ışığını oksijene ve büyümek için kullandıkları bileşiklere dönüştürür. Atmosferde bol miktarda CO2 (yaklaşık 420 ppm) bulunsa da, verimi önemsiyorsanız daha fazla CO2 eklemek faydalı olabilir. Ancak, sadece CO2 eklemek pek bir işe yaramaz. Ayrıca yeterli besin, su ve ışık sağlamanız gerekir. Bol miktarda CO2 ekleseniz bile, ışık miktarı yeterince yoğun değilse sınırlayıcı bir faktör olabilir ve CO2 boşa gider.",
                calcTitle: "CO₂ yetiştirme odası hesaplayıcısı nasıl kullanılır?",
                calcText: "Bir yetiştirme çadırı için CO2 hacmini hesaplamak için aşağıdakileri bilmeniz gerekir:",
                calcList: [
                    "Odanın/çadırın boyutları veya hacmi",
                    "Milyonda parça (ppm) cinsinden mevcut ve istenen CO2 seviyeleri"
                ],
                calcText2: "Ardından, yetiştirme odanıza ne kadar CO2 eklemeniz gerektiğini bulmak için yukarıdaki hesaplayıcıyı kullanabilirsiniz.",
                faqTitle: "Sıkça Sorulan Sorular",
                faqs: [
                    { q: "Optimal CO2 seviyesi nedir?", a: "Çoğu bitki için, yüksek ışık yoğunluğuyla çiçeklenme döneminde 1200-1500 PPM optimal kabul edilir." },
                    { q: "Ne zaman CO2 eklemeliyim?", a: "CO2 sadece ışıklar AÇIKKEN eklenmelidir. Bitkiler karanlık dönemde CO2 kullanmazlar." },
                    { q: "Odamı yalıtmam gerekir mi?", a: "Evet, CO2'nin kaçmasını önlemek için yalıtılmış bir oda en iyisidir. Egzoz fanı kullanıyorsanız, israfı en aza indirmek için zamanlanmalı veya kontrol edilmelidir." }
                ]
            }
        }
    }[language];

    return (
        <div className="page-container">
            <Navbar />
            <div className="tool-content">
                <div className="tool-card">
                    <div className="tool-header">
                        <div className="tool-icon">🌫️</div>
                        <h1>{t.title}</h1>
                        <p>{t.subtitle}</p>
                    </div>

                    <div className="calculator-form">
                        <div className="section-label">{t.dims}</div>
                        <div className="dims-grid">
                            <div className="input-group">
                                <label>W (cm)</label>
                                <input
                                    type="number"
                                    value={width}
                                    onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                                />
                            </div>
                            <div className="input-group">
                                <label>L (cm)</label>
                                <input
                                    type="number"
                                    value={length}
                                    onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                                />
                            </div>
                            <div className="input-group">
                                <label>H (cm)</label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>{t.target}</label>
                            <div className="range-wrapper">
                                <input
                                    type="range"
                                    min="400"
                                    max="2000"
                                    step="50"
                                    value={targetPPM}
                                    onChange={(e) => setTargetPPM(parseFloat(e.target.value))}
                                    className="range-slider"
                                />
                                <span className="range-value">{targetPPM} PPM</span>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>{t.fillTime}</label>
                            <div className="range-wrapper">
                                <input
                                    type="range"
                                    min="1"
                                    max="60"
                                    step="1"
                                    value={fillTime}
                                    onChange={(e) => setFillTime(parseFloat(e.target.value))}
                                    className="range-slider"
                                />
                                <span className="range-value">{fillTime} min</span>
                            </div>
                        </div>

                        <div className="results-grid">
                            <div className="result-item">
                                <span className="label">{t.volume}</span>
                                <span className="value">{volumeM3.toFixed(2)} m³</span>
                                <span className="sub-value">({volumeFt3.toFixed(2)} ft³)</span>
                            </div>
                            <div className="result-item highlight">
                                <span className="label">{t.required}</span>
                                <span className="value">{requiredCO2Ft3.toFixed(4)} ft³</span>
                                <span className="sub-value">({requiredCO2Liters.toFixed(2)} L)</span>
                            </div>
                            <div className="result-item highlight-green">
                                <span className="label">{t.flow}</span>
                                <span className="value">{flowRateLPM.toFixed(2)} L/min</span>
                                <span className="sub-value">({flowRateCFM.toFixed(4)} CFM)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="info-section">
                    <h2>{t.content.introTitle}</h2>
                    <p>{t.content.introText}</p>
                    <p>{t.content.introText2}</p>

                    <h2>{t.content.calcTitle}</h2>
                    <p>{t.content.calcText}</p>
                    <ul>
                        {t.content.calcList.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <p>{t.content.calcText2}</p>

                    <h2>{t.content.faqTitle}</h2>
                    <div className="faq-list">
                        {t.content.faqs.map((faq, i) => (
                            <div key={i} className="faq-item">
                                <h3>{faq.q}</h3>
                                <p>{faq.a}</p>
                            </div>
                        ))}
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
                    padding: 4rem 1.5rem;
                    gap: 4rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                }

                .tool-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1.5rem;
                    padding: 3rem;
                    max-width: 600px;
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
                    background: linear-gradient(135deg, #94a3b8 0%, #e2e8f0 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .tool-header p {
                    color: #94a3b8;
                }

                .calculator-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .section-label {
                    color: #94a3b8;
                    font-size: 0.875rem;
                    font-weight: 600;
                    margin-bottom: -0.5rem;
                }

                .dims-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 1rem;
                }

                .input-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }

                .input-group label {
                    color: #94a3b8;
                    font-size: 0.875rem;
                    font-weight: 600;
                }

                .input-group input[type="number"] {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    padding: 0.75rem;
                    border-radius: 0.5rem;
                    font-size: 1.125rem;
                    width: 100%;
                    text-align: center;
                }

                .range-wrapper {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }

                .range-value {
                    min-width: 80px;
                    text-align: right;
                    font-variant-numeric: tabular-nums;
                    color: #e2e8f0;
                    font-weight: 600;
                }

                .range-slider {
                    flex: 1;
                    height: 6px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                    appearance: none;
                }

                .range-slider::-webkit-slider-thumb {
                    appearance: none;
                    width: 20px;
                    height: 20px;
                    background: #e2e8f0;
                    border-radius: 50%;
                    cursor: pointer;
                    border: 2px solid #0a0a0a;
                    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2);
                }

                .results-grid {
                    display: grid;
                    gap: 1rem;
                    margin-top: 1rem;
                }

                .result-item {
                    background: rgba(255, 255, 255, 0.03);
                    padding: 1.25rem;
                    border-radius: 1rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }

                .result-item.highlight {
                    background: rgba(59, 130, 246, 0.1);
                    border: 1px solid rgba(59, 130, 246, 0.3);
                }

                .result-item.highlight-green {
                    background: rgba(16, 185, 129, 0.1);
                    border: 1px solid rgba(16, 185, 129, 0.3);
                }

                .result-item .label {
                    font-size: 0.875rem;
                    color: #94a3b8;
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .result-item .value {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: white;
                    margin-bottom: 0.25rem;
                }

                .result-item .sub-value {
                    font-size: 0.9rem;
                    color: #64748b;
                }

                .info-section {
                    max-width: 800px;
                    width: 100%;
                    color: #cbd5e1;
                    line-height: 1.7;
                }

                .info-section h2 {
                    color: white;
                    font-size: 1.75rem;
                    margin: 3rem 0 1.5rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 0.5rem;
                }

                .info-section h2:first-child {
                    margin-top: 0;
                }

                .info-section p {
                    margin-bottom: 1.5rem;
                }

                .info-section ul {
                    margin-bottom: 1.5rem;
                    padding-left: 1.5rem;
                }

                .info-section li {
                    margin-bottom: 0.5rem;
                }

                .faq-list {
                    display: grid;
                    gap: 1.5rem;
                }

                .faq-item {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 1rem;
                    padding: 1.5rem;
                }

                .faq-item h3 {
                    color: #e2e8f0;
                    font-size: 1.1rem;
                    margin-bottom: 0.75rem;
                }

                .faq-item p {
                    margin-bottom: 0;
                    color: #94a3b8;
                }

                @media (max-width: 768px) {
                    .tool-content {
                        padding: 2rem 1rem;
                    }
                    
                    .tool-card {
                        padding: 1.5rem;
                    }

                    .dims-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default CO2Calculator;
