import './App.css';
import Header from './components/Header';
import Table from './components/Table';
import Glossary from './components/Glossary';


function App() {
  return (
    <div>
      <div className="Header-Container">
        <Header></Header>
      </div>
        <div className='Main-Container'>
          <div className="Table-Container"><Table></Table></div>
          <div className='Glossary-Container'><Glossary></Glossary></div>
        </div>
    </div>
  );
}

export default App;
