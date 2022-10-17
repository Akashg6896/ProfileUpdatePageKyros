import './App.css'
import MenuBar from './components/MenuBar'
import ProfileUpdate from './components/ProfileUpdate'
import DisplayProfile from './components/DisplayProfile'
import { Divider } from '@mui/material'
import UserProfileContext from './Context/UserProfileContext'
const dividerStyle = {
  width: '100px',
  color: '#dfe0e3',
}
function App() {
  return (
    <UserProfileContext>
      <div className='App'>
        <MenuBar />
        <ProfileUpdate />
        <Divider sx={dividerStyle} />
        <DisplayProfile />
      </div>
    </UserProfileContext>
  )
}

export default App
