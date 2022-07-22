import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header'
import Footer from './Components/Shared/Footer'
import Content from './Components/Home/Content'

function App() {
  return (
    <div className="App" >
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
