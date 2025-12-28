import { Link, useParams, useRoute } from "wouter";
import { getBlogPost, blogPosts } from "@/lib/blog-data";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { Streamdown } from "streamdown";

/**
 * Design Philosophy: Modern Minimalist with Bold Typography
 * - Centered content with optimal line length for reading
 * - Clear typography hierarchy with Poppins headings
 * - Generous margins and whitespace for comfortable reading
 */

export default function BlogPost() {
  const [, params] = useRoute("/:slug");
  const slug = params?.slug as string;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, the article you're looking for doesn't exist.
          </p>
          <Link href="/">
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors no-underline">
              <ArrowLeft size={18} />
              Back to Blog
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container py-6">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-black font-medium hover:text-gray-600 transition-colors no-underline">
              <ArrowLeft size={18} />
              Back to Blog
            </a>
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Meta Information */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-gray-200 text-sm font-medium text-black rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-4 text-gray-600 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{post.readTime} min read</span>
              </div>
              <button className="ml-auto flex items-center gap-2 px-4 py-2 text-black border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none mb-12">
            <Streamdown>{post.content}</Streamdown>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 py-8 border-t border-gray-200">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-4 py-2 bg-gray-100 text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </motion.div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-black mb-12">Related Articles</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <motion.article
                  key={relatedPost.id}
                  whileHover={{ y: -4 }}
                  className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-black hover:shadow-md transition-all"
                >
                  <Link href={`/${relatedPost.slug}`}>
                    <a className="no-underline">
                      <h3 className="text-lg font-bold text-black mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </a>
                  </Link>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <time dateTime={relatedPost.date}>
                      {new Date(relatedPost.date).toLocaleDateString("id-ID", {
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span>{relatedPost.readTime} min</span>
                  </div>
                </motion.article>
              ))}
          </div>

          {blogPosts.filter((p) => p.id !== post.id && p.category === post.category)
            .length === 0 && (
            <p className="text-gray-500 text-center">
              No related articles found. Check out other categories!
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
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
