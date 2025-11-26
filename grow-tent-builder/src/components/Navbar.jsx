import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import styles from './Navbar.module.css';

const Navbar = () => {
    const { language, setLanguage, getBuilderUrl, t } = useSettings();
    const location = useLocation();
    const [isToolsOpen, setIsToolsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className={styles.navWrapper}>
                <div className={styles.navContainer}>
                    <Link to="/" className={styles.navLogo}>
                        🌱 <span className={styles.navLogoText}>GroWizard</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className={styles.navLinks}>
                        <Link
                            to="/"
                            className={`${styles.navLink} ${isActive('/') ? styles.navLinkActive : ''}`}
                        >
                            {t('navHome')}
                        </Link>

                        <div
                            className={styles.dropdownContainer}
                            onMouseEnter={() => setIsToolsOpen(true)}
                            onMouseLeave={() => setIsToolsOpen(false)}
                        >
                            <span
                                className={`${styles.navLink} ${location.pathname.includes('/tools') ? styles.navLinkActive : ''}`}
                            >
                                {t('navTools')} ▾
                            </span>
                            {isToolsOpen && (
                                <div className={styles.dropdownMenu}>
                                    <Link to="/tools/electricity-cost-calculator" className={styles.dropdownItem}>{t('navCostCalc')}</Link>
                                    <Link to="/tools/co2-calculator" className={styles.dropdownItem}>{t('navCo2Calc')}</Link>
                                    <Link to="/tools/unit-converter" className={styles.dropdownItem}>{t('navUnitConv')}</Link>
                                    <Link to="/tools/ppfd-heatmap" className={styles.dropdownItem}>{t('navPpfdTool')}</Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/blog"
                            className={`${styles.navLink} ${isActive('/blog') ? styles.navLinkActive : ''}`}
                        >
                            {t('navBlog')}
                        </Link>
                    </div>

                    <div className={styles.navRight}>
                        <button
                            onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}
                            className={styles.langBtn}
                        >
                            {language === 'en' ? 'TR' : 'EN'}
                        </button>
                        <Link
                            to={getBuilderUrl()}
                            className={styles.ctaButton}
                        >
                            {t('navBuilder')}
                        </Link>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className={styles.hamburger}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <Link
                            to="/"
                            className={`${styles.mobileLink} ${isActive('/') ? styles.mobileLinkActive : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('navHome')}
                        </Link>

                        <div>
                            <div className={styles.mobileLink} style={{ opacity: 0.7 }}>{t('navTools')}</div>
                            <div className={styles.mobileTools}>
                                <Link
                                    to="/tools/electricity-cost-calculator"
                                    className={styles.mobileLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {t('navCostCalc')}
                                </Link>
                                <Link
                                    to="/tools/co2-calculator"
                                    className={styles.mobileLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {t('navCo2Calc')}
                                </Link>
                                <Link
                                    to="/tools/unit-converter"
                                    className={styles.mobileLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {t('navUnitConv')}
                                </Link>
                                <Link
                                    to="/tools/ppfd-heatmap"
                                    className={styles.mobileLink}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {t('navPpfdTool')}
                                </Link>
                            </div>
                        </div>

                        <Link
                            to="/blog"
                            className={`${styles.mobileLink} ${isActive('/blog') ? styles.mobileLinkActive : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('navBlog')}
                        </Link>

                        <div className={styles.mobileActions}>
                            <button
                                onClick={() => {
                                    setLanguage(language === 'en' ? 'tr' : 'en');
                                    setIsMobileMenuOpen(false);
                                }}
                                className={styles.langBtn}
                            >
                                {language === 'en' ? t('switchToTr') : t('switchToEn')}
                            </button>
                            <Link
                                to={getBuilderUrl()}
                                className={styles.ctaButton}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t('navBuilder')}
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
