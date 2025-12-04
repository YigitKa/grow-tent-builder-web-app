/**
 * Auth Callback Component
 * Handles OAuth redirect from Supabase
 */

import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import supabase, { isSupabaseConfigured } from '../../services/supabase';
import { useSettings } from '../../context/SettingsContext';

export default function AuthCallback() {
    const navigate = useNavigate();
    const location = useLocation();
    const { language } = useSettings();
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('Processing...');

    useEffect(() => {
        const handleCallback = async () => {
            console.log('🔐 AuthCallback started');
            console.log('📍 Current URL:', window.location.href);
            console.log('🔍 Search params:', location.search);
            console.log('🔍 Hash:', location.hash);
            
            if (!isSupabaseConfigured()) {
                setError('Auth not configured');
                return;
            }

            try {
                // Check for error in URL params
                const params = new URLSearchParams(location.search);
                const hashParams = new URLSearchParams(location.hash.substring(1));
                
                const errorParam = params.get('error') || hashParams.get('error');
                const errorDescription = params.get('error_description') || hashParams.get('error_description');
                
                if (errorParam) {
                    console.error('❌ OAuth error:', errorParam, errorDescription);
                    setError(errorDescription || errorParam);
                    return;
                }

                // Check for code in URL (PKCE flow)
                const code = params.get('code');
                console.log('🔑 Code from URL:', code ? 'Present' : 'Not found');
                
                if (code) {
                    setStatus('Exchanging code for session...');
                    console.log('🔄 Exchanging code for session...');
                    
                    const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
                    
                    if (exchangeError) {
                        console.error('❌ Code exchange error:', exchangeError);
                        setError(exchangeError.message);
                        return;
                    }
                    
                    console.log('✅ Session obtained:', data.session ? 'Yes' : 'No');
                    console.log('👤 User:', data.session?.user?.email);
                    
                    if (data.session) {
                        setStatus('Success! Redirecting...');
                        setTimeout(() => {
                            navigate(`/${language}`, { replace: true });
                        }, 500);
                        return;
                    }
                }

                // Check hash for access_token (implicit flow)
                const accessToken = hashParams.get('access_token');
                if (accessToken) {
                    console.log('🔑 Access token found in hash');
                    setStatus('Setting session from token...');
                    
                    const { data, error: setError } = await supabase.auth.setSession({
                        access_token: accessToken,
                        refresh_token: hashParams.get('refresh_token') || ''
                    });
                    
                    if (!setError && data.session) {
                        console.log('✅ Session set from hash');
                        setTimeout(() => {
                            navigate(`/${language}`, { replace: true });
                        }, 500);
                        return;
                    }
                }

                // Fallback: Try to get existing session
                setStatus('Checking existing session...');
                const { data, error: sessionError } = await supabase.auth.getSession();
                
                console.log('📋 Existing session:', data.session ? 'Found' : 'Not found');
                
                if (sessionError) {
                    console.error('❌ Session error:', sessionError);
                    setError(sessionError.message);
                    return;
                }

                if (data.session) {
                    console.log('✅ Using existing session');
                    navigate(`/${language}`, { replace: true });
                } else {
                    console.log('⚠️ No session found, redirecting anyway');
                    navigate(`/${language}`, { replace: true });
                }
                
            } catch (err) {
                console.error('❌ Callback error:', err);
                setError(err.message);
            }
        };

        handleCallback();
    }, [navigate, language, location]);

    if (error) {
        return (
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100vh',
                gap: '1rem',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)'
            }}>
                <p style={{ color: '#ef4444' }}>❌ Authentication error: {error}</p>
                <button 
                    onClick={() => navigate(`/${language}`)}
                    style={{
                        padding: '0.5rem 1rem',
                        background: 'var(--color-primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    Go Home
                </button>
            </div>
        );
    }

    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh',
            background: 'var(--bg-primary)',
            color: 'var(--text-primary)'
        }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    border: '3px solid var(--border-color)', 
                    borderTop: '3px solid var(--color-primary)', 
                    borderRadius: '50%', 
                    animation: 'spin 1s linear infinite',
                    margin: '0 auto 1rem'
                }}></div>
                <p>{status}</p>
            </div>
        </div>
    );
}
            <div style={{ textAlign: 'center' }}>
                <div className="loading-spinner" style={{ 
                    width: '40px', 
                    height: '40px', 
                    border: '3px solid var(--border-color)', 
                    borderTop: '3px solid var(--color-primary)', 
                    borderRadius: '50%', 
                    animation: 'spin 1s linear infinite',
                    margin: '0 auto 1rem'
                }}></div>
                <p>{language === 'tr' ? 'Giriş yapılıyor...' : 'Signing in...'}</p>
            </div>
        </div>
    );
}
