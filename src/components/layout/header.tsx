"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

// ナビゲーションアイテムの型定義
interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/**
 * ヘッダーコンポーネント
 * レスポンシブナビゲーション、ダークモード切り替え、スムーススクロールを提供
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  // スクロール検知でヘッダー背景を変更
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ナビゲーションクリック時のスムーススクロール処理
  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent",
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* ロゴ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link 
              href="/" 
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent hover:from-primary/80 hover:to-primary/40 transition-all duration-300"
            >
              tawashi
            </Link>
          </motion.div>

          {/* デスクトップナビゲーション */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="inline-block"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-200 rounded-full px-4 py-2 font-medium whitespace-nowrap"
                >
                  {item.label}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* 右側：テーマトグルとモバイルメニュー */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* テーマトグル（全画面サイズで表示） */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ThemeToggle />
            </motion.div>
            
            {/* ハンバーガーメニューボタン（lg未満のみ） */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="lg:hidden"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="メニュー切り替え"
                className="rounded-full"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
          >
            <div className="px-2 pt-2 pb-3 flex flex-wrap gap-2 bg-background/95 backdrop-blur-md rounded-lg mt-2 border">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavClick(item.href)}
                  className="flex-1 min-w-fit text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-200 rounded-full"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
