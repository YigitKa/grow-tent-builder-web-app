import React from 'react';
import { useSettings } from '../../context/SettingsContext';

export default function FAQSection() {
    const { t } = useSettings();

    const faqItems = [
        { q: t('landingFaqQ1'), a: t('landingFaqA1') },
        { q: t('landingFaqQ2'), a: t('landingFaqA2') },
        { q: t('landingFaqQ3'), a: t('landingFaqA3') },
        { q: t('landingFaqQ4'), a: t('landingFaqA4') },
        { q: t('landingFaqQ5'), a: t('landingFaqA5') },
        { q: t('landingFaqQ6'), a: t('landingFaqA6') },
        { q: t('landingFaqQ7'), a: t('landingFaqA7') },
        { q: t('landingFaqQ8'), a: t('landingFaqA8') },
        { q: t('landingFaqQ9'), a: t('landingFaqA9') }
    ];

    return (
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
    );
}
