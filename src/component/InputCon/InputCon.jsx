import { useState } from 'react';
import '../../css/InputCon.css';
import NameInput from './NameInput';
import PhoneNumberInput from './PhoneNumInput';
import GroupSelect from './GroupSelect';
import MemoInput from './MemoInput';
import GroupModal from '../Modal/GroupModal';

export default function InputCon() {
  const [options, setOptions] = useState([
    { name: '가족', value: 'family' },
    { name: '친구', value: 'friend' },
    { name: '직장', value: 'work' },
    { name: '스터디', value: 'study' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const addGroup = (newGroup) => {
    setOptions([...options, { name: newGroup, value: newGroup.toLowerCase() }]);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="inputCon">
      <NameInput />
      <PhoneNumberInput />
      <GroupSelect options={options} onOpenModal={handleOpenModal} />
      <MemoInput />
      <button>
        <i className="fa-solid fa-plus"></i>
      </button>
      {isModalOpen && (
        <GroupModal
          options={options}
          onAddGroup={addGroup}
          onCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}
