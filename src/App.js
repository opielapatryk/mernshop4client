import './App.css';
import { Button } from 'react-bootstrap';
import AppNavbar from './components/Navbar'
function App() {
  return (
      <div className="App">
        <AppNavbar></AppNavbar>
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