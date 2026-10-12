# pc-labo-react-study-timer

[PC-LABO](https://pc-labo.online/) の「Reactで学ぶ 学習タイマー開発」（全7回＋発展編）で使うコードをまとめたリポジトリです。

科目を入力して25分のタイマーを動かし、勉強した時間を記録・集計するアプリを、Reactで少しずつ作っていきます。

## 前提

- 「PC-LABOを試すためのJavaScript・React入門」（全3回）
- 「Reactで学ぶ 予定管理アプリ開発」（全6回）

## 回とフォルダの対応

各フォルダは、その回が終わった時点の完成コードです。

| 回 | 内容 | フォルダ |ブログ|
| --- | --- | --- | ---|
| 第1回 | 画面を作る | `01_screen` |[Reactで学ぶ 学習タイマー開発（第1回）～画面を作る～【GitHub対応】](https://pc-labo.online/2026/10/10/learning-study-timer-development-with-react-part1/)|
| 第2回 | タイマーを動かす | `02_timer` |[Reactで学ぶ 学習タイマー開発（第2回）～タイマーを動かす～【GitHub対応】](https://pc-labo.online/2026/10/11/learning-study-timer-development-with-react-part2/)
| 第3回 | ずれないタイマーにする | 準備中 |
| 第4回 | アナログ時計で表示する | 準備中 |
| 第5回 | 終了をお知らせする | 準備中 |
| 第6回 | 記録を保存する | 準備中 |
| 第7回 | 集計して公開する | 準備中 |

## 使い方

1. このリポジトリのページで「Code」→「Codespaces」→「Create codespace on main」を選ぶ
2. ターミナルで、動かしたい回のフォルダに移動して実行する

（例）
```bash
cd 01_screen
npm install
npm run dev
```

ターミナルに表示される `http://localhost:5173/` を開きます（Codespacesでは「ブラウザーで開く」のボタンが表示されます）。止める時は `Ctrl + C` を押します。

Node.js 22 が入った環境が自動で用意されます（`.devcontainer/devcontainer.json`）。
