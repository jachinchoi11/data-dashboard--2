import React, {useState} from 'react';


function SearchBar({onSearch}) {
    const [search, setSearch] = useState('');
    const [typeofBrewery, settypeofBrewery] = useState('all');
    const [state, setState] = useState('all');

    const clickOnSearch = () => {
        onSearch(search, typeofBrewery, state);
    };


return (
    <div>
        <input 
        type="text"
        placeholder="Search using name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick = {clickOnSearch}>Search</button>
        <label>Filter by Type:</label>
      <select
        value={typeofBrewery}
        onChange={(e) => settypeofBrewery(e.target.value)}
      >
        <option value="all">All</option>
        <option value="micro">Micro</option>
        <option value="brewpub">Brew Pub</option>
        <option value="large">Large</option>
      </select>

      <label>Filter by State:</label>
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="California">California</option>
        <option value="Texas">Texas</option>
      </select>
    </div>
  );
}
export default SearchBar;