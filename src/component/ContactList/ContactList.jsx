import '../../css/list.css';
import '../Modal/DetailModal';
import { useState } from 'react';
import ContactDetailsModal from '../Modal/DetailModal';
export default function ContactList({ items, setList }) {
  const removeItem = (removeList) => {
    const newItems = items.filter((_, index) => index !== removeList);
    setList(newItems);
    localStorage.setItem('contactList', JSON.stringify(newItems));
  };
  const [selectedContact, setSelectedContact] = useState(null);

  const handleDetailsClick = (item) => {
    setSelectedContact(item);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p className="name">{item.name}</p>
            <p className="phoneNum">{item.phoneNumber}</p>

            <p className="group">{item.selectedGroup}</p>
            <button onClick={() => handleDetailsClick(item)}>세부사항</button>
            <button
              className="fa-regular fa-trash-can"
              onClick={() => removeItem(index)}
            ></button>
          </li>
        ))}
      </ul>
      {selectedContact && (
        <ContactDetailsModal
          contact={selectedContact}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
