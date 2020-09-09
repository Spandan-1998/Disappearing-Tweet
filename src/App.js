import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">
     
     {/* sidebar */}
      <Sidebar />
     {/*feed*/}
     <Feed/>

     {/*widgets*/}
     <Widgets />
    </div>
  );
}

export default App;
