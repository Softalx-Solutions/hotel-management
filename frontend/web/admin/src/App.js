import React, {useState} from 'react';
import './App.css';
import {Header} from './components';
import SideBar from './components/SideBar';



function App() {
  const [openSideBar, setOpenSideBar] = useState(false)
  return (
    <div className="App">
      {/* <SideBar isOpen={openSideBar} toggle={setOpenSideBar}/> */}
      <Header isOpen={openSideBar} toggle={setOpenSideBar}/>
    </div>
  );
}

export default App;
