import { Link } from 'react-router'

function Navbar({ user, handleLogout }) {
  return (
    <nav>
      <Link to='/'>Homepage</Link>
      <Link to='/zaids'>All Zaids</Link>
      <Link to='/zaids/create'>Create Zaid</Link>
    </nav>
  )
}

export default Navbar