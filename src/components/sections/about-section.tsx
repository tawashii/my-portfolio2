"use client"

import { motion } from "framer-motion"

/**
 * About セクションコンポーネント
 * カード形式でプロフィール情報を表示
 */
export function AboutSection() {
  return (
    <section id="about" className="py-20">
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
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              テクニカルライティング、QA、データ分析の経験を持つ専門家として、
              高品質なドキュメント作成と効率的なプロセス改善に取り組んでいます。
            </p>
          </div>

          {/* コンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                専門領域
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                テクニカルライティング、QA、データ分析の経験を活かし、
                技術文書の品質向上とプロセス改善に貢献します。
                マニュアル作成からシステム運用まで幅広い業務経験を持ちます。
              </p>
            </div>

            <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                強み・特徴
              </h3>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  プロジェクト管理とドキュメント品質向上の実績
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  フルリモート環境での効果的なコミュニケーション
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  技術スキルの継続的な学習と実践
                </li>
              </ul>
            </div>

            <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                現在の取り組み
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                JavaScript、Go、Rubyを学習中で、エンジニアとしてのスキルセットを拡張しています。
                テクニカルライターとしての経験を活かしながら、より技術的な領域への挑戦を続けています。
                また、生成AI・AIツールの活用にも強い関心を持ち、業務効率化と品質向上への応用を探求しています。
              </p>
            </div>

            <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                職歴 - テクニカルライター
              </h3>
              <p className="text-muted-foreground mb-4">2022年1月 〜 2024年12月</p>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  自社製品のマニュアルサイトの執筆・更新、およびディレクションを担当
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  リリーススケジュールに合わせた記事作成計画・進行管理・レビュー業務を実施
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  マークダウン記法とGitを活用した効率的なドキュメント管理体制を構築
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  品質向上のためのレビュープロセス設計・運用により、ドキュメント品質を大幅に改善
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  複数名のライターとの協業体制を構築し、プロジェクト全体の生産性向上に貢献
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
