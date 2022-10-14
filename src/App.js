import './App.css';
import {Routes, Route} from "react-router-dom"
import Contact from './components/Contact'
import Products from './components/Products'
import RODO from './components/RODO'
import Aboutus from './components/Aboutus'
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Contact/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/rodo' element={<RODO/>}/>
          <Route path='/products' element={<Products/>}/>
        </Routes>
      </div>
  );
}



export default App;