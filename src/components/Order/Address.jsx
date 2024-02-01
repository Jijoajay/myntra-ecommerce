import React, { useState, useEffect} from 'react'
import { AddEditForm } from './AddEditForm'
import fetch from '../../api/fetch'

export const Address = () => {
    const [isAddAddress, setIsAddAddress] = useState(false)
    const [isEditAddress, setIsEditAddress] = useState(false)
    const [address, setAddress] = useState([])
    const [addressId, setAddresssId] = useState("")

    useEffect(()=>{
        const fetchAddressData = async()=>{
            try {
                const response = await fetch.get('/userAddress')
                const addresses = response.data.map((item)=>item.address)
                const defaultAddressIndex = addresses.findIndex((item)=>item.isDefault)
                if(defaultAddressIndex !== -1){
                    const defaultAddresss = response.data[defaultAddressIndex]
                    response.data.splice(defaultAddressIndex,1)
                    response.data.unshift(defaultAddresss)
                }

                setAddress(response.data)
            } catch (error) {
                console.log("error found at rendering the address", error.message)
            }
        }
        fetchAddressData();
    },[])

    const handleRemoveAddress = async(address_id)=>{
        const addressToDelete = address.find((item)=>item.id === address_id)
        try {
            if(addressToDelete){
                await fetch.delete(`/userAddress/${address_id}`)
                setAddress(address.filter((item)=> item.id!==address_id))
            }
        } catch (error) {
            console.log("error found at deleting address", error.message)
        }
    }

    const handleEditAddress = async(address_id)=>{
        setIsEditAddress(true)
        setAddresssId(address_id)
    }

  return (
    <section className={`address-section ${isAddAddress ? "opaque" : ""}`}> 
        <div className='add-address'>
            <h2>Saved Address</h2>
            <h3 onClick={()=>setIsAddAddress(!isAddAddress)}> + ADD NEW ADDRESS</h3>
        </div>
        <div className='address-shower'>
            <h6>DEFAULT ADDRESS</h6>
            {
                address.map((item)=>(
                    <>
                        <div className='address-container'>
                            <div className='main-address'>
                                <div className='address-holder'>
                                    <h5>{item.address.name }</h5>
                                    <p className='address-place'>{item.address.addressType || "Home"}</p>
                                </div>
                                <div>
                                    <p>{item.address.address}</p>
                                    <p>{item.address.town}-{item.address.pincode}</p>
                                    <p>{item.address.state}</p>
                                </div>
                                <div>
                                    <p>Mobile : {item.address.mobile}</p>
                                </div>
                            </div>
                            <div className='edit-remove'>
                                <div className='button edit' onClick={()=>handleEditAddress(item.id)}>EDIT</div>
                                <div className='button' onClick={()=>handleRemoveAddress(item.id)}>REMOVE</div>
                            </div>
                        </div>
                    </>
                ))
            }
        </div>
        { isAddAddress && 
        <AddEditForm 
        address={address}
        setAddress={setAddress}
        setIsAddAddress={setIsAddAddress}
        />}
        {isEditAddress &&
        <AddEditForm 
        address={address}
        setAddress={setAddress}
        setIsAddAddress={setIsAddAddress}
        setIsEditAddress={setIsEditAddress}
        edit={true}
        addressId={addressId}
        />
        }
    </section>
  )
}
