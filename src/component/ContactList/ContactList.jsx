import '../../css/list.css';

export default function ContactList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <p>{item.phoneNumber}</p>
            <p>{item.selectedGroup}</p>
            <button>세부사항</button>
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
