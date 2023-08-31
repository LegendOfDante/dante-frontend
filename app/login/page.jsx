'use client'

// DEPENDENCIAS
import { Box, Button, Stack, Typography } from '@mui/material'
import Footer from '@/components/Footer'

const Landing = () => {
  return (
    <>
      <Box display={['flex', 'flex', 'flex', 'flex']} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={['100vh', '100vh', '90vh', '90vh']}>
        <Stack direction={'column'} alignItems={'center'} justifyContent={'space-evenly'} borderRadius={'5px'} height={'50vh'} bgcolor={'#F5F5F5'} width={['90%', '80%', '40%', '40%']} >
          <Stack width={'60%'}>
            <Typography variant='h5' fontWeight={'600'} textAlign={'center'} >Connect to a wallet to see your assets</Typography>
          </Stack>
          <Stack direction={'column'} width={'100%'} justifyContent={'center'} alignItems={'center'} >
            <Button sx={{ background: 'white', width: ['90%', '80%', '60%', '60%'], color: 'black', boxShadow: '1', borderRadius: '20px', height: '2.5rem', marginTop: '1rem' }}>
              Connect with Metamask
            </Button>
            <Button sx={{ background: 'white', width: ['90%', '80%', '60%', '60%'], color: 'black', boxShadow: '1', borderRadius: '20px', height: '2.5rem', marginTop: '1rem' }}>
              Connect with Ledger
            </Button>
            <Button sx={{ background: 'white', width: ['90%', '80%', '60%', '60%'], color: 'black', boxShadow: '1', borderRadius: '20px', height: '2.5rem', marginTop: '1rem' }}>
              Connect with WalletConect
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </>
  )
}

export default Landing
