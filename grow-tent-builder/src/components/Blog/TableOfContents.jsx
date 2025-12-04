import React, { useState } from 'react';
import { useSettings } from '../../context/SettingsContext';
import styles from './BlogPost.module.css';

const TableOfContents = ({ headings, activeId }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { language } = useSettings();

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            // Offset for fixed navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setIsMobileOpen(false);
        }
    };

    if (!headings || headings.length === 0) return null;

    return (
        <nav className={styles.tocContainer}>
            <div className={styles.tocHeader} onClick={() => setIsMobileOpen(!isMobileOpen)}>
                <h3>
                    <span className={styles.icon}>📑</span>
                    {language === 'tr' ? 'İÇİNDEKİLER' : 'TABLE OF CONTENTS'}
                </h3>
                <span className={`${styles.mobileToggle} ${isMobileOpen ? styles.open : ''}`}>▼</span>
            </div>

            <ul className={`${styles.tocList} ${isMobileOpen ? styles.tocListOpen : ''}`}>
                {headings.map((heading) => (
                    <li key={heading.id} className={`${styles.tocItem} ${heading.level === 3 ? styles.tocItemLevel3 : ''}`}>
                        <a
                            href={`#${heading.id}`}
                            className={`${styles.tocLink} ${activeId === heading.id ? styles.tocLinkActive : ''}`}
                            onClick={(e) => handleClick(e, heading.id)}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
