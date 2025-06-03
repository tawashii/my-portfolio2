"use client"

import { motion } from "framer-motion"

/**
 * フッターコンポーネント
 * シンプルなコピーライト表示
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-secondary/10 border-t"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center text-center">
          {/* コピーライト */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <p className="text-muted-foreground">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </motion.div>

          {/* 技術スタック情報 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
