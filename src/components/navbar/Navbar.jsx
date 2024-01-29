import React,{useState} from 'react'
import { FaUser } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { FaShoppingBag } from 'react-icons/fa';
import "./navbar.css"
import {Link} from "react-router-dom";
import { ProfileHover } from './ProfileHover';
import { ProductHover } from './ProductHover';
export const Navbar = ({isAuthenticate ,phNo,handleLogout}) => {
    const [hoveredItem, setHoveredItems] = useState(null)
    const handleMouseEnter = (item)=>{
        setHoveredItems(item)
    }
    const handleMouseLeave = ()=>{
        setHoveredItems(null)
    }
    
  return (
        <nav className='navbar-container'>
            <div><Link to="/" className='link'>
                <img src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png" alt="" />
                </Link></div>
            <div className='navbar-menu'>
                <ul>
                    <li onMouseEnter={()=>handleMouseEnter("men")} onMouseLeave={handleMouseLeave}>Men</li>
                    { hoveredItem === "men" &&
                    <>
                        <div className='hover-menu-container'onMouseEnter={()=>handleMouseEnter("men")} onMouseLeave={handleMouseLeave}>
                            <ProductHover 
                            cate={"men"} />
                        </div>
                    </>}
                    <li onMouseEnter={()=>handleMouseEnter("men")} onMouseLeave={handleMouseLeave}>Women</li>
                    { hoveredItem === "women" &&
                    <>
                        <div className='hover-menu-container' onMouseEnter={()=>handleMouseEnter("women")} onMouseLeave={handleMouseLeave}>
                            <ProductHover 
                            cate={"women"} />
                        </div>
                    </>}
                    <li>Kids</li>
                    <li>Beauty</li>
                </ul>
            </div>
            <div className='navbar-icons'>
                <div className='icon profile' onMouseEnter={()=>handleMouseEnter("profile")} onMouseLeave={handleMouseLeave}>
                    <FaUser size={20}  />
                    <p>profile</p>
                </div>
                    {hoveredItem === "profile" && 
                        <>
                            <div className='hover-container' onMouseEnter={()=>handleMouseEnter("profile")} onMouseLeave={handleMouseLeave}>
                                <ProfileHover 
                                isAuthenticate={isAuthenticate}
                                handleLogout={handleLogout}
                                phNo={phNo}
                                />
                            </div>
                        </>
                    }
                <div className='icon heart' >
                    <Link to='/wishlist' className='icon heart'>
                        <IoIosHeart size={20}  />
                        wishlist
                    </Link>
                </div>
                <div className='icon bag'>
                <Link to="/checkout" className='link bag'><FaShoppingBag size={20}  />
                    Bag</Link>
                </div>
            </div>
        </nav>
    
  )
}
