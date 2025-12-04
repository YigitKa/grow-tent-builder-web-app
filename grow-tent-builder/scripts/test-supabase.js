/**
 * Supabase Connection Test
 * Run with: node scripts/test-supabase.js
 */

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

console.log('🔍 Testing Supabase Connection...\n');
console.log('URL:', supabaseUrl ? '✅ Set' : '❌ Missing');
console.log('Key:', supabaseKey ? '✅ Set' : '❌ Missing');

if (!supabaseUrl || !supabaseKey) {
    console.log('\n❌ Missing environment variables!');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
    try {
        // Test basic connection
        const { data, error } = await supabase.from('_test_connection').select('*').limit(1);
        
        if (error && error.code === '42P01') {
            // Table doesn't exist - but connection works!
            console.log('\n✅ Supabase bağlantısı başarılı!');
            console.log('📝 Henüz tablo oluşturulmamış (normal)\n');
        } else if (error) {
            console.log('\n⚠️ Bağlantı var ama hata:', error.message);
        } else {
            console.log('\n✅ Supabase tamamen çalışıyor!');
        }

        // Check available tables
        const { data: tables, error: tableError } = await supabase
            .rpc('get_tables')
            .catch(() => ({ data: null, error: { message: 'RPC not available' } }));

        if (tables) {
            console.log('📊 Mevcut tablolar:', tables);
        }

    } catch (err) {
        console.log('\n❌ Bağlantı hatası:', err.message);
    }
}

testConnection();
