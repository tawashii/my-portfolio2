import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorkExperienceSection } from "@/components/sections/work-experience-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

/**
 * メインページコンポーネント
 * ポートフォリオサイトの全セクションを統合
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ヘッダー - 固定ナビゲーション */}
      <Header />

      {/* メインコンテンツ */}
      <main>
        {/* Hero セクション - ファーストビュー */}
        <HeroSection />

        {/* About セクション - プロフィール */}
        <AboutSection />

        {/* Work Experience セクション - 職歴 */}
        <WorkExperienceSection />

        {/* Skills セクション - 技術スタック */}
        <SkillsSection />

        {/* Projects セクション - GitHub連携プロジェクト */}
        <ProjectsSection />

        {/* Contact セクション - 連絡先・SNS */}
        <ContactSection />
      </main>

      {/* フッター */}
      <Footer />
    </div>
  );
}
