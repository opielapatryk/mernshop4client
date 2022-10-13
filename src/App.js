import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Button onClick={callApi}>Call API</Button>
        </header>
      </div>
  );
}

function callApi() {
    fetch('https://mernshop4server.herokuapp.com/', { method: 'GET' })
        .then(data => data.json())
        .then(json => alert(JSON.stringify(json)))
}

export default App;