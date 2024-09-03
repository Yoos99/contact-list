import { useState } from 'react';
import '../../css/searchList.css';

export default function SearchList({ items, setFilteredItems }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.key === 'Enter') {
      filterItems(e.target.value);
    }
  };

  const filterItems = (term) => {
    if (term.trim() === '') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter(
        (item) =>
          item.name.includes(term) ||
          item.phoneNumber.includes(term) ||
          item.selectedGroup.includes(term)
      );
      setFilteredItems(filtered);
    }
  };

  const showAllItems = () => {
    setSearchTerm('');
    setFilteredItems(items);
  };

  return (
    <div className="searchList">
      <input
        type="text"
        placeholder="검색어를 입력 후 엔터를 누르세요."
        value={searchTerm}
        onChange={handleSearch}
        onKeyUp={handleSearch}
      />
      <button onClick={showAllItems}>전체리스트 보기</button>
    </div>
  );
}
