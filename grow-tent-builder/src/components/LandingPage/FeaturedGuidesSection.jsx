import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../../services/blogApi';
import { useSettings } from '../../context/SettingsContext';

export default function FeaturedGuidesSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { language, t, getLocalizedPath } = useSettings();
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            const posts = await getBlogPosts(language);
            setBlogPosts(posts);
            setLoading(false);
        }
        fetchPosts();
    }, [language]);

    if (loading || blogPosts.length === 0) {
        return null; // Don't show section while loading
    }

    const displayedPosts = blogPosts.slice(0, 4);
    const totalSlides = Math.ceil(displayedPosts.length / 2);

    return (
        <section className="featured-guides-section">
            <div className="section-header">
                <h2>🌟 {t('landingFeaturedGuides')}</h2>
                <p>{t('landingFeaturedGuidesSubtitle')}</p>
            </div>

            <div className="slider-container">
                <button
                    className="slider-btn prev"
                    onClick={() => setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1))}
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
                        {Array.from({ length: totalSlides }).map((_, groupIndex) => (
                            <div key={groupIndex} className="slider-slide">
                                {displayedPosts.slice(groupIndex * 2, groupIndex * 2 + 2).map((post) => (
                                    <Link to={getLocalizedPath(`/blog/${post.slug?.[language] || post.slug?.tr}`)} key={`featured-${post.id}`} className="featured-guide-card">
                                        <div className="guide-content">
                                            <span className="guide-tag">{post.category}</span>
                                            <h3>{post.title?.[language] || post.title?.tr}</h3>
                                            <p>{post.excerpt?.[language] || post.excerpt?.tr}</p>
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
                    onClick={() => setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1))}
                    aria-label="Next slide"
                >
                    →
                </button>
            </div>

            <div className="slider-dots">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={currentSlide === index ? 'true' : 'false'}
                    />
                ))}
            </div>
        </section>
    );
}
