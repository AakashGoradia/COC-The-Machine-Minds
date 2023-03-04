import {Route,Routes} from 'react-router-dom'
import {Home} from './components/Home.js'
import {About} from './components/About'
import {Navbar} from './components/Navbar';
import {Error} from './components/Error';

function App() {
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='*' element={<Error/>}/>
      
    </Routes>
    </>
  );
}

export default App;