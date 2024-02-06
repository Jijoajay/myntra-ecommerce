import React,{useContext, useState} from 'react'
import { DataContext } from '../../context/DataContext'
import { RxCross1 } from "react-icons/rx";

export const BagAddress = () => {
    const {gotPin, pinCode, setPinCode, setGotPin} = useContext(DataContext)
    const [isEnterPincode, setIsEnterPincode] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setGotPin(true)
        setIsEnterPincode(false)
    }
  return (
    <div className='login-item'>
        {gotPin ? (
            <>
                <p>Deliver to: {pinCode}</p>
                <button>Change Address</button>
            </>
        ):(
            <>
            <h4>check delivery time & services</h4>
            <button onClick={()=>setIsEnterPincode(true)}>ENTER PINCODE</button>
            {isEnterPincode &&
                <div className='pincode-container'>
                    <div className='pincode-title'>
                        <h3>Enter Delivery Pincode</h3>
                        <p onClick={()=>setIsEnterPincode(false)}><RxCross1 /></p>
                    </div>
                    <div className='pincode-form'>
                        <form onSubmit={handleSubmit}>
                            <input type="number" value={pinCode} onChange={(e)=>setPinCode(e.target.value)} placeholder='Enter Pincode' />
                            <button className='pincode-button' type='submit'>check</button>
                        </form>
                    </div>
                </div>
            }
            </>
        )}
    </div>
  )
}
