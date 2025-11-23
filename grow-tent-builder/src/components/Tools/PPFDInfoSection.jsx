import React, { useState } from 'react';

const PPFDInfoSection = ({ language }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const handleQuizSelect = (qId, optionId) => {
        if (quizSubmitted) return;
        setQuizAnswers(prev => ({ ...prev, [qId]: optionId }));
    };

    const submitQuiz = () => {
        setQuizSubmitted(true);
    };

    const resetQuiz = () => {
        setQuizAnswers({});
        setQuizSubmitted(false);
    };

    const t = {
        en: {
            title: "Understanding PPFD & Light Physics",
            intro: {
                title: "What is PPFD? 🌞",
                desc: "PPFD (Photosynthetic Photon Flux Density) measures the amount of light that actually helps your plants photosynthesize.",
                unit: "Unit: µmol/m²/s",
                analogy: "In simple terms: How many 'photosynthesis packets' land on a 1-meter square area every second? It's not about how bright it looks to humans (Lumen), but how nutritious it is for plants."
            },
            faq: {
                title: "🌿 PPFD FAQ",
                items: [
                    { q: "Is PPFD the same as PAR?", a: "No. PAR is the range of light (400-700nm) that plants use. PPFD is the measurement of how much light within that range actually hits the plant." },
                    { q: "What does PPFD affect?", a: "Growth speed, leaf size, flowering density, and overall yield." },
                    { q: "Is higher PPFD always better?", a: "No. Too much light causes stress, bleaching, and can actually stop photosynthesis if CO₂ levels aren't increased to match." },
                    { q: "Ideal PPFD for Seedlings?", a: "150 – 300 µmol/m²/s" },
                    { q: "Ideal PPFD for Vegetation?", a: "400 – 600 µmol/m²/s" },
                    { q: "Ideal PPFD for Flowering?", a: "600 – 1000 µmol/m²/s (1200-1500 with CO₂)" },
                    { q: "Difference between Lux and PPFD?", a: "Lux measures light for human eyes. PPFD measures light for plant metabolism." },
                    { q: "What happens with wrong PPFD?", a: "Too low: Stretching, weak stems, poor yield. Too high: Light burn, bleaching, nutrient lockout." },
                    { q: "Can I grow without measuring PPFD?", a: "Yes, but it's like driving a Ferrari blindfolded. You won't get the performance you paid for." },
                    { q: "Is PPFD important for house plants?", a: "Yes, but they generally require much lower levels (100–300)." }
                ]
            },
            importance: {
                title: "🌱 Why Control PPFD?",
                desc: "Controlling PPFD is like taking the steering wheel of photosynthesis.",
                uncontrolled: "❌ Uncontrolled: Plants stretch or burn, energy is wasted, yields are low.",
                controlled: "✅ Controlled: Balanced growth, strong roots, intense aroma, maximum yield.",
                summary: "PPFD is your plant's daily calorie counter. Too much sugar is bad, too little is starvation."
            },
            comparison: {
                title: "🌞 PPFD vs Lux vs Lumen",
                headers: ["Feature", "PPFD", "Lux", "Lumen"],
                rows: [
                    { feature: "Full Name", ppfd: "Photosynthetic Photon Flux Density", lux: "Illuminance", lumen: "Luminous Flux" },
                    { feature: "What it measures", ppfd: "Plant food (Photons)", lux: "Human brightness", lumen: "Total visible light" },
                    { feature: "Unit", ppfd: "µmol/m²/s", lux: "lx", lumen: "lm" },
                    { feature: "Target Audience", ppfd: "🌱 Plants", lux: "👁️ Human Eyes", lumen: "👁️ Human Eyes" },
                    { feature: "Photosynthesis Link", ppfd: "✅ Direct", lux: "❌ Indirect", lumen: "❌ Indirect" },
                    { feature: "Reliability for Grow", ppfd: "⭐⭐⭐⭐⭐", lux: "⭐⭐", lumen: "⭐" }
                ],
                summary: "PPFD = Real Food, Lux = Eye Comfort, Lumen = Marketing Fluff."
            },
            quiz: {
                title: "🎯 PPFD Mini Quiz",
                btnSubmit: "Check Answers",
                btnReset: "Try Again",
                score: "Your Score:",
                questions: [
                    {
                        id: 1,
                        q: "What does PPFD measure?",
                        options: [
                            { id: 'a', text: "Light Brightness" },
                            { id: 'b', text: "Photons for Photosynthesis", correct: true },
                            { id: 'c', text: "Electricity Usage" }
                        ]
                    },
                    {
                        id: 2,
                        q: "Ideal PPFD for Flowering?",
                        options: [
                            { id: 'a', text: "150" },
                            { id: 'b', text: "300" },
                            { id: 'c', text: "800", correct: true }
                        ]
                    },
                    {
                        id: 3,
                        q: "Effect of extremely high PPFD?",
                        options: [
                            { id: 'a', text: "Happy Plants" },
                            { id: 'b', text: "No Effect" },
                            { id: 'c', text: "Stress & Burn", correct: true }
                        ]
                    }
                ]
            }
        },
        tr: {
            title: "PPFD ve Işık Fiziğini Anlamak",
            intro: {
                title: "PPFD Nedir? 🌞",
                desc: "PPFD (Photosynthetic Photon Flux Density), bitkinin fotosentez yapabilmesi için aldığı ışık miktarını ifade eder.",
                unit: "Birim: µmol/m²/s",
                analogy: "Sade Türkçesiyle: 1 metrekare alana, 1 saniyede kaç adet 'fotosentez paketi' düşüyor? Işığın parlaklığından değil, bitkinin yiyebileceği ışık miktarından bahseder."
            },
            faq: {
                title: "🌿 PPFD Hakkında SSS",
                items: [
                    { q: "PPFD ile PAR aynı şey mi?", a: "Hayır. PAR ışık aralığıdır (400-700nm), PPFD ise o aralıkta bitkiye çarpan foton miktarıdır." },
                    { q: "PPFD neyi etkiler?", a: "Büyüme hızı, yaprak genişliği, çiçeklenme yoğunluğu ve toplam hasat miktarı." },
                    { q: "Yüksek PPFD her zaman iyi mi?", a: "Hayır. Fazlası stres, yanık ve CO₂ yetersizliğinde fotosentez durmasına yol açar." },
                    { q: "Fideler için ideal PPFD?", a: "150 – 300 µmol/m²/s" },
                    { q: "Vejetatif dönem için ideal PPFD?", a: "400 – 600 µmol/m²/s" },
                    { q: "Çiçeklenme dönemi için ideal PPFD?", a: "600 – 1000 µmol/m²/s (CO₂ ile 1200-1500)" },
                    { q: "PPFD ile Lüks arasındaki fark?", a: "Lüks insan gözüne, PPFD bitki metabolizmasına göre ölçüm yapar." },
                    { q: "Yanlış PPFD neye yol açar?", a: "Azı: Uzama, cılız gövde. Çoğu: Işık yanığı, renk açılması, besin kilitlenmesi." },
                    { q: "PPFD ölçmeden yetiştiricilik olur mu?", a: "Olur ama bu Ferrari’yi gözler kapalı kullanmak gibidir. Performans alamazsınız." },
                    { q: "Ev bitkilerinde PPFD önemli mi?", a: "Evet, ama genelde daha düşük aralıklar (100–300) yeterlidir." }
                ]
            },
            importance: {
                title: "🌱 Neden PPFD Kontrolü?",
                desc: "PPFD kontrolü = fotosentezin direksiyonunu eline almak.",
                uncontrolled: "❌ Kontrolsüz: Bitki ışığı arar veya kaçar, enerji boşa gider, verim düşer.",
                controlled: "✅ Kontrollü: Dengeli gelişim, güçlü kökler, yoğun aroma, maksimum hasat.",
                summary: "PPFD = bitkinin günlük kalori sayacı. Fazla şeker de zararlı, azı da."
            },
            comparison: {
                title: "🌞 PPFD vs Lux vs Lumen",
                headers: ["Özellik", "PPFD", "Lux", "Lumen"],
                rows: [
                    { feature: "Açılımı", ppfd: "Photosynthetic Photon Flux Density", lux: "Illuminance", lumen: "Luminous Flux" },
                    { feature: "Ne ölçer?", ppfd: "Bitki besini (Foton)", lux: "Göz parlaklığı", lumen: "Toplam görünür ışık" },
                    { feature: "Birim", ppfd: "µmol/m²/s", lux: "lx", lumen: "lm" },
                    { feature: "Kime hitap eder?", ppfd: "🌱 Bitkiler", lux: "👁️ İnsan Gözü", lumen: "👁️ İnsan Gözü" },
                    { feature: "Fotosentez İlişkisi", ppfd: "✅ Doğrudan", lux: "❌ Dolaylı", lumen: "❌ Dolaylı" },
                    { feature: "Güvenilirlik", ppfd: "⭐⭐⭐⭐⭐", lux: "⭐⭐", lumen: "⭐" }
                ],
                summary: "PPFD = Gerçek Besin, Lux = Göz Konforu, Lumen = Pazarlama Süsü."
            },
            quiz: {
                title: "🎯 PPFD Mini Test",
                btnSubmit: "Cevapları Kontrol Et",
                btnReset: "Tekrar Dene",
                score: "Puanınız:",
                questions: [
                    {
                        id: 1,
                        q: "PPFD neyi ölçer?",
                        options: [
                            { id: 'a', text: "Işığın Parlaklığını" },
                            { id: 'b', text: "Fotosentez Fotonlarını", correct: true },
                            { id: 'c', text: "Elektrik Tüketimini" }
                        ]
                    },
                    {
                        id: 2,
                        q: "Çiçeklenme döneminde ideal PPFD?",
                        options: [
                            { id: 'a', text: "150" },
                            { id: 'b', text: "300" },
                            { id: 'c', text: "800", correct: true }
                        ]
                    },
                    {
                        id: 3,
                        q: "Çok yüksek PPFD ne yapar?",
                        options: [
                            { id: 'a', text: "Bitkiyi mutlu eder" },
                            { id: 'b', text: "Hiç etkisi yoktur" },
                            { id: 'c', text: "Stres ve yanık oluşturur", correct: true }
                        ]
                    }
                ]
            }
        }
    }[language] || { en: {} }.en; // Fallback

    const calculateScore = () => {
        let score = 0;
        t.quiz.questions.forEach(q => {
            const selected = q.options.find(opt => opt.id === quizAnswers[q.id]);
            if (selected && selected.correct) score++;
        });
        return score;
    };

    return (
        <div className="ppfd-info-section">
            <h2 className="section-title">{t.title}</h2>

            {/* Intro Cards */}
            <div className="info-grid">
                <div className="info-card glass-panel highlight">
                    <h3>{t.intro.title}</h3>
                    <p className="big-text">{t.intro.desc}</p>
                    <div className="badge">{t.intro.unit}</div>
                    <p className="sub-text">{t.intro.analogy}</p>
                </div>
                <div className="info-card glass-panel">
                    <h3>{t.importance.title}</h3>
                    <p>{t.importance.desc}</p>
                    <ul className="check-list">
                        <li className="negative">{t.importance.uncontrolled}</li>
                        <li className="positive">{t.importance.controlled}</li>
                    </ul>
                    <p className="quote">"{t.importance.summary}"</p>
                </div>
            </div>

            {/* Comparison Table */}
            <div className="comparison-section glass-panel">
                <h3>{t.comparison.title}</h3>
                <div className="table-responsive">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                {t.comparison.headers.map((h, i) => <th key={i}>{h}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {t.comparison.rows.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.feature}</td>
                                    <td className="highlight-col">{row.ppfd}</td>
                                    <td>{row.lux}</td>
                                    <td>{row.lumen}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="table-summary">{t.comparison.summary}</p>
            </div>

            {/* FAQ & Quiz Grid */}
            <div className="interactive-grid">
                {/* FAQ */}
                <div className="faq-section glass-panel">
                    <h3>{t.faq.title}</h3>
                    <div className="accordion">
                        {t.faq.items.map((item, index) => (
                            <div key={index} className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}>
                                <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                                    <span className="icon">{activeAccordion === index ? '−' : '+'}</span>
                                    {item.q}
                                </button>
                                <div className="accordion-content">
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quiz */}
                <div className="quiz-section glass-panel">
                    <h3>{t.quiz.title}</h3>
                    <div className="quiz-content">
                        {t.quiz.questions.map((q) => (
                            <div key={q.id} className="quiz-question">
                                <p className="question-text">{q.id}. {q.q}</p>
                                <div className="options">
                                    {q.options.map((opt) => {
                                        let className = "option-btn";
                                        if (quizSubmitted) {
                                            if (opt.correct) className += " correct";
                                            else if (quizAnswers[q.id] === opt.id) className += " wrong";
                                        } else {
                                            if (quizAnswers[q.id] === opt.id) className += " selected";
                                        }

                                        return (
                                            <button
                                                key={opt.id}
                                                className={className}
                                                onClick={() => handleQuizSelect(q.id, opt.id)}
                                                disabled={quizSubmitted}
                                            >
                                                {opt.text}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="quiz-footer">
                        {!quizSubmitted ? (
                            <button
                                className="submit-btn"
                                onClick={submitQuiz}
                                disabled={Object.keys(quizAnswers).length < t.quiz.questions.length}
                            >
                                {t.quiz.btnSubmit}
                            </button>
                        ) : (
                            <div className="result-area">
                                <span className="score">{t.quiz.score} {calculateScore()} / {t.quiz.questions.length}</span>
                                <button className="reset-btn" onClick={resetQuiz}>{t.quiz.btnReset}</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                .ppfd-info-section {
                    margin-top: 4rem;
                    padding-top: 2rem;
                    border-top: 1px solid rgba(255,255,255,0.1);
                }
                .section-title {
                    text-align: center;
                    font-size: 2rem;
                    margin-bottom: 2rem;
                    background: linear-gradient(to right, #fff, #94a3b8);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .glass-panel {
                    background: rgba(30, 41, 59, 0.4);
                    backdrop-filter: blur(12px);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    padding: 1.5rem;
                }
                .info-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .info-card h3 { color: #10b981; margin-bottom: 1rem; font-size: 1.2rem; }
                .big-text { font-size: 1.1rem; line-height: 1.6; margin-bottom: 1rem; }
                .badge { 
                    display: inline-block; 
                    background: rgba(16, 185, 129, 0.2); 
                    color: #10b981; 
                    padding: 0.25rem 0.75rem; 
                    border-radius: 1rem; 
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
                .sub-text { color: #94a3b8; font-style: italic; }
                .check-list { list-style: none; padding: 0; margin-bottom: 1rem; }
                .check-list li { margin-bottom: 0.5rem; }
                .quote { border-left: 3px solid #10b981; padding-left: 1rem; color: #cbd5e1; font-style: italic; }

                .comparison-section { margin-bottom: 2rem; overflow: hidden; }
                .comparison-section h3 { color: #f59e0b; margin-bottom: 1rem; text-align: center; }
                .table-responsive { overflow-x: auto; }
                .comparison-table { width: 100%; border-collapse: collapse; min-width: 600px; }
                .comparison-table th, .comparison-table td { 
                    padding: 1rem; 
                    text-align: left; 
                    border-bottom: 1px solid rgba(255,255,255,0.05); 
                }
                .comparison-table th { color: #94a3b8; font-weight: 600; }
                .comparison-table td { color: #e2e8f0; }
                .highlight-col { background: rgba(16, 185, 129, 0.05); font-weight: 600; color: #10b981 !important; }
                .table-summary { text-align: center; margin-top: 1rem; font-weight: bold; color: #10b981; }

                .interactive-grid {
                    display: grid;
                    grid-template-columns: 1.5fr 1fr;
                    gap: 1.5rem;
                }
                .faq-section h3 { color: #3b82f6; margin-bottom: 1rem; }
                .accordion { display: flex; flex-direction: column; gap: 0.5rem; }
                .accordion-item { border: 1px solid rgba(255,255,255,0.05); border-radius: 0.5rem; overflow: hidden; transition: all 0.3s; }
                .accordion-item.active { background: rgba(255,255,255,0.03); border-color: rgba(59, 130, 246, 0.3); }
                .accordion-header {
                    width: 100%;
                    text-align: left;
                    padding: 1rem;
                    background: transparent;
                    border: none;
                    color: white;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-weight: 500;
                }
                .accordion-header .icon { color: #3b82f6; font-weight: bold; font-size: 1.2rem; width: 20px; }
                .accordion-content { 
                    max-height: 0; 
                    overflow: hidden; 
                    transition: max-height 0.3s ease-out; 
                    padding: 0 1rem; 
                    color: #94a3b8;
                }
                .accordion-item.active .accordion-content { max-height: 200px; padding-bottom: 1rem; }

                .quiz-section h3 { color: #ec4899; margin-bottom: 1rem; }
                .quiz-content { display: flex; flex-direction: column; gap: 1.5rem; }
                .question-text { font-weight: 600; margin-bottom: 0.5rem; }
                .options { display: flex; flex-direction: column; gap: 0.5rem; }
                .option-btn {
                    padding: 0.75rem;
                    background: rgba(0,0,0,0.2);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 0.5rem;
                    color: #cbd5e1;
                    cursor: pointer;
                    text-align: left;
                    transition: all 0.2s;
                }
                .option-btn:hover:not(:disabled) { background: rgba(255,255,255,0.05); }
                .option-btn.selected { border-color: #3b82f6; background: rgba(59, 130, 246, 0.1); color: white; }
                .option-btn.correct { border-color: #10b981; background: rgba(16, 185, 129, 0.2); color: white; }
                .option-btn.wrong { border-color: #ef4444; background: rgba(239, 68, 68, 0.2); opacity: 0.7; }
                
                .quiz-footer { margin-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1rem; }
                .submit-btn {
                    width: 100%;
                    padding: 0.75rem;
                    background: #ec4899;
                    border: none;
                    border-radius: 0.5rem;
                    color: white;
                    font-weight: bold;
                    cursor: pointer;
                    transition: opacity 0.2s;
                }
                .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
                .result-area { display: flex; justify-content: space-between; align-items: center; }
                .score { font-size: 1.2rem; font-weight: bold; color: #10b981; }
                .reset-btn { background: transparent; border: 1px solid #94a3b8; color: #94a3b8; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer; }
                .reset-btn:hover { border-color: white; color: white; }

                @media (max-width: 768px) {
                    .info-grid, .interactive-grid { grid-template-columns: 1fr; }
                    .comparison-table { font-size: 0.85rem; }
                }
            `}</style>
        </div>
    );
};

export default PPFDInfoSection;
