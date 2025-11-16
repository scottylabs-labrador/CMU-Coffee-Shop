import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Guide from './Guide';
import Maps from './Maps';
import sampleData from './SampleData.json';

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="App">

      {page === 0 && <Home toGuide={() => setPage(1)} />}
      {page === 1 && <Guide toMaps={() => setPage(2)}/>}
      {page === 2 && <Maps locations={sampleData} />}
  
    </div>
  );
}

export default App;
