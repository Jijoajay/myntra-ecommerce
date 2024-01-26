import React, {useState } from 'react'

export const LoginByOtp = ({otpInputRef, otp, phNo, handleKeyChange, 
handleOtpChange, handleResendOtp, setContWithPassword, isContinue,count, setCount}) => {

    setTimeout(()=>{
        const timer = ()=>{
            if(count === 0){
                // alert('OTP expired')
                console.log("otp expired")
            }else if(isContinue){
                setCount((prevCount)=> prevCount - 1)
            }
        }
        timer();
    },1000)

    return (
    <>
        <img src="https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg" alt="" />
        <h3>Verify with otp</h3>
        <p>send to {phNo}</p>
        <div className='otp-boxes'>
            {
            otp.map((digit,index)=>(
                <>
                    <input type="number" 
                    key={index}
                    ref={otpInputRef.current[index]}
                    value={digit}
                    maxLength={1}
                    onChange={(e)=>handleOtpChange(index, e.target.value)}
                    onKeyUp={(e)=>handleKeyChange(e,index)}
                    />
                </>
            ))}
        </div>
        {
            (isContinue && count > 0) ? (
                <p>Resent OTP in : 00:{count.length === 1 ? "0"+count : count}</p>
            ) : (
                <h5 onClick={()=>handleResendOtp}>RESEND OTP</h5>
            )
        }
        <p>login using <span className='otp-span' onClick={()=>setContWithPassword(true)}>password</span></p>
        <p>Have trouble loggin in ? <a href="#">Get help</a></p>
    </>
  )
}
