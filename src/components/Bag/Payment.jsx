import React, { useState } from 'react'
import { BagOfferZone } from './BagOfferZone'
import { TiStarFullOutline } from "react-icons/ti";
import { FaGooglePay } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { SiPhonepe } from "react-icons/si";
import { SiPaytm } from "react-icons/si";

export const Payment = () => {
    const [currentPayment, setCurrentPayment] = useState(0)
  return (
    <section className='item-place'>
        <BagOfferZone />
        <h4>Choose Payment Mode</h4>
        <div className='payment-container'>
            <div className='payment-sidebar'>
                <div onClick={()=>setCurrentPayment(0)} className={`${currentPayment === 0? 'payment-active' : ""}`}>
                    <p><TiStarFullOutline /></p>
                    <p>Recommended</p>
                </div>
                <div onClick={()=>setCurrentPayment(1)} className={`${currentPayment === 1 ? 'payment-active' : ""}`}>
                    <p><FaIndianRupeeSign /></p>
                    <p>Cash on Delivery (Cash & UPI)</p>
                </div>
                <div onClick={()=>setCurrentPayment(2)} className={`${currentPayment === 2 ? 'payment-active' : ""}`}>
                    <p><FaGooglePay /></p>
                    <p>PhonePe/Google Pay/Paytm/UPI</p>
                </div>
                <div onClick={()=>setCurrentPayment(3)} className={`${currentPayment === 3 ? 'payment-active' : ""}`}>
                    <p><FaRegCreditCard /></p>
                    <p>Credit/Debit Card</p>
                </div>
            </div>
            <div className='payment-options'>
                {currentPayment === 0 ? 
                <>
                    <h3>Recommened Payment Options</h3>
                    <div className='options'>
                        <div>
                            <input type="radio" />
                            <p>Google Pay</p>
                        </div>
                        <p className='gpay-icon'><FaGooglePay size={27}/></p>
                    </div>
                </>
                :currentPayment === 1 ?
                <>
                    <h3>Cash on Delivery (Cash/UPI)</h3>
                    <p>₹10 will be charged extra for Cash on Delivery option</p>
                    <p>You can pay via cash / upi</p>
                    <button>PLACE ORDER</button>
                </>
                : currentPayment === 2 ? 
                <>
                    <h3>Pay Using UPI</h3>
                    <div className='upi-options'>
                        <div className='options-upi'>
                            <input type="radio" />
                            <p className='gpay-icon'><FaGooglePay size={27} color='orange'/></p>
                            <p>Google Pay</p>
                        </div>
                        <div className='options-upi'>
                            <input type="radio" />
                            <p className='gpay-icon'><SiPhonepe  size={27} color='violet'/></p>
                            <p>Phonepe</p>
                        </div>
                        <div className='options-upi'>
                            <input type="radio" />
                            <p className='gpay-icon'><SiPaytm  size={27} color='blue'/></p>
                            <p>Enter the UPI ID</p>
                        </div>
                        
                    </div>
                </>
                :null    
            }
            </div>
        </div>
    </section>
  )
}
