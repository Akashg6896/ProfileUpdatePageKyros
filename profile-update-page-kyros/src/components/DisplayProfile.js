import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { sampleProfile } from '../Data/MenuItems'
import { UserProfile } from './../Context/UserProfileContext'
const DisplayProfile = () => {
  const { UserProfileState, UserProfileDispatchFn } = useContext(UserProfile)
  let backgroundImage = `https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600`
  return (
    <Stack direction={'column'} width={'30%'} bgcolor='#f0f1f5'>
      {/* <Typography variant='h3'>Good Morning,{}</Typography>
       */}
      <Stack direction={'row'} spacing={2}>
        <Button variant='contained' color='error' startIcon={<AddIcon />}>
          Add Project
        </Button>
      </Stack>
      {/* <Im */}
      <Stack
        direction={'column'}
        spacing={4}
        sx={{
          marginTop: '100px',
          marginLeft: '40px',
        }}
      >
        <div
          style={{
            // border: '2px solid black',
            borderRadius: '10%',
            margin: '0px 80px',
            width: '150px',
            height: '200px',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
          }}
        />
        <CameraAltIcon
          variant='text'
          color='disabled'
          sx={{
            position: 'absolute',
            bottom: '360px',
            right: '90px',
            backgroundColor: 'white',
            padding: '5px',
            borderRadius: '10%',
          }}
        />
        <Box display={'flex'} flexDirection={'column'} spacing={2}>
          <Typography variant='h6' fontSize={'large'} fontWeight={'bold'}>
            {UserProfileState.firstName === sampleProfile.firstName || ''
              ? sampleProfile.firstName
              : UserProfileState.firstName}{' '}
            {UserProfileState.lastName === sampleProfile.lastName || ''
              ? sampleProfile.lastName
              : UserProfileState.lastName}
          </Typography>
          <Typography
            variant='p'
            fontSize={'large'}
            fontWeight={'normal'}
            color={'gray'}
          >
            {UserProfileState.emailId === sampleProfile.emailId || ''
              ? sampleProfile.emailId
              : UserProfileState.emailId}
          </Typography>
          <Typography
            variant='p'
            fontSize={'large'}
            fontWeight={'normal'}
            color={'gray'}
          >
            {UserProfileState.displayName === sampleProfile.displayName || ''
              ? sampleProfile.displayName
              : UserProfileState.displayName}
          </Typography>
          <Typography
            variant='p'
            fontSize={'large'}
            fontWeight={'normal'}
            color={'gray'}
          >
            {UserProfileState.PhoneNoWork === sampleProfile.PhoneNoWork || ''
              ? sampleProfile.PhoneNoWork
              : UserProfileState.PhoneNoWork}
          </Typography>
        </Box>
      </Stack>
    </Stack>
  )
}
export default React.memo(DisplayProfile)
