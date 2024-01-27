import React from 'react'

export const Coupon = () => {
    const createCoupons = (offerNo,miniPurchase,code,expiry)=>{
        return(
            <div className='coupon-container'>
                <div className='offer-code'>
                    <div className='coupon-offer'>
                        <h4>{offerNo}</h4>
                        <h3>OFF</h3>
                    </div>
                    <div className='coupon-code'>
                        <p>on minimum purchase of Rs:{miniPurchase}</p>
                        <p>Code:{code}</p>
                    </div>
                </div>
                <div className='expiry-detail'>
                    <div className='coupon-expiry-date'>
                        <p>Expiry: </p>
                        <h4>{expiry}</h4>
                    </div>
                    <div className='coupon-detail'>Details</div>
                </div>
            </div>
        )
    }
  return (
    <main className='coupon-page'>
        <section className='coupon-section'>
            {createCoupons(100, 1000, "LEVIS100OFF", " FEB 29 2024")}
            {createCoupons("15%", 1500, "FAB4INDIA", " FEB 15 2024")}
        </section>
    </main>
  )
}
