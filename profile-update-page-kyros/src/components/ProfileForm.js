import { InputAdornment, Box, TextField, Stack, Button } from '@mui/material'
import React, {
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react'
import { ProfileFields } from './../Data/MenuItems'
import { UserProfile } from './../Context/UserProfileContext'
import { sampleProfile } from '../Data/MenuItems'
export const ProfileForm = () => {
  const { UserProfileState, UserProfileDispatchFn } = useContext(UserProfile)
  const [userProfile, setUserProfile] = useState(sampleProfile)
  // console.log(userProfile)
  const UserProfileRef = useRef(
    ProfileFields.map((profileField) => {
      return {
        [`${profileField.identifier}`]: createRef(),
      }
    })
  )
  // console.log(
  //   ProfileFields.forEach((profileField) =>
  //     console.log(profileField.identifier)
  //   )
  // )
  // console.log(
  // UserProfileRef.current.map((userref) =>
  //   console.log(Object.keys(userref)[0])
  // ),

  let handleSaveChanges = useCallback(() => {
    setUserProfile((prevState) => {
      return {
        ...prevState,
        ...Object.assign(
          ...UserProfileRef.current.map((userref, ref) => {
            let value
            if (userref.current.value === '')
              value = sampleProfile[`${Object.keys(userref)[0]}`]
            else value = userref.current.value
            return {
              [`${Object.keys(userref)[0]}`]: value,
            }
          })
        ),
      }
    })
  }, [])
  useEffect(() => {
    UserProfileDispatchFn({
      type: 'save',
      userProfile: userProfile,
    })
  }, [userProfile, UserProfileDispatchFn])

  let handleResetChanges = () => {
    // UserProfileRef.current.map((userref) => {
    // return {
    //   [`${Object.keys(userref)[0]}`]: userref.current,
    // }
    // return (userref.current.value = '')
    // })
    UserProfileRef.current.map((userref) => (userref.current.value = ''))
    UserProfileDispatchFn({ type: 'reset' })
  }

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          gap: '20px',
          margin: '50px',
        }}
      >
        {ProfileFields.map((profileField, index) => (
          <TextField
            label={profileField.field}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <profileField.icon />
                </InputAdornment>
              ),
            }}
            key={profileField.field}
            // ref={UserProfileRef.current[index]}
            // id={profileField.label}
            // aria-label={String(profileField.label)}
            inputRef={UserProfileRef.current[index]}
            // value={userProfile[`${profileField.field}`]}
            // onChange={(e) =>
            //   // setUserProfile({
            //   //   ...userProfile,
            //   //   [`${profileField.field}`]: e.target.value,
            //   // })
          />
        ))}
      </Box>
      <Stack
        direction={'row'}
        sx={{
          display: 'flex',
          //   justifyContent: 'space-evenly',
          marginLeft: '140px',
        }}
      >
        <Button
          variant='contained'
          color='error'
          size='small'
          sx={{
            marginRight: '20px',
            p: '8px',
          }}
          onClick={handleSaveChanges}
          disableRipple
        >
          SAVE CHANGES
        </Button>
        <Button
          variant='contained'
          color='error'
          onClick={handleResetChanges}
          size='small'
          disableRipple
        >
          RESET
        </Button>
      </Stack>
    </>
  )
}
