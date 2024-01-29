import React from 'react'
import { FaFilter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

export const OrderReturn = () => {
  return (
    <section className='order-return-page'>
        <div className='order-return'>
            <div>
                <h3>All orders</h3>
                <p>from anything</p>
            </div>
            <div className='search-filter'>
                <input type="search"  placeholder='Search in Orders' className='search'/>
                <div className='filter'>
                    <p><FaFilter /></p>
                    <p>FILTER</p>
                </div>
            </div>
        </div>
        <div className='order-return-item-container'>
            <div className='order-return-items'>
                <div className='order-message'>
                    <p>pip</p>
                </div>
                    <div className='order-return-product'>
                        <div className='img-content'>
                            <img src="https://assets.myntassets.com/f_webp,dpr_1,q_10,w_200,c_limit,fl_progressive/assets/images/11963366/2020/9/24/a4c73849-e07e-483f-9d55-298feec698b81600948175951-Roadster-Men-Sweaters-2901600948174174-1.webp" alt="" />
                            <div>
                                <p>roadster</p>
                                <p>description</p>
                                <p>Size:S</p>
                            </div>
                        </div>
                        <p className='order-icon'><IoIosArrowForward /></p>
                    </div>
                    <ul className='order-return-exchange'>
                        <li>Exchange/Return window closed on 10 Jan</li>
                    </ul>
                    <div className='review-cont'>
                        <p>RateProduct</p>
                        <div className='review-star'>
                        {[...Array(5)].map((_,index)=>(
                            <p key={index}><FaStar /></p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
