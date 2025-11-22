export default function SettingsBar() {
    return (
        <div className="glass-header no-print" style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: '0.75rem 0',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    fontWeight: '700',
                    fontSize: '1.25rem',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>🌿</span> GroWizard
                </div>
            </div >
        </div >
    );
}
