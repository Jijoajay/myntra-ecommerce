import React,{useState} from 'react'

export const LoginByEmail = ({placeholder, handlePlaceHolder, Passplaceholder, removePlaceHolder}) => {
    const [isReset, setIsReset] = useState(false);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const handleClickReset = ()=>{
        setIsReset(true)
    }
    // const handleSendLink = ()=>{
    //     console.log("sending to the email")
    // }
    return (
    <>
        {
            isReset ? (
                <>
                    <h3>Reset Password</h3>
                    <p>Enter your email or mobile number we'll send a link on your <br/> email to reset the password</p>
                    <div className="login-div">
                        {
                            placeholder === "" &&
                            <p className='floating-placeholder' value={email} onChange={(e)=>setEmail(e.target.value)}>Email or Mobile Number</p>
                        }
                        <input type="text" placeholder={placeholder} className='login-input'onFocus={()=>removePlaceHolder(false)} onBlur={()=>handlePlaceHolder("Email or Mobile Number")}/>
            
                    </div>
                    <button>Send Link</button>
                    <p>Unable to reset the password <span className='otp-span'>get help</span></p>
                </>
            ) : (
                <>
                    <h3>Login to your Account</h3>
                    <div className="login-div">
                        {
                            placeholder === "" &&
                            <p className='floating-placeholder'>Email or Mobile Number</p>
                        }
                        <input  value={email} onChange={(e)=>setEmail(e.target.value)}
                        type="text" placeholder={placeholder} className='login-input'onFocus={()=>removePlaceHolder(false)} onBlur={()=>handlePlaceHolder("Email or Mobile Number")}/>
            
                    </div>
                    <div className='login-div'>
                        {
                            Passplaceholder === "" &&
                            <p className='floating-placeholder'>password</p>
                        }
                        <input value={pass} onChange={(e)=>setPass(e.target.value)} 
                        type="password" placeholder={Passplaceholder} className='login-input'onFocus={()=>removePlaceHolder(true)} onBlur={()=>handlePlaceHolder("password")}/>
                    </div>
                    <button>Login</button>
                    <p>Forget your password <span className='otp-span' onClick={()=>handleClickReset()}>Reset here</span></p>
                    <p>Have trouble loggin in ? <a href="https://www.myntra.com/contactus">Get help</a></p>
                </>
            )
        }
    </>
  )
}
