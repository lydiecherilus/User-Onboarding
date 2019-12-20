import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm'


function App() {
  return (
    <div className="App">

      <UserForm />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thank you <code>for filling</code> the form.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lambda School 2019!
        </a>
      </header>
    </div>
  );
}
export default App;
