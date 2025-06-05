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
            {/* テクニカルサポート */}
            <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-2 text-primary">テクニカルサポート</h3>
              <p className="text-muted-foreground mb-4">2018年4月 〜 2020年1月</p>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  製品利用/検討ユーザーの問い合わせ対応（電話・メール）
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  対応製品：サイボウズ Office（導入社数のべ78,000社）
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  一日の対応件数：電話約20件、メール約5～10件
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  ユーザーイベントでのブース担当
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  新卒向け合同説明会などの採用活動への参加
                </li>
              </ul>
            </div>

            {/* IT担当、分析 */}
            <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-2 text-primary">IT担当、分析</h3>
              <p className="text-muted-foreground mb-4">2020年2月 〜 2022年1月</p>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  社内システムの運用管理（アルファスコープ、Zendesk、VMware）
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  ユーザー向けのアンケートの実施、分析、改善提案
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  目的：顧客と接点を持つチャネルの利用状況、課題の把握
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  分析方法：Excelによる集計、グラフ化
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  全社向けに共有し、課題の提案を行う
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  問い合わせ内容の分析（テキストマイニング）
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  自チームの研修チューター
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  面接担当（新卒、中途）
                </li>
              </ul>
            </div>

            {/* テクニカルライター */}
            <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-2 text-primary">テクニカルライター</h3>
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
                  担当製品：サイボウズ Office（CLD版、PKG版、アプリ版）
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  UI変更・仕様変更時の改訂ポイント抽出および反映
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  仕様確認・開発、サポートメンバー、QAメンバーとの連携
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  社内からの依頼で、2～3日に一回の頻度でサイトを更新し、記載内容の変更を行う
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  マニュアル移行プロジェクトのマネジメント（3ヶ月）
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  古いCMSで管理されていたマニュアルを、自社のGitHub管理体制（Markdown＋GitHub）へ移行するプロジェクトを主導
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  技術的な移行設計はエンジニアメンバーと調整を行い、移行メンバー3名による移行作業・リライト作業の進行管理、タスク調整、品質レビューを担当。スケジュール通りの移行完了を実現した
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  利用ツール
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  kintone,Jira,Confluence,Miro,Google Analytics,Zoom,Teams,Office365
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  GitHub,VSCode,Markdown,HTML,CSSを活用したドキュメント執筆、レビュー
                </li>
              </ul>
            </div>

            {/* QA */}
            <div className="bg-background/50 rounded-2xl p-6 border border-border/30">
              <h3 className="text-xl font-semibold mb-2 text-primary">QA</h3>
              <p className="text-muted-foreground mb-4">2024年4月 〜 2024年6月</p>
              <ul className="text-muted-foreground space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  ソフトウェアの試験設計・実施
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  テストケース作成、試験実施：約20件
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  テストケースの試験項目数：約200項目
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  担当製品：サイボウズ Office
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  リリース作業の実施
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0 ml-4"></span>
                  リリース作業対応：5回
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  不具合報告、再現確認
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  仕様確認、開発との連携
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
