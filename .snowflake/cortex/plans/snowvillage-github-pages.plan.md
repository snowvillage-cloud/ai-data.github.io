# Plan: SnowVillage AI Data User Group GitHub Pages サイト作成

## Overview

`snowvillage-cloud/ai-data.github.io` リポジトリにHTML/CSS/JSのみで静的サイトを構築する。  
みん強サイト (mintsuyo.genshun9.com) のようなシングルページ構成で、Snowflakeブランドカラーを基調にしたモダンなデザイン。

## サイト構成

```
ai-data.github.io/
├── index.html          # メインページ（シングルページ）
├── style.css           # スタイルシート
├── script.js           # インタラクション
├── assets/
│   └── (images, favicon)
└── README.md           # 既存
```

## セクション構成（シングルページ）

1. **Hero（トップ）** — グループ名、キャッチコピー、アイキャッチ
2. **About** — SnowVillage AI Data User Groupとは？
3. **Events（イベント一覧）** — 次回開催 + これまでの開催イベント
4. **Members（運営メンバー）** — 運営チームの紹介
5. **Links（参加方法）** — SnowVillage Slack、TECHPLAY、connpass等

## デザイン方針

- **基調色**: Snowflakeブルー `#29B5E8` + ダーク系バックグラウンド
- **アクセント**: 白・ライトグレー、グラデーション
- **フォント**: Google Fonts（Noto Sans JP + 英語フォント）
- **レイアウト**: シングルページ、レスポンシブ（モバイル対応）
- **アニメーション**: スクロール連動のフェードイン、hover効果

## コンテンツ

### イベント情報
- **Snowflake AI Data Meetup #1** (2026/02/17) — LayerX きびたすぽ氏、Snowflake田中氏・高田氏、ぐるなび多積氏、CCCMK三浦氏
- 今後のイベントが追加しやすい構造

### グループ紹介
- SnowVillageコミュニティの「AI × Data」に特化した活動
- Snowflakeを活用したAI/データ分析の知見共有

## 技術詳細

- **ビルドツール不要**: HTML/CSS/JSのみでGitHub Pagesに直接デプロイ
- **レスポンシブ**: CSS Grid + Flexbox、メディアクエリ
- **パフォーマンス**: 画像最適化、CSSアニメーション（JSアニメーションライブラリ不使用）
- **アクセシビリティ**: セマンティックHTML、適切なalt属性、コントラスト確保
