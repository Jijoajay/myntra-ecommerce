import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import { DataContext } from '../../context/DataContext'

export const BagLogin = () => {
    const {isAuthenticate} = useContext(DataContext)
  return (
    <>
        {!isAuthenticate &&
            <div className='login-item'>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <p>Login to see the items from you existing bag and wishlist</p>
                </div>
                <div>
                    <Link to={"/login"} className="link">
                        LOGIN NOW
                    </Link>
                </div>
            </div>
        }
    </>
  )
}
