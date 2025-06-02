# tawashi Portfolio

テクニカルライター・QAエンジニアtawashiのポートフォリオサイトです。Next.js 14とTypeScriptを使用して構築されています。

## 特徴

### 🚀 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS + shadcn/ui
- **アニメーション**: Framer Motion
- **アイコン**: Lucide React
- **テーマ**: next-themes (ダークモード対応)

### ✨ 主な機能

- **レスポンシブデザイン**: モバイルファースト対応
- **ダークモード**: システム設定連動 + 手動切り替え
- **スムーススクロール**: ナビゲーション連動
- **GitHub API連携**: プロジェクト情報の動的取得
- **PWA対応**: Progressive Web App
- **アクセシビリティ**: ARIA属性、キーボードナビゲーション

### 📱 セクション構成

1. **Hero Section**: プロフィール紹介とタイピングアニメーション
2. **About Section**: 詳細なプロフィールと現在の取り組み
3. **Work Experience Section**: 職歴・経験の詳細（6年間の経歴）
4. **Skills Section**: 技術スタックとスキルレベル
5. **Projects Section**: GitHub連携プロジェクト表示
6. **Contact Section**: SNSリンク（Twitter, Zenn, LAPRAS）

## 開発の開始

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

### ビルド

```bash
npm run build
```

## カスタマイズ

### 環境変数の設定

1. `.env.example` をコピーして `.env.local` を作成：

```bash
cp .env.example .env.local
```

2. 以下の環境変数を設定：

```bash
# GitHubユーザー名（Projects セクションで使用）
NEXT_PUBLIC_GITHUB_USERNAME=your-github-username

# ソーシャルメディアリンク
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/your-username
NEXT_PUBLIC_BLOG_URL=https://your-blog.com
NEXT_PUBLIC_EMAIL=your-email@example.com
```

### PWAアイコンの設定

`public/icons/` フォルダに以下のアイコンを配置：

- `icon-192.png` (192x192px)
- `icon-512.png` (512x512px)

SVGファイルが提供されているので、オンラインツールやデザインソフトでPNGに変換してください。

### プロフィール画像の追加

1. `public/` フォルダにプロフィール画像を配置：
   ```
   public/
   ├── profile.jpg (推奨サイズ: 400x400px以上の正方形)
   ```

2. `src/components/sections/about-section.tsx` を更新：
   ```tsx
   // プロフィール画像プレースホルダーを以下のように置き換え
   <div className="relative">
     <img
       src="/profile.jpg"
       alt="tawashi profile"
       className="w-full h-full object-cover rounded-2xl"
     />
   </div>
   ```

3. 画像の最適化（推奨）：
   - 形式: JPG, PNG, WebP
   - サイズ: 400x400px以上
   - ファイルサイズ: 500KB以下

### コンテンツのカスタマイズ

- **Hero Section**: `src/components/sections/hero-section.tsx` - タイピングアニメーションのテキストを変更
- **About Section**: `src/components/sections/about-section.tsx` - プロフィール詳細を追加
- **Skills Section**: `src/components/sections/skills-section.tsx` - スキルとレベルを更新
- **Contact Section**: `src/components/sections/contact-section.tsx` - 連絡先情報を更新

### サイト情報の更新

- `src/app/layout.tsx`: メタデータ
- `public/manifest.json`: PWA設定

## デプロイ

### Vercel (推奨)

```bash
npm run build
```

Vercelにプッシュするだけで自動デプロイされます。

### その他のプラットフォーム

静的サイトとしてエクスポート:

```bash
npm run build
npm run export
```

## 開発ガイドライン

### コンポーネント設計

- 機能ごとに分割
- TypeScript厳密型付け
- 再利用可能な設計

### コーディング規約

- ESLint + Prettier設定済み
- コンポーネントにはJSDocコメント
- アクセシビリティ配慮

## ライセンス

MIT License

---

Built with ❤️ using Next.js and TypeScript
