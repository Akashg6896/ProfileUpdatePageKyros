import MenuIcon from '@mui/icons-material/Menu'
import { MenuItems } from './../Data/MenuItems'
import MenuList from '@mui/material/MenuList'
import { MenuCategories } from './MenuCategories'
import { Box } from '@mui/material'
import React from 'react'
const MenuBar = () => {
  return (
    <Box className='MenuBar'>
      <Box className='HamBurgMenu'>
        <Box className='ImgContainer'>
          <img src='https://www.kyro.us/images/logo.png' alt='Kyros' />
        </Box>
        <MenuIcon fontSize='large' display={'flex'} p={0} m={0} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          //   textAlign: 'left',
          justifyContent: 'flex-start',
          color: 'grey',
        }}
      >
        {MenuItems.map((menuItem) => (
          <MenuCategories
            desc={menuItem.desc}
            icon={menuItem.icon}
            key={menuItem.desc}
          />
        ))}
      </Box>
    </Box>
  )
}
export default React.memo(MenuBar)
