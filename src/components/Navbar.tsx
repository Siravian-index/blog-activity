import * as React from 'react'
import { Link } from 'react-router-dom'

interface INavbarProps {
  logged: boolean
}

const Navbar: React.FunctionComponent<INavbarProps> = ({ logged }) => {
  return (
    <nav className='flex justify-around'>
      <Link to='/'>About me</Link>
      <Link to='/blog'>Blog</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/knowledge'>Knowledge</Link>

      {logged && <Link to='/blog/form'>Blog form</Link>}
      {logged ? <button>Log out</button> : <button>Log in</button>}
    </nav>
  )
}

export default Navbar
