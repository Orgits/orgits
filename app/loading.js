'use client'

export default function loading() {
    return (
        <div className="loading-spinner" aria-label="Loading" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '200px',
        }}>
            <div style={{
                width: '40px',
                height: '40px',
                border: '3px solid var(--thm-border-color)',
                borderTopColor: 'var(--thm-primary)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
            }} />
            <style jsx>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    )
}