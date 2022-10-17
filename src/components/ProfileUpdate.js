import { Typography, Box } from '@mui/material'
import React, { useContext } from 'react'
import { ProfileForm } from './../components/ProfileForm'
import { UserProfile } from './../Context/UserProfileContext'
const ProfileUpdate = () => {
  const { UserProfileState } = useContext(UserProfile)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        width: '45%',
        marginTop: '20px',
      }}
    >
      <Typography variant='h3' fontSize={26}>
        Good Morning, {UserProfileState.firstName}
      </Typography>
      <Typography variant='h6' fontSize={16} p={2}>
        April 28,2022
      </Typography>
      <Typography variant='h4' fontSize={26} p={2}>
        My Profile
      </Typography>
      <ProfileForm />
    </Box>
  )
}
export default React.memo(ProfileUpdate)
