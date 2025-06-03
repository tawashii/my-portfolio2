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

/**
 * Work Experience セクションコンポーネント
 * 職歴を時系列で表示
 */
export function WorkExperienceSection() {  const experiences: WorkExperience[] = [
    {
      title: "テクニカルライター",
      period: "2022年1月 〜 2024年12月",
      responsibilities: [
        {
          main: "自社製品のマニュアルサイトの執筆・更新、およびディレクションを担当",
          details: [
            {
              text: "リリーススケジュールに合わせた記事作成計画・進行管理・レビュー業務を実施",
            },
            {
              text: "担当製品：サイボウズ Office（CLD版、PKG版、アプリ版）",
            },
            {
              text: "UI変更・仕様変更時の改訂ポイント抽出および反映",
            },
            {
              text: "仕様確認・開発、サポートメンバー、QAメンバーとの連携",
            },
            {
              text: "社内からの依頼で、2～3日に一回の頻度でサイトを更新し、記載内容の変更を行う",
            },
          ],
        },
        {
          main: "マニュアル移行プロジェクトのマネジメント（3ヶ月）",
          details: [
            {
              text: "古いCMSで管理されていたマニュアルを、自社のGitHub管理体制（Markdown＋GitHub）へ移行するプロジェクトを主導",
            },
            {
              text: "技術的な移行設計はエンジニアメンバーと調整を行い、移行メンバー3名による移行作業・リライト作業の進行管理、タスク調整、品質レビューを担当。スケジュール通りの移行完了を実現した",
            },
          ],
        },
        {
          main: "利用ツール",
          details: [
            {
              text: "kintone,Jira,Confluence,Miro,Google Analytics,Zoom,Teams,Office365",
            },
            {
              text: "GitHub,VSCode,Markdown,HTML,CSSを活用したドキュメント執筆、レビュー",
            },
          ],
        },
      ],
    },
    {
      title: "QA",
      period: "2024年4月 〜 2024年6月",
      responsibilities: [
        {
          main: "業務体験として3ヶ月間勤務",
        },
        {
          main: "ソフトウェアの試験設計・実施",
          details: [
            {
              text: "テストケース作成、試験実施：約20件",
            },
            {
              text: "テストケースの試験項目数：約200項目",
            },
            {
              text: "担当製品：サイボウズ Office",
            },
          ],
        },
        {
          main: "リリース作業の実施",
          details: [
            {
              text: "リリース作業対応：5回",
            },
          ],
        },
        {
          main: "不具合報告、再現確認",
        },
        {
          main: "仕様確認、開発との連携",
        },
      ],
    },
    {
      title: "IT担当、分析",
      period: "2020年2月 〜 2022年1月",
      responsibilities: [
        {
          main: "社内システムの運用管理（アルファスコープ、Zendesk、VMware）",
        },
        {
          main: "仮想環境の構築支援",
        },
        {
          main: "ローコードアプリを使ったアプリ開発",
        },
        {
          main: "ユーザー向けのアンケートの実施、分析、改善提案",
          details: [
            {
              text: "目的：顧客と接点を持つチャネルの利用状況、課題の把握",
            },
            {
              text: "分析方法：Excelによる集計、グラフ化",
            },
            {
              text: "全社向けに共有し、課題の提案を行う",
            },
          ],
        },
        {
          main: "問い合わせ内容の分析（テキストマイニング）",
        },
        {
          main: "自チームの研修チューター",
        },
        {
          main: "面接担当（新卒、中途）",
        },
      ],
    },
    {
      title: "テクニカルサポート",
      period: "2018年4月 〜 2020年1月",
      responsibilities: [
        {
          main: "製品利用/検討ユーザーの問い合わせ対応（電話・メール）",
          details: [
            {
              text: "対応製品：サイボウズ Office（導入社数のべ 78,000 社）",
            },
            {
              text: "一日の対応件数：電話約 20 件、メール約 5～10 件",
            },
          ],
        },
        {
          main: "ユーザーイベントでのブース担当",
        },
        {
          main: "新卒向け合同説明会などの採用活動への参加",
        },
      ],
    },
  ]

  return (
    <section id="work-experience" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* セクションカード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg"
        >
          {/* セクションヘッダー */}
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

          {/* コンテンツ */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* タイムライン線 */}
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
                  {/* タイムライン・ドット */}
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
                    </div>                    <div className="space-y-4">
                      {experience.responsibilities.map(
                        (responsibility, respIndex) => (
                          <motion.div
                            key={respIndex}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1 + respIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="space-y-2"
                          >
                            {/* メイン項目 */}
                            <div className="flex items-start">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                              <p className="text-muted-foreground font-medium leading-relaxed">
                                {responsibility.main}
                              </p>
                            </div>
                            
                            {/* 詳細項目 */}
                            {responsibility.details && (
                              <div className="ml-5 space-y-1">
                                {responsibility.details.map((detail, detailIndex) => (
                                  <div key={detailIndex} className="flex items-start">
                                    <div className="w-1 h-1 bg-muted-foreground rounded-full mt-2.5 mr-3 flex-shrink-0" />
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                      {detail.text}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )
                      )}
                    </div>
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
