"use client";

import { motion } from "framer-motion";

/**
 * Contact セクションコンポーネント
 * X（Twitter）とブログへのリンクをモダンなUIで提供
 */
export function ContactSection() {
  // ソーシャルリンク（環境変数から取得）
  const socialLinks = [
    {
      name: "X (Twitter)",
      url: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com",
      description: "日々の学習記録や技術的な発見をツイートしています",
    },
    {
      name: "Zenn",
      url: process.env.NEXT_PUBLIC_BLOG_URL || "https://zenn.dev",
      description: "技術記事やプロジェクトの詳細な解説を投稿しています",
    },
    {
      name: "LAPRAS",
      url: process.env.NEXT_PUBLIC_LAPRAS_URL || "https://lapras.com",
      description: "技術力や実績を可視化したプロフィールページです",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          
          {/* Decorative underline */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-background/50 rounded-2xl p-6 border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {link.name}
                  </h3>
                </a>
                <p className="text-muted-foreground text-sm">
                  {link.description}
                </p>
              </motion.div>                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
