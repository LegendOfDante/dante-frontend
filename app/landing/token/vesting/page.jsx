'use client'
import { Divider, Stack, Typography } from '@mui/material'
import iconHeaderDante from '@/assets/iconos/iconHeaderDante.svg'
import Image from 'next/image'
import LabTabs from './components/Tabs'
import { ButtonColor, ButtonOutlined } from '@/styles/themes/components/Button'

const page = () => {
  return (
    <Stack
      direction={['column-reverse', 'column', 'row', 'row', 'row']} mr={4} mt={'4rem'}
      alignItems={'center'} height={['150vh', '150vh', '80vh', '80vh', '80vh']} width={'100%'} justifyContent={'space-evenly'}
      bgcolor={'#FBFBFB'}
    >
      <Stack
        width={['90%', '90%', '35%', '35%', '35%']} borderRadius={'8px'} height={['45%', '45%', '80%', '80%', '80%']} bgcolor={'#FFFF'}
        alignItems={'center'} justifyContent={'space-evenly'}
      >
        <Stack width={'80%'} >
          <Typography variant='h4' fontWeight={'600'} >Daily Tokens</Typography>
        </Stack>
        <Stack width={'100%'} alignItems={'center'} >
          <Stack borderRadius={'4px'} direction={'row'} border={'1px solid #DCDCDC'} justifyContent={'space-between'} width={'80%'} p={2} alignItems={'center'} >
            <Image src={iconHeaderDante} alt='icon dante' />
            <Stack direction={'row'} >
              <Typography>0.000123</Typography>
              <Typography ml={2}>DANTE</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={'95%'} >
          <Divider />
        </Stack>
        <Stack width={'80%'} >
          <Typography mb={4} variant='h4' fontWeight={'600'} >Status</Typography>
          <LabTabs />
        </Stack>
      </Stack>

      <Stack
        width={['90%', '90%', '50%', '50%', '50%']} ml={[0, 0, 4, 4, 4]} bgcolor={'#FFFF'} height={['45%', '45%', '80%', '80%', '80%']}
        alignItems={'center'} justifyContent={'space-evenly'} borderRadius={'8px'}
      >
        <Stack width={'90%'} >
          <Typography variant='h4' fontWeight={'600'} >
            Overline Claim Vested DANTE Tokens
          </Typography>
        </Stack>

        <Stack direction={'row'} width={'90%'} justifyContent={'space-between'} >
          <Typography >Account Claimed:</Typography>
          <Stack direction={'row'} >
            <Typography>0.001234</Typography>
            <Typography ml={2}>DANTE</Typography>
          </Stack>
        </Stack>

        <Stack direction={'row'} width={'90%'} justifyContent={'space-between'} >
          <Typography>Account Claimed:</Typography>
          <Stack direction={'row'} >
            <Typography>0.001234</Typography>
            <Typography ml={2}>DANTE</Typography>
          </Stack>
        </Stack>
        <Stack width={'95%'} >
          <Divider />
        </Stack>
        <Stack direction={'row'} width={'90%'} justifyContent={'space-between'} >
          <Typography>Rewards Vesting:</Typography>
          <Stack direction={'row'} >
            <Typography>0.001234</Typography>
            <Typography ml={2}>DANTE</Typography>
          </Stack>
        </Stack>
        <Stack
          direction={['column', 'column', 'row', 'row', 'row']} width={'100%'}
          justifyContent={'space-around'} alignItems={'center'} height={'7rem'}
        >
          <ButtonOutlined mnWidth={'210px'} h={'43px'} title={'Claim token with burn'} />
          <ButtonColor mnWidth={'200px'} h={'43px'} title={'Claim token'} />
        </Stack>
        <Stack width={'90%'} >
          <Typography fontSize={'10px'} color={'#767676'}>
            Unlock all your tokens now, just pay the burn fee. burn Fee is 59% universal tokens.
          </Typography>
        </Stack>
      </Stack>
    </Stack >
  )
}

export default page
