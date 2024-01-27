import React from 'react'

export const Profile = () => {
  return (
    <section>
        <div className='profile-container'>
            <h3>Profile Details</h3>
            <hr />
            <div>
            <table>
                <tbody>
                    <tr>
                        <td>Full Name</td>
                        <td></td>
                        <td>Ajay</td>
                    </tr>
                    <tr>
                        <td>Mobile Number</td>
                        <td></td>
                        <td>324234234</td>
                    </tr>
                    <tr>
                        <td>Email Id</td>
                        <td></td>
                        <td>--not Added--</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td></td>
                        <td>Male</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    </section>
  )
}
