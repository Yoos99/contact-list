import { useState } from 'react';
import '../../css/groupModal.css';

export default function GroupModal({
  options,
  onAddGroup,
  onRemoveGroup,
  onCloseModal,
}) {
  const [newGroup, setNewGroup] = useState('');

  const handleAddGroup = () => {
    if (newGroup.trim() !== '') {
      onAddGroup(newGroup);
      setNewGroup('');
    }
  };

  const handleRemoveGroup = (groupValue) => {
    onRemoveGroup(groupValue);
  };

  return (
    <div className="modalBackdrop">
      <div className="modalContent">
        <h2>그룹 관리</h2>
        <ul>
          {options.map((option) => (
            <li key={option.value} className="groupItem">
              {option.name}
              <button
                className="deleteButton"
                onClick={() => handleRemoveGroup(option.value)}
              >
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </li>
          ))}
        </ul>
        <div className="addGroup">
          <input
            type="text"
            placeholder="새 그룹 이름"
            value={newGroup}
            onChange={(e) => setNewGroup(e.target.value)}
          />
          <button onClick={handleAddGroup}>추가</button>
        </div>
        <button className="closeButton" onClick={onCloseModal}>
          닫기
        </button>
      </div>
    </div>
  );
}
