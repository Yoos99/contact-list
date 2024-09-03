import '../../css/list.css';

export default function ContactList({ items, setList }) {
  const removeItem = (removeList) => {
    const newItems = items.filter((_, index) => index !== removeList);
    setList(newItems);
    localStorage.setItem('contactList', JSON.stringify(newItems));
  };

  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.phoneNumber}</p>
            <p>{item.selectedGroup}</p>
            <button>세부사항</button>
            <button
              className="fa-regular fa-trash-can"
              onClick={() => removeItem(index)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}
