import React from 'react';
import AutoCompleteText from './AutoCompleteText';
import './App.css';
import countries from './countries';

function App() {
  return (
    <div className="App">
      <div className="App-Component">
        <AutoCompleteText items={countries} />
        <br /><br />
        <AutoCompleteText items={['Adam', 'Peter', 'Sarah', 'Amon']} />
      </div>
    </div>
  );
}

export default App;
