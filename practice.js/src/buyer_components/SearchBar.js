import React from 'react';
import productsdata from '../productsdata';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import  {useHistory } from 'react-router-dom';

export default function SearchBar() {
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }
  let history = useHistory();

  const handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        history.push('/product')
      }
  }

 
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 400 }} onKeyPress={handleKeyPress}>
          <ReactSearchAutocomplete
            items={productsdata}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
      </header>
    </div>
  );
};
