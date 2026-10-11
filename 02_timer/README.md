# 第2回 タイマーを動かす

`useEffect` と `setInterval` で、1秒ごとに残り時間を減らします。開始・一時停止・再開・リセットもできるようにします。

## 実行方法

```bash
cd 02_timer
npm install
npm run dev
```

## 第1回からの変更点

| ファイル | 変更 |
| --- | --- |
| `src/App.jsx` | `remainingSeconds`・`isRunning` の state と、`useEffect` を追加 |
| `src/components/Controls.jsx` | 新規。開始・一時停止・再開・リセットのボタン |
| `src/components/SubjectInput.jsx` | `disabled` を受け取れるようにした |
| `src/App.css` | 入力欄が無効の時のスタイルを追加 |
