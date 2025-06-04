"use client"

/**
 * Work Experience セクションコンポーネント
 * 職歴を時系列で表示
 */
export function WorkExperienceSection() {
  return (
    <section id="work-experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto mb-6"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-2 text-primary">
                テクニカルライター
              </h3>
              <p className="text-muted-foreground mb-4">
                2022年1月 〜 2024年12月
              </p>
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
          </div>
        </div>
      </div>
    </section>
  )
}
