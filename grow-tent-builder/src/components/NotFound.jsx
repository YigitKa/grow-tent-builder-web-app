import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSettings } from '../context/SettingsContext';
import styles from './NotFound.module.css';

export default function NotFound() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const { t } = useSettings();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={styles.notFoundContainer}>
      <Helmet>
        <title>{t('notFoundTitle')} | GroWizard</title>
        <meta name="description" content={t('notFoundDescription')} />
      </Helmet>

      <div
        className={styles.flashlight}
        style={{
          background: `radial-gradient(circle 300px at ${mousePos.x}% ${mousePos.y}%, rgba(16, 185, 129, 0.15) 0%, rgba(0, 0, 0, 0.98) 100%)`
        }}
      />

      <div className={styles.content}>
        <div className={styles.icon}>🔦</div>
        <h1 className={styles.title}>{t('notFoundHeadline')}</h1>
        <p className={styles.subtitle}>{t('notFoundSubtext')}</p>
        <p className={styles.subText}>{t('notFoundMessage')}</p>

        <Link to="/" className={styles.homeBtn}>
          {t('notFoundButton')}
        </Link>
      </div>
    </div>
  );
}
