// 科目の入力欄。値と、変更された時の処理は、親（App）から受け取る
export default function SubjectInput({ value, onChange, disabled }) {
  return (
    <label className="subject">
      科目
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="例：英語、数学、プログラミング"
        disabled={disabled}
      />
    </label>
  );
}
