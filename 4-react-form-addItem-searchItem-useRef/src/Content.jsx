import { FaTrash } from 'react-icons/fa';

const Content = ({ items, setItems, handleCheck, handleDelete }) => {
  return (
    <main className="content-main">
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                className="checkbox-style"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <label
                style={item.checked ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <FaTrash
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
