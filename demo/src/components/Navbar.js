import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav class='bg-white'>
<Link to='/' > Home</Link>
<Link to='/about'> ABOUT</Link>
{/* <Link to='*'>Error</Link> */}
    </nav>
  )
}