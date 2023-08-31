'use client'
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'

// ASSETS
import juanjoTeam from '@/assets/team/juanjoTeam.svg'
import francisTeam from '@/assets/team/francisTeam.svg'
import sergioTeam from '@/assets/team/sergioTeam.svg'
import pabloTeam from '@/assets/team/pabloTeam.svg'
import leonTeam from '@/assets/team/leonTeam.svg'
import juanTeam from '@/assets/team/juanTeam.svg'
import cryptoskTeam from '@/assets/team/cryptoskTeam.svg'
import juanfoTeam from '@/assets/team/juanfoTeam.svg'
import advisors1 from '@/assets/team/advisors1.svg'
import advisors2 from '@/assets/team/advisors2.svg'
import advisors3 from '@/assets/team/advisors3.svg'
import backer1 from '@/assets/team/backer1.svg'
import backer2 from '@/assets/team/backer2.svg'
import backer4 from '@/assets/team/backer4.svg'
import backer5 from '@/assets/team/backer5.svg'
import backer7 from '@/assets/team/backer7.svg'
import HeaderImg from '@/components/HeaderImg'
import { useLayoutEffect, useState } from 'react'
import { ButtonOutlined } from '@/styles/themes/components/Button'

const team = [
  {
    img: sergioTeam,
    title: 'Sergio',
    subTitle: 'Founder & CEO & CTO.',
    p: 'CoFounder y CTO Xaloc Studio.'
  },
  {
    img: leonTeam,
    title: 'León Sagan',
    subTitle: 'Co-Founder & Game Designer',
    p: 'Creation of lore, characters and game mechanics.'
  },
  {
    img: juanTeam,
    title: 'Juan',
    subTitle: 'COO',
    p: 'Advisory and Investor in Blockchain and Crypto Early Stages Projects. CEO and Co-Founder at J Capital Investments Venture. Strategic Advisor Outer Ring.'

  },
  {
    img: cryptoskTeam,
    title: 'Cryptosk',
    subTitle: 'Blockchain/NFTs',
    p: 'CEO ZKapital',
    subP: 'Crypto and blockchain analyst at J Capital Investments.'
  },
  {
    img: pabloTeam,
    title: 'Pablo González',
    subTitle: 'CMO',
    p: 'CEO && Founder Agencia Marketing Portal 14.'

  },
  {
    img: juanjoTeam,
    title: 'Juan José Muñoz García',
    subTitle: 'CFO y Legal',
    p: 'Lawyer bufete jurídico Muñoz y Executive MBA in management and direction of international business.'

  },
  {
    img: juanfoTeam,
    title: 'Juan',
    subTitle: 'Founder & CEO && CTO.',
    p: 'CoFounder y CTO Xaloc Studio.'

  },
  {
    img: francisTeam,
    title: 'FranciscoJavier',
    subTitle: 'Programmer',
    p: 'Unity programmer.'
  }
]

const fourObject = team.slice(0, 4)

const advisors = [
  {
    img: advisors1,
    title: 'Daniel Valdes',
    subTitle: 'CEO Outer Ring and Executive Director at Nexxyo Labs.'
  },
  {
    img: advisors2,
    title: 'Daniel Valdes',
    subTitle: 'Technology manager at XCAD.  '
  },
  {
    img: advisors3,
    title: 'Ricardo Jiménez',
    subTitle: 'Strategic investor',
    p: 'Investment consultant.Investor in ICO of ETH and Exodus wallet.'
  }
]

const page = () => {
  const [teamReduce, setTeamReduce] = useState([])
  const matches = useMediaQuery('(max-width:800px)')
  console.log(team.length, fourObject.length)

  const handleOpen = () => {
    if (teamReduce.length === 8) {
      setTeamReduce(fourObject)
    } else if (teamReduce.length === 4) {
      setTeamReduce(team)
    }
  }

  useLayoutEffect(() => {
    if (matches) {
      setTeamReduce(fourObject)
    } else {
      setTeamReduce(team)
    }
  }, [matches])

  return (
    <>
      <HeaderImg title={'Team'} />
      <Stack alignItems={'center'} width={['100%']} >
        <Typography variant='h3' fontWeight={'600'} fontFamily={'italic'} >CORE TEAM</Typography>
      </Stack>

      <Stack width={'100%'} alignItems={'center'} mt={4} mb={4} >
        <Grid container spacing={2} width={'70%'} overflow={'hidden'} justifyContent={'center'} >
          {teamReduce.map((team, i) => (
            <Grid
              gap={4} key={i} item {...{ xs: 11, sm: 8, md: 6, lg: 6, xl: 6 }}
              justifyContent={['center', 'center', 'start', 'start']}
              display={'flex'} mb={4}
            >
              <Stack
                marginX={2} marginBottom={4} direction={['column', 'column', 'row', ' row', ' row']}
                justifyContent={'space-evenly'} alignItems={'center'} mr={2} mb={['2', '2', '0', '0']}
              >
                <Box >
                  < Image alt='team image' src={team.img} />
                </Box>
                <Box ml={2} width={['100%', '100%', 'auto', 'auto']} textAlign={['center', 'center', 'center', 'justify']} mt={['2', '2', '0', '0']} >
                  <Typography variant='h5' fontWeight={'600'} >{team.title}</Typography>
                  <Typography fontWeight={'500'}>{team.subTitle}</Typography>
                  <Typography color={'#767676'}>{team.p}</Typography>
                  <Typography color={'#767676'}>{team.subP}</Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid >
        {matches &&
          <ButtonOutlined handleOpen={handleOpen} mnWidth={'230px'} title={teamReduce.length === 4 ? 'See all team members' : 'see fewer team members'} />
        }
      </Stack>

      <Stack alignItems={'center'} width={['100%']} bgcolor={'#F5F5F5'} >
        <Typography mt={4} variant='h3' fontWeight={'600'} fontFamily={'italic'}>ADVISORS</Typography>
      </Stack>

      <Stack width={'100%'} alignItems={'center'} bgcolor={'#F5F5F5'} >
        <Grid container spacing={2} width={'70%'} >
          {advisors.map((advisor, i) => (
            <Grid mb={4} gap={4} key={i} item {...{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} justifyContent={['center', 'center', 'start', 'start']} display={'flex'} >
              <Stack p={4} marginX={2} marginBottom={4} direction={['column', 'column', 'row', ' row', ' row']} justifyContent={'space-evenly'} alignItems={'center'} mr={2} mb={['2', '2', '0', '0']} >
                <Box >
                  < Image alt='image adivsors' src={advisor.img} />
                </Box>
                <Box ml={2} width={['100%', '100%', 'auto', 'auto']} textAlign={['center', 'center', 'center', 'justify']} mt={['2', '2', '0', '0']} >
                  <Typography variant='h4' fontWeight={'600'}>{advisor.title}</Typography>
                  <Typography fontWeight={'500'}>{advisor.subTitle}</Typography>
                  <Typography color={'#767676'}>{advisor.p}</Typography>
                  <Typography>{advisor.subP}</Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid >
      </Stack >

      <Stack width={'100%'} height={['50%', '50%', '50vh', '50vh']} alignItems={'center'} p={4} justifyContent={'center'} >
        <Stack alignItems={'center'} width={['100%']} >
          <Typography mt={4} mb={4} variant='h3' fontWeight={'600'} fontFamily={'italic'} >BACKERS</Typography>
        </Stack>
        <Grid columnGap={4} alignItems={'center'} container justifyContent={['center', 'center', 'center', 'center']} display={'flex'}>
          <Grid mb={4} alignItems={'center'} container item {...{ xs: 4, sm: 4, md: 1, lg: 1, xl: 1 }} justifyContent={['center', 'center', 'center', 'center']} display={'flex'} >
            <Box width={['20%', '20%', '80%', '60%']} display={'flex'} justifyContent={'center'} ><Image alt='backers' src={backer1} /></Box>
          </Grid>
          <Grid mb={4} alignItems={'center'} container item {...{ xs: 4, sm: 4, md: 1, lg: 1, xl: 1 }} justifyContent={['center', 'center', 'center', 'center']} display={'flex'} >
            <Box width={['20%', '20%', '80%', '60%']} display={'flex'} justifyContent={'center'} ><Image alt='backers' src={backer2} /></Box>
          </Grid>
          <Grid mb={4} alignItems={'center'} container item {...{ xs: 4, sm: 4, md: 1, lg: 1, xl: 1 }} justifyContent={['center', 'center', 'center', 'center']} display={'flex'} >
            <Box width={['20%', '20%', '80%', '60%']} display={'flex'} justifyContent={'center'} ><Image alt='backers' src={backer4} /></Box>
          </Grid>
          <Grid mb={4} alignItems={'center'} container item {...{ xs: 4, sm: 4, md: 1, lg: 1, xl: 1 }} justifyContent={['center', 'center', 'center', 'center']} display={'flex'} >
            <Box width={['20%', '20%', '80%', '60%']} display={'flex'} justifyContent={'center'} ><Image alt='backers' src={backer4} /></Box>
          </Grid>
          <Grid mb={4} alignItems={'center'} container item {...{ xs: 4, sm: 4, md: 1, lg: 1, xl: 1 }} justifyContent={['center', 'center', 'center', 'center']} display={'flex'} >
            <Box width={['20%', '20%', '80%', '60%']} display={'flex'} justifyContent={'center'} ><Image alt='backers' src={backer5} /></Box>
          </Grid>
          <Grid mb={4} alignItems={'center'} container item {...{ xs: 4, sm: 4, md: 1, lg: 1, xl: 1 }} justifyContent={['center', 'center', 'center', 'center']} display={'flex'} >
            <Box width={['20%', '20%', '80%', '60%']} display={'flex'} justifyContent={'center'} ><Image alt='backers' src={backer1} /></Box>
          </Grid>
          <Grid mb={4} alignItems={'center'} container item {...{ xs: 4, sm: 4, md: 1, lg: 1, xl: 1 }} justifyContent={['center', 'center', 'center', 'center']} display={'flex'} >
            <Box width={['20%', '20%', '80%', '60%']} display={'flex'} justifyContent={'center'} ><Image alt='backers' src={backer7} /></Box>
          </Grid>
        </Grid>
      </Stack>
    </>
  )
}

export default page
