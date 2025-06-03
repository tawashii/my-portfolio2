"use client"

import { motion } from "framer-motion"
import { useTypingAnimation } from "@/hooks/use-typing-animation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

/**
 * Hero セクションコンポーネント
 * タイピングアニメーションで職業やスキルを動的に表示
 */
export function HeroSection() {
  // タイピングアニメーション用のテキスト配列
  const typingTexts = [
    "Technical Writer",
    "Director",
    "QA",
    "Technical Support",
  ]

  const { displayText, isTyping } = useTypingAnimation(
    typingTexts,
    120,
    80,
    2500
  )

  // スムーススクロール処理
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* 左側: テキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hello, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                tawashi
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 h-8 flex items-center justify-center lg:justify-start"
            >
              <span>I&apos;m a </span>
              <span className="text-primary font-semibold ml-2">
                {displayText}
                <span
                  className={`inline-block w-0.5 h-6 bg-primary ml-1 ${
                    isTyping ? "animate-pulse" : "animate-ping"
                  }`}
                />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => scrollToSection("#projects")}
                size="lg"
                className="px-8 py-3 text-lg rounded-full"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg rounded-full border-primary/20 hover:border-primary"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* 右側: プロフィール画像 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/profile.jpg.jpeg"
                  alt="tawashi プロフィール画像"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* 装飾的な背景エフェクト */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-primary/10 to-secondary/30 rounded-full -z-10 blur-2xl animate-pulse"></div>
              {/* 浮遊するアクセント */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-primary/20 rounded-full animate-bounce"></div>
              <div
                className="absolute bottom-8 left-4 w-4 h-4 bg-secondary/30 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
