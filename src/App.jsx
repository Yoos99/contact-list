// import { useState } from 'react'

import './App.css';
import { useState, useEffect } from 'react';
import Header from './component/Header';
import InputCon from './component/InputCon/InputCon';
import ContactList from './component/ContactList/contactList';
import SearchList from './component/ContactList/searchList';

function App() {
  const [items, setItems] = useState([]);

  //로컬 스토리지 저장
  useEffect(() => {
    const savedItems = localStorage.getItem('contactList');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <InputCon setList={setItems} />
        <div>
          <SearchList />
          <ContactList items={items} setList={setItems} />
        </div>
      </div>
    </>
  );
}

export default App;
