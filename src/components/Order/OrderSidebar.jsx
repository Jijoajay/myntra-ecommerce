import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const OrderSidebar = () => {
    const [sidebar, setSidebar] = useState("overview")
  return (
    <div className='sidebar-sidebar'>
        <div>
        <p  onClick={()=>setSidebar("overview")}><Link to="/my/dashboard" className={`${sidebar === "overview" ? 'sidebar-active' : "link"}`} >Overview</Link></p>
        </div>
        <div className='side'>
            <h3>ORDERS</h3>
            <div className='side-link'>
            <p onClick={()=>setSidebar("order-return")}><Link to="/my/order-return" className={`${sidebar === "order-return" ? 'sidebar-active' : "link"}`} >Orders & Returns</Link></p>
            </div>
        </div>
        <div className='side'>
            <h3>CREDIT</h3>
            <div className='side-link'>
                <p  onClick={()=>setSidebar("coupon")}><Link to="/my/coupons" className={`${sidebar === "coupon" ? 'sidebar-active' : "link"}`}>Coupons</Link></p>
                <p>Myntra Credit</p>
                <p>MynCash</p>
            </div>
        </div>
        <div className='side'>
            <h3>ACCOUNT</h3>
            <div className='side-link'>
                <p onClick={()=>setSidebar("profile")}><Link to="/my/profile"className={`${sidebar === "profile" ? 'sidebar-active' : "link"}`} >profile</Link></p>
                <p>Saved Cards</p>
                <p>Saved Upi</p>
                <p>Saved wallet/BNPL</p>
                <p onClick={()=>setSidebar("address")}><Link to="/my/address" className={`${sidebar === "address" ? 'sidebar-active' : "link"}`}>Addresses</Link></p>
            </div>
        </div>
        <div className='side'>
            <h3>LEGAL</h3>
            <div className='side-link'>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}
