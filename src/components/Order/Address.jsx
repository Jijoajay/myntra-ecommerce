import React from 'react'

export const Address = () => {
  return (
    <section className='address-section'> 
        <div className='add-address'>
            <h2>Saved Address</h2>
            <h3> + ADD NEW ADDRESS</h3>
        </div>
        <div className='address-shower'>
            <h6>DEFAULT ADDRESS</h6>
            <div className='address-container'>
                <div className='main-address'>
                    <div className='address-holder'>
                        <h5>Ajay</h5>
                        <p className='address-place'>Home</p>
                    </div>
                    <div>
                        <p>streetName</p>
                        <p>area name</p>
                        <p>city name with pincode</p>
                        <p>state name</p>
                    </div>
                    <div>
                        <p>Mobile : 232424</p>
                    </div>
                </div>
                <div className='edit-remove'>
                    <div className='button edit'>EDIT</div>
                    <div className='button'>REMOVE</div>
                </div>
            </div>
        </div>
    </section>
  )
}
