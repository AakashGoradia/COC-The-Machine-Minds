import {Route,Routes} from 'react-router-dom'
import {Home} from './components/Home.js'
import {About} from './components/About'
// import {Navbar} from './components/Navbar';
// import {Error} from './components/Error';
import {Navbar2} from './components/Navbar2';
import { Subscribe } from './components/Subscribe.js';
import { Contact } from './components/Contact.js';
function App() {
  return (
    <>
    <div>
      {/* <Navbar /> */}
      <Navbar2 />
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/subscribe' element={<Subscribe />}/>
        <Route path='/contact' element={<Contact />}/>

        {/* <Route path='about' element={<About />}/>
        <Route path='*' element={<Error/>}/> */}
      </Routes>
    </div>
    
    </>
  );
}

export default App;
