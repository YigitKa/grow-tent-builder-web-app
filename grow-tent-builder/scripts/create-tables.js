/**
 * Create Supabase Tables
 * 
 * Bu script Supabase'de tabloları oluşturur.
 * Supabase Management API kullanarak SQL çalıştırır.
 * 
 * Alternatif olarak:
 * 1. Supabase Dashboard → SQL Editor
 * 2. scripts/supabase-schema.sql içeriğini yapıştır
 * 3. Run butonuna tıkla
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Supabase credentials not found in .env.local');
    process.exit(1);
}

console.log(`
╔════════════════════════════════════════════════════════════╗
║         SUPABASE TABLO OLUŞTURMA TALİMATLARI              ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  Supabase Dashboard üzerinden SQL çalıştırmalısın:         ║
║                                                            ║
║  1. Şu linke git:                                          ║
║     https://supabase.com/dashboard/project/                ║
║     liyjajmawgwrniywtyko/sql/new                           ║
║                                                            ║
║  2. scripts/supabase-schema.sql dosyasını aç               ║
║                                                            ║
║  3. Tüm içeriği kopyala ve SQL Editor'e yapıştır           ║
║                                                            ║
║  4. "Run" butonuna tıkla                                   ║
║                                                            ║
║  5. "Success. No rows returned" mesajını gör               ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
`);

// Show SQL file location
const sqlPath = join(__dirname, 'supabase-schema.sql');
console.log('📄 SQL Dosyası:', sqlPath);
console.log('');

// Test current connection and show existing tables
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkTables() {
    console.log('🔍 Mevcut tabloları kontrol ediyorum...\n');
    
    const tables = ['brands', 'categories', 'products', 'feeding_schedules', 'preset_sets', 'blog_posts'];
    
    for (const table of tables) {
        const { data, error } = await supabase.from(table).select('*').limit(1);
        
        if (error && error.code === '42P01') {
            console.log(`  ❌ ${table} - Tablo yok`);
        } else if (error) {
            console.log(`  ⚠️ ${table} - Hata: ${error.message}`);
        } else {
            console.log(`  ✅ ${table} - Mevcut (${data.length} kayıt örneği)`);
        }
    }
    
    console.log('\n');
}

checkTables();
