/**
 * Test Blog API
 * Run: node scripts/test-blog-api.js
 */

import { createClient } from '@supabase/supabase-js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function testBlogApi() {
    console.log('╔════════════════════════════════════════════╗');
    console.log('║         BLOG API TEST                      ║');
    console.log('╚════════════════════════════════════════════╝\n');

    // Test 1: Get all blog posts
    console.log('📚 Tüm blog yazılarını getiriliyor...\n');
    const { data: posts, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

    if (error) {
        console.error('❌ Hata:', error.message);
        return;
    }

    console.log(`✅ ${posts.length} blog yazısı bulundu:\n`);
    
    posts.forEach((post, i) => {
        console.log(`${i + 1}. ${post.title?.tr || post.title?.en}`);
        console.log(`   📁 Kategori: ${post.category}`);
        console.log(`   🏷️ Etiketler: ${post.tags?.join(', ')}`);
        console.log(`   ✍️ Yazar: ${post.author}`);
        console.log(`   📅 Tarih: ${new Date(post.published_at).toLocaleDateString('tr-TR')}`);
        console.log(`   🔗 Slug (TR): ${post.slug?.tr}`);
        console.log(`   🔗 Slug (EN): ${post.slug?.en}`);
        console.log('');
    });

    // Test 2: Get single post by slug
    console.log('─'.repeat(50));
    console.log('\n📄 Tek bir yazı getiriliyor (slug ile)...\n');
    
    const testSlug = posts[0]?.slug?.tr;
    if (testSlug) {
        const { data: singlePost, error: singleError } = await supabase
            .from('blog_posts')
            .select('*')
            .or(`slug->>tr.eq.${testSlug}`)
            .single();

        if (singleError) {
            console.log('⚠️ Slug araması hatası:', singleError.message);
        } else {
            console.log(`✅ Yazı bulundu: "${singlePost.title?.tr}"`);
            console.log(`   İçerik uzunluğu (TR): ${singlePost.content?.tr?.length || 0} karakter`);
            console.log(`   Quiz sorusu sayısı: ${singlePost.quiz?.length || 0}`);
        }
    }

    // Test 3: Get categories
    console.log('\n─'.repeat(50));
    console.log('\n📁 Kategoriler:\n');
    
    const categories = [...new Set(posts.map(p => p.category))];
    categories.forEach(cat => {
        const count = posts.filter(p => p.category === cat).length;
        console.log(`   • ${cat}: ${count} yazı`);
    });

    console.log('\n✅ Blog API testi tamamlandı!');
}

testBlogApi();
