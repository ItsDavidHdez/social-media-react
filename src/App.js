import React from 'react';
import './Global.css';
import Header from './components/Header';
import TopCards from './components/TopCards';
import Overview from './components/Overview';
import Switch from './components/Switch';

function App() {
  return (
    <>
      <Header>
        <Switch />
      </Header>
      <TopCards />  
      <Overview />
    </>
  ); 
}

export default App;
