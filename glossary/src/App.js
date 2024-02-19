import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Glossary from './components/Glossary';
import { useState } from 'react';


function App() {
  // Constants that hold the current info about programing concept beggins null
  const [selectedInfo, setSelectedInfo] = useState(null);
  return (
    <div>
      {/* Header */}
      <div className="Header-Container">
        <Header></Header>
      </div>
        <div className='Main-Container'>
         {/* calls the component Table and passes the function setSelectedInfo as a paremeter */}
          <div className="Table-Container"><Table onInfoSelect={setSelectedInfo}/></div>
          {/* onece the selectedInfo changes the Glossary Displays the change */}
          <div className='Glossary-Container'>{selectedInfo && <Glossary Title={selectedInfo.Title} Image={selectedInfo.Image} Text={selectedInfo.Text} Question={selectedInfo.Question} Answer={selectedInfo.Answer} info={selectedInfo} />}</div>
        </div>
    </div>
  );
}

export default App;



let number = 5
let string = "This is an example of variable"
let bool = true
let float = 3.4


