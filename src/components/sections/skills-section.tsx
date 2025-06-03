"use client"

import { motion } from "framer-motion"

/**
 * Skills セクションコンポーネント
 * TODO: 技術スタック、レベル表示、カテゴリ分類を実装予定
 */
export function SkillsSection() {
  // スキルデータ（レベル付き）
  const skillCategories = [
    {
      title: "ドキュメント・コミュニケーション",
      skills: [
        { name: "Technical Writing", level: 95 },
        { name: "Project Management", level: 88 },
        { name: "Quality Review", level: 90 },
        { name: "Presentation", level: 85 },
      ],
    },
    {
      title: "技術スキル",
      skills: [
        { name: "Markdown", level: 95 },
        { name: "HTML/CSS", level: 80 },
        { name: "Python", level: 70 },
        { name: "SQL", level: 75 },
        { name: "Git/GitHub", level: 82 },
      ],
    },
    {
      title: "ツール・プラットフォーム",
      skills: [
        { name: "Jira/Confluence", level: 90 },
        { name: "Google Analytics", level: 85 },
        { name: "VMware", level: 78 },
        { name: "Zendesk", level: 88 },
        { name: "kintone", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            テクニカルライティング、QA、データ分析の経験で培った
            専門スキルとツールの習熟度をご紹介します。
          </p>
        </motion.div>

        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-background/50 rounded-2xl p-6 border border-border/30"
              >
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <div
                        className="w-full h-2 bg-muted rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name}のスキルレベル: ${skill.level}%`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
