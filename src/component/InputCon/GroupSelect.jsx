export default function GroupSelect({ options, onOpenModal }) {
  return (
    <div className="group">
      <p>그룹</p>
      <select>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <button onClick={onOpenModal}>조직추가</button>
    </div>
  );
}
