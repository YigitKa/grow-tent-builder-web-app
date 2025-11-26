import React, { useState } from 'react';
import styles from './PPFDInfoSection.module.css';

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
        <div className={styles.ppfdInfoSection}>
            <h2 className={styles.sectionTitle}>{t.title}</h2>

            {/* Intro Cards */}
            <div className={styles.infoGrid}>
                <div className={`${styles.glassPanel}`}>
                    <h3>{t.intro.title}</h3>
                    <p className={styles.bigText}>{t.intro.desc}</p>
                    <div className={styles.badge}>{t.intro.unit}</div>
                    <p className={styles.subText}>{t.intro.analogy}</p>
                </div>
                <div className={styles.glassPanel}>
                    <h3>{t.importance.title}</h3>
                    <p>{t.importance.desc}</p>
                    <ul className={styles.checkList}>
                        <li>{t.importance.uncontrolled}</li>
                        <li>{t.importance.controlled}</li>
                    </ul>
                    <p className={styles.quote}>"{t.importance.summary}"</p>
                </div>
            </div>

            {/* Comparison Table */}
            <div className={`${styles.comparisonSection} ${styles.glassPanel}`}>
                <h3>{t.comparison.title}</h3>
                <div className={styles.tableResponsive}>
                    <table className={styles.comparisonTable}>
                        <thead>
                            <tr>
                                {t.comparison.headers.map((h, i) => <th key={i}>{h}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {t.comparison.rows.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.feature}</td>
                                    <td className={styles.highlightCol}>{row.ppfd}</td>
                                    <td>{row.lux}</td>
                                    <td>{row.lumen}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className={styles.tableSummary}>{t.comparison.summary}</p>
            </div>

            {/* FAQ & Quiz Grid */}
            <div className={styles.interactiveGrid}>
                {/* FAQ */}
                <div className={`${styles.faqSection} ${styles.glassPanel}`}>
                    <h3>{t.faq.title}</h3>
                    <div className={styles.accordion}>
                        {t.faq.items.map((item, index) => (
                            <div key={index} className={`${styles.accordionItem} ${activeAccordion === index ? styles.accordionItemActive : ''}`}>
                                <button className={styles.accordionHeader} onClick={() => toggleAccordion(index)}>
                                    <span className="icon">{activeAccordion === index ? '−' : '+'}</span>
                                    {item.q}
                                </button>
                                <div className={styles.accordionContent}>
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quiz */}
                <div className={`${styles.quizSection} ${styles.glassPanel}`}>
                    <h3>{t.quiz.title}</h3>
                    <div className={styles.quizContent}>
                        {t.quiz.questions.map((q) => (
                            <div key={q.id}>
                                <p className={styles.questionText}>{q.id}. {q.q}</p>
                                <div className={styles.options}>
                                    {q.options.map((opt) => {

                                        return (
                                            <button
                                                key={opt.id}
                                                className={`${styles.optionBtn} ${quizSubmitted && opt.correct ? styles.optionBtnCorrect : ''} ${quizSubmitted && quizAnswers[q.id] === opt.id && !opt.correct ? styles.optionBtnWrong : ''} ${!quizSubmitted && quizAnswers[q.id] === opt.id ? styles.optionBtnSelected : ''}`}
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
                    <div className={styles.quizFooter}>
                        {!quizSubmitted ? (
                            <button
                                className={styles.submitBtn}
                                onClick={submitQuiz}
                                disabled={Object.keys(quizAnswers).length < t.quiz.questions.length}
                            >
                                {t.quiz.btnSubmit}
                            </button>
                        ) : (
                            <div className={styles.resultArea}>
                                <span className={styles.score}>{t.quiz.score} {calculateScore()} / {t.quiz.questions.length}</span>
                                <button className={styles.resetBtn} onClick={resetQuiz}>{t.quiz.btnReset}</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PPFDInfoSection;
