const SearchItem = ({ searchItem, setSearchItem }) => {
  return (
    <div className="wrapper-form">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          role="searchbox"
          id="searchForm"
          placeholder="Search Item"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchItem;
