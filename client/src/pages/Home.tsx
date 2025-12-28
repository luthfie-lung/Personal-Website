import { Link } from "wouter";
import { blogPosts, getAllCategories } from "@/lib/blog-data";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

/**
 * Design Philosophy: Modern Minimalist with Bold Typography
 * - Clean white background with generous whitespace
 * - Poppins bold for headings, Inter for body text
 * - Monochromatic palette (black, white, grays)
 * - Subtle animations and micro-interactions
 */

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = getAllCategories();

  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="text-2xl font-bold text-black no-underline hover:text-gray-700 transition-colors">
                Luthfie Lung
              </a>
            </Link>
            <nav className="flex gap-8">
              <Link href="/">
                <a className="text-sm font-medium text-black no-underline hover:text-gray-600 transition-colors">
                  Blog
                </a>
              </Link>
              <Link href="/about">
                <a className="text-sm font-medium text-black no-underline hover:text-gray-600 transition-colors">
                  About
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Thoughts on Web Design & Development
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Exploring modern web design, React development, and the art of building beautiful digital experiences. Join me on this journey of learning and sharing.
          </p>
          <div className="flex gap-4">
            <a
              href="#articles"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Read Articles <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="container py-8 border-t border-gray-200">
        <div className="flex items-center gap-4 overflow-x-auto pb-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap ${
              selectedCategory === null
                ? "bg-black text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md font-medium transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section id="articles" className="container py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 md:grid-cols-2"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group bg-gray-50 rounded-lg border border-gray-200 p-8 hover:border-black hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-gray-200 text-sm font-medium text-black rounded-full">
                  {post.category}
                </span>
              </div>

              <Link href={`/${post.slug}`}>
                <a className="no-underline">
                  <h2 className="text-2xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </a>
              </Link>

              <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs text-gray-500 bg-white px-2 py-1 rounded border border-gray-200"
                  >
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="flex gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime} min read
                  </div>
                </div>
                <Link href={`/${post.slug}`}>
                  <a className="inline-flex items-center gap-2 text-black font-medium hover:gap-3 transition-all no-underline">
                    Read <ArrowRight size={18} />
                  </a>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No articles found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-black text-white mt-24">
        <div className="container py-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4">Luthfie Lung</h3>
              <p className="text-gray-400">
                Web designer and developer passionate about creating beautiful digital experiences.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/">
                    <a className="hover:text-white transition-colors no-underline">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a className="hover:text-white transition-colors no-underline">About</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://github.com/luthfie-lung"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors no-underline"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors no-underline"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 Luthfie Lung. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
