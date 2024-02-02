import React, { useState } from 'react';
import fetch from '../../api/fetch';

export const AddEditForm = ({ setIsAddAddress,setIsEditAddress, address, setAddress,edit,addressId }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        pincode: '',
        state: '',
        address: '',
        town: '',
        district: '',
        addressType: '',
        isDefault: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };
    const handleUpdate = async (address_id, e) => {
        e.preventDefault();
    
        const { name, mobile, pincode, state, address, town, district, addressType, isDefault } = formData;
    
        const updatedAddress = {
            name,
            mobile,
            pincode,
            state,
            address,
            town,
            district,
            addressType,
            isDefault
        };
    
        try {
            await fetch.put(`/userAddress/${address_id}`, updatedAddress);
        } catch (error) {
            console.log('Error found at updating address:', error.message);
        }
    };
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        const id = address.length ? address.length  + 1 : 1
        const newAddress = {
            id:id,
            address:formData
        }
        try {
            await fetch.post('/userAddress', newAddress)
            if (formData.isDefault){
                setAddress([newAddress, ...address])
            }else{
                setAddress([...address, newAddress])
            }
        } catch (error) {
            console.log("error at posting address", error)
        }
        setFormData({
            name:"",
            mobile: '',
            pincode: '',
            state: '',
            address: '',
            town: '',
            district: '',
            addressType: '',
            isDefault: false
        })
        setIsAddAddress(false)
    };
    const addresses = address.find((item)=>item.id === addressId)

    return (
        <>
            <div className='add-edit-form'>
                <h3>{edit ? "EDIT ADDRESS" : "ADD NEW ADDRESS" }</h3>
                {edit ? 
                <>
                    <div className='add-edit-input'>
                        <input type="text" name="name" value={addresses.address.name} placeholder='Name' onChange={handleChange} />
                        <input type="text" name="mobile" value={addresses.address.mobile} placeholder='Mobile' onChange={handleChange} />
                        <div className='pincode-state'>
                            <input type="text" name="pincode" value={addresses.address.pincode} placeholder="Pincode" onChange={handleChange} />
                            <input type="text" name="state" value={addresses.address.state} placeholder='State' onChange={handleChange} />
                        </div>
                        <input type="text" name="address" value={addresses.address.address} placeholder='Address' onChange={handleChange} />
                        <input type="text" name="town" value={addresses.address.town} placeholder='Town/City' onChange={handleChange} />
                        <input type="text" name="district" value={addresses.address.district} placeholder='City/District' onChange={handleChange} />
                        <div className='address-type'>
                            <label>Type of Address</label>
                            <div className='type'>
                                <div>
                                    <input type="radio" name="addressType" value="Home" checked={addresses.address.addressType === 'Home'} onChange={handleChange} />
                                    <label>Home</label>
                                </div>
                                <div>
                                    <input type="radio" name="addressType" value="Office" checked={addresses.address.addressType === 'Office'} onChange={handleChange} />
                                    <label>Office</label>
                                </div>
                            </div>
                            <div className='default'>
                                <input type="checkbox" name="isDefault" checked={addresses.address.isDefault} onChange={handleChange} />
                                <p>Make this as my default address</p>
                            </div>
                        </div>
                    </div>
                </>
                :
                <>
                    <div className='add-edit-input'>
                        <input type="text" name="name" value={formData.name} placeholder='Name' onChange={handleChange} />
                        <input type="text" name="mobile" value={formData.mobile} placeholder='Mobile' onChange={handleChange} />
                        <div className='pincode-state'>
                            <input type="text" name="pincode" value={formData.pincode} placeholder="Pincode" onChange={handleChange} />
                            <input type="text" name="state" value={formData.state} placeholder='State' onChange={handleChange} />
                        </div>
                        <input type="text" name="address" value={formData.address} placeholder='Address' onChange={handleChange} />
                        <input type="text" name="town" value={formData.town} placeholder='Town/City' onChange={handleChange} />
                        <input type="text" name="district" value={formData.district} placeholder='City/District' onChange={handleChange} />
                        <div className='address-type'>
                            <label>Type of Address</label>
                            <div className='type'>
                                <div>
                                    <input type="radio" name="addressType" value="Home" checked={formData.addressType === 'Home'} onChange={handleChange} />
                                    <label>Home</label>
                                </div>
                                <div>
                                    <input type="radio" name="addressType" value="Office" checked={formData.addressType === 'Office'} onChange={handleChange} />
                                    <label>Office</label>
                                </div>
                            </div>
                            <div className='default'>
                                <input type="checkbox" name="isDefault" checked={formData.isDefault} onChange={handleChange} />
                                <p>Make this as my default address</p>
                            </div>
                        </div>
                    </div>
                </>

                }
            </div>
            <div className='cancel-save'>
                <button className='button cancel' onClick={() => {setIsAddAddress(false) ||setIsEditAddress(false)}}>CANCEL</button>
                {edit ? 
                <button className='button save' onClick={(e)=>handleUpdate(address.id,e)}>Update</button>
                :
                <button className='button save' onClick={handleSubmit}>SAVE</button>
                }
            </div>
        </>
    );
};
