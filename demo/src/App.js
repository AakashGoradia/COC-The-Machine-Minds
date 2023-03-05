import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import Documentation from './components/Documentation';
import Navbar2 from './components/Navbar2';
import Subscribe from './components/Subscribe';
import About from './components/About';
import TryApi from './components/TryApi';
import Landing from './pages/Landing';
import Profile from './components/Profile';

function App() {
  return (
    <>
    <div>
      <Navbar2 />
      {/* <Landing/> */}
      <Routes>
        <Route path='/doc' element={<Documentation/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/subscribe' element={<Subscribe />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/TryApi' element={<TryApi />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </div>
      </>

  );
}

export default App;
