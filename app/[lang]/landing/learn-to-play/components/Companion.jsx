import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'

// ASSETS
import campanion from '@/assets/layout/campanion.png'
import Defense from '@/assets/iconos/Stats/Defense.svg'
import Atack from '@/assets/iconos/Stats/Atack.svg'
import HP from '@/assets/iconos/Stats/HP.svg'
import Initiative from '@/assets/iconos/Stats/Initiative.svg'
import Mana from '@/assets/iconos/Stats/Mana.svg'
import Moral from '@/assets/iconos/Stats/Moral.svg'
import Constitution from '@/assets/iconos/Attributes/Constitution.svg'
import Dexterity from '@/assets/iconos/Attributes/Dexterity.svg'
import Intelligence from '@/assets/iconos/Attributes/Intelligence.svg'
import Strength from '@/assets/iconos/Attributes/Strength.svg'
import Wisdom from '@/assets/iconos/Attributes/Wisdom.svg'

// STYLEs
import styles from '@/styles/landing/games.module.css'

const stats = [
  {
    icon: HP,
    type: 'HP',
    data: 54
  },
  {
    icon: Defense,
    type: 'Defense',
    data: 1
  },
  {
    icon: Moral,
    type: 'Moral',
    data: 5
  },
  {
    icon: Atack,
    type: 'Attack',
    data: 3
  },
  {
    icon: Mana,
    type: 'Mana',
    data: 12
  },
  {
    icon: Initiative,
    type: 'initiative',
    data: 5
  }
]

const attributes = [
  {
    icon: Strength,
    type: 'Strength',
    data: 2
  },
  {
    icon: Dexterity,
    type: 'Dexterity',
    data: 1
  },
  {
    icon: Moral,
    type: 'Moral',
    data: 5
  },
  {
    icon: Constitution,
    type: 'Constitution',
    data: 3
  },
  {
    icon: Intelligence,
    type: 'intelligence',
    data: 2
  },
  {
    icon: Wisdom,
    type: 'Willing',
    data: 1
  }
]

const Companion = () => {
  return (
    <>
      <Stack direction={['column', 'column', 'row', 'row']} width={'100%'} height={['210vh', '184vh', '120vh', '120vh', '100vh']} justifyContent={'center'} >
        <Box mr={[0, 0, 4, 4]} display={'flex'} alignItems={'center'} justifyContent={['center', 'center', 'none', 'none']} >
          <Image alt='companion' src={campanion} className={styles.imgcampanionText} />
        </Box>
        <Box ml={[0, 0, 4, 4]} display={'flex'} flexDirection={'column'} alignItems={['center', 'center', 'none', 'none']} justifyContent={'center'} width={['100%', '100%', '55%', '60%']} >
          <Stack >
            <Typography variant={'h5'} fontSize={['2rem', '2rem', '1.5rem', '1.5rem']} textAlign={'center'} fontWeight={'bolder'} mt={2} >ACHILLES</Typography>
          </Stack>
          <Stack display={['none', 'none', 'none', 'flex', 'flex']} direction={'row'} justifyContent={'space-between'} width={'90%'} height={'300px'} >
            <Stack bgcolor={'#FBFBFB'} width={'45%'} >
              <Typography p={4} mb={4} fontWeight={'bolder'} >Lorem Ipsum</Typography>
              <Grid container spacing={2} width={'100%'} bgcolor={'#FBFBFB'} >
                {stats && stats.map((stat, i) => (
                  <Grid key={i} mb={4} gap={4} item {...{ xs: 12, sm: 8, md: 6, lg: 6, xl: 6 }} justifyContent={['center', 'center', 'start', 'start']} display={'flex'} >
                    <Stack direction={'row'} width={'100%'} justifyContent={'space-evenly'} alignItems={'center'} >
                      <Stack width={'60%'} direction={'row'} mr={2} alignItems={'center'} >
                        <Image alt='Icon' src={stat.icon} />
                        <Typography variant='span' color='#767676' > {stat.type} </Typography> </Stack>
                      <Typography ml={2}>{stat.data}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack bgcolor={'#FBFBFB'} width={'45%'} p={4} >
              <Stack width={'100%'} ><Typography mb={4} fontWeight={'bolder'} >Attributes</Typography></Stack>
              <Grid container spacing={2} width={'100%'} bgcolor={'#FBFBFB'} >
                {attributes && attributes.map((attribute, i) => (
                  <Grid key={i} mb={4} gap={4} item {...{ xs: 12, sm: 8, md: 6, lg: 6, xl: 6 }} justifyContent={['center', 'center', 'start', 'start']} display={'flex'} >
                    <Stack direction={'row'} width={'100%'} justifyContent={'space-evenly'} alignItems={'center'} >
                      <Stack width={'60%'} direction={'row'} alignItems={'center'} >
                        <Image alt='icon' src={attribute.icon} />
                        <Typography variant='span' color='#767676' > {attribute.type} </Typography> </Stack>
                      <Typography>{attribute.data}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>
          <Stack width={'90%'} height={['95%', '95%', '85%', '85%', '85%']} mt={4} justifyContent={'center'} alignItems={'center'} bgcolor={'#FBFBFB'} >
            <Stack justifyContent={'center'} width={'80%'} >
              <Typography fontWeight={'bolder'} mb={1} mt={2} >Lore</Typography>
              <Typography textAlign={'justify'} mb={2} mt={1} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere ullamcorper ex,
                sit amet vehicula nisl maximus et. Mauris aliquet nibh eget efficitur fringilla. Donec
                tempus nec erat et tempor. Nulla malesuada molestie mauris, nec mollis nulla. Nullam
                fringilla consequat felis non ultrices. Nunc maximus, dui et sagittis volutpat, mi tortor
                mollis magna, a tristique mauris tortor eu orci. Donec tortor leo, interdum at varius vitae,
                tincidunt nec orci. Curabitur tincidunt egestas arcu, in malesuada turpis scelerisque sit amet.
                Ut scelerisque suscipit sem, at tempor quam semper non. Cras interdum felis ac suscipit finibus.
                Aliquam id urna nibh. Vestibulum varius risus sed lacus dapibus tempor.
              </Typography>
              <Typography mt={2} mb={4} textAlign={'justify'} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere ullamcorper ex,
                sit amet vehicula nisl maximus et. Mauris aliquet nibh eget efficitur fringilla. Donec
                tempus nec erat et tempor. Nulla malesuada molestie mauris, nec mollis nulla. Nullam
                fringilla consequat felis non ultrices. Nunc maximus, dui et sagittis volutpat, mi tortor
                mollis magna, a tristique mauris tortor eu orci. Donec tortor leo, interdum at varius vitae,
                tincidunt nec orci. Curabitur tincidunt egestas arcu, in malesuada turpis scelerisque sit amet.
                Ut scelerisque suscipit sem, at tempor quam semper non. Cras interdum felis ac suscipit finibus.
                Aliquam id urna nibh. Vestibulum varius risus sed lacus dapibus tempor.
              </Typography>
            </Stack>
          </Stack>
        </Box >
      </Stack >
    </>
  )
}

export default Companion
