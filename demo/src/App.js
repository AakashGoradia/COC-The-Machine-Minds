import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Navbar2 from './components/Navbar2';
import Subscribe from './pages/Subscribe';
import TryApi from './pages/TryApi';
import AboutUs from './pages/AboutUs';
import Doc from './pages/Doc'
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <div>
      <Navbar2 />
      <Routes>
        <Route path='/doc' element={<Doc/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/subscribe' element={<Subscribe />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/TryApi' element={<TryApi />}/>
        <Route path='/profile' element={<Profile />}/>

      </Routes>
    </div>
      </>

  );
}

export default App;
