import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: 'Выучить HTML',
    },
    {
      id: 2,
      checked: true,
      item: 'Выучить CSS',
    },
    {
      id: 3,
      checked: false,
      item: 'Выучить JS',
    },
    {
      id: 4,
      checked: false,
      item: 'Выучить React',
    },
  ]);

  const handleCheck = (id) => {
    // const listItems = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    const listItems = items.map(function (item) {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(listItems);
  };

  const handleDelete = (id) => {
    // const listItems = items.filter(item => item.id !== id);
    const listItems = items.filter(function (item) {
      return item.id !== id;
    });
    setItems(listItems);
  };

  return (
    <main className="content-main">
      {items.length ? (
        // Чтобы что-то вставить в тег, используем {} (в данном случае это массив items)
        <ul>
          {/* Чтобы перебрать массив items нужен метод map */}
          {items.map((item) => (
            // И вводим что нам нужно отрисовать (li) и с помощью key={item.id} (по количеству id) показываем сколько нужно отрисовать тегов li
            <li className="item" key={item.id}>
              {/* Выводим поле (input) с типом checkbox */}
              <input
                type="checkbox"
                className="checkbox-style"
                // Добавляем состояние поля и берем его из элемента объекта item значение checked (true или false)
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              {/* Выводим label */}
              <label
                style={item.checked ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {/* В лейбле выводим значение элементе объекта item */}
                {item.item}
              </label>
              {/* Выводим иконку */}
              <FaTrash
                // Прописываем роль кнопки
                role="button"
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p
          style={{
            marginTop: '40px',
            color: 'red',
            fontSize: '40px',
            fontWeight: 'Bold',
            textAlign: 'center',
          }}
        >
          Your list is Empty!
        </p>
      )}
    </main>
  );
};

export default Content;
