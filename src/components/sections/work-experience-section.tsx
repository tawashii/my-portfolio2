"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

interface WorkExperience {
  title: string
  period: string
  company?: string
  responsibilities: Array<{
    main: string
    details?: Array<{
      text: string
      subItems?: string[]
    }>
  }>
}

export function WorkExperienceSection() {
  const experiences: WorkExperience[] = [
    {
      title: "テクニカルライター",
      period: "2022年1月 〜 2024年12月",
      responsibilities: [
        {
          main: "自社製品のマニュアルサイトの執筆・更新、およびディレクションを担当",
          details: [
            { text: "リリーススケジュールに合わせた記事作成計画・進行管理・レビュー業務を実施" },
            { text: "担当製品：サイボウズ Office（CLD版、PKG版、アプリ版）" },
            { text: "UI変更・仕様変更時の改訂ポイント抽出および反映" },
          ],
        },
      ],
    },
  ]

  return (
    <section id="work-experience" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              6年間のキャリアで積み重ねた経験と実績をご紹介します。
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-muted-foreground/20"></div>
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative mb-8 pl-12 md:pl-20"
                >
                  <div className="absolute left-2.5 md:left-6 top-6 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 md:border-4 border-background"></div>
                  <div className="bg-background/50 rounded-2xl p-6 border border-border/30 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-primary mb-2 md:mb-0">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {experience.period}
                      </div>
                    </div>
                    <ul className="text-muted-foreground space-y-4">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <motion.li
                          key={respIndex}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + respIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="space-y-2"
                        >
                          <div className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="font-medium leading-relaxed">
                              {responsibility.main}
                            </span>
                          </div>
                          {responsibility.details && (
                            <ul className="ml-6 space-y-2">
                              {responsibility.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start">
                                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  <span className="text-sm leading-relaxed">
                                    {detail.text}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
