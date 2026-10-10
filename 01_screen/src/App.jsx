import { useState } from "react";
import SubjectInput from "./components/SubjectInput.jsx";
import TimerDisplay from "./components/TimerDisplay.jsx";
import "./App.css";

const WORK_MINUTES = 25;

export default function App() {
  const [subject, setSubject] = useState("");

  // 第1回は固定の値。第2回から、減っていくようにする
  const remainingSeconds = WORK_MINUTES * 60;

  // 科目が空（または空白だけ）の時は、開始できない
  const canStart = subject.trim() !== "";

  return (
    <main className="app">
      <h1>学習タイマー</h1>

      <SubjectInput value={subject} onChange={setSubject} />

      <TimerDisplay remainingSeconds={remainingSeconds} />

      <div className="buttons">
        <button disabled={!canStart}>開始</button>
        <button className="secondary">リセット</button>
      </div>

      <p className="note">
        {canStart
          ? `「${subject}」を${WORK_MINUTES}分、学習します`
          : "科目を入力すると、開始できます"}
      </p>
    </main>
  );
}
