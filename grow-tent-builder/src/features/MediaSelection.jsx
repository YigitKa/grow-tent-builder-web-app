import { useBuilder } from '../context/BuilderContext';
import { useSettings } from '../context/SettingsContext';

const MEDIA_OPTIONS = [
    { id: 'soil', nameKey: 'mediaSoil', descKey: 'mediaSoilDesc', icon: '🌱' },
    { id: 'coco', nameKey: 'mediaCoco', descKey: 'mediaCocoDesc', icon: '🥥' },
    { id: 'hydro', nameKey: 'mediaHydro', descKey: 'mediaHydroDesc', icon: '💧' },
];

export default function MediaSelection() {
    const { state, dispatch } = useBuilder();
    const { t } = useSettings();
    const { mediaType } = state;

    const handleSelect = (id) => {
        dispatch({ type: 'SET_MEDIA_TYPE', payload: id });
    };

    const handleNext = () => {
        if (mediaType) {
            dispatch({ type: 'NEXT_STEP' });
        }
    };

    return (
        <div className="fade-in">
            <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{t('selectMedia')}</h2>
            <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                {t('mediaDesc')}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {MEDIA_OPTIONS.map(media => {
                    const isSelected = mediaType === media.id;
                    return (
                        <div
                            key={media.id}
                            onClick={() => handleSelect(media.id)}
                            className="card-interactive"
                            style={{
                                padding: '2rem',
                                background: isSelected ? 'var(--bg-surface-hover)' : 'var(--bg-card)',
                                border: `2px solid ${isSelected ? 'var(--color-primary)' : 'var(--border-color)'}`,
                                borderRadius: 'var(--radius-md)',
                                cursor: 'pointer',
                                textAlign: 'center',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                                {media.icon}
                            </div>
                            <h3 style={{ marginBottom: '0.5rem', color: isSelected ? 'var(--color-primary)' : 'var(--text-primary)' }}>
                                {t(media.nameKey)}
                            </h3>
                            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                                {t(media.descKey)}
                            </p>
                        </div>
                    );
                })}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button
                    onClick={handleNext}
                    disabled={!mediaType}
                    style={{
                        padding: '0.75rem 2rem',
                        background: mediaType ? 'var(--color-primary)' : 'var(--bg-surface)',
                        color: mediaType ? '#000' : 'var(--text-muted)',
                        fontWeight: 'bold',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '1rem',
                        cursor: mediaType ? 'pointer' : 'not-allowed',
                        border: 'none',
                        boxShadow: mediaType ? '0 4px 14px 0 rgba(16, 185, 129, 0.39)' : 'none',
                        transition: 'all 0.2s ease'
                    }}
                >
                    {t('next')} &rarr;
                </button>
            </div>
        </div>
    );
}
