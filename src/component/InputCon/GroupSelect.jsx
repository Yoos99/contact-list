export default function GroupSelect({ options, value, onChange, onOpenModal }) {
  return (
    <div className="group">
      <p>그룹</p>
      <select name="selectedGroup" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <button onClick={onOpenModal}>그룹 관리</button>
    </div>
  );
}
