# GitHub Copilot Instructions for Portfolio Site

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## プロジェクト概要

このプロジェクトは、Next.js 14 + TypeScriptを使用したモダンなポートフォリオサイトです。

## 技術スタック

- **フレームワーク**: Next.js 14+ (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS + shadcn/ui
- **状態管理**: React hooks (useState, useEffect)
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React

## コーディング規約

1. **コンポーネント設計**: 機能ごとに明確に分割し、再利用可能な設計にする
2. **TypeScript**: 厳密な型定義を使用し、any型の使用を避ける
3. **アクセシビリティ**: ARIA属性とキーボードナビゲーションを考慮する
4. **パフォーマンス**: Core Web Vitalsを意識した最適化を行う
5. **レスポンシブ**: モバイルファーストのデザインを採用する

## 特別な要件

- ダークモード対応（システム設定連動 + 手動切り替え）
- GitHub API連携でリポジトリ情報を動的取得
- タイピングアニメーション
- スムーススクロール
- PWA対応

## コメント規約

- 関数・コンポーネントには目的と使用方法をJSDocで記述
- 複雑なロジックには日本語でのインラインコメントを追加
- 後から拡張予定の箇所には「TODO:」コメントを残す
