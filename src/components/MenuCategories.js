import MenuItem from '@mui/material/MenuItem'
import MuiListItemText from '@mui/material/ListItemText'
import MuiListItemIcon from '@mui/material/ListItemIcon'
import './../App.css'
import { Box } from '@mui/material'
export const MenuCategories = ({ desc, icon }) => {
  // console.log(desc, icon)
  const IconComp = icon
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'justify',
        marginLeft: '20px',
        marginBottom: '10px',
      }}
    >
      <MuiListItemIcon
        sx={{
          color: 'gray',
        }}
      >
        <IconComp />
      </MuiListItemIcon>
      <MuiListItemText
        sx={{
          color: 'gray',
          fontFamily: 'monospace',
        }}
      >
        {desc}
      </MuiListItemText>
    </Box>
  )
}
