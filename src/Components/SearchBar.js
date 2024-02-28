import "./SearchBar.css"; // Import CSS file for styling

const SearchBar = ({ onSearch }) => {
  return (
    <form className="search-bar">
      <input type="text" placeholder="Buscar..." className="search-input" />
      <button type="submit" className="search-button">
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
