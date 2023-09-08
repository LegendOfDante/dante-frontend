import * as React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { ButtonColor, ButtonOutlined } from '@/styles/themes/components/Button'
import { Button, Stack, Typography } from '@mui/material'
import metamask from '@/assets/iconos/tools/metamask.svg'
import ledger from '@/assets/iconos/tools/ledger.svg'
import walletConnect from '@/assets/iconos/tools/walletConnect.svg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '330px',
  height: '435px',
  bgcolor: '#F5F5F5',
  borderRadius: '28px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly'
}

export default function ModalSignIn({ title, mnWidth, mxwidth }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Stack width={'80%'} alignItems={'center'} >
      <ButtonOutlined handleOpen={handleOpen} title={title} p={'0'} mxwidth={mxwidth || '110px'} mnWidth={mnWidth || '120px'} mr={'.5rem'} ml={'1rem'} />
      <Modal
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box ml={2} >
            <Typography fontWeight={'600'} variant='h4' >Sign in</Typography>
            <Typography fontWeight={'500'} mt={4}>Connect to a wallet to see your assets.</Typography>
          </Box>
          <Stack height={'40%'} justifyContent={'space-around'} alignItems={'center'} width={'100%'} >
            <ButtonColor bgColor={'#F7C55A'} h={'40px'} img={metamask} title={'METAMASK'} fontColor={'#6750A4'} mxwidth={'300px'} mnWidth={'300px'} />
            <ButtonColor bgColor={'#F7C55A'} h={'40px'} img={ledger} title={'LEDGER'} fontColor={'#6750A4'} mxwidth={'300px'} mnWidth={'300px'} />
            <ButtonColor bgColor={'#F7C55A'} h={'40px'} img={walletConnect} title={'WALLET CONNECT'} fontColor={'#6750A4'} mxwidth={'300px'} mnWidth={'300px'} />
          </Stack>
          <Stack alignItems={'end'} >
            <Button variant="text" onClick={handleClose} color='purple' ><Typography textTransform={'capitalize'} >Close</Typography></Button>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  )
}
