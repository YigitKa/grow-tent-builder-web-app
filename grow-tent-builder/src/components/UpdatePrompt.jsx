import React, { useState } from 'react';
import { useSettings } from '../context/SettingsContext';
import styles from './UpdatePrompt.module.css';

const UpdatePrompt = ({ updateSW }) => {
    // Initialize to true since the component is only mounted when we want to show it
    const [show, setShow] = useState(true);
    const { language } = useSettings();

    const translations = {
        en: {
            title: '🎉 New Update Available!',
            message: 'A new version of GroWizard is ready. Update now for the latest features and improvements.',
            update: 'Update Now',
            later: 'Later'
        },
        tr: {
            title: '🎉 Yeni Güncelleme Mevcut!',
            message: 'GroWizard\'ın yeni bir versiyonu hazır. En son özellikler ve iyileştirmeler için şimdi güncelleyin.',
            update: 'Şimdi Güncelle',
            later: 'Sonra'
        }
    };

    const t = translations[language];

    const handleUpdate = () => {
        setShow(false);
        updateSW(true); // This will reload the page with new content
    };

    const handleLater = () => {
        setShow(false);
    };

    if (!show) return null;

    return (
        <>
            <div className={styles.updatePromptOverlay} onClick={handleLater} />
            <div className={styles.updatePrompt}>
                <div className={styles.updateIcon}>🚀</div>
                <h3>{t.title}</h3>
                <p>{t.message}</p>
                <div className={styles.updateActions}>
                    <button onClick={handleUpdate} className={styles.btnUpdate}>
                        {t.update}
                    </button>
                    <button onClick={handleLater} className={styles.btnLater}>
                        {t.later}
                    </button>
                </div>
            </div>
        </>
    );
};

export default UpdatePrompt;
