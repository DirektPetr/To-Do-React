import { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItem = ({ newItems, setNewItems, handelSubmit }) => {
  const inputRef = useRef();

  return (
    <div className="wrapper-form">
      <form className="addForm" onSubmit={handelSubmit}>
        <input
          type="text"
          autoFocus
          ref={inputRef}
          id="addForm"
          placeholder="Add item"
          required
          value={newItems}
          onChange={(e) => setNewItems(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Add item"
          onClick={() => inputRef.current.focus()}
        >
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default AddItem;
