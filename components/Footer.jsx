// DEPENDENCIAS
import { Box, ListItemIcon, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

// STYLES
import styles from '../styles/components/footer.module.css'
// ASSETS
import logoFooter from '../assets/logos/logoFooter.svg'
import iconTw from '../assets/iconos/iconTw.svg'
import iconFb from '../assets/iconos/iconFb.svg'
import iconInst from '../assets/iconos/iconInst.svg'
import iconTwich from '../assets/iconos/iconTwich.svg'

const Footer = () => (
  <>
    <Box className={styles.footerContainer}>
      <Stack justifyContent={'center'} padding={2} alignItems={'center'}>
        <Image alt='logo footer' className={styles.FooterLogo} src={logoFooter} />
      </Stack>
      <Stack display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} marginTop={4} justifyContent={'center'} direction={'row'}>
        <Link className={styles.footerLink} href={'#'}>
          BUY DANTE
        </Link>
        <Link className={styles.footerLink} href={'/landing/team/'} >
          TEAM
        </Link>
        <Link className={styles.footerLink} href={'#'} >
          WHITEPAPER
        </Link>
        <Link className={styles.footerLink} href={'/landing/contact/'}>
          CONTACT
        </Link>
      </Stack>
      <Stack width={'100%'} alignItems={'center'} >
        <Stack mt={4} justifyContent={'space-between'} width={['80%', '80%', '40%', '30%', '30%']} alignItems={'center'} direction={'row'}>
          <ListItemIcon>
            <Image alt='icons' className={styles.FooterIconTw} src={iconTw} />
          </ListItemIcon>
          <ListItemIcon>
            <Image alt='icons' className={styles.FooterIcon} src={iconFb} />
          </ListItemIcon>
          <ListItemIcon>
            <Image alt='icons' className={styles.FooterIcon} src={iconInst} />
          </ListItemIcon>
          <ListItemIcon >
            <Image alt='icons' className={styles.footerIconTwich} src={iconTwich} />
          </ListItemIcon>
        </Stack>
      </Stack>
      <Stack mb={2} mt={4} direction={'column'} color={'#767676'} textAlign={'center'}>
        <Typography variant='p' fontSize={['.8rem', '1.2rem']} >Privacy Policy | Cookies policy</Typography>
        <Typography variant='p' ffontSize={['.8rem', '1.2rem']} marginTop={4} >VIRGIL GAMES - Copyrigh 2023 © Virgil Games, Inc.</Typography>
      </Stack>
    </Box>
  </>
)

export default Footer
