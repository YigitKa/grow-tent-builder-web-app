import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import styles from './Footer.module.css';

const Footer = () => {
  const { language, setLanguage, getBuilderUrl, t, getLocalizedPath } = useSettings();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageSwitch = (lang) => {
    if (lang === language) return;
    const currentPath = location.pathname.replace(/^\/(en|tr)/, '');
    navigate(`/${lang}${currentPath}`);
    setLanguage(lang);
  };

  return (
    <footer className={styles.landingFooter}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>🌱 GroWizard</div>
          <p>{t('footerRights')}</p>
        </div>

        <div className={styles.footerLinks}>
          <Link to={getLocalizedPath('/')}>{t('footerHome')}</Link>
          <Link to={getBuilderUrl()}>{t('footerBuilder')}</Link>
          <Link to={getLocalizedPath('/tools')}>{t('footerTools')}</Link>
          <Link to={getLocalizedPath('/blog')}>{t('footerBlog')}</Link>
        </div>

        <div className={styles.footerLangToggle}>
          <button
            onClick={() => handleLanguageSwitch('en')}
            className={language === 'en' ? styles.active : ''}
          >
            EN
          </button>
          <button
            onClick={() => handleLanguageSwitch('tr')}
            className={language === 'tr' ? styles.active : ''}
          >
            TR
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
