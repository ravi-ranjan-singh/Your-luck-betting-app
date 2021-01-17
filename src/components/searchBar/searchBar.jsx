import './searchBar.css';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="input-field">
      <i className="fas fa-search prefix"></i>
      <input
        id="icon_prefix"
        type="text"
        className="validate"
        onChange={onSearch}
      />
      <label htmlFor="icon_prefix">Search Player</label>
    </div>
  );
};

export default SearchBar;
