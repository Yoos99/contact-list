export default function NameInput({ value, onChange }) {
  return (
    <div className="name">
      <p>이름</p>
      <input
        type="text"
        placeholder="두 글자 이상 입력해주세요"
        name="name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
