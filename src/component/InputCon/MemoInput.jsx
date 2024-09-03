export default function MemoInput({ value, onChange }) {
  return (
    <div className="memo">
      <p>간단한 기록</p>
      <input
        type="text"
        placeholder="간단한기록"
        name="memo"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
