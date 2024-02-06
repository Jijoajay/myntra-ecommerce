import React from 'react'
import { BiSolidOffer } from "react-icons/bi";

export const BagOfferZone = () => {
  return (
    <div className='offer-zone'>
        <div className='offer'>
            <p><BiSolidOffer /></p>
            <p>Available Offers</p>
        </div>
        <div className='offer-list'>
            <ul>
                <li>10% instant discount on icici credit cards </li>
            </ul>
        </div>
    </div>
  )
}
