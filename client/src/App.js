import logo from './logo.svg';
import './App.css';
import { useCallback, useContext, useEffect, useState } from 'react';
import { URLContext } from './index.js';

//const dotenv = require('dotenv')
//dotenv.config()

function App() {
  let [text, setText] = useState('');
  const requestURL = useContext(URLContext);
  const getText = useCallback(async function () {
    try {
      //console.log(process.env.REACT_APP_BACKEND_URL);//
      let response = await fetch(requestURL + '/app-works');
      if (response.ok) {
        let result = await response.text();
        console.log(result);
        setText(result);
      }
    } catch (error) {
      console.error(error.message);
      alert("Error");
      return;
    }
  }, [requestURL]);
  useEffect(() => {
    getText();
  }, [getText]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{text.length > 0 ? text : "Loading..."}</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
