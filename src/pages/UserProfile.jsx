import React from 'react'
import ShareExperience from '../components/ShareExperience'
import Profile from '../components/Profile'
import Partners from '../components/Partners'
import MyStats from '../components/MyStats'
import LatestProduct from '../components/LatestProduct'

const UserProfile = () => {
  return (
    <div>
         <ShareExperience />
      <Profile />
      <Partners />
      <MyStats />
      <LatestProduct />
    </div>
  )
}

export default UserProfile