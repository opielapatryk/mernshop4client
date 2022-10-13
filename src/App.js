import './App.css';
import { Button } from 'react-bootstrap';
import CollapsibleExample from './components/Navbar'
function App() {
  return (
      <div className="App">
        <CollapsibleExample></CollapsibleExample>
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