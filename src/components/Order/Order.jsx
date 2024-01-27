import React, { useState } from 'react'
import "./Order.css"
import { OrderSidebar } from './OrderSidebar'
import { Overview } from './Overview';
import { OrderReturn } from './OrderReturn';
import { Coupon } from './Coupon';
import { Profile } from './Profile';
import { Address } from './Address';

export const Order = () => {
    const [activeSection, setActiveSection] = useState(0)
  return (
        <main className='profile-overview-page'>
            <section className='order-page'>
                <div className='topbar'>
                    <h2>Account</h2>
                    <p>ajay</p>
                </div>
                <div className='main-content'>
                    <OrderSidebar 
                    setActiveSection={setActiveSection}
                    />
                    <div className='main-content-section'>
                        {activeSection === 0 
                        ? <Overview />
                        : activeSection === 1 
                        ?<OrderReturn />
                        : activeSection === 2 
                        ? <Coupon />
                        : activeSection === 3
                        ? <Profile />
                        : activeSection === 4
                        ? <Address />
                        :null
                        }
                    </div>
                    
                </div>
            </section>
        </main>
  )
}
