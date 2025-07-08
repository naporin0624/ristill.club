# ristill.club

![ristill.club](public/ogp.jpg)

VRChatで活動するりすてぃる（おてぃる）のファンクラブサイトです。2025年誕生日を祝う特設ページを公開しています。

**🌐 公開サイト**: [ristill.club/2025](https://ristill.club/2025)

## 📝 プロジェクトについて

このウェブサイトは、VRChatキャラクター「おてぃる」のファンクラブサイトです。

2025年の誕生日（7月7日）を祝う特設ページでは、コミュニティメンバーから集めた3,000枚の画像を使用した24,000タイルのモザイクアートを公開しています。また、ファングループの紹介や参加者の紹介も掲載しています。

### 主な機能

- モザイクアート展示：24,000タイルで構成された記念モザイクアート
- 素材ギャラリー：使用された全ての画像を閲覧できるギャラリー
- コミュニティ情報：ファングループの紹介と参加方法
- レスポンシブデザイン：モバイル・タブレット・デスクトップ対応

## 🛠️ 技術スタック

- **フレームワーク** — Next.js 15.3.3 (App Router)
- **React** — 19.1.0
- **言語** — TypeScript 5.5.2
- **スタイリング** — Vanilla Extract CSS
- **テスト** — Vitest
- **デプロイ** — Cloudflare Workers (OpenNext)
- **パッケージマネージャー** — pnpm

## 🚀 開発環境のセットアップ

### 前提条件

- Node.js 18以上
- pnpm

### インストール

```bash
# リポジトリをクローン
git clone git@github.com:naporin0624/ristill.club.git
cd ristill.club

# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

### 利用可能なコマンド

```bash
# 開発
pnpm dev          # 開発サーバー起動
pnpm build        # プロダクションビルド
pnpm start        # プロダクションサーバー起動

# 品質チェック
pnpm lint         # ESLint + Prettier チェック
pnpm fmt          # コード自動フォーマット
pnpm typecheck    # TypeScript型チェック
pnpm test         # テスト実行

# デプロイ
pnpm preview      # ローカルでプレビュー
pnpm deploy       # Cloudflareにデプロイ
```

## 📁 プロジェクト構造

```
src/
├── app/                    # Next.js App Router ページ
│   ├── (birthday)/2025/   # 2025年記念ページ
│   └── _components/       # ページ固有コンポーネント
├── components/            # 再利用可能コンポーネント
├── themes/               # グローバルスタイル・テーマ
├── utils/                # ユーティリティ関数
├── adapters/             # 外部ライブラリアダプター
└── assets/               # 静的リソース
```

## 🎨 開発ガイドライン

このプロジェクトは厳格なコーディング規約に従っています。

### 重要なルール

- **イミュータブルプログラミング** — `let`キーワード、非null演算子(`!`)、`forEach()`の使用禁止
- **Vanilla Extract** — 名前空間インポート (`import * as styles`) を使用
- **useEffect制限** — 実際の副作用のみに使用、コメント必須
- **コンポーネント設計** — Server Components優先、Client Components は理由をコメント
- **日付処理** — dayjs使用必須、ネイティブDateオブジェクト禁止

詳細は以下のドキュメントを参照してください。

- [`docs/tech-stack.md`](docs/tech-stack.md) - 技術スタック・プロジェクト構造
- [`docs/coding-conventions.md`](docs/coding-conventions.md) - コーディング規約
- [`docs/styling.md`](docs/styling.md) - スタイリングガイドライン
- [`docs/testing.md`](docs/testing.md) - テスト戦略
- [`docs/development.md`](docs/development.md) - 開発ワークフロー

## 🤝 コントリビューション

このプロジェクトはファンクラブサイトとして作成されたものですが、バグ報告や改善提案は歓迎します。

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'feat: add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

### 品質チェック

プルリクエスト前に必ず以下のコマンドを実行してください。

```bash
pnpm lint && pnpm typecheck && pnpm test
```

## 📜 ライセンス

このプロジェクトは個人的なファンクラブサイトです。使用されている画像や素材は、それぞれの作成者に著作権があります。

## 🎉 謝辞

- **おてぃる** — このプロジェクトの主役
- **イラスト提供** — メスガキリョナ太郎
- **協力** — ねこぱん
- **画像提供** — 全ての参加者の皆様

特設サイトの詳細な参加者一覧は[こちら](https://ristill.club/2025)をご覧ください。

---

**🎂 おてぃるお誕生日おめでとう**
