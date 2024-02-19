import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Glossary from './components/Glossary';
import { useState } from 'react';


function App() {
  const [selectedInfo, setSelectedInfo] = useState(null);
  return (
    <div>
      <div className="Header-Container">
        <Header></Header>
      </div>
        <div className='Main-Container'>
          <div className="Table-Container"><Table onInfoSelect={setSelectedInfo} /></div>
          <div className='Glossary-Container'>{selectedInfo && <Glossary Title={selectedInfo.Title} Image={selectedInfo.Image} Text={selectedInfo.Text} />}</div>
        </div>
    </div>
  );
}

export default App;
