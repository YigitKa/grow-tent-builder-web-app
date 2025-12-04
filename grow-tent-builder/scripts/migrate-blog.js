/**
 * Migrate Blog Posts to Supabase
 * Run: node scripts/migrate-blog.js
 * 
 * NOTE: blogData.js has been removed. This script is kept for reference only.
 * Blog data is now managed directly in Supabase.
 */

import { createClient } from '@supabase/supabase-js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// Blog data has been migrated to Supabase - this is the original data for reference
const blogPosts = []; // Empty - data now lives in Supabase

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env.local') });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Supabase credentials not found');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function migrateBlogPosts() {
    console.log('╔════════════════════════════════════════════╗');
    console.log('║     BLOG MIGRATION BAŞLIYOR                ║');
    console.log('╚════════════════════════════════════════════╝');
    console.log(`\n📝 ${blogPosts.length} blog yazısı migrate edilecek...\n`);
    
    let success = 0, failed = 0;
    
    for (const post of blogPosts) {
        // Parse date properly
        let publishedAt;
        try {
            publishedAt = new Date(post.date).toISOString();
        } catch {
            publishedAt = new Date().toISOString();
        }
        
        const { error } = await supabase.from('blog_posts').upsert({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            content: post.content,
            category: post.category,
            author: post.author,
            tags: post.tags || [],
            image_url: post.image,
            quiz: post.quiz || null,
            is_published: true,
            published_at: publishedAt,
            meta_title: post.title,
            meta_description: post.excerpt
        }, { 
            onConflict: 'id',
            ignoreDuplicates: false 
        });
        
        if (error) {
            console.error(`  ❌ "${post.title.en}": ${error.message}`);
            failed++;
        } else {
            console.log(`  ✅ "${post.title.en}"`);
            success++;
        }
    }
    
    console.log(`\n╔════════════════════════════════════════════╗`);
    console.log(`║  ✅ ${success} başarılı, ❌ ${failed} hatalı`);
    console.log(`╚════════════════════════════════════════════╝`);
    
    // Final count
    const { count } = await supabase.from('blog_posts').select('*', { count: 'exact', head: true });
    console.log(`\n📝 Toplam blog yazısı: ${count}`);
}

migrateBlogPosts();
