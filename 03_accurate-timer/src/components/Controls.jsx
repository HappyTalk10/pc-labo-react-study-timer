// 開始・一時停止・リセットのボタン。押された時の処理は、親（App）から受け取る
export default function Controls({
  isActive,
  hasStarted,
  isFinished,
  canStart,
  onStart,
  onPause,
  onReset,
}) {
  return (
    <div className="buttons">
      {isActive ? (
        <button onClick={onPause}>一時停止</button>
      ) : (
        <button onClick={onStart} disabled={!canStart || isFinished}>
          {hasStarted ? "再開" : "開始"}
        </button>
      )}
      <button className="secondary" onClick={onReset}>
        リセット
      </button>
    </div>
  );
}
