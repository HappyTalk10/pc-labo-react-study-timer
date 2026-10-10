# 第1回 画面を作る

「25:00」の表示と、科目の入力欄を作ります。まだタイマーは動きません（第2回で動かします）。

## 実行方法

```bash
cd 01_screen
npm install
npm run dev
```

## ファイル構成

```
01_screen/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                  （画面の入口）
    ├── index.css                 （全体のスタイル）
    ├── App.jsx                   （画面全体。科目の state を持つ）
    ├── App.css                   （画面のスタイル）
    ├── components/
    │   ├── SubjectInput.jsx      （科目の入力欄）
    │   └── TimerDisplay.jsx      （「25:00」の表示）
    └── utils/
        └── time.js               （秒数を「25:00」の形にする関数）
```
