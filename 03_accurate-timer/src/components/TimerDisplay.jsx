import { formatTime } from "../utils/time.js";

// 残り時間（秒）を受け取って、「25:00」の形で表示する
export default function TimerDisplay({ remainingSeconds }) {
  return <p className="timer">{formatTime(remainingSeconds)}</p>;
}
