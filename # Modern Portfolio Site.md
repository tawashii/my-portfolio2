# Modern Portfolio Site

Next.js 14 + TypeScript + Tailwind CSSで構築したモダンなポートフォリオサイト

## 🚀 特徴

- **最新技術スタック**: Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **モダンUI**: shadcn/ui コンポーネント
- **スムーズアニメーション**: Framer Motion
- **レスポンシブデザイン**: モバイルファーストアプローチ
- **ダークモード対応**: システム設定連動 + 手動切り替え
- **GitHub API連携**: 動的なプロジェクト情報取得
- **タイピングエフェクト**: カスタムタイピングアニメーション
- **アクセシビリティ**: ARIA属性対応
- **パフォーマンス最適化**: Core Web Vitals準拠

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 14+
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS + shadcn/ui
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **テーマ**: next-themes

## 📦 セットアップ

1. 依存関係のインストール:
```bash
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

3. ブラウザで [http://localhost:3000](http://localhost:3000) を開く

## 🎨 カスタマイズ

### 個人情報の更新

1. `components/hero-section.tsx` - 名前とプロフィール情報
2. `components/contact-section.tsx` - 連絡先情報
3. `components/projects-section.tsx` - GitHubユーザー名

### GitHub API設定

`components/projects-section.tsx`の`GITHUB_USERNAME`を実際のユーザー名に変更:

```typescript
const GITHUB_USERNAME = 'your-actual-github-username'
```

### カラーテーマの変更

`app/globals.css`のCSS変数を編集してカラーテーマをカスタマイズ

## 📂 プロジェクト構造

```
my-portfolio2/
├── app/                    # Next.js App Router
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   └── page.tsx           # メインページ
├── components/            # Reactコンポーネント
│   ├── ui/               # shadcn/ui基本コンポーネント
│   ├── hero-section.tsx  # ヒーローセクション
│   ├── about-section.tsx # Aboutセクション
│   ├── skills-section.tsx # スキルセクション
│   ├── projects-section.tsx # プロジェクトセクション
│   ├── contact-section.tsx # コンタクトセクション
│   ├── navigation.tsx    # ナビゲーション
│   ├── theme-provider.tsx # テーマプロバイダー
│   └── typewriter-effect.tsx # タイピングエフェクト
├── lib/                   # ユーティリティ
│   └── utils.ts          # 共通関数
├── tailwind.config.js     # Tailwind CSS設定
└── package.json          # 依存関係
```

## 🚀 デプロイ

### Vercel（推奨）

1. GitHubリポジトリをVercelに接続
2. 自動でビルド・デプロイが実行される

### その他のプラットフォーム

- **Netlify**: `npm run build` でビルド後、`out`フォルダをデプロイ
- **GitHub Pages**: GitHub Actionsを使用して自動デプロイ

## 🔧 開発者向け

### 新しいセクションの追加

1. `components/`フォルダに新しいコンポーネントを作成
2. `app/page.tsx`にインポート・追加
3. `components/navigation.tsx`にナビゲーションリンクを追加

### カスタムアニメーションの追加

Framer Motionを使用してカスタムアニメーションを実装:

```typescript
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  コンテンツ
</motion.div>
```

## 📝 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 🤝 コントリビューション

プルリクエストや Issue の投稿を歓迎します！

## 📞 サポート

質問や問題がございましたら、[Issues](https://github.com/your-username/my-portfolio2/issues) までお気軽にどうぞ。
