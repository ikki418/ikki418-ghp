# ポートフォリオサイト

GitHub Pagesで公開するためのシンプルでクールなポートフォリオサイトです。

## 技術スタック

- HTML5
- SCSS/CSS
- JavaScript (ES6+)
- Webpack 5
- GitHub Pages

## 機能

- レスポンシブデザイン
- SCSSコンパイル
- ライブリロード開発環境
- アニメーションエフェクト
- GitHub Actionsによる自動デプロイ

## 開発環境のセットアップ

### 前提条件

- Node.js (v14以上)
- npm (v6以上)

### インストール

```bash
# 依存パッケージのインストール
npm install
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動（http://localhost:3000/）
npm start
```

### ビルド

```bash
# 本番用にビルド
npm run build
```

### デプロイ

```bash
# GitHub Pagesへデプロイ
npm run deploy
```

または、mainブランチにプッシュすることで、GitHub Actionsにより自動的にデプロイされます。

## ディレクトリ構造

```
/
├── .github/workflows/  # GitHub Actions設定
├── src/                # ソースファイル
│   ├── scss/           # SCSSファイル
│   ├── js/             # JavaScriptファイル
│   └── assets/         # 画像やフォントなど
├── dist/               # ビルド後のファイル（自動生成）
└── webpack.*.js        # Webpack設定ファイル
```

## カスタマイズ方法

- `src/index.html`: HTML構造の編集
- `src/scss/`: スタイルの編集
- `src/js/index.js`: JavaScript機能の編集

### プロフィール情報の変更

`src/index.html`ファイル内の以下のセクションを編集してください：

- ヘッダーの名前/タイトル
- プロフィールセクションの内容
- 実績セクションのプロジェクト
- SNSリンク

## ライセンス

MIT
