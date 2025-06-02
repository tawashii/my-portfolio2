"use client";

import { motion } from "framer-motion";
import { Twitter, ExternalLink } from "lucide-react";

/**
 * フッターコンポーネント
 * コピーライトとソーシャルリンクを表示
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  // ソーシャルリンク（環境変数から取得）
  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com",
    },
    {
      name: "Zenn",
      icon: ExternalLink,
      url: process.env.NEXT_PUBLIC_BLOG_URL || "https://zenn.dev",
    },
    {
      name: "LAPRAS",
      icon: ExternalLink,
      url: process.env.NEXT_PUBLIC_LAPRAS_URL || "https://lapras.com",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-secondary/10 border-t"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* コピーライト */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 md:mb-0"
          >
            <p className="text-muted-foreground">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </motion.div>

          {/* ソーシャルリンク */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4"
          >
            {socialLinks.map((link) => {
              const IconComponent = link.icon;

              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-background hover:bg-accent transition-colors duration-200"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="h-5 w-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* 追加情報 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t text-center"
        >
          <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
