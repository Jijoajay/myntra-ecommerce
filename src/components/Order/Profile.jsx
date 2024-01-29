import React, {useState} from 'react'
import { ProfileTable } from './ProfileTable'
import { ProfileEditForm } from './ProfileEditForm'

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
