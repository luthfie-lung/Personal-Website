import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";

/**
 * Design Philosophy: Modern Minimalist with Bold Typography
 * - Centered content with generous whitespace
 * - Professional profile presentation
 * - Clear call-to-action elements
 */

export default function About() {
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

      {/* About Section */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          {/* Profile Header */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center border-2 border-gray-300">
                <span className="text-5xl font-bold text-gray-400">LL</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-4">
              Luthfie Lung
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Web Designer & Developer
            </p>
            <p className="text-gray-500">
              Based in Indonesia • Passionate about creating beautiful digital experiences
            </p>
          </div>

          {/* Bio Section */}
          <div className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I'm a web designer and developer with a passion for creating beautiful, functional, and user-friendly digital experiences. With expertise in modern web technologies and design principles, I help businesses and individuals establish their online presence through thoughtfully crafted websites and applications.
              </p>
              <p>
                My journey in web development started with a curiosity about how websites work. Over the years, I've honed my skills in both design and development, learning that the best solutions come from understanding user needs and combining aesthetics with functionality.
              </p>
              <p>
                I believe in the power of clean code, minimalist design, and continuous learning. When I'm not coding or designing, you can find me exploring new technologies, writing about web development, or contributing to open-source projects.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-6">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-black mb-4">Frontend Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• React & React Hooks</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Responsive Design</li>
                  <li>• Web Performance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-4">Design</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• UI/UX Design</li>
                  <li>• Minimalist Design</li>
                  <li>• Typography</li>
                  <li>• Color Theory</li>
                  <li>• Design Systems</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16 pb-16 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-black mb-6">Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-black">Web Developer</h3>
                <p className="text-gray-600 text-sm mb-2">2023 - Present</p>
                <p className="text-gray-700">
                  Developing modern web applications with React and TypeScript, focusing on performance and user experience. Collaborating with designers and product teams to deliver high-quality digital products.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black">Freelance Designer</h3>
                <p className="text-gray-600 text-sm mb-2">2021 - 2023</p>
                <p className="text-gray-700">
                  Designed and developed websites for various clients, ranging from startups to established businesses. Specialized in creating clean, minimalist designs that prioritize user experience.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black mb-8">Let's Connect</h2>
            <p className="text-gray-600 mb-8">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:calungyourbae@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition-colors no-underline"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a
                href="https://github.com/luthfie-lung"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black font-medium rounded-md hover:bg-black hover:text-white transition-colors no-underline"
              >
                <Github size={20} />
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black font-medium rounded-md hover:bg-black hover:text-white transition-colors no-underline"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
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
