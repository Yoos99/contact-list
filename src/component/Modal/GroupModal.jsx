import { useState } from 'react';
import '../../css/GroupModal.css';

export default function GroupModal({ options, onAddGroup, onCloseModal }) {
  const [newGroup, setNewGroup] = useState('');

  const handleAddGroup = () => {
    if (newGroup.trim() !== '') {
      onAddGroup(newGroup);
      setNewGroup('');
      onCloseModal();
    }
  };

  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <h2>새 그룹 추가</h2>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
        <input
          type="text"
          placeholder="새 그룹 이름"
          value={newGroup}
          onChange={(e) => setNewGroup(e.target.value)}
        />
        <div className="modalButtons">
          <button onClick={handleAddGroup}>추가</button>
          <button onClick={onCloseModal}>취소</button>
        </div>
      </div>
    </div>
  );
}
