import React,{useState} from 'react'
import { FaUser } from 'react-icons/fa';
import { IoIosHeart } from 'react-icons/io';
import { FaShoppingBag } from 'react-icons/fa';
import "./navbar.css"
import {Link, useNavigate} from "react-router-dom";
import { ProfileHover } from './ProfileHover';
import { ProductHover } from './ProductHover';
import { IoIosSearch } from "react-icons/io";

export const Navbar = ({isAuthenticate ,phNo,handleLogout, product, search, setSearch}) => {
    const [hoveredItem, setHoveredItems] = useState(null)
    const navigate = useNavigate()
    const handleMouseEnter = (item)=>{
        setHoveredItems(item)
    }
    const handleMouseLeave = ()=>{
        setHoveredItems(null)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate(`/product/${search}`)
    }
  return (
        <nav className='navbar-container'>
            <div><Link to="/" className='link'>
                <img src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png" alt="" />
                </Link></div>
            <div className='navbar-menu'>
                <ul>
                    <li onMouseEnter={()=>handleMouseEnter("men")} onMouseLeave={handleMouseLeave}><Link className='link' to="/men">MEN</Link></li>
                    { hoveredItem === "men" &&
                    <>
                        <div className='hover-menu-container'onMouseEnter={()=>handleMouseEnter("men")} onMouseLeave={handleMouseLeave}>
                            <ProductHover 
                            product={product}
                            cate={hoveredItem} />
                        </div>
                    </>}
                    <li onMouseEnter={()=>handleMouseEnter("women")} onMouseLeave={handleMouseLeave}><Link to={'/women'} className='link'>WOMEN</Link> </li>
                    { hoveredItem === "women" &&
                    <>
                        <div className='hover-menu-container' onMouseEnter={()=>handleMouseEnter("women")} onMouseLeave={handleMouseLeave}>
                            <ProductHover 
                            product={product}
                            cate={hoveredItem} />
                        </div>
                    </>}
                    <li>KIDS</li>
                    <li>BEAUTY</li>
                </ul>
            </div>
            <div className='navbar-search'>
                <form onSubmit={handleSubmit}>
                    <IoIosSearch  size={16} className='search-icon'/>
                    <input type="search" placeholder='Search for product,brands and more' 
                    value={search} onChange={(e) => setSearch(e.target.value)} 
                    />
                </form>
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
                        <p>wishlist</p>
                    </Link>
                </div>
                <div className='icon bag'>
                <Link to="/checkout" className='link bag'>
                    <FaShoppingBag size={20}  />
                    <p>Bag</p>
                    </Link>
                </div>
            </div>
        </nav>
    
  )
}
