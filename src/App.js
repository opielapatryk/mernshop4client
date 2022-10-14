import './App.css';
import { Button } from 'react-bootstrap';
import AppNavbar from './components/Navbar'
import AppCarousel from './components/Carousel'
import AppCard from './components/Cards'
function App() {
  return (
      <div className="App">
        <AppNavbar></AppNavbar>
        {/* <AppCarousel></AppCarousel> */}
        <AppCard></AppCard>
        <header className="App-header">
          {/* <Button onClick={callApi}>Call API</Button> */}
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