import React from 'react'
import { ProfileTable } from './ProfileTable'

export const Profile = ({userInfo}) => {
  return (
    <section>
        <div className='profile-container'>
              <ProfileTable 
              userInfo={userInfo}
              />
        </div>
    </section>
  )
}
