// import { useState } from 'react'

import './App.css';
import { useState } from 'react';
import Header from './component/Header';
import InputCon from './component/InputCon/InputCon';
import ContactList from './component/ContactList/contactList';
import SearchList from './component/ContactList/searchList';

function App() {
  const [items, setItems] = useState([]);

  return (
    <>
      <Header />
      <div className="container">
        <InputCon setList={setItems} />
        <div>
          <SearchList />
          <ContactList items={items} />
        </div>
      </div>
    </>
  );
}

export default App;
