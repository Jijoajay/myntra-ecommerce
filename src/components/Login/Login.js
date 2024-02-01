import React, {useState, useRef, useContext} from 'react'
import "./Login.css"
import { LoginByEmail } from './LoginByEmail'
import { LoginByOtp } from './LoginByOtp'
import { LoginInterface } from './LoginInterface'
import {useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'

export const Login = () => {
    const verifyNumber = "3455"
    const navigate = useNavigate()
    const [count, setCount] = useState(30)
    const [error, setError] = useState(false)
    const [placeholder, setPlaceholder] = useState("")
    const [isContinue, setIsContinue] = useState(false)
    const [otp, setOtp] = useState(new Array(4).fill(""))
    const [Passplaceholder, setPassPlaceholder] = useState("")
    const [contWithPassword, setContWithPassword] = useState(false);
    const {phNo, setPhNo, setIsAuthenticate} = useContext(DataContext)
    const otpInputRef = useRef([...Array(4)].map(()=>React.createRef()))
    
    const handlePlaceHolder = (item)=>{
        if(item === "password"){
            setPassPlaceholder(item)
        }else{
            setPlaceholder(item)
        }
    }
    const removePlaceHolder = (pass)=>{
        if(pass){
            setPassPlaceholder("")
        }else{
            setPlaceholder('')
        }
    }

    const handleContinue = ()=>{
        if(phNo.length !== 10 ){
            setError(true)
        }else{
            alert("your otp number is 3455")
            setIsContinue(!isContinue)
        }
    }
    const handleOtpChange = (index, value) => {
        const focusOnInput = (inputIndex) => {
            otpInputRef.current[inputIndex].current.focus();
        };
    
        if ((value.length === 0) && index > 0) {
            focusOnInput(index - 1);
        } else if (value.length === 1 && index < 3) {
            focusOnInput(index + 1)
        }
    
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
    };

    const handleKeyChange = (e,index)=>{
        if(e.key === "Backspace" && !e.target.value && index > 0){
            otpInputRef.current[index - 1].current.focus()
        }else if(e.key === "Enter" && e.target.value && index < 3){
            otpInputRef.current[index + 1].current.focus()
        }
    }

    const handleResendOtp = ()=>{
        console.log("sending otp to the user")
        setIsContinue(true)
        setCount(30);
    }
     
    const handleSubmit = ()=>{
        if(otp.length === 4){
            if(otp.join("") === verifyNumber){
                localStorage.setItem("phoneNumber", phNo)
                setIsAuthenticate(true)
                navigate('/')
            }else{
                alert("please provide the correct otp")
            }
        }else{
            alert("please fill out all the boxes")
        }
    }
    
  return (
    <main className='loginPage'>
        <section className='login-container'>
            {
                isContinue && phNo.length === 10 ? (
                    <>
                    {
                        contWithPassword ? (
                            <>
                                <LoginByEmail 
                                placeholder={placeholder}
                                Passplaceholder={Passplaceholder}
                                removePlaceHolder={removePlaceHolder}
                                handlePlaceHolder={handlePlaceHolder}
                                />
                            </>
                        ):(
                            <LoginByOtp 
                            otp={otp}
                            phNo={phNo}
                            count={count}
                            setCount={setCount}
                            isContinue = {isContinue}
                            otpInputRef={otpInputRef}
                            handleSubmit={handleSubmit}
                            handleKeyChange={handleKeyChange}
                            handleOtpChange={handleOtpChange}
                            handleResendOtp={handleResendOtp}
                            setContWithPassword={setContWithPassword}
                            />
                        )
                    }
                    </>
                ):(
                    <LoginInterface 
                    phNo={phNo}
                    error={error}
                    setPhNo={setPhNo}
                    handleContinue={handleContinue}
                    />
                )
            }
        </section>
    </main>
  )
}
