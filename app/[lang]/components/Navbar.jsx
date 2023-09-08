'use client'

// DEPENDENCIAS
import * as React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import {
  Collapse,
  List, Drawer, IconButton, Link, Stack, Typography, Toolbar, Box, Divider,
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
import { getDictionary } from '@/getDictionary'
import { useParams } from 'next/navigation'

const drawerWidth = 240

function NavBarLanding(props) {
  const [lang, setLang] = React.useState('')
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const [openIdiom, setOpenIdiom] = React.useState(false)
  const [openGame, setOpenGame] = React.useState(false)
  const params = useParams()
  const [changeLocale, setChangeLocale] = React.useState('')

  const handleLang = async () => {
    const langParams = await getDictionary(params.lang)
    setLang(langParams)
  }

  const handleLocale = () => {
    if (params.lang === 'es') {
      setChangeLocale('en')
    } else {
      setChangeLocale('es')
    }
  }

  let subIcon = iconSpain
  React.useEffect(() => {
    handleLang()
    handleLocale()
  }, [params])

  if (params.lang === 'es') {
    subIcon = iconEngland
  }
  const navItems = [lang?.navbar?.buyDante, lang?.navbar?.team, lang?.navbar?.whitepaper, lang?.navbar?.contact]

  const handleClickIdiom = () => {
    setOpenIdiom(!openIdiom)
  }
  const handleClickSub = () => {
    setOpen(!open)
    setOpenGame(false)
  }

  const handleClickGame = () => {
    setOpen(false)
    setOpenGame(!openGame)
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Stack width={'100%'} height={'100%'} sx={{ backgroundColor: '#020202' }} >
      <ListItemButton onClick={handleClickGame} sx={{ color: 'white' }}>
        <ListItemText primary={lang?.navbar?.game} />
        {openGame ? <Image alt='icon' src={expandMore} /> : <Image alt='icon' src={expandMore} />}
      </ListItemButton>

      <Collapse in={openGame} timeout="auto" unmountOnExit >
        <List component="div" disablePadding sx={{ color: 'white', minHeight: '200px' }}>
          <ListItemButton sx={{ pl: 4, display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '3rem' }}>
            <ListItemText primary={lang?.navbar?.download} />
            <ListItemText primary={lang?.navbar?.learnToPlay} />
            <ListItemText primary={lang?.navbar?.cards} />
          </ListItemButton>
        </List>
      </Collapse>

      <Typography ml={'1rem'} >
        <Link color={'light.light'} mr={2} underline='none' href={'/landing/marketplace'} >{lang?.navbar?.marketplace}</Link>
      </Typography>

      <ListItemButton onClick={handleClickSub} sx={{ color: 'white' }}>
        <ListItemText primary={lang?.navbar?.token} />
        {open ? <Image alt='icon' src={expandMore} /> : <Image alt='icon' src={expandMore} />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit >
        <List component="div" disablePadding sx={{ color: 'white', minHeight: '200px' }}>
          <ListItemButton sx={{ pl: 4, display: 'flex', flexDirection: 'column', alignItems: 'start', marginBottom: '16px' }}>
            <ListItemText primary={lang?.navbar?.buyDanteToken} />
            <ListItemText primary={lang?.navbar?.staking} />
            <ListItemText primary={lang?.navbar?.vesting} />
          </ListItemButton>
        </List>
      </Collapse>

      <Typography ml={'1rem'} >
        <Link color={'light.light'} mr={2} underline='none' href={'/landing/marketplace'} >{lang?.navbar?.docs}</Link>
      </Typography>

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
          <Typography ml={2} color={'white'} >{lang?.navbar?.myAccount}</Typography>
        </Stack>
        <Divider />
        <Stack direction={['column', 'row']} justifyContent={'end'} alignItems={'center'} height={'34%'} >
          <ModalSignIn title={lang?.navbar?.signIn} mnWidth={'99%'} mxwidth={'100%'} />
          <ButtonColor mt={'1rem'} title={lang?.navbar?.playNow} fontColor={'#6750A4'} mnWidth={'80%'} ml={'.5rem'} />
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
            <SubMenu title={lang?.navbar?.game} array={[
              {
                title: lang?.navbar?.download,
                link: '/ss'
              },
              {
                title: lang?.navbar?.learnToPlay,
                link: '/landing'
              },
              {
                title: lang?.navbar?.cards,
                link: '/landing/cards'
              }
            ]} />

            <Typography sx={{ marginRight: '4px' }} >
              <Link color={'light.light'} mr={2} underline='none' href={'/landing/marketplace'} >{lang?.navbar?.marketplace}</Link>
            </Typography>

            <SubMenu title={lang?.navbar?.token} list={['Buy dante token', 'Staking', 'Vesting']}
              array={[
                {
                  title: lang?.navbar?.buyDanteToken,
                  link: '/ss'
                },
                {
                  title: lang?.navbar?.staking,
                  link: '/landing/token/staking'
                },
                {
                  title: lang?.navbar?.vesting,
                  link: '/landing/token/vesting'
                }
              ]}
              subIcon={iconRedirect} />

            <Typography sx={{ marginRight: '4px' }} >
              <Link color={'light.light'} mr={2} underline='none' href={'/landing/marketplace'} >{lang?.navbar?.docs}</Link>
            </Typography>
          </Stack>

          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block', xl: 'block', width: '300px' } }}>

            <Stack direction={['column', 'row']} width={'100%'} justifyContent={'end'} alignItems={'center'} height={'34%'} >
              <SubMenu icon={iconEngland} title={'ENGLISH'} locale={'es'}
                array={[
                  {
                    iconSubMenu: subIcon,
                    link: '/landing',
                    locale: { changeLocale }
                  }
                ]}
                subIcon={iconRedirect} />
              <ModalSignIn title={lang?.navbar?.signIn} />
              <ButtonColor title={lang?.navbar?.playNow} fontColor={'#6750A4'} mnWidth={'fit-content'} ml={'.5rem'} />
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
