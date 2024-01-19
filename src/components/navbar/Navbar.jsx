import React,{useState} from 'react'
import { FaUser } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { FaShoppingBag } from 'react-icons/fa';
import "./navbar.css"
import {Link} from "react-router-dom";
export const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = ()=>{
        setIsHovered(true)
        console.log("mouseenterd")
    }
    const handleMouseLeave = ()=>{
        setIsHovered(false)
        console.log("mouse leave")
    }
    
  return (
        <nav className='navbar-container'>
            <div><Link to="/" className='link'> Myntra </Link></div>
            <div className='navbar-menu'>
                <ul>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div className='navbar-icons'>
                <div className='icon profile'>
                    <FaUser size={20}  />
                    profile
                </div>
                <div className='icon heart'>
                    <IoIosHeart size={20}  />
                    wishlist
                </div>
                <div className='icon bag'>
                <Link to="/checkout" className='link bag'><FaShoppingBag size={20}  />
                    Bag</Link>
                </div>
            </div>
        </nav>
    
  )
}
