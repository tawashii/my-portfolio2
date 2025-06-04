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
              <h3 className="text-xl font-semibold mb-4 text-primary">職歴</h3>
              <div className="space-y-6">
                {/* テクニカルサポート */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-sm mt-1 flex-shrink-0" />
                    <p className="font-medium text-foreground">
                      テクニカルサポート（2018年 4月 ～ 2020年 1月）
                    </p>
                  </div>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>
                          製品利用/検討ユーザーの問い合わせ対応（電話・メール）
                        </p>
                        <div className="ml-4 mt-1 space-y-1">
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              対応製品：サイボウズ
                              Office（導入社数のべ78,000社）
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              一日の対応件数：電話約20件、メール約5～10件
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        ユーザーイベントでのブース担当
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        新卒向け合同説明会などの採用活動への参加
                      </p>
                    </div>
                  </div>
                </div>

                {/* IT担当、分析 */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-sm mt-1 flex-shrink-0" />
                    <p className="font-medium text-foreground">
                      IT担当、分析（2020年 2月 ～ 2022年 1月）
                    </p>
                  </div>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        社内システムの運用管理（アルファスコープ、Zendesk、VMware）
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>ユーザー向けのアンケートの実施、分析、改善提案</p>
                        <div className="ml-4 mt-1 space-y-1">
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              目的：顧客と接点を持つチャネルの利用状況、課題の把握
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              分析方法：Excelによる集計、グラフ化
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              全社向けに共有し、課題の提案を行う
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        問い合わせ内容の分析（テキストマイニング）
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        自チームの研修チューター
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        面接担当（新卒、中途）
                      </p>
                    </div>
                  </div>
                </div>

                {/* テクニカルライター */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-sm mt-1 flex-shrink-0" />
                    <p className="font-medium text-foreground">
                      テクニカルライター（2022年 1月 ～ 2024年12月）
                    </p>
                  </div>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>
                          自社製品のマニュアルサイトの執筆・更新、およびディレクションを担当
                        </p>
                        <div className="ml-4 mt-1 space-y-1">
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              リリーススケジュールに合わせた記事作成計画・進行管理・レビュー業務を実施
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              担当製品：サイボウズ
                              Office（CLD版、PKG版、アプリ版）
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              UI変更・仕様変更時の改訂ポイント抽出および反映
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              仕様確認・開発、サポートメンバー、QAメンバーとの連携
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              社内からの依頼で、2～3日に一回の頻度でサイトを更新し、記載内容の変更を行う
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>マニュアル移行プロジェクトのマネジメント（3ヶ月）</p>
                        <div className="ml-4 mt-1 space-y-1">
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              古いCMSで管理されていたマニュアルを、自社のGitHub管理体制（Markdown＋GitHub）へ移行するプロジェクトを主導
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              技術的な移行設計はエンジニアメンバーと調整を行い、移行メンバー3名による移行作業・リライト作業の進行管理、タスク調整、品質レビューを担当。スケジュール通りの移行完了を実現した
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>利用ツール</p>
                        <div className="ml-4 mt-1 space-y-1">
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              kintone,Jira,Confluence,Miro,Google
                              Analytics,Zoom,Teams,Office365
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              GitHub,VSCode,Markdown,HTML,CSSを活用したドキュメント執筆、レビュー
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* QA */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-sm mt-1 flex-shrink-0" />
                    <p className="font-medium text-foreground">
                      QA（2024年 4月 ～ 2024年 6月）
                    </p>
                  </div>
                  <div className="ml-6 space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>ソフトウェアの試験設計・実施</p>
                        <div className="ml-4 mt-1 space-y-1">
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              テストケース作成、試験実施：約20件
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              テストケースの試験項目数：約200項目
                            </p>
                          </div>
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">
                              担当製品：サイボウズ Office
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <div className="text-muted-foreground">
                        <p>リリース作業の実施</p>
                        <div className="ml-4 mt-1 space-y-1">
                          <div className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                            <p className="text-sm">リリース作業対応：5回</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        不具合報告、再現確認
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        仕様確認、開発との連携
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
