/**
 * Supabase Client Configuration
 * 
 * Environment variables are loaded from:
 * - .env.local (development)
 * - .env.production (production - set in Vercel/Netlify)
 * 
 * SECURITY NOTE:
 * - anon key is safe to expose (protected by RLS)
 * - NEVER expose service_role key in frontend
 */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
const isConfigured = supabaseUrl && supabaseAnonKey && 
    !supabaseUrl.includes('your-project-id') &&
    !supabaseAnonKey.includes('your-anon-key');

// Create client only if properly configured
export const supabase = isConfigured 
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true
        }
    })
    : null;

// Helper to check if Supabase is available
export const isSupabaseConfigured = () => !!supabase;

// Development warning
if (!isConfigured && import.meta.env.DEV) {
    console.warn(
        '⚠️ Supabase is not configured.\n' +
        'Copy .env.example to .env.local and add your Supabase credentials.\n' +
        'Get them from: https://supabase.com/dashboard/project/YOUR_PROJECT/settings/api'
    );
}

export default supabase;
