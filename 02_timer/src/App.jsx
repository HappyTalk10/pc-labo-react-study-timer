import { useEffect, useState } from "react";
import SubjectInput from "./components/SubjectInput.jsx";
import TimerDisplay from "./components/TimerDisplay.jsx";
import Controls from "./components/Controls.jsx";
import "./App.css";

const WORK_MINUTES = 25;
const TOTAL_SECONDS = WORK_MINUTES * 60;

export default function App() {
  const [subject, setSubject] = useState("");
  const [remainingSeconds, setRemainingSeconds] = useState(TOTAL_SECONDS);
  const [isRunning, setIsRunning] = useState(false);

  // state から計算できる値は、state にしない
  const canStart = subject.trim() !== "";
  const isFinished = remainingSeconds === 0;
  const isActive = isRunning && !isFinished; // 実際に動いている状態
  const hasStarted = remainingSeconds < TOTAL_SECONDS;

  // 動いている間だけ、1秒ごとに残り時間を1減らす
  useEffect(() => {
    if (!isActive) return;

    const id = setInterval(() => {
      setRemainingSeconds((prev) => prev - 1);
    }, 1000);

    // 後片付け：タイマーを止める
    return () => clearInterval(id);
  }, [isActive]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setRemainingSeconds(TOTAL_SECONDS);
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
