import React from 'react'
export const OrderSidebar = ({setActiveSection}) => {
  return (
    <div className='sidebar-sidebar'>
        <div>
            <h3 onClick={()=>setActiveSection(0)} className='side-link'>OVERVIEW</h3>
        </div>
        <div className='side'>
            <h3>ORDERS</h3>
            <div className='side-link'>
                <p onClick={()=>setActiveSection(1)}>Orders & Returns</p>
            </div>
        </div>
        <div className='side'>
            <h3>CREDIT</h3>
            <div className='side-link'>
                <p onClick={()=>setActiveSection(2)}>Coupons</p>
                <p>Myntra Credit</p>
                <p>MynCash</p>
            </div>
        </div>
        <div className='side'>
            <h3>ACCOUNT</h3>
            <div className='side-link'>
                <p onClick={()=>setActiveSection(3)}>Profile</p>
                <p>Saved Cards</p>
                <p>Saved Upi</p>
                <p>Saved wallet/BNPL</p>
                <p onClick={()=>setActiveSection(4)}>Addresses</p>
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
