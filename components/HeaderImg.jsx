import { Stack, Typography } from '@mui/material'

// STYLES
import styles from '@/styles/components/headerImg.module.css'

const HeaderImg = ({ title }) => {
  return (
    <Stack className={styles.headerImg} height={['40vh', '40vh', '42vh', '42vh']} width={'100%'} justifyContent={'center'} >
      <Typography variant='h1' color={'light.light'} fontWeight={'600'} fontFamily={'italic'} textAlign={'center'} >{title}</Typography>
    </Stack>
  )
}

export default HeaderImg
