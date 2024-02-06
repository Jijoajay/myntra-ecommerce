import React, { useState, useEffect} from 'react'
import { AddEditForm } from './AddEditForm'
import fetch from '../../api/fetch'

export const Address = ({checkout}) => {
    const [isAddAddress, setIsAddAddress] = useState(false)
    const [isEditAddress, setIsEditAddress] = useState(false)
    const [address, setAddress] = useState([])
    const [addressId, setAddresssId] = useState("")
    const [defaultAddress, setDefaultAddress] = useState("")

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
    const handleRadioChecked = async (id) => {
            setDefaultAddress(id);
            const foundAddress = address.find((item)=>item.id === id)
            const previousAddress = address.find((item)=>item.address.isDefault === true)
            if (previousAddress && previousAddress.id !== id) {
                // Set the isDefault property to false for the previous default address
                const updatedPreviousAddresses = {
                    id:id,
                    address:{
                        name:previousAddress.address.name,
                        mobile:previousAddress.address.mobile,
                        pincode:previousAddress.address.pincode,
                        state:previousAddress.address.state,
                        address:previousAddress.address.address,
                        town:previousAddress.address.town,
                        district:previousAddress.address.district,
                        addresssType : previousAddress.address.addressType,
                        isDefault: false
                    }
                };
                await  fetch.put(`/userAddress/${previousAddress.id}` ,updatedPreviousAddresses)
            }
            const updatedAddresses = {
                id:id,
                address:{
                    name:foundAddress.address.name,
                    mobile:foundAddress.address.mobile,
                    pincode:foundAddress.address.pincode,
                    state:foundAddress.address.state,
                    address:foundAddress.address.address,
                    town:foundAddress.address.town,
                    district:foundAddress.address.district,
                    addresssType : foundAddress.address.addressType,
                    isDefault: true
                }
            }
            await fetch.put(`/userAddress/${id}`, updatedAddresses);
            setAddress(prevAddresses => prevAddresses.map(address => 
                address.id === id ? updatedAddresses : address
            ));
    };

    useEffect(()=>{
        const fetchAddressData = async()=>{
            try {
                const response = await fetch.get('/userAddress')
                const addresses = response.data.map((item)=>item.address)
                const defaultAddressIndex = addresses.findIndex((item)=>item.isDefault === true)
                if(defaultAddressIndex !== -1){
                    const defaultAddresss = response.data[defaultAddressIndex]
                    response.data.splice(defaultAddressIndex,1)
                    response.data.unshift(defaultAddresss)
                    setAddress(response.data)
                }
                setAddress(response.data)
            } catch (error) {
                console.log("error found at rendering the address", error.message)
            }
        }
        fetchAddressData();
    },[defaultAddress])
  return (
    <section className={`address-section ${isAddAddress ? "opaque" : ""}`}> 
        <div className='add-address'>
            <h2>Saved Address</h2>
            <h3 onClick={()=>setIsAddAddress(!isAddAddress)}> + ADD NEW ADDRESS</h3>
        </div>
        <div className='address-shower'>
            <h6>DEFAULT ADDRESS</h6>
            {address.map((item) => (
                <div key={item.id} className='address-container'>
                    <div className='main-address'>
                        {checkout ? (
                            <div className='checkout-address-holder'>
                                <input
                                    type="radio"
                                    checked={item.address.isDefault === true}
                                    onChange={() => handleRadioChecked(item.id)}
                                />
                                <div className='holder-type'>
                                    <h5>{item.address.name}</h5>
                                    <p className='address-place'>{item.address.addressType || "Home"}</p>
                                </div>
                            </div>
                        ) : (
                            <div className='address-holder'>
                                <h5>{item.address.name}</h5>
                                <p className='address-place'>{item.address.addressType || "Home"}</p>
                            </div>
                        )}
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
                        <div className='button edit' onClick={() => handleEditAddress(item.id)}>EDIT</div>
                        <div className='button' onClick={() => handleRemoveAddress(item.id)}>REMOVE</div>
                    </div>
                </div>
            ))}
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
