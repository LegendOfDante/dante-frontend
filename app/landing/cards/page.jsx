'use client'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'

// ASSETS
import dashHeroHeader from '@/assets/dashboard/dashHeroHeader.png'
import Heroe1 from '@/assets/dashboard/heroe1.svg'
import Heroe2 from '@/assets/dashboard/heroe2.svg'
import Heroe3 from '@/assets/dashboard/heroe3.svg'
import Heroe4 from '@/assets/dashboard/heroe4.svg'
import SubNavbar from '../../../components/SubNavbar'

// STYLES
import styles from '@/styles/landing/heroes.module.css'

const heroes = [
  {
    title: 'ACHILLES',
    img: Heroe1
  },
  {
    title: 'ACHILLES',
    img: Heroe2
  },
  {
    title: 'ACHILLES',
    img: Heroe3
  },
  {
    title: 'ACHILLES',
    img: Heroe4
  },
  {
    title: 'ACHILLES',
    img: Heroe1
  },
  {
    title: 'ACHILLES',
    img: Heroe2
  },
  {
    title: 'ACHILLES',
    img: Heroe3
  },
  {
    title: 'ACHILLES',
    img: Heroe4
  },
  {
    title: 'ACHILLES',
    img: Heroe1
  },
  {
    title: 'ACHILLES',
    img: Heroe2
  },
  {
    title: 'ACHILLES',
    img: Heroe3
  },
  {
    title: 'ACHILLES',
    img: Heroe4
  },
  {
    title: 'ACHILLES',
    img: Heroe1
  },
  {
    title: 'ACHILLES',
    img: Heroe2
  },
  {
    title: 'ACHILLES',
    img: Heroe3
  },
  {
    title: 'ACHILLES',
    img: Heroe4
  }
]

const Heroes = () => {
  return (
    <>
      <Box width={'100%'} display={'flex'} mt={'3rem'} >
        <Image src={dashHeroHeader} alt='heroes header' className={styles.dashHeroesHeader} />
      </Box>
      <SubNavbar position={'none'} label={[{ title: 'HEROS' }, { title: 'DEMONS' }, { title: 'PETS' }, { title: 'HEROS' }, { title: 'EQUIPMENT' }, { title: 'SPELLS' }, { title: 'MORE' }]} />
      <Box width={['100%']} display={'flex'} justifyContent={'center'} >
        <Grid container spacing={1} mt={'0'} ml={'0'} width={'100%'} >
          <Grid display={'flex'} justifyContent={'center'} columnGap={1} container item spacing={3} mt={4} mb={4} ml={'0'} >
            {heroes.map((heroe, i) => (
              <Grid key={i} {...{ xs: 12, sm: 6, md: 4, lg: 2.5 }} display={'flex'} flexDirection={'column'} alignItems={'center'} minHeight={160}>
                <Stack width={['55%', '65%', '65%', '90%', '75%']}>
                  <Typography fontWeight={'600'} >{heroe.title}</Typography>
                </Stack>
                <Image alt='heroes' src={heroe.img} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Heroes
