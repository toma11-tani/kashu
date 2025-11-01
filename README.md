# 台湾グルメ 佳集（カシュウ）- 公式ウェブサイト

台湾料理店「台湾グルメ 佳集」の公式ウェブサイトです。  
台湾の家庭の味をそのまま日本で提供する、温かみのある小規模な飲食店向けに制作されています。

---

## 🎨 デザインコンセプト

- **テーマ**: 台湾の家庭の味・提灯・暖色系・家庭的な雰囲気
- **カラーパレット**:
  - Brick: `#C46A4A`
  - Lantern Yellow: `#F6D56B`
  - Jade Green: `#2E7D6F`
  - Teal: `#6FC1B3`
  - Off White: `#FFF8E7`
  - Charcoal: `#2B2B2B`
- **フォント**: Noto Sans JP (Google Fonts)

---

## 📁 プロジェクト構成

```
project-root/
├─ index.html                # トップページ
├─ menu.html                 # メニューページ
├─ access.html               # 店舗情報ページ
├─ owner.html                # 店長についてページ
├─ README.md                 # このファイル
└─ assets/
   ├─ css/
   │  ├─ reset.css          # CSSリセット
   │  └─ style.css          # メインスタイルシート
   ├─ js/
   │  └─ main.js            # メインJavaScript
   └─ img/
      ├─ hero_shop.jpg       # 店舗外観写真（ユーザー提供）
      └─ menu_luroufan.jpg   # ルーローハン写真（ユーザー提供）
```

---

## 🚀 使い方

### 1. 画像の配置

以下の2枚の画像を `assets/img/` フォルダに配置してください：

- **hero_shop.jpg** - 店舗外観写真（トップページのヒーロー画像として使用）
- **menu_luroufan.jpg** - ルーローハン（魯肉飯）の写真

### 2. 店舗情報の更新

#### access.html（店舗情報ページ）

以下の情報を実際の店舗情報に差し替えてください：

- 住所
- 営業時間
- 定休日
- 電話番号
- 最寄駅とアクセス方法

**検索キーワード（コメント内）**: `実際の〜に差し替えてください`

#### Googleマップの埋め込み

`access.html` と `index.html` のマップセクションにある iframe の `src` 属性を、実際のGoogleマップ埋め込みURLに差し替えてください。

```html
<!-- 現在の埋め込みURLを実際のURLに差し替え -->
<iframe src="実際のGoogleマップ埋め込みURL" ...>
```

#### JSON-LD構造化データの更新

`index.html` の `<head>` 内にある JSON-LD を実際の店舗情報に更新してください：

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "台湾グルメ 佳集",
  "telephone": "+81-90-0000-0000",  // ← 実際の電話番号に変更
  "address": {
    "streetAddress": "大阪市〇〇区〇〇〇",  // ← 実際の住所に変更
    ...
  }
}
```

### 3. 電話番号リンクの更新

全HTMLファイルのヘッダー内にある「電話する」ボタンのリンクを更新してください：

```html
<!-- 現在 -->
<a href="tel:+81-90-0000-0000" class="btn btn-primary">電話する</a>

<!-- 実際の電話番号に変更 -->
<a href="tel:+81-XX-XXXX-XXXX" class="btn btn-primary">電話する</a>
```

### 4. メニューの更新

`menu.html` のメニュー内容（料理名・価格・説明文）を実際のメニューに合わせて更新してください。

### 5. お知らせの更新

`index.html` の「お知らせ」セクションを、実際のお知らせ内容に更新してください。

---

## 💻 技術仕様

- **フレームワーク**: なし（素のHTML/CSS/JavaScript）
- **ビルド**: 不要
- **ブラウザ対応**: モダンブラウザ全般（IE11非対応）
- **レスポンシブ**: 360px～大画面まで対応
- **アクセシビリティ**: WCAG 2.1 AA準拠を目指した実装
  - Skip Link（メインコンテンツへスキップ）
  - 適切な見出し構造
  - ARIAラベル・ロール
  - フォーカススタイル
  - 代替テキスト

---

## 📱 機能一覧

### 共通機能

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **ハンバーガーメニュー**: モバイル画面でのナビゲーション
- **固定ヘッダー**: スクロール時もヘッダーが固定表示
- **スムーススクロール**: ページ内リンクのスムーズなスクロール

### index.html（トップページ）

- ヒーローセクション（店舗外観写真）
- 名物紹介（ルーローハン）
- 3つの特徴
- お知らせ一覧
- Googleマップ埋め込み

### menu.html（メニューページ）

- カテゴリ別メニュー表示
  - 看板メニュー
  - ご飯もの
  - 麺・点心
  - 小皿・副菜
  - ドリンク
- 料理カードのホバーエフェクト
- アレルゲン・辛さアイコン

### access.html（店舗情報ページ）

- 営業時間・定休日
- 連絡先
- 所在地・アクセス
- 店内設備
- お支払い方法
- Googleマップ埋め込み
- 店舗外観写真
- アクセス詳細

### owner.html（店長についてページ）

- 店長の想い
- これまでの歩み
- プロフィール
- 料理へのこだわり

---

## 🎯 SEO対策

- **メタタグ**: title, description, keywords
- **Open Graph**: Facebook/LINEなどのSNSシェア対応
- **Twitter Card**: Twitter投稿時のカード表示対応
- **JSON-LD構造化データ**: Google検索での店舗情報表示
- **セマンティックHTML**: 適切なタグ使用

---

## 🔒 セキュリティ

- 外部リンクに `rel="noopener noreferrer"` 自動付与
- XSS対策のための適切なエスケープ

---

## 🌐 ホスティング

このサイトは静的サイトのため、以下のホスティングサービスで簡単にデプロイできます：

- **GitHub Pages** (無料)
- **Netlify** (無料プランあり)
- **Vercel** (無料プランあり)
- **Firebase Hosting** (無料プランあり)
- **レンタルサーバー** (FTPアップロード)

### デプロイ方法（例: GitHub Pages）

1. GitHubリポジトリを作成
2. プロジェクトファイルをプッシュ
3. リポジトリ設定 → Pages → Source を設定
4. 数分後に公開URL（`https://username.github.io/repository-name/`）でアクセス可能

---

## 📝 カスタマイズのヒント

### カラーの変更

`assets/css/style.css` の `:root` セクションでカラーパレットを一括変更できます：

```css
:root {
  --brick: #C46A4A;           /* メインカラー */
  --lantern-yellow: #F6D56B;  /* アクセントカラー */
  --jade-green: #2E7D6F;      /* サブカラー */
  --teal: #6FC1B3;            /* サブカラー2 */
  --off-white: #FFF8E7;       /* 背景色 */
  --charcoal: #2B2B2B;        /* テキスト色 */
}
```

### フォントの変更

`<head>` 内のGoogle Fontsリンクと、CSSの `font-family` を変更してください。

---

## 🐛 トラブルシューティング

### 画像が表示されない

- 画像ファイル名が正確に `hero_shop.jpg` と `menu_luroufan.jpg` になっているか確認
- 画像が `assets/img/` フォルダに配置されているか確認
- 画像のファイル形式が `.jpg` か確認（大文字小文字も区別されます）

### モバイルメニューが動かない

- `assets/js/main.js` が正しく読み込まれているか確認
- ブラウザのコンソール（F12）でエラーが出ていないか確認

### Googleマップが表示されない

- iframe の `src` 属性に正しい埋め込みURLが設定されているか確認
- Googleマップの埋め込みAPI設定が有効になっているか確認

---

## 📄 ライセンス

このプロジェクトは「台湾グルメ 佳集」専用に作成されたものです。

---

## 🙏 クレジット

- **デザイン・開発**: AI Assistant
- **フォント**: [Google Fonts - Noto Sans JP](https://fonts.google.com/noto/specimen/Noto+Sans+JP)
- **アイコン**: カスタムSVG（インライン）

---

## 📞 お問い合わせ

ウェブサイトに関するご質問・不具合報告は、店舗へ直接お問い合わせください。

**台湾グルメ 佳集**  
- 電話: 090-0000-0000（実際の番号に差し替え）
- Googleマップ: https://maps.app.goo.gl/ZUtZpYweGie38UBK9
- 食べログ: https://tabelog.com/osaka/A2701/A270101/27143052/

---

© 2025 台湾グルメ 佳集 All Rights Reserved.

