import React from 'react'
import {Link} from "react-router-dom"
export const ProfileHover = () => {
  return (
    <>
        <div className='profileItem'>
            <h4>Welcome</h4>
            <p>To access account and manage order</p>
            <button><Link to="/login" style={{textDecoration:"none" ,color:"#FF3F6C"}}> LOGIN / SIGNUP </Link></button>
        </div>
        <div className='profileItem'>
            <p>orders</p>
            <p>wishlists</p>
            <p>Gift Cards</p>
            <p>Contact us</p>
        </div>
        <div className='profileItem'>
            <p>Myntra Credits</p>
            <p>Coupons</p>
            <p>Saved address</p>
        </div>
    </>
  )
}
