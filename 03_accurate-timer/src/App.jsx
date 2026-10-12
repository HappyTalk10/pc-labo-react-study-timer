import { useEffect, useRef, useState } from "react";
import SubjectInput from "./components/SubjectInput.jsx";
import TimerDisplay from "./components/TimerDisplay.jsx";
import Controls from "./components/Controls.jsx";
import "./App.css";

const WORK_MINUTES = 25;
const TOTAL_MS = WORK_MINUTES * 60 * 1000; // ミリ秒で持つ
const TICK_MS = 200; // 残り時間を確かめる間隔

export default function App() {
  const [subject, setSubject] = useState("");
  const [remainingMs, setRemainingMs] = useState(TOTAL_MS);
  const [isRunning, setIsRunning] = useState(false);

  // 終了予定の時刻。画面には表示しないので、state ではなく ref に入れる
  const endTimeRef = useRef(null);

  // state から計算できる値は、state にしない
  const canStart = subject.trim() !== "";
  const isFinished = remainingMs === 0;
  const isActive = isRunning && !isFinished; // 実際に動いている状態
  const hasStarted = remainingMs < TOTAL_MS;
  const remainingSeconds = Math.ceil(remainingMs / 1000); // 表示用（切り上げ）

  // 動いている間だけ、残り時間を確かめ続ける
  useEffect(() => {
    if (!isActive) return;

    const id = setInterval(() => {
      // 数えるのではなく、「終了予定時刻 − 今の時刻」を計算する
      setRemainingMs(Math.max(endTimeRef.current - Date.now(), 0));
    }, TICK_MS);

    // 後片付け：タイマーを止める
    return () => clearInterval(id);
  }, [isActive]);

  const handleStart = () => {
    // 終了予定時刻 = 今の時刻 + 残り時間
    endTimeRef.current = Date.now() + remainingMs;
    setIsRunning(true);
  };

  const handlePause = () => {
    // 止めた瞬間の残り時間を、正確に取っておく
    setRemainingMs(Math.max(endTimeRef.current - Date.now(), 0));
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingMs(TOTAL_MS);
  };

  let message;
  if (isFinished) {
    message = `お疲れさまでした！「${subject}」を${WORK_MINUTES}分、学習しました`;
  } else if (isActive) {
    message = `「${subject}」を学習中です`;
  } else if (hasStarted) {
    message = `「${subject}」を一時停止中です`;
  } else if (canStart) {
    message = `「${subject}」を${WORK_MINUTES}分、学習します`;
  } else {
    message = "科目を入力すると、開始できます";
  }

  return (
    <main className="app">
      <h1>学習タイマー</h1>

      <SubjectInput
        value={subject}
        onChange={setSubject}
        disabled={hasStarted}
      />

      <TimerDisplay remainingSeconds={remainingSeconds} />

      <Controls
        isActive={isActive}
        hasStarted={hasStarted}
        isFinished={isFinished}
        canStart={canStart}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
      />

      <p className="note">{message}</p>
    </main>
  );
}
