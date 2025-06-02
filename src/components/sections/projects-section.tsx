"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

// GitHub API レスポンスの型定義
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
}

/**
 * Projects セクションコンポーネント
 * GitHub API連携でリポジトリ情報を動的取得
 * TODO: 実際のGitHubユーザー名を設定してリポジトリを取得
 */
export function ProjectsSection() {
  const [repos, setRepos] = React.useState<GitHubRepo[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // GitHub API からリポジトリ情報を取得
  React.useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // GitHubユーザー名を設定（実際のユーザー名に変更してください）
        const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "tawashii"; // デフォルトをtawashiiに変更
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒タイムアウト
        
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
          { 
            signal: controller.signal,
            headers: {
              'Accept': 'application/vnd.github.v3+json',
            }
          }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("GitHubユーザーが見つかりません");
          } else if (response.status === 403) {
            throw new Error("APIの利用制限に達しました");
          }
          throw new Error(`リポジトリ情報の取得に失敗しました (${response.status})`);
        }

        const data = await response.json();
        
        // リポジトリが空の場合
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error("リポジトリが見つかりません");
        }
        
        setRepos(data);
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          setError("リクエストがタイムアウトしました");
        } else {
          setError(err instanceof Error ? err.message : "エラーが発生しました");
        }
        
        // エラー時のプレースホルダーデータを表示
        setRepos([
          {
            id: 1,
            name: "project-1",
            description: "サンプルプロジェクト1の説明",
            html_url: "#",
            homepage: null,
            language: "TypeScript",
            stargazers_count: 10,
            topics: ["react", "nextjs"],
          },
          {
            id: 2,
            name: "project-2",
            description: "サンプルプロジェクト2の説明",
            html_url: "#",
            homepage: null,
            language: "JavaScript",
            stargazers_count: 5,
            topics: ["nodejs", "api"],
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          {/* Decorative underline */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
          </div>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            GitHub連携で実際のプロジェクト情報を表示します。
          </p>
        </motion.div>

        {loading && (
          <div className="text-center">
            <p className="text-muted-foreground">
              プロジェクト情報を読み込み中...
            </p>
          </div>
        )}

        {error && (
          <div className="text-center mb-8">
            <p className="text-muted-foreground">
              {error} - プレースホルダーデータを表示しています
            </p>
          </div>
        )}

        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background/50 rounded-2xl p-6 border border-border/30 hover:shadow-lg transition-shadow"
              >
              <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>

              <p className="text-muted-foreground mb-4 line-clamp-3">
                {repo.description || "説明なし"}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  {repo.language && <span>{repo.language}</span>}
                  <span>★ {repo.stargazers_count}</span>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHubで見る"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>

                  {repo.homepage && (
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="ライブデモを見る"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
