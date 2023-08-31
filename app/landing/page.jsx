'use client'

// DEPENDENCIAS
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'

// COMPONENTS
import { ButtonColor } from '@/styles/themes/components/Button'
import CardComponent from '@/components/landing/Card'
import Filter from '@/components/landing/Filter'

// STYLES
import styles from '@/styles/landing/page.module.css'

// ASSETS
import imgSecond from '@/assets/landing-img/imgSecond.svg'
import imgPcLanding from '@/assets/landing-img/imgPcLanding.png'
import fire from '@/assets/landing-img/fire.png'
import water from '@/assets/landing-img/water.png'
import earth from '@/assets/landing-img/earth.png'
import air from '@/assets/landing-img/air.png'
import THESEUS from '@/assets/HEROES/THESEUS.png'
import waterIcon from '@/assets/iconos/waterIcon.svg'
import fireIcon from '@/assets/iconos/fireIcon.svg'
import earthIcon from '@/assets/iconos/earthIcon.svg'
import airIcon from '@/assets/iconos/airIcon.svg'

const Landing = () => {
  return (
    <>
      <Box display={['flex', 'flex', 'block', 'block']} className={styles.imgFirstLanding} >
      </Box>

      <Stack direction={['column', 'column', 'row', 'row']} className={styles.containerFlexVideo}>
        <Image alt='second image' className={styles.ladingImgSecond} src={imgSecond} />
        <Box width={['85%', '90%', '40%', '40%']} marginLeft={[0, 4]} marginBottom={4}>
          <Box mt={[4, 4, 0, 0]} textAlign={'center'}>
            <Typography variant={['h5']} fontWeight={'600'}
              fontSize={['1.8rem', '1.2rem', '1.8rem', '1.8rem', '1.8rem']} fontFamily={['italic', 'italic', 'unset', 'unset', 'unset']}
            >
              HELLS MAPS
            </Typography>
            <Typography variant={['h3']} fontWeight={'600'} fontSize={['3rem', '3rem', '3rem', '3rem', '3rem']}
              fontFamily={['italic', 'italic', 'unset', 'unset', 'unset']}
            >
              ARE YOUR READY?
            </Typography>
          </Box>
          <Box marginTop={2} textAlign={'justify'} marginBottom={2} color={'#767676'} >
            <Typography variant='p'>
              Legend of Dante is a game with a fundamental role playing and fantasy component based on Dante&lsquo;s divine comedy
              with some features of the Texas Hold&lsquo;em game.
            </Typography>
            <br />
            <br />

            <Typography variant='p'>
              In this strategy card game, skill defines your success, not luck. Choose an iconic hero and combine it with demons deities,
              pets and runes to win the match
            </Typography>
            <br />
            <br />

            <Typography variant='p'>
              Players face off in fast-paced duels that combine spell casting and magical abilities with the art of bluffing to fool
              their opponents
            </Typography>
          </Box>
          <Stack justifyContent={'end'} mt={8} height={'10%'} mb={4} direction={'column'} width='100%' alignItems={'center'} >
            <ButtonColor title={'Play now'} fontColor={'black'} />
          </Stack>
        </Box >
      </Stack >

      <Stack
        direction={['column', 'column', 'row', 'row', 'row']} justifyContent={['center', 'center', 'center', 'center', 'space-evenly']}
        height={['100vh', '120vh', '110vh', '100vh', '90vh']} alignItems={'center'}
      >
        <Stack mt={4} width={['80%', '80%', '60%', 'auto', 'auto']} alignItems={['center', 'center', 'center', 'center', 'center']} >
          <Typography mb={4} variant='h5' textAlign={'center'} fontSize={['1.2rem', '2.8rem', '1.5rem', '1.5rem', '1.5rem']} >WHO WILL YOU TAKE INTO THE FIGHT?</Typography>
          <Typography mb={4} variant='h3' textAlign={'center'} fontSize={['1.8rem', '3rem', '1.8rem', '3.5rem', '3.5rem']} fontWeight={'bolder'} >CHOOSE YOUR HEROES</Typography>
          <Filter />
          <Stack justifyContent={'end'} mt={[2, 8]} height={'10%'} direction={'column'} width='100%' alignItems={'center'} >
            <ButtonColor title={'meet all the heroes'} mnWidth={'205px'} fontColor={'#6750A4'} />
          </Stack>
        </Stack>
        <Stack display={{ xs: 'none', ms: 'none', md: 'flex', lg: 'flex', xl: 'flex' }} width={'30%'} justifyContent={'center'} alignItems={'center'} >
          <Image src={THESEUS} className={styles.theseusImg} />
          <Typography variant='h5' textAlign={'center'} mt={2} fontWeight={'bolder'} ml={4} >THESEUS</Typography>
        </Stack>
      </Stack>

      <Box
        className={styles.containerDemons} height={['110vh', '120vh', '110vh', '98vh']}
        display={'flex'} flexDirection={'column'} justifyContent={['center', 'center', 'none', 'none']}
        width={'100%'}
      >
        <Box mt={[0]} textAlign={'center'} width={'100%'} >
          <Typography
            mt={4} variant={['h6', 'h5']} fontFamily={'italic'}
            fontSize={['1.2rem', '1.2rem', '1.8rem', '1.8rem', '1.8rem']}
            fontWeight={'600'} mb={2} color={'#F7C55A'}
          >
            UP TO 52 UNIQUE CARDS THAT
            WILL SURPRISE YOU
          </Typography>
          <Typography
            variant={['h7', 'h2']} fontSize={['1.8rem', '3rem', '1.8rem', '3.5rem', '3.5rem']}
            color={'#FEFEFE'} fontWeight={'600'} component="h2"
          >FIGHT AGAINST YOUR DEMOND</Typography>
        </Box>
        <Stack
          mt={4} direction={['row']} width={['95%', '97%', '100%', '100%', '100%']}
          height={['60%', '60%', '60%', '60%', '60%']} justifyContent={['none', 'none', 'none', 'center', 'center']}
          overflow={['scroll', 'scroll', 'scroll', 'hidden', 'hidden']} alignItems={'center'}
        >
          <Box marginLeft={8} >
            <CardComponent img={fire} backgroundColor={'transparent'} icon={fireIcon} />
            <Stack direction={'row'} width={'86%'} justifyContent={'center'} >
              <Typography mr={0.5} color={'#767676'} fontFamily={'recursive'} variant=''>Element: </Typography>
              <Typography ml={0.5} fontWeight={'600'} color={'#F7C55A'} variant=''>WATER</Typography>
            </Stack>
          </Box>
          <Box>
            <CardComponent img={water} backgroundColor={'transparent'} icon={waterIcon} />
            <Stack height={20} direction={'row'} width={'86%'} justifyContent={'center'} >
              <Typography mr={0.5} color={'#767676'} fontFamily={'recursive'} variant=''>Element: </Typography>
              <Typography ml={0.5} fontWeight={'600'} color={'#F7C55A'} variant=''>FIRE</Typography>
            </Stack>
          </Box>
          <Box>
            <CardComponent img={earth} backgroundColor={'transparent'} icon={earthIcon} />
            <Stack direction={'row'} width={'86%'} justifyContent={'center'} >
              <Typography mr={0.5} color={'#767676'} fontFamily={'recursive'} variant=''>Element: </Typography>
              <Typography ml={0.5} fontWeight={'600'} color={'#F7C55A'} variant=''>EARTH</Typography>
            </Stack>
          </Box>
          <Box >
            <CardComponent img={air} backgroundColor={'transparent'} icon={airIcon} />
            <Stack direction={'row'} width={'86%'} justifyContent={'center'} >
              <Typography mr={0.5} color={'#767676'} variant=''>Element: </Typography>
              <Typography ml={0.5} fontWeight={'600'} color={'#F7C55A'} variant=''>AIR</Typography>
            </Stack>
          </Box>
        </Stack>
        <Stack justifyContent={'end'} mt={[2, 8]} height={'10%'} direction={'column'} width='100%' alignItems={'center'} >
          <ButtonColor title={'Play now'} fontColor={'black'} />
        </Stack>
      </Box >

      <Stack height={['110vh', '100vh', '80vh', '80vh']} alignItems={['center', 'none']} width={['xs', 'sm', 'md', 'auto']} direction={['column', 'column', 'row', 'row']} >
        <Box display={'flex'} justifyContent={'center'} height={'100%'} flexDirection={'column'} width={['100%', '50%']} alignItems={'center'} >
          <Image alt='Third image' className={styles.imgPcImg} src={imgPcLanding} />
        </Box>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} width={['70%', '70%', '40%', '40%']} marginLeft={4} marginBottom={4}>
          <Box textAlign={'center'}>
            <Typography variant={['h7', 'h4']} mb={2} fontFamily={'italic'} fontWeight={'600'} color={'#F7C55A'} fontSize={['1.9rem', '1.9rem', '1.8rem', '1.8rem', '1.8rem']} component="h3">UP TO 100 LEVELS</Typography>
            <Typography variant={['h5', 'h2']} fontWeight={'600'} fontFamily={'italic'} fontSize={['2.8rem', '2.8rem', '3rem', '3rem', '3rem']} component="h2">TO LEVEL UP YOUR HEROES</Typography>
          </Box>
          <Box marginTop={2} textAlign={'justify'} marginBottom={2} color={'#767676'} >
            <Typography fontSize={['.9rem', '1.2rem', '1rem', '1.1rem']} color={'#767676'} variant='p'>
              Upgrade your stats, attributes and unlock
              new features by reaching the hero levels. The player will be able to shape their heroes,
              making them unique and preparing them to compete.
            </Typography>
          </Box>
          <Stack justifyContent={'end'} mt={8} height={'10%'} direction={'column'} width='100%' alignItems={'center'} >
            <ButtonColor title={'Play now'} fontColor={'black'} />
          </Stack>
        </Box >
      </Stack>
      <Stack className={styles.video2Landing} alignItems={'center'} justifyContent={'center'} >
        <Stack height={'90%'} alignItems={'center'} >
          <Typography color={'#F7C55A'} mt={8} fontSize={['1.2rem', '1.2rem', '1.8rem', '1.8rem', '1.8rem']} >HELLS MAPS</Typography>
          <Typography color={'white'} fontSize={['1.8rem', '3rem', '1.8rem', '3rem', '3rem']} fontWeight={'bolder'} >ARE YOU READY?</Typography>
          <Stack height={'10%'} direction={'column'} width='100%' alignItems={'center'} >
            <ButtonColor title={'Play now'} fontColor={'black'} />
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Landing
