export default function PhoneNumInput({ value, onChange }) {
  return (
    <div className="phoneNumber">
      <p>전화번호</p>
      <input
        type="text"
        placeholder="010-0000-0000"
        name="phoneNumber"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
