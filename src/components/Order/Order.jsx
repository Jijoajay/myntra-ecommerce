import React, { useEffect, useState } from 'react'
import "./Order.css"
import { OrderSidebar } from './OrderSidebar'
import { Overview } from './Overview';
import { OrderReturn } from './OrderReturn';
import { Coupon } from './Coupon';
import { Profile } from './Profile';
import { Address } from './Address';
import { ProfileEditForm } from './ProfileEditForm';
import fetch from '../../api/fetch';

export const Order = ({comp}) => {
    const [userInfo, setUserInfo] = useState([])
    useEffect(()=>{
        const fetchUserInfo = async()=>{
            try {
                const response = await fetch.get('/userInfo')
                setUserInfo(response.data)
            } catch (error) {
                console.log("error found while rendering profile", error)
            }
        }
        fetchUserInfo();
    },[])
  return (
        <main className='profile-overview-page'>
            <section className='order-page'>
                <div className='topbar'>
                    <h2>Account</h2>
                    <p>ajay</p>
                </div>
                <div className='main-content'>
                    <OrderSidebar 
                    />
                    {
                     <>
                        <div className='main-content-section'>
                            { comp === "overview" 
                            ? <Overview />
                            : comp === "order-return" 
                            ?<OrderReturn />
                            : comp === "coupons" 
                            ? <Coupon />
                            : comp === "profile"
                            ? <Profile 
                            userInfo={userInfo}
                            />
                            : comp === "address"
                            ? <Address />
                            : comp == "editprofile"
                            ? <ProfileEditForm 
                            userInfo={userInfo}
                            setUserInfo={setUserInfo}
                            />
                            :null
                            }
                        </div>
                    </>
                        
                    }
                    
                </div>
            </section>
        </main>
  )
}
