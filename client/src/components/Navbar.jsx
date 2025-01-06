import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/elite_logo.png'
import Posts from '../pages/Posts'


const Navbar = () => {
  return (
    <header className='bg-gradient-to-r from-gray-800 via-gray-900 to-black py-4 px-8 flex justify-between items-center'>
        <div className="flex items-center space-x-3 text-white text-xl">
        <Link to="/" className="flex items-center space-x-2">
            <img src={Logo} alt="logo" width={50} height={50} />
            <span className="font-bold text-2xl bg-gradient-to-r from-red-500 to-indigo-500 bg-clip-text text-transparent">
            Devchronicles
            </span>
        </Link>
        </div>
        <nav>
            <ul className='flex space-x-6'>
                <li>
                    <Link className='text-white' to='/pages/Posts'>
                        Posts
                    </Link>
                </li>
                <li>
                    <Link className='text-white'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar