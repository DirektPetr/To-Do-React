import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('todolist')) || []
  );

  // const [items, setItems] = useState(
  //   [
  //     {
  //       id: 1,
  //       checked: true,
  //       item: 'Выучить HTML',
  //     },
  //     {
  //       id: 2,
  //       checked: true,
  //       item: 'Выучить CSS',
  //     },
  //     {
  //       id: 3,
  //       checked: false,
  //       item: 'Выучить JS',
  //     },
  //     {
  //       id: 4,
  //       checked: false,
  //       item: 'Выучить React',
  //     },
  //   ]
  // );

  const handleCheck = (id) => {
    const listItems = items.map(function (item) {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(listItems);
    localStorage.setItem('todolist', JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter(function (item) {
      return item.id !== id;
    });
    setItems(listItems);
  };
  return (
    <div className="App">
      <Header />
      <Content
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
