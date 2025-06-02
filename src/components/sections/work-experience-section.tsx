"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

interface WorkExperience {
  title: string;
  period: string;
  company?: string;
  responsibilities: string[];
}

/**
 * Work Experience セクションコンポーネント
 * 職歴を時系列で表示
 */
export function WorkExperienceSection() {
  const experiences: WorkExperience[] = [
    {
      title: "テクニカルライター",
      period: "2022年1月 〜 2024年12月",
      responsibilities: [
        "自社製品のマニュアルサイトの執筆・更新、およびディレクションを担当",
        "リリーススケジュールに合わせた記事作成計画・進行管理・レビュー業務を実施",
        "担当製品：サイボウズ Office（CLD版、PKG版、アプリ版）",
        "UI変更・仕様変更時の改訂ポイント抽出および反映",
        "仕様確認・開発、サポートメンバー、QAメンバーとの連携",
        "マニュアル移行プロジェクトのマネジメント（3ヶ月）",
        "古いCMSから自社のGitHub管理体制（Markdown＋GitHub）への移行プロジェクトを主導",
        "移行メンバー3名による作業の進行管理、タスク調整、品質レビューを担当",
      ],
    },
    {
      title: "QA",
      period: "2024年4月 〜 2024年6月",
      responsibilities: [
        "ソフトウェアの試験設計・実施",
        "テストケース作成、試験実施：約20件",
        "テストケースの試験項目数：約200項目",
        "担当製品：サイボウズ Office",
        "リリース作業の実施（5回対応）",
        "不具合報告、再現確認",
        "仕様確認、開発との連携",
      ],
    },
    {
      title: "IT担当、分析",
      period: "2020年2月 〜 2022年1月",
      responsibilities: [
        "社内システムの運用管理（アルファスコープ、Zendesk、VMware）",
        "ユーザー向けのアンケートの実施、分析、改善提案",
        "顧客と接点を持つチャネルの利用状況、課題の把握を目的とした分析",
        "Excelによる集計、グラフ化、全社向けの課題提案",
        "問い合わせ内容の分析（テキストマイニング）",
        "自チームの研修チューター",
        "面接担当（新卒、中途）",
      ],
    },
    {
      title: "テクニカルサポート",
      period: "2018年4月 〜 2020年1月",
      responsibilities: [
        "製品利用/検討ユーザーの問い合わせ対応（電話・メール）",
        "対応製品：サイボウズ Office（導入社数のべ78,000社）",
        "一日の対応件数：電話約20件、メール約5～10件",
        "ユーザーイベントでのブース担当",
        "新卒向け合同説明会などの採用活動への参加",
      ],
    },
  ];

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
                    </div>
                    <div className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <motion.div
                          key={respIndex}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + respIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {responsibility}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
