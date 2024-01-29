import React from 'react'
import {Link} from "react-router-dom"
export const ProfileHover = ({isAuthenticate, phNo, handleLogout}) => {
  console.log(isAuthenticate)
  return (
    <>
        <div className='profileItem'>
            <h4>Welcome</h4>
            {isAuthenticate ?
            <p>{phNo}</p>
            :
            <>
              <p>To access account and manage order</p>
              <button><Link to="/login" style={{textDecoration:"none" ,color:"#FF3F6C"}}> LOGIN / SIGNUP </Link></button>
            </>
            }
        </div>
        <div className='profileItem'>
            <p><Link to='/my/order-return' className='link'>orders</Link></p>
            <p><Link to={'/wishlist'} className='link'>wishlists</Link></p>
            <p>Gift Cards</p>
            <p>Contact us</p>
        </div>
        <div className='profileItem'>
            <p>Myntra Credits</p>
            <p><Link to="/my/coupons" className='link'>Coupons</Link></p>
            <p><Link to="/my/address" className="link"></Link>Saved address</p>
        </div>
        {isAuthenticate &&
        <div className='profileItem'>
          <p><Link to="/my/editprofile" className='link'>Edit Profile</Link></p>
          <p onClick={()=>handleLogout()}>Logout</p>
        </div> 
        }
    </>
  )
}
