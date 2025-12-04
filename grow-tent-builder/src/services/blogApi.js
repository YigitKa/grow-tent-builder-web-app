/**
 * Blog API Service
 * Fetches blog data from Supabase
 */

import supabase, { isSupabaseConfigured } from './supabase.js';

// Empty fallback when no static data available
const staticBlogPosts = [];

/**
 * Get all published blog posts
 * @param {string} language - 'en' or 'tr'
 * @returns {Promise<Array>} Array of blog posts
 */
export async function getBlogPosts(language = 'tr') {
    // Fallback to static data if Supabase is not configured
    if (!isSupabaseConfigured()) {
        console.warn('Supabase not configured, using static blog data');
        return staticBlogPosts;
    }

    try {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('is_published', true)
            .order('published_at', { ascending: false });

        if (error) {
            console.error('Error fetching blog posts:', error.message);
            return staticBlogPosts; // Fallback
        }

        // Transform Supabase data to match existing format
        return data.map(post => transformBlogPost(post, language));
    } catch (err) {
        console.error('Blog fetch error:', err);
        return staticBlogPosts;
    }
}

/**
 * Get a single blog post by slug
 * @param {string} slug - The post slug
 * @param {string} language - 'en' or 'tr'
 * @returns {Promise<Object|null>} Blog post or null
 */
export async function getBlogPostBySlug(slug, language = 'tr') {
    if (!isSupabaseConfigured()) {
        const post = staticBlogPosts.find(p => 
            p.slug[language] === slug || p.slug.en === slug || p.slug.tr === slug
        );
        return post || null;
    }

    try {
        // Search in both language slugs
        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('is_published', true)
            .or(`slug->>${language}.eq.${slug},slug->>en.eq.${slug},slug->>tr.eq.${slug}`)
            .single();

        if (error) {
            console.error('Error fetching blog post:', error.message);
            // Try static fallback
            const staticPost = staticBlogPosts.find(p => 
                p.slug[language] === slug || p.slug.en === slug || p.slug.tr === slug
            );
            return staticPost || null;
        }

        return transformBlogPost(data, language);
    } catch (err) {
        console.error('Blog post fetch error:', err);
        return null;
    }
}

/**
 * Get blog posts by category
 * @param {string} category - Category name
 * @param {string} language - 'en' or 'tr'
 * @returns {Promise<Array>} Array of blog posts
 */
export async function getBlogPostsByCategory(category, language = 'tr') {
    if (!isSupabaseConfigured()) {
        return staticBlogPosts.filter(p => p.category === category);
    }

    try {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('is_published', true)
            .eq('category', category)
            .order('published_at', { ascending: false });

        if (error) {
            console.error('Error fetching blog posts by category:', error.message);
            return staticBlogPosts.filter(p => p.category === category);
        }

        return data.map(post => transformBlogPost(post, language));
    } catch (err) {
        console.error('Blog category fetch error:', err);
        return staticBlogPosts.filter(p => p.category === category);
    }
}

/**
 * Get blog posts by tag
 * @param {string} tag - Tag name
 * @param {string} language - 'en' or 'tr'
 * @returns {Promise<Array>} Array of blog posts
 */
export async function getBlogPostsByTag(tag, language = 'tr') {
    if (!isSupabaseConfigured()) {
        return staticBlogPosts.filter(p => p.tags?.includes(tag));
    }

    try {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('*')
            .eq('is_published', true)
            .contains('tags', [tag])
            .order('published_at', { ascending: false });

        if (error) {
            console.error('Error fetching blog posts by tag:', error.message);
            return staticBlogPosts.filter(p => p.tags?.includes(tag));
        }

        return data.map(post => transformBlogPost(post, language));
    } catch (err) {
        console.error('Blog tag fetch error:', err);
        return staticBlogPosts.filter(p => p.tags?.includes(tag));
    }
}

/**
 * Get all unique categories
 * @returns {Promise<Array<string>>} Array of category names
 */
export async function getBlogCategories() {
    if (!isSupabaseConfigured()) {
        const categories = [...new Set(staticBlogPosts.map(p => p.category))];
        return categories;
    }

    try {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('category')
            .eq('is_published', true);

        if (error) {
            console.error('Error fetching categories:', error.message);
            return [...new Set(staticBlogPosts.map(p => p.category))];
        }

        return [...new Set(data.map(p => p.category))];
    } catch (err) {
        console.error('Categories fetch error:', err);
        return [...new Set(staticBlogPosts.map(p => p.category))];
    }
}

/**
 * Transform Supabase blog post to app format
 * @param {Object} post - Supabase blog post
 * @param {string} language - 'en' or 'tr'
 * @returns {Object} Transformed post
 */
function transformBlogPost(post, language) {
    // Format date
    const date = post.published_at 
        ? new Date(post.published_at).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : '';

    return {
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        category: post.category,
        author: post.author,
        date: date,
        readTime: post.read_time || '5 min read',
        image: post.image_url,
        tags: post.tags || [],
        quiz: post.quiz || null
    };
}

export default {
    getBlogPosts,
    getBlogPostBySlug,
    getBlogPostsByCategory,
    getBlogPostsByTag,
    getBlogCategories
};
