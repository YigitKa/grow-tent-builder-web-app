import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';
import { blogPosts, categories } from './blogData';
import Footer from '../Footer';

import Navbar from '../Navbar';
import styles from './BlogList.module.css';

const BlogList = () => {
  const { language, t, getLocalizedPath } = useSettings();
  const [activeCategory, setActiveCategory] = useState('All');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0]; // First post is featured
  const gridPosts = filteredPosts.filter(post => post.id !== featuredPost.id || activeCategory !== 'All');

  return (
    <div className={styles.blogContainer}>
      <Navbar />
      {/* Blog Hero & Featured Post */}
      <section className={styles.blogHero}>
        <div className="container">

          <div className={`${styles.blogHeader} fade-in-up`}>
            <span className="badge">📚 {t('knowledgeBase')}</span>
            <h1>Grow Wizard <span className="gradient-text">Blog</span></h1>
            <p>{t('knowledgeBaseSubtitle')}</p>
          </div>

          {activeCategory === 'All' && (
            <div className={`${styles.featuredPost} fade-in-up`} style={{ animationDelay: '0.1s' }}>
              <Link to={getLocalizedPath(`/blog/${featuredPost.slug[language]}`)} className={styles.featuredCard}>
                <div className={styles.featuredImage} style={{ backgroundImage: `url(${featuredPost.image})` }} />
                <div className={styles.featuredContent}>
                  <span className={styles.featuredBadge}>{t('featuredArticle')}</span>
                  <h2>{featuredPost.title[language]}</h2>
                  <p>{featuredPost.excerpt[language]}</p>
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
          <Link to={getLocalizedPath(`/blog/${post.slug[language]}`)} key={post.id} className={`${styles.blogCard} card-interactive`}>
            <div className={styles.blogCardImage}>
              <img src={post.image} alt={post.title[language]} loading="lazy" />
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
              <h3>{post.title[language]}</h3>
              <p>{post.excerpt[language]}</p>
              <div className={styles.blogAuthor}>
                <div className={styles.authorAvatar}>
                  {post.author.charAt(0)}
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
