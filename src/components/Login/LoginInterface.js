import React from 'react'

export const LoginInterface = ({setPhNo, handleContinue, phNo, error}) => {
  return (
    <>
        <h3>Login <span className='login-or'>or</span> SignUp</h3>
        <span class="fixed-placeholder">+91 |</span>
        <div className='input-div'>
        <input type="number" value={phNo} onChange={(e)=>setPhNo(e.target.value)} />
        {
            error && phNo.length !== 10 &&
            <span className="error">Please enter a valid mobile number(10 digits)</span>
        }
        </div>
        <p>By continuing, i agree to <a href="https://www.myntra.com/termsofuse">Terms of Use</a> & <a href="https://www.myntra.com/privacypolicy">privacy policy</a></p>
        <button onClick={handleContinue}>CONTINUE</button>
        <p>Have trouble loggin in ? <a href="https://www.myntra.com/contactus">Get help</a></p>
    </>
  )
}
