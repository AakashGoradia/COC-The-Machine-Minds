import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Navbar2 from './components/Navbar2';
import Subscribe from './components/Subscribe';
import Contact from './components/Contact';
import TryApi from './components/TryApi';
import Landing from './pages/Landing';

function App() {
  return (
    <>
    <div>
      <Navbar2 />
      {/* <Landing/> */}
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/subscribe' element={<Subscribe />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/TryApi' element={<TryApi />}/>

      </Routes>
    </div>
      </>

  );
}

export default App;
