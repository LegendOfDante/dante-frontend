import * as React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import {
  Collapse,
  List, Drawer, IconButton, Link, Stack,
  Button, Typography, Toolbar, Box, Divider,
  ListItemText, ListItemButton, ListItem,
  CssBaseline, AppBar
} from '@mui/material'

// COMPONENTS
import SubMenu from './SubMenu'
import { ButtonColor } from '@/styles/themes/components/Button'

// ASSETS
import menuIcon from '@/assets/iconos/menuIcon.svg'
import iconHeaderDante from '@/assets/iconos/iconHeaderDante.svg'
import expandMore from '@/assets/iconos/expandMore.svg'
import iconEngland from '@/assets/iconos/iconEngland.svg'
import iconSpain from '@/assets/iconos/iconSpain.svg'
import iconRedirect from '@/assets/iconos/iconRedirect.svg'
import myProfile from '@/assets/iconos/tools/myProfile.svg'
import ModalSignIn from './modals/ModalSignIn'

const drawerWidth = 240
const navItems = ['BUY DANTE  ', 'TEAM', 'WHITEPAPER', 'CONTACT']

function NavBarLanding(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [openIdiom, setOpenIdiom] = React.useState(false)

  const handleClickIdiom = () => {
    setOpenIdiom(!openIdiom)
  }
  const handleClickSub = () => {
    setOpen(!open)
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Stack width={'100%'} height={'100%'} sx={{ backgroundColor: '#020202' }} >
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ color: 'white' }}>
          <ListItemButton sx={{ pl: 4, display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '16px' }}>
            <ListItemText primary="Buy Dante token" />
            <ListItemText primary="Staking" />
            <ListItemText primary="Vesting" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickSub} sx={{ color: 'white' }}>
        <ListItemText primary="DOCS" />
        {open ? <Image alt='icon' src={expandMore} /> : <Image alt='icon' src={expandMore} />}
      </ListItemButton>
      <Divider sx={{ color: 'white', backgroundColor: '#767676' }} />
      <List sx={{ height: '95%' }} >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'left', color: 'white' }}>
              <ListItemText primary={item} />
              <Divider />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItemButton onClick={handleClickIdiom} sx={{ color: 'white' }}>
          <Image src={iconEngland} />
          <ListItemText primary="ENGLISH" sx={{ marginLeft: { xs: '1rem', sm: '1rem' } }} />
          {openIdiom ? <Image alt='icon' src={expandMore} /> : <Image alt='icon' src={expandMore} />}
        </ListItemButton>
        <Collapse in={openIdiom} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ color: 'white' }}>
            <ListItemButton sx={{ ml: 4 }}>
              <Image alt='icon' src={iconSpain} />
              <ListItemText sx={{ ml: { xs: '1rem', ms: '1rem' } }} primary="ESPAÑOL" />
            </ListItemButton>
          </List>
        </Collapse>
        <Stack direction={'row'} p={3} >
          <Image src={myProfile} />
          <Typography ml={2} color={'white'} >MY ACCOUNT</Typography>
        </Stack>
        <Divider />
        <Stack direction={['column', 'row']} justifyContent={'end'} alignItems={'center'} height={'34%'} >
          <Button
            sx={{
              borderRadius: '20px',
              color: '#F7C55A',
              fontWeight: '600',
              width: '90%',
              marginBottom: '8px',
              borderColor: '#F7C55A'
            }}
            variant='outlined'>
            SIGN IN
          </Button>
          <Button
            sx={{
              backgroundColor: 'orange',
              borderRadius: '20px',
              color: '#6750A4',
              fontWeight: '600',
              width: '90%',
              marginTop: '8px'
            }}
            variant=''>
            PlAY NOW
          </Button>
        </Stack>
      </List >
    </Stack >
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#020202' }} >
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#020202', justifyContent: 'space-evenly' }} >
        <Toolbar sx={{ justifyContent: 'space-between', width: ['58%', '58%', '58%', '95%', '90%'] }} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' }, width: '20px' }}
          >
            <Image alt='icon' src={menuIcon} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex', flexGrow: '0', width: '15%', justifyContent: 'end' } }}
          >
            <Link href='/landing' >
              <Image alt='header dante' src={iconHeaderDante} />
            </Link>
          </Typography>

          <Stack display={['none', 'none', 'none', 'flex', 'flex']} direction={'row'} justifyContent={'center'} alignItems={'center'} width={'50%'}>
            <SubMenu title={'GAME'} array={[
              {
                title: 'Download',
                link: '/ss'
              },
              {
                title: 'Learn to play',
                link: '/landing/learn-to-play'
              },
              {
                title: 'Cards',
                link: '/landing/cards'
              }
            ]} />

            <Typography sx={{ marginRight: '4px' }} >
              <Link color={'light.light'} mr={2} underline='none' href={'/landing/marketplace'} >MARKETPLACE</Link>
            </Typography>

            <SubMenu title={'TOKEN'} list={['Buy dante token', 'Staking', 'Vesting']}
              array={[
                {
                  title: 'buy dante token',
                  link: '/ss'
                },
                {
                  title: 'Staking',
                  link: '/landing/token/staking'
                },
                {
                  title: 'Vesting',
                  link: '/landing/token/vesting'
                }
              ]}
              subIcon={iconRedirect} />

            <Typography sx={{ marginRight: '4px' }} >
              <Link color={'light.light'} mr={2} underline='none' href={'/landing/marketplace'} >DOCS</Link>
            </Typography>
          </Stack>

          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block', width: '300px' } }}>

            <Stack direction={['column', 'row']} width={'100%'} justifyContent={'end'} alignItems={'center'} height={'34%'} >
              <SubMenu icon={iconEngland} title={'ENGLISH'}
                array={[
                  {
                    iconSubMenu: iconSpain,
                    link: '/ss'
                  }
                ]}
                subIcon={iconRedirect} />
              <ModalSignIn />
              <ButtonColor title={'Play now'} fontColor={'#6750A4'} mxwidth={'46%'} mnWidth={'45%'} ml={'.5rem'} />
            </Stack>
          </Box>

        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'none', xl: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

NavBarLanding.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

export default NavBarLanding
