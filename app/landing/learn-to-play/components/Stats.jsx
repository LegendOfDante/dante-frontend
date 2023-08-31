import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'

// ASSETS
import ACHILLE from '@/assets/dashboard/ACHILLE.png'
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
import SPELL from '@/assets/iconos/Generales/SPELL.svg'
import Pets from '@/assets/iconos/Generales/Pets.svg'

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

const Highlights = [
  {
    icon: Pets,
    type: 'Companion',
    data: 'Troya'
  },
  {
    icon: Atack,
    type: 'Mastery',
    data: 'Combat'
  }
]

const mastery = [
  {
    icon: SPELL,
    data: 'Godwin´s Feather (Cantrip)'
  },
  {
    icon: SPELL,
    data: 'Flaming weapon (Cantrip)'
  },
  {
    icon: SPELL,
    data: 'Should of Irkall (Level1)'
  },
  {
    icon: SPELL,
    data: 'Enkidu´s Claws (Level1)'
  }
]

const Stats = () => {
  return (
    <>
      <Stack direction={['column', 'column', 'row', 'row']} width={'100%'} height={['330vh', '330vh', '120vh', '100vh', '80vh']} justifyContent={['space-evenly', 'space-evenly', 'center', 'center']} >
        <Box mr={[0, 0, 4, 4]} display={'flex'} alignItems={'center'} justifyContent={['center', 'center', 'none', 'none']} >
          <Image alt='Campanion text' src={ACHILLE} className={styles.imgcampanionText} />
        </Box>
        <Box ml={[0, 0, 4, 4]} display={'flex'} flexDirection={'column'} alignItems={['center', 'center', 'none', 'none']} justifyContent={'center'} width={['100%', '100%', '55%', '60%']} >
          <Stack mb={[0, 0, 0, 4, 4]} >
            <Typography variant={'h5'} fontSize={['2rem', '2rem', '1.5rem', '1.5rem']} textAlign={'center'} fontWeight={'bolder'} mt={2} >ACHILLES</Typography>
          </Stack>
          <Stack direction={['column', 'column', 'row', 'row']} mt={[0, 0, 0, 4, 4]} justifyContent={'space-between'} alignItems={['center', 'center', 'none', 'none']} width={'90%'} >
            <Stack bgcolor={'#FBFBFB'} width={['80%', '80%', '80%', '45%', '45%']} mt={[4, 4, 0, 0]} p={4} >
              <Typography p={4} mb={4} fontWeight={'bolder'} >Lorem Ipsum</Typography>
              <Grid container spacing={2} width={'100%'} bgcolor={'#FBFBFB'} >
                {stats && stats.map((stat, i) => (
                  <Grid key={i} mb={4} gap={4} item {...{ xs: 12, sm: 8, md: 6, lg: 6, xl: 6 }} justifyContent={['center', 'center', 'start', 'start']} display={'flex'} >
                    <Stack direction={'row'} width={'100%'} justifyContent={'space-evenly'} alignItems={'center'} >
                      <Stack width={'60%'} direction={'row'} mr={2} alignItems={'center'} >
                        <Image alt='icon' src={stat.icon} />
                        <Typography variant='span' color='#767676' fontSize={'.8rem'} > {stat.type} </Typography> </Stack>
                      <Typography ml={2}>{stat.data}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack bgcolor={'#FBFBFB'} width={['80%', '80%', '80%', '45%', '45%']} height={['auto', 'auto', 'auto', '287px', '287px']} mt={[4, 4, 0, 0]} p={4} >
              <Stack width={'100%'} ><Typography mb={4} fontWeight={'bolder'} >Attributes</Typography></Stack>
              <Grid container spacing={2} width={'100%'} bgcolor={'#FBFBFB'} >
                {attributes && attributes.map((attribute, i) => (
                  <Grid key={i} mb={4} gap={4} item {...{ xs: 12, sm: 8, md: 6, lg: 6, xl: 6 }} justifyContent={['center', 'center', 'start', 'start']} display={'flex'} >
                    <Stack direction={'row'} width={'100%'} justifyContent={'space-evenly'} alignItems={'center'} >
                      <Stack width={'60%'} direction={'row'} alignItems={'center'} >
                        <Image alt='icon' src={attribute.icon} />
                        <Typography variant='span' color='#767676' fontSize={'.8rem'} > {attribute.type} </Typography> </Stack>
                      <Typography>{attribute.data}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>
          <Stack direction={['column', 'column', 'row', 'row']} justifyContent={'space-between'} alignItems={['center', 'center', 'start', 'start']} mt={[4, 4, 4, 4]} width={['90%']} >
            <Stack bgcolor={'#FBFBFB'} width={['80%', '80%', '80%', '45%', '45%']} p={4}>
              <Typography p={4} mb={4} fontWeight={'bolder'} >Highlights</Typography>
              <Grid container spacing={2} width={'100%'} bgcolor={'#FBFBFB'} >
                {Highlights && Highlights.map((highlight, i) => (
                  <Grid key={i} mb={4} gap={4} item {...{ xs: 9, sm: 8, md: 6, lg: 10, xl: 10 }} justifyContent={['center', 'center', 'start', 'start']} display={'flex'} >
                    <Stack direction={'row'} width={'100%'} justifyContent={'space-evenly'} alignItems={'center'} >
                      <Stack width={'70%'} direction={'row'} mr={2} alignItems={'center'} >
                        <Image alt='icon' src={highlight.icon} />
                        <Typography variant='span' color='#767676' fontSize={'.8rem'} > {highlight.type} </Typography> </Stack>
                      <Typography fontWeight={'bolder'} ml={2}>{highlight.data}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
            <Stack bgcolor={'#FBFBFB'} width={['80%', '80%', '80%', '45%', '45%']} mt={[4, 4, 0, 0]} p={4} >
              <Stack width={'100%'} ><Typography mb={4} fontWeight={'bolder'} >Mastery Spell</Typography></Stack>
              <Grid container spacing={2} width={'100%'} bgcolor={'#FBFBFB'} >
                {mastery && mastery.map((mastery, i) => (
                  <Grid key={i} mb={4} gap={4} item {...{ xs: 12, sm: 8, md: 6, lg: 6, xl: 6 }} justifyContent={['center', 'center', 'start', 'start']} display={'flex'} >
                    <Stack direction={'row'} width={'100%'} justifyContent={'space-evenly'} alignItems={'center'} >
                      <Stack width={'50%'} direction={'row'} alignItems={'center'} >
                        <Image alt='icon' src={mastery.icon} />
                      </Stack>
                      <Typography fontSize={'.8rem'} >{mastery.data}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Stack>
        </Box >
      </Stack >
    </>
  )
}

export default Stats
