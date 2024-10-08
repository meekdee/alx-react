import React from 'react';
import logo from './holberton-logo.jpg'; // Ensure the logo filename matches
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
      <hr className='Divider'/>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
      </body>
      {/* <hr className='Divider'/> */}
      <footer className="App-footer">
        <p>Copyright 2020 - Holberton School</p>
      </footer>
    </div>
  );
}

export default App;
