import { useSettings } from '../context/SettingsContext';
import StatsBar from './StatsBar';
import ProgressTracker from './ProgressTracker';

export default function Layout({ children }) {
    const { t } = useSettings();

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'radial-gradient(circle at top center, #1e293b 0%, #0f172a 50%)' }}>
            <StatsBar />

            <main className="container" style={{ flex: 1, padding: '2rem 1rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <ProgressTracker />

                <div className="glass-panel slide-up" style={{
                    padding: '2.5rem',
                    borderRadius: 'var(--radius-lg)',
                    marginTop: '2rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative glow */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
                        pointerEvents: 'none',
                        zIndex: 0
                    }} />

                    <div style={{ position: 'relative', zIndex: 1 }}>
                        {children}
                    </div>
                </div>
            </main>

            <footer className="no-print" style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                <p>{t('footer')}</p>
            </footer>
        </div>
    );
}
