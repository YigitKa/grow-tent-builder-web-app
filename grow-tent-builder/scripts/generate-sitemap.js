import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogPosts } from '../src/components/Blog/blogData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://growizard.app';
const LANGUAGES = ['en', 'tr'];

const STATIC_ROUTES = [
    '', // Home
    '/builder',
    '/tools',
    '/tools/electricity-cost-calculator',
    '/tools/unit-converter',
    '/tools/co2-calculator',
    '/tools/ppfd-heatmap',
    '/blog',
    '/faq'
];

const generateSitemap = () => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add static routes
    LANGUAGES.forEach(lang => {
        STATIC_ROUTES.forEach(route => {
            const url = `${BASE_URL}/${lang}${route}`;
            xml += '  <url>\n';
            xml += `    <loc>${url}</loc>\n`;
            xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
            xml += '    <changefreq>weekly</changefreq>\n';
            xml += '    <priority>0.8</priority>\n';
            xml += '  </url>\n';
        });
    });

    // Add blog posts
    blogPosts.forEach(post => {
        LANGUAGES.forEach(lang => {
            if (post.slug[lang]) {
                const url = `${BASE_URL}/${lang}/blog/${post.slug[lang]}`;
                xml += '  <url>\n';
                xml += `    <loc>${url}</loc>\n`;
                xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
                xml += '    <changefreq>weekly</changefreq>\n';
                xml += '    <priority>0.8</priority>\n';
                xml += '  </url>\n';
            }
        });
    });

    xml += '</urlset>';

    const outputPath = path.join(__dirname, '../public/sitemap.xml');
    fs.writeFileSync(outputPath, xml);
    console.log(`Sitemap generated at ${outputPath}`);
};

generateSitemap();
