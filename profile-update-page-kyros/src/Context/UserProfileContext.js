import React, { createContext, useReducer } from 'react'
import { sampleProfile } from './../Data/MenuItems'
export const initialProfileState = {
  firstName: '',
  lastName: '',
  displayName: '',
  emailId: '',
  PhoneNoPersonal: '',
  PhoneNoWork: '',
  location: '',
}
const ReducerFn = (currentProfileState, action) => {
  switch (action.type) {
    case 'save':
      // console.log(
      // ...action.userProfile.map((elem) =>
      //   Object.entries(elem).map((elem) => elem)
      // )
      // action.userProfile
      // )
      return { ...currentProfileState, ...action.userProfile }
    case 'reset':
      return sampleProfile
    default:
      return currentProfileState
  }
}
export const UserProfile = createContext()
const UserProfileContext = ({ children }) => {
  const [newProfileState, dispatchFn] = useReducer(ReducerFn, sampleProfile)
  return (
    <UserProfile.Provider
      value={{
        UserProfileState: newProfileState,
        UserProfileDispatchFn: dispatchFn,
      }}
    >
      {children}
    </UserProfile.Provider>
  )
}

export default UserProfileContext
