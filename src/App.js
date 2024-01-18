import React from 'react';
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import group from "./asssets/group.png"
import Cards from './components/Cards';
import MessageChat from './components/MessageChat';
function App() {
  return (
    <div className="App">
      <div className='flex'>
            <Cards />
            <MessageChat />

          </div>
    </div>
  );
}

export default App;
