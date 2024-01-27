import React from 'react'
import { BsBoxSeam } from "react-icons/bs";
import { BsFillCollectionFill } from "react-icons/bs";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { IoRibbonSharp } from "react-icons/io5";
import { RxCardStackMinus } from "react-icons/rx";
import { FaAmazonPay } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { CiDiscount1 } from "react-icons/ci";

export const Overview = () => {
    const linkCard = (icon, name, description) =>{
        return(
            <div className='box'>
                <p className='icon-icon'>{icon}</p>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        )
    }
  return (
    <div className='main-segment'>
        <div className='img-cont'>
            <img src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" alt="" />
            <p>EDIT PROFILE</p>
        </div>
        <div className='order-boxes'>
            {linkCard(<BsBoxSeam size={24}/>,'Orders','View all your orders')}
            {linkCard(<BsFillCollectionFill size={24}/>,'Collection & Wishlists','All your curated product collection')}
            {linkCard(<BiSolidCreditCardAlt size={24}/>,'Myntra credit','Manage all your refunds & gifft cards')}
            {linkCard(<IoRibbonSharp size={24} />,'MynCash','Earn myncash as you shop and use them in checkout')}
            {linkCard(<RxCardStackMinus size={24}/>,'Saved Cards','Save your cards for faster checkout')}
            {linkCard(<FaAmazonPay size={24}/>,'Saved Upi','view your saved UPI')}
            {linkCard(<ImProfile size={24}/>,'Profile Details','Change your profile details')}
            {linkCard(<CiDiscount1 size={24}/>,'Coupons','Manage coupons for Additional discounts')}
        </div>
    </div>
  )
}
