import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { useOnboarding } from '../context/OnboardingContext';
import { blogPosts } from './Blog/blogData';
import { useSettings } from '../context/SettingsContext';
import Footer from './Footer';
import Navbar from './Navbar';

export default function LandingPage() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    // scrollY is intentionally unused in this component but kept for future effects
    const [, setScrollY] = useState(0);
    const { hasSeenOnboarding } = useOnboarding();
    const { language, getBuilderUrl, t } = useSettings();
    const navigate = useNavigate();

    const infoBoxItems = [
        { icon: "💡", titleKey: 'landingInfoLight', descKey: 'landingInfoLightDesc' },
        { icon: "🌬️", titleKey: 'landingInfoAir', descKey: 'landingInfoAirDesc' },
        { icon: "🌡️", titleKey: 'landingInfoHumidity', descKey: 'landingInfoHumidityDesc' }
    ];

    const faqItems = language === 'en' ? [
        { q: "Why do plants need light?", a: "To perform photosynthesis." },
        { q: "Why is photosynthesis important?", a: "Plants produce their food this way." },
        { q: "Which plants are suitable for indoor growing?", a: "Herbs, vegetables, flowers." },
        { q: "What happens if I don't install a fan in my grow tent?", a: "Temperature rises, mold forms." },
        { q: "How many hours of light per day during vegetative stage?", a: "16 hours is generally sufficient." },
        { q: "How many hours of light per day during flowering stage?", a: "12 hours is generally sufficient." },
        { q: "Why LED lights?", a: "Efficient, cool, and long-lasting." },
        { q: "How long does germination typically take?", a: "Usually 3 to 10 days." },
        { q: "What should humidity be in the tent during vegetative stage?", a: "50–70% is ideal." }
    ] : [
        { q: "Bitkiler neden yapay ışığa ihtiyaç duyar?", a: "Bitkiler büyümek, gelişmek ve enerji üretmek için fotosentez yapar. İç mekan yetiştiriciliğinde doğal güneş ışığı yeterli olmadığından yapay aydınlatma (özellikle LED grow ışıkları) kullanılır." },
        { q: "Fotosentez neden bitki sağlığı için kritiktir?", a: "Fotosentez, bitkilerin su ve karbondioksiti güneş (veya yapay) ışığı ile şekere dönüştürmesini sağlar. Bu süreç, bitkinin enerji kaynağını oluşturur ve sağlıklı gelişimi mümkün kılar." },
        { q: "İç mekanda hangi bitki türleri yetiştirilebilir?", a: "Aromatik otlar (fesleğen, nane), yapraklı sebzeler (marul, ıspanak) ve bazı çiçekli türler (orkide, sardunya) iç mekan yetiştiriciliğine uygundur. Bu bitkiler sınırlı alanda, kontrollü iklim şartlarında iyi sonuç verir." },
        { q: "Fan olmayan yetiştirme kabininde ne olur?", a: "Fan kullanılmayan kabinlerde hava dolaşımı olmaz, bu da sıcaklık artışına ve nem birikmesine neden olur. Sonuç olarak mantar oluşumu, küf ve bitki hastalıkları riski yükselir." },
        { q: "Büyüme döneminde bitkiye günde kaç saat ışık verilmeli?", a: "Büyüme (vejetatif) aşamasında çoğu bitki 16–18 saatlik ışık süresine ihtiyaç duyar. Bu süre, yaprak gelişimini ve sağlıklı gövde oluşumunu destekler." },
        { q: "Çiçeklenme döneminde ışık süresi ne olmalı?", a: "Çiçeklenme döneminde fotoperiyodik bitkiler için 12 saat ışık, 12 saat karanlık döngüsü uygulanmalıdır. Bu denge, çiçek ve meyve oluşumunu teşvik eder." },
        { q: "LED grow ışıklarının avantajı nedir?", a: "LED bitki lambaları, düşük enerji tüketimi, uzun ömür ve minimal ısı yayımı ile ideal iç mekan aydınlatması sunar. Ayrıca, bitki evresine uygun tam spektrum ışık sağlayabilir." },
        { q: "Tohumlar çimlenme döneminde kaç günde filizlenir?", a: "Çimlenme süresi bitki türüne bağlı olmakla birlikte genellikle 3 ila 10 gün arasında tamamlanır. Bu dönemde nemli ortam ve sabit sıcaklık sağlanmalıdır." },
        { q: "Büyüme döneminde çadır içi nem oranı ne olmalı?", a: "Vejetatif büyüme aşamasında ideal nem oranı %50 ila %70 aralığındadır. Bu nem seviyesi, yaprakların su kaybını dengeleyerek hızlı gelişimi destekler." }
    ];

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: (e.clientX / window.innerWidth) - 0.5, y: (e.clientY / window.innerHeight) - 0.5 });
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleStartBuilding = () => {
        navigate(getBuilderUrl());
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="landing-container">
            <Helmet>
                <title>{t('landingTitle')} | GroWizard</title>
                <meta name="description" content={t('landingSubtitle')} />
            </Helmet>
            <div className="landing-bg">
                <div className="glow-orb orb-1" style={{
                    transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`
                }} />
                <div className="glow-orb orb-2" style={{
                    transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`
                }} />
                <div className="grid-overlay" />
            </div>

            <Navbar />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content fade-in-up">
                    <div className="badge">{t('landingBadge')}</div>
                    <h1 className="hero-title">
                        {t('landingTitle').split(' ').slice(0, 2).join(' ')} <br />
                        <span className="gradient-text">{t('landingTitle').split(' ').slice(2).join(' ')}</span>
                    </h1>
                    <p className="hero-subtitle">
                        {t('landingSubtitle')}
                    </p>
                    <button onClick={handleStartBuilding} className="cta-button">
                        {t('landingCta')}
                        <span className="arrow">→</span>
                    </button>
                </div>

                {/* 3D-like Visual Representation */}
                <div className="hero-visual" style={{
                    transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${mousePos.y * -5}deg)`
                }}>
                    <div className="tent-frame">
                        <div className="plant-icon">🌿</div>
                        <div className="light-beam" />
                    </div>
                </div>
            </section>

            {/* Tools Preview Section */}
            <section className="tools-preview-section">
                <div className="section-header">
                    <h2>🛠️ {t('landingGrowTools')}</h2>
                    <p>{t('landingGrowToolsSubtitle')}</p>
                </div>
                <div className="tools-grid">
                    <Link to="/tools/cost-calculator" className="tool-preview-card">
                        <div className="tool-icon">⚡</div>
                        <h3>{t('landingCostCalculator')}</h3>
                        <p>{t('landingCostCalculatorDesc')}</p>
                    </Link>
                    <Link to="/tools/unit-converter" className="tool-preview-card">
                        <div className="tool-icon">💧</div>
                        <h3>{t('landingUnitConverter')}</h3>
                        <p>{t('landingUnitConverterDesc')}</p>
                    </Link>
                    <Link to="/tools/co2-calculator" className="tool-preview-card">
                        <div className="tool-icon">🌫️</div>
                        <h3>{t('landingCo2Calculator')}</h3>
                        <p>{t('landingCo2CalculatorDesc')}</p>
                    </Link>
                </div>
                <div className="center-btn">
                    <Link to="/tools" className="secondary-btn">
                        {t('landingViewAllTools')}
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="feature-card slide-in" style={{ transitionDelay: '0.1s' }}>
                    <div className="feature-icon">💡</div>
                    <h3>{t('landingPpfdTitle')}</h3>
                    <p>{t('landingPpfdDesc')}</p>
                </div>
                <div className="feature-card slide-in" style={{ transitionDelay: '0.3s' }}>
                    <div className="feature-icon">🌬️</div>
                    <h3>{t('landingEnvTitle')}</h3>
                    <p>{t('landingEnvDesc')}</p>
                </div>
            </section>

            {/* Info Boxes Section */}
            <section className="info-boxes-section">
                <div className="info-boxes-header">
                    <h2>⚠️ {t('landingInfoTitle')}</h2>
                    <p>{t('landingInfoSubtitle')}</p>
                </div>
                <div className="info-boxes-container">
                    {infoBoxItems.map((item, index) => (
                        <div
                            key={index}
                            className="info-box"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="info-box-icon">{item.icon}</div>
                            <div className="info-box-content">
                                <h3>{t(item.titleKey)}</h3>
                                <p>{t(item.descKey)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Guides Section (Slider) */}
            <section className="featured-guides-section">
                <div className="section-header">
                    <h2>🌟 {t('landingFeaturedGuides')}</h2>
                    <p>{t('landingFeaturedGuidesSubtitle')}</p>
                </div>

                <div className="slider-container">
                    <button
                        className="slider-btn prev"
                        onClick={() => setCurrentSlide(prev => (prev === 0 ? Math.ceil(blogPosts.length / 2) - 1 : prev - 1))}
                    >
                        ←
                    </button>

                    <div className="slider-track-container">
                        <div
                            className="slider-track"
                            style={{
                                transform: `translateX(-${currentSlide * 100}%)`
                            }}
                        >
                            {/* Group posts into pairs for the slider */}
                            {Array.from({ length: Math.ceil(blogPosts.slice(0, 4).length / 2) }).map((_, groupIndex) => (
                                <div key={groupIndex} className="slider-slide">
                                    {blogPosts.slice(0, 4).slice(groupIndex * 2, groupIndex * 2 + 2).map((post) => (
                                        <Link to={`/blog/${post.slug[language]}`} key={`featured-${post.id}`} className="featured-guide-card">
                                            <div className="guide-content">
                                                <span className="guide-tag">{post.category}</span>
                                                <h3>{post.title[language]}</h3>
                                                <p>{post.excerpt[language]}</p>
                                                <span className="read-more">{t('landingReadMore')}</span>
                                            </div>
                                            <div className="guide-image" style={{ backgroundImage: `url(${post.image})` }} />
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className="slider-btn next"
                        onClick={() => setCurrentSlide(prev => (prev === Math.ceil(blogPosts.slice(0, 4).length / 2) - 1 ? 0 : prev + 1))}
                    >
                        →
                    </button>
                </div>

                <div className="slider-dots">
                    {Array.from({ length: Math.ceil(blogPosts.slice(0, 4).length / 2) }).map((_, index) => (
                        <button
                            key={index}
                            className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </section>

            {/* Cost Calculator Tool */}
            <section className="cost-tool-section">
                <div className="cost-tool-container">
                    <div className="cost-tool-header">
                        <h2>⚡ {t('landingCostToolTitle')}</h2>
                        <p>{t('landingCostToolSubtitle')}</p>
                    </div>
                    <div className="cost-tool-inputs">
                        <div className="input-group">
                            <label>{t('landingCostToolPower')}</label>
                            <input
                                type="number"
                                id="power-input"
                                placeholder="300"
                                defaultValue="300"
                            />
                        </div>
                        <div className="input-group">
                            <label>{t('landingCostToolHours')}</label>
                            <input
                                type="number"
                                id="hours-input"
                                placeholder="18"
                                defaultValue="18"
                            />
                        </div>
                        <div className="input-group">
                            <label>{t('landingCostToolRate')}</label>
                            <input
                                type="number"
                                step="0.01"
                                id="rate-input"
                                placeholder="0.12"
                                defaultValue="0.12"
                            />
                        </div>
                    </div>
                    <button
                        className="calc-button"
                        onClick={() => {
                            const power = parseFloat(document.getElementById('power-input').value) || 0;
                            const hours = parseFloat(document.getElementById('hours-input').value) || 0;
                            const rate = parseFloat(document.getElementById('rate-input').value) || 0;
                            const monthlyCost = (power / 1000) * hours * 30 * rate;
                            document.getElementById('cost-result').textContent =
                                `${t('landingCostToolResult')}: ${language === 'tr' ? '₺' : '$'}${monthlyCost.toFixed(2)}`;
                        }}
                    >
                        {t('landingCostToolCalculate')}
                    </button>
                    <div className="cost-result" id="cost-result">
                        {t('landingCostToolResult')}: {language === 'tr' ? '₺' : '$'}0.00
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq-section">
                <div className="section-header">
                    <h2>❓ {t('landingFaqTitle')}</h2>
                    <p>{t('landingFaqSubtitle')}</p>
                </div>
                <div className="faq-grid">
                    {faqItems.map((item, index) => (
                        <div key={index} className="faq-item">
                            <h3>{item.q}</h3>
                            <p>{item.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Blog Preview Section */}
            <section className="blog-preview-section">
                <div className="blog-preview-header">
                    <h2>📚 {t('landingLatestArticles')}</h2>
                    <p>{t('landingLatestArticlesSubtitle')}</p>
                </div>
                <div className="blog-preview-grid">
                    {blogPosts.slice(0, 3).map((post) => (
                        <Link to={`/blog/${post.slug[language]}`} key={post.id} className="blog-preview-card">
                            <div className="preview-image" style={{ backgroundImage: `url(${post.image})` }} />
                            <div className="preview-content">
                                <span className="preview-tag">{post.category}</span>
                                <h3>{post.title[language]}</h3>
                                <div className="preview-meta">
                                    <span>{post.readTime}</span>
                                    <span className="arrow">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="blog-cta">
                    <Link to="/blog" className="view-all-btn">
                        {t('landingViewAllArticles')}
                    </Link>
                </div>
            </section>

            <Footer />

            {/* Scroll to Top Button */}
            <button
                className={`scroll-to-top ${showScrollTop ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                ↑
            </button>

            <style>{`
                .landing-container {
                    min-height: 100vh;
                    background: #0a0a0a;
                    color: white;
                    overflow-x: hidden;
                    position: relative;
                }

                /* Footer Styles */
                .landing-footer {
                    background: rgba(15, 23, 42, 0.95);
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 2rem 10%;
                    position: relative;
                    z-index: 10;
                }

                .footer-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .footer-info p {
                    color: #94a3b8;
                    font-size: 0.875rem;
                }

                .footer-lang-toggle {
                    display: flex;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.05);
                    padding: 0.25rem;
                    border-radius: 0.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                }

                .footer-lang-toggle button {
                    background: transparent;
                    border: none;
                    color: #94a3b8;
                    padding: 0.4rem 0.75rem;
                    border-radius: 0.375rem;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 0.875rem;
                    transition: all 0.2s ease;
                }

                .footer-lang-toggle button.active {
                    background: #10b981;
                    color: white;
                }

                .footer-lang-toggle button:hover:not(.active) {
                    background: rgba(255, 255, 255, 0.05);
                    color: white;
                }

                .landing-bg {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    pointer-events: none;
                }

                .glow-orb {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(80px);
                    opacity: 0.4;
                    transition: transform 0.1s ease-out;
                }

                .orb-1 {
                    width: 400px;
                    height: 400px;
                    background: #10b981;
                    top: -100px;
                    right: -100px;
                }

                .orb-2 {
                    width: 300px;
                    height: 300px;
                    background: #3b82f6;
                    bottom: -50px;
                    left: -50px;
                }

                .grid-overlay {
                    position: absolute;
                    inset: 0;
                    background-image: 
                        linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                    background-size: 50px 50px;
                    mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
                }

                .hero-section {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 10%;
                    position: relative;
                    z-index: 1;
                }

                .hero-content {
                    max-width: 600px;
                }

                .badge {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    background: rgba(16, 185, 129, 0.1);
                    border: 1px solid rgba(16, 185, 129, 0.2);
                    border-radius: 999px;
                    color: #10b981;
                    font-weight: 600;
                    font-size: 0.875rem;
                    margin-bottom: 1.5rem;
                }

                .hero-title {
                    font-size: 4.5rem;
                    line-height: 1.1;
                    font-weight: 800;
                    margin-bottom: 1.5rem;
                    letter-spacing: -0.02em;
                }

                .gradient-text {
                    background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .hero-subtitle {
                    font-size: 1.25rem;
                    color: #94a3b8;
                    margin-bottom: 2.5rem;
                    line-height: 1.6;
                }

                .cta-button {
                    padding: 1rem 2rem;
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: #000;
                    background: #10b981;
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .cta-button:hover {
                    background: #059669;
                    transform: translateY(-2px);
                }

                .hero-visual {
                    position: relative;
                    width: 500px;
                    height: 500px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .tent-frame {
                    width: 300px;
                    height: 400px;
                    border: 4px solid rgba(16, 185, 129, 0.3);
                    position: relative;
                    transform-style: preserve-3d;
                    animation: float 6s ease-in-out infinite;
                }

                .plant-icon {
                    font-size: 5rem;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.5));
                }

                .light-beam {
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 200px;
                    height: 300px;
                    background: linear-gradient(to bottom, rgba(16, 185, 129, 0.2), transparent);
                    clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
                }

                .tools-preview-section, .features-section, .info-boxes-section, .featured-guides-section, .cost-tool-section, .faq-section, .blog-preview-section {
                    padding: 5rem 10%;
                    position: relative;
                    z-index: 1;
                }

                .section-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .section-header h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #f8fafc;
                }

                .section-header p {
                    color: #94a3b8;
                    font-size: 1.1rem;
                }

                .tools-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .tool-preview-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    padding: 2rem;
                    text-align: center;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    color: inherit;
                }

                .tool-preview-card:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.05);
                    border-color: rgba(16, 185, 129, 0.3);
                }

                .tool-icon {
                    font-size: 3rem;
                    margin-bottom: 1rem;
                }

                .tool-preview-card h3 {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                    color: #f8fafc;
                }

                .tool-preview-card p {
                    color: #94a3b8;
                    font-size: 0.9rem;
                }

                .center-btn {
                    text-align: center;
                }

                .secondary-btn {
                    display: inline-block;
                    padding: 0.75rem 1.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    color: white;
                    text-decoration: none;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }

                .secondary-btn:hover {
                    background: rgba(255, 255, 255, 0.2);
                }

                .features-section {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .feature-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    padding: 2rem;
                    transition: all 0.3s ease;
                }

                .feature-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(16, 185, 129, 0.3);
                }

                .feature-icon {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }

                .feature-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                    color: #f8fafc;
                }

                .feature-card p {
                    color: #94a3b8;
                    line-height: 1.6;
                }

                .info-boxes-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .info-boxes-header h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #f8fafc;
                }

                .info-boxes-header p {
                    color: #94a3b8;
                    font-size: 1.1rem;
                }

                .info-boxes-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .info-box {
                    background: rgba(16, 185, 129, 0.05);
                    border: 1px solid rgba(16, 185, 129, 0.1);
                    border-radius: 1rem;
                    padding: 2rem;
                    display: flex;
                    align-items: flex-start;
                    gap: 1.5rem;
                    transition: all 0.3s ease;
                    animation: fadeIn 0.5s ease-out forwards;
                    opacity: 0;
                }

                .info-box:hover {
                    transform: translateY(-5px);
                    background: rgba(16, 185, 129, 0.1);
                    border-color: rgba(16, 185, 129, 0.3);
                    box-shadow: 0 10px 30px -10px rgba(16, 185, 129, 0.2);
                }

                .info-box-icon {
                    font-size: 2.5rem;
                    background: rgba(16, 185, 129, 0.1);
                    width: 60px;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    flex-shrink: 0;
                }

                .info-box-content h3 {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                    color: #10b981;
                }

                .info-box-content p {
                    color: #cbd5e1;
                    font-size: 0.95rem;
                    line-height: 1.5;
                }

                .slider-container {
                    position: relative;
                    max-width: 1200px;
                    margin: 0 auto;
                    overflow: hidden;
                }

                .slider-track-container {
                    overflow: hidden;
                    margin: 0 3rem;
                }

                .slider-track {
                    display: flex;
                    transition: transform 0.5s ease-in-out;
                }

                .slider-slide {
                    min-width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    padding: 0 1rem;
                }

                .featured-guide-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    overflow: hidden;
                    text-decoration: none;
                    color: inherit;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    transition: all 0.3s ease;
                }

                .featured-guide-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(16, 185, 129, 0.3);
                }

                .guide-image {
                    height: 200px;
                    background-size: cover;
                    background-position: center;
                }

                .guide-content {
                    padding: 1.5rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .guide-tag {
                    display: inline-block;
                    padding: 0.25rem 0.75rem;
                    background: rgba(16, 185, 129, 0.1);
                    color: #10b981;
                    border-radius: 999px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                    align-self: flex-start;
                }

                .guide-content h3 {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                    color: #f8fafc;
                }

                .guide-content p {
                    color: #94a3b8;
                    font-size: 0.9rem;
                    margin-bottom: 1.5rem;
                    flex: 1;
                }

                .read-more {
                    color: #10b981;
                    font-weight: 600;
                    font-size: 0.9rem;
                }

                .slider-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(16, 185, 129, 0.1);
                    border: 1px solid rgba(16, 185, 129, 0.2);
                    color: #10b981;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.25rem;
                    transition: all 0.2s ease;
                    z-index: 2;
                }

                .slider-btn:hover {
                    background: rgba(16, 185, 129, 0.2);
                    transform: translateY(-50%) scale(1.1);
                }

                .slider-btn.prev { left: 0; }
                .slider-btn.next { right: 0; }

                .slider-dots {
                    display: flex;
                    justify-content: center;
                    gap: 0.5rem;
                    margin-top: 2rem;
                }

                .slider-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    border: none;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .slider-dot.active {
                    background: #10b981;
                    transform: scale(1.2);
                }

                .cost-tool-container {
                    background: rgba(16, 185, 129, 0.05);
                    border: 1px solid rgba(16, 185, 129, 0.1);
                    border-radius: 1.5rem;
                    padding: 3rem;
                    max-width: 800px;
                    margin: 0 auto;
                    text-align: center;
                }

                .cost-tool-header h2 {
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    color: #f8fafc;
                }

                .cost-tool-header p {
                    color: #94a3b8;
                    margin-bottom: 2rem;
                }

                .cost-tool-inputs {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .input-group {
                    text-align: left;
                }

                .input-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: #94a3b8;
                    font-size: 0.9rem;
                }

                .input-group input {
                    width: 100%;
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.5rem;
                    padding: 0.75rem;
                    color: white;
                    font-size: 1rem;
                }

                .calc-button {
                    background: #10b981;
                    color: black;
                    border: none;
                    padding: 1rem 3rem;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    font-size: 1.1rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    margin-bottom: 1.5rem;
                }

                .calc-button:hover {
                    background: #059669;
                    transform: translateY(-2px);
                }

                .cost-result {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #10b981;
                }

                .faq-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }

                .faq-item {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    padding: 1.5rem;
                }

                .faq-item h3 {
                    color: #10b981;
                    font-size: 1.1rem;
                    margin-bottom: 0.5rem;
                }

                .faq-item p {
                    color: #94a3b8;
                    font-size: 0.95rem;
                    line-height: 1.5;
                }

                .blog-preview-header {
                    text-align: center;
                    margin-bottom: 3rem;
                }

                .blog-preview-header h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #f8fafc;
                }

                .blog-preview-header p {
                    color: #94a3b8;
                    font-size: 1.1rem;
                }

                .blog-preview-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-bottom: 3rem;
                }

                .blog-preview-card {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 1rem;
                    overflow: hidden;
                    text-decoration: none;
                    color: inherit;
                    transition: all 0.3s ease;
                }

                .blog-preview-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(16, 185, 129, 0.3);
                }

                .preview-image {
                    height: 200px;
                    background-size: cover;
                    background-position: center;
                }

                .preview-content {
                    padding: 1.5rem;
                }

                .preview-tag {
                    display: inline-block;
                    padding: 0.25rem 0.75rem;
                    background: rgba(16, 185, 129, 0.1);
                    color: #10b981;
                    border-radius: 999px;
                    font-size: 0.75rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .preview-content h3 {
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                    color: #f8fafc;
                    line-height: 1.4;
                }

                .preview-meta {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #94a3b8;
                    font-size: 0.9rem;
                }

                .blog-cta {
                    text-align: center;
                }

                .view-all-btn {
                    display: inline-block;
                    padding: 1rem 2rem;
                    background: transparent;
                    border: 1px solid #10b981;
                    color: #10b981;
                    text-decoration: none;
                    border-radius: 0.5rem;
                    font-weight: 600;
                    transition: all 0.2s ease;
                }

                .view-all-btn:hover {
                    background: rgba(16, 185, 129, 0.1);
                    transform: translateY(-2px);
                }

                .scroll-to-top {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: rgba(16, 185, 129, 0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(16, 185, 129, 0.3);
                    color: #10b981;
                    font-size: 24px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(20px);
                    transition: all 0.3s ease;
                    z-index: 1000;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
                }

                .scroll-to-top.visible {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .scroll-to-top:hover {
                    background: rgba(16, 185, 129, 0.4);
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.3);
                }

                @media (max-width: 768px) {
                    .hero-title {
                        font-size: 3rem;
                    }

                    .hero-section {
                        flex-direction: column;
                        text-align: center;
                        padding-top: 100px;
                    }

                    .hero-content {
                        margin-bottom: 3rem;
                    }

                    .hero-visual {
                        width: 100%;
                        height: 300px;
                    }

                    .tent-frame {
                        width: 200px;
                        height: 280px;
                    }

                    .slider-slide {
                        grid-template-columns: 1fr;
                    }

                    .scroll-to-top {
                        bottom: 20px;
                        right: 20px;
                        width: 40px;
                        height: 40px;
                        font-size: 20px;
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0) rotateY(0); }
                    50% { transform: translateY(-20px) rotateY(5deg); }
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .fade-in-up {
                    animation: fadeIn 1s ease-out forwards;
                }

                .slide-in {
                    opacity: 0;
                    animation: fadeIn 0.8s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
