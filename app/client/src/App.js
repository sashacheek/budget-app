import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

function App() {
  const [backendData, setBackendData] = React.useState("Loading...");

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response =  await axios.get('http://localhost:5000');
        setBackendData(response.data)
      }
      catch (error) {
        console.error('Error fetching data: ', error);
        setBackendData('Failed to load data');
      }
    };

    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {backendData}
        </a>
      </header>
    </div>
  );
}

export default App;
