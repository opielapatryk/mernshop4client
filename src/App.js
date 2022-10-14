import './App.css';
// import { Button } from 'react-bootstrap';
import AppNavbar from './components/Navbar'
// import AppCarousel from './components/Carousel'
// import AppCard from './components/Cards'
import Contact  from './components/Contact';
// import Footer from './components/Footer'
function App() {
  return (
      <div className="App">
        <AppNavbar></AppNavbar>
        <Contact></Contact>
        {/* <header className="App-header"> */}
          {/* <Button onClick={callApi}>Call API</Button> */}
        {/* </header> */}
        {/* <AppCarousel></AppCarousel> */}
        {/* <Footer></Footer> */}
      </div>
  );
}

// function callApi() {
//     fetch('https://mernshop4server.herokuapp.com/', { method: 'GET' })
//         .then(data => data.json())
//         .then(json => alert(JSON.stringify(json)))
// }

export default App;