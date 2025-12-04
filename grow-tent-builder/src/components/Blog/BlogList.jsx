import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSettings } from '../../context/SettingsContext';
import { getBlogPosts, getBlogCategories } from '../../services/blogApi';
import Footer from '../Footer';

import Navbar from '../Navbar';
import styles from './BlogList.module.css';

const BlogList = () => {
  const { language, t, getLocalizedPath } = useSettings();
  const [activeCategory, setActiveCategory] = useState('All');
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [loading, setLoading] = useState(true);

  // Fetch blog posts from Supabase
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const [posts, cats] = await Promise.all([
        getBlogPosts(language),
        getBlogCategories()
      ]);
      setBlogPosts(posts);
      setCategories(['All', ...cats]);
      setLoading(false);
    }
    fetchData();
  }, [language]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0]; // First post is featured
  const gridPosts = filteredPosts.filter(post => post.id !== featuredPost?.id || activeCategory !== 'All');

  if (loading) {
    return (
      <div className={styles.blogContainer}>
        <Helmet>
          <title>{t('navBlog')} | GroWizard</title>
        </Helmet>
        <Navbar />
        <div style={{ textAlign: 'center', padding: '8rem 2rem' }}>
          <div className="loading-spinner" style={{ margin: '0 auto 1rem', width: '40px', height: '40px', border: '3px solid var(--border-color)', borderTop: '3px solid var(--color-primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <p>{language === 'tr' ? 'Blog yazıları yükleniyor...' : 'Loading blog posts...'}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.blogContainer}>
      <Helmet>
        <title>{t('navBlog')} | GroWizard</title>
      </Helmet>
      <Navbar />
      {/* Blog Hero & Featured Post */}
      <section className={styles.blogHero}>
        <div className="container">

          <div className={`${styles.blogHeader} fade-in-up`}>
            <span className="badge">📚 {t('knowledgeBase')}</span>
            <h1>Grow Wizard <span className="gradient-text">Blog</span></h1>
            <p>{t('knowledgeBaseSubtitle')}</p>
          </div>

          {activeCategory === 'All' && featuredPost && (
            <div className={`${styles.featuredPost} fade-in-up`} style={{ animationDelay: '0.1s' }}>
              <Link to={getLocalizedPath(`/blog/${featuredPost.slug?.[language] || featuredPost.slug?.tr}`)} className={styles.featuredCard}>
                <div className={styles.featuredImage} style={{ backgroundImage: `url(${featuredPost.image})` }} />
                <div className={styles.featuredContent}>
                  <span className={styles.featuredBadge}>{t('featuredArticle')}</span>
                  <h2>{featuredPost.title?.[language] || featuredPost.title?.tr}</h2>
                  <p>{featuredPost.excerpt?.[language] || featuredPost.excerpt?.tr}</p>
                  <div className={styles.blogMeta}>
                    <span>{featuredPost.date}</span>
                    <span className={styles.dot}>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Category Filter */}
      <div className={`${styles.categoryNav} container`}>
        <div className={styles.categoryLabel}>{t('blogCategoriesLabel')}</div>
        <div className={styles.categoryScroll}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.categoryBtn} ${activeCategory === cat ? styles.categoryBtnActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {t(`category${cat}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className={`${styles.blogGrid} container`}>
        {gridPosts.map((post) => (
          <Link to={getLocalizedPath(`/blog/${post.slug?.[language] || post.slug?.tr}`)} key={post.id} className={`${styles.blogCard} card-interactive`}>
            <div className={styles.blogCardImage}>
              <img src={post.image} alt={post.title?.[language] || post.title?.tr} loading="lazy" />
              <div className={styles.blogTags}>
                <span className={styles.blogTag}>{t(`category${post.category}`)}</span>
              </div>
            </div>
            <div className={styles.blogCardContent}>
              <div className={styles.blogMeta}>
                <span>{post.date}</span>
                <span className={styles.dot}>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3>{post.title?.[language] || post.title?.tr}</h3>
              <p>{post.excerpt?.[language] || post.excerpt?.tr}</p>
              <div className={styles.blogAuthor}>
                <div className={styles.authorAvatar}>
                  {post.author?.charAt(0)}
                </div>
                <span>{post.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default BlogList;
