import React from 'react'
import { Link } from 'react-router-dom'

export const ProfileTable = ({userInfo}) => {
  return (
    <>
        <h3>Profile Details</h3>
        <hr />
        <div>
        <table>
            <tbody>
                {
                    userInfo?.map((item)=>(
                        <>
                            <tr>
                                <td>Full Name</td>
                                <td></td>
                                <td>{item.profile.fullName || "--not Added--"}</td>
                            </tr>
                            <tr>
                                <td>Mobile Number</td>
                                <td></td>
                                <td>{item.profile.phoneNumber || "--not Added--"}</td>
                            </tr>
                            <tr>
                                <td>Email Id</td>
                                <td></td>
                                <td>{item.profile.email || "--not Added--"}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td></td>
                                <td>{item.profile.gender || "--not Added--"}</td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td></td>
                                <td>{item.profile.birthday || "--not Added--"}</td>
                            </tr>
                            <tr>
                                <td>Location</td>
                                <td></td>
                                <td>--not Added--</td>
                            </tr>
                            <tr>
                                <td>Alternate Number</td>
                                <td></td>
                                <td>{item.profile.alternateMobileNo || "--not Added--"}</td>
                            </tr>
                            <tr>
                                <td>Hint name</td>
                                <td></td>
                                <td>{item.profile.hintName || "--not Added--"}</td>
                            </tr>
                        </>
                    ))
                }
            </tbody>
        </table>
        <button><Link to="/my/editprofile">EDIT</Link></button>
        </div>
    </>
  )
}
