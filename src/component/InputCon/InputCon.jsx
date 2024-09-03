import { useState } from 'react';
import '../../css/InputCon.css';
import NameInput from './NameInput';
import PhoneNumInput from './PhoneNumInput';
import GroupSelect from './GroupSelect';
import MemoInput from './MemoInput';
import GroupModal from '../Modal/GroupModal';

export default function InputCon({ setList }) {
  const [options, setOptions] = useState([
    { name: '가족', value: 'family' },
    { name: '친구', value: 'friend' },
    { name: '직장', value: 'work' },
    { name: '스터디', value: 'study' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    selectedGroup: 'family',
    memo: '',
  });

  const addGroup = (newGroup) => {
    const newOption = { name: newGroup, value: newGroup.toLowerCase() };
    setOptions([...options, newOption]);
    setFormData({ ...formData, selectedGroup: newOption.value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phonePattern = /^010-\d{4}-\d{4}$/;
    return phonePattern.test(phoneNumber);
  };

  const addItem = () => {
    if (formData.name.trim().length < 2) {
      alert('이름은 2글자 이상 입력해주세요.');
      return;
    }

    if (!validatePhoneNumber(formData.phoneNumber)) {
      alert('전화번호는 010-0000-0000 형식으로 입력해주세요.');
      return;
    }

    setList((prev) => {
      const newList = [formData, ...prev];
      localStorage.setItem('contactList', JSON.stringify(newList));
      return newList;
    });

    setFormData({
      name: '',
      phoneNumber: '',
      selectedGroup: 'family',
      memo: '',
    });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="inputCon">
      <NameInput
        className="nameInput"
        value={formData.name}
        onChange={handleChange}
      />
      <PhoneNumInput value={formData.phoneNumber} onChange={handleChange} />
      <GroupSelect
        options={options}
        value={formData.selectedGroup}
        onChange={handleChange}
        onOpenModal={handleOpenModal}
      />
      <MemoInput value={formData.memo} onChange={handleChange} />
      <button onClick={addItem}>
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
