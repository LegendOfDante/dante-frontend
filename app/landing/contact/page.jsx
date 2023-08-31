'use client'
import { Checkbox, FormControl, Stack, TextField, Typography } from '@mui/material'
import Image from 'next/image'

// STYLES
import styles from '@/styles/landing/contact.module.css'

// ASSETS
import contacto from '@/assets/landing-img/contacto.png'
import { ButtonColor } from '@/styles/themes/components/Button'

const page = () => {
  return (
    <>
      <Stack className={styles.headerImg} height={['30vh', '30vh', '42vh', '42vh']} justifyContent={'center'} >
        <Typography variant="h2" color={'light.light'} textAlign={'center'} fontWeight={'600'} >CONTACTO</Typography>
      </Stack>
      <Stack height={['190vh', '180vh', '110vh', '120vh', '100vh']} width={'100%'} alignItems={'center'} mt={4} justifyContent={'center'} >
        <Stack height={['75%', '75%', '80%', '80%']} width={'80%'} alignItems={'center'} direction={['column-reverse', 'column-reverse', 'row', 'row']} justifyContent={'center'} >
          <Stack height={['45%', '45%', '80%', '80%']} width={['100%', '100%', '50%', '50%']} alignItems={'center'} justifyContent={'center'}>
            <Image alt='Image contat us' className={styles.contactImg} src={contacto} />
          </Stack>
          <Stack width={['100%', '100%', '50%', '50%']} mb={4} height={['55%', '50%', '90%', '80%']} alignItems={'center'} bgcolor={'#F5F5F5'} justifyContent={['center']} >
            <Stack width={'70%'} justifyContent={'start'} >
              <Typography variant='h5' fontSize={{ xs: '.8rem', sm: '.9rem' }} fontWeight={'bolder'} >Get in contact with us</Typography>
              <Typography color={'#767676'} fontSize={{ xs: '.8rem', sm: '.9rem' }} mb={2} mt={2} >Send us an email to info@leyendsofdante.com or fill in this form. </Typography>
            </Stack>
            <Stack alignItems={'center'} mt={2} justifyContent={'center'} width={'100%'} >
              <FormControl sx={{ marginBottom: 4, width: '70%' }} >
                <TextField fullWidth id="outlined-basic" color='neutral' focused label="Name" placeholder='Write your name' />
              </FormControl>
              <FormControl sx={{ marginBottom: 4, width: '70%' }} >
                <TextField fullWidth id="outlined-basic" color='neutral' focused label="Email" placeholder='Write your email' />
              </FormControl>
              <FormControl sx={{ marginBottom: 4, width: '70%' }} >
                <TextField fullWidth id="outlined-basic" color='neutral' focused label="Affair" placeholder='Write your affair' />
              </FormControl>
              <FormControl sx={{ marginBottom: 4, width: '70%' }} >
                <TextField fullWidth id="outlined-basic" color='neutral' focused label="Message" placeholder='Write your message' />
              </FormControl>
            </Stack>
            <Stack width={['77%', '77%', '70%', '70%']}>
              <Stack direction={'row'} alignItems={'center'} >
                <Checkbox defaultChecked />
                <Typography fontSize={{ xs: '.8rem', sm: '.9rem' }} >I have read and accept the Privacy Policy</Typography>
              </Stack>
              <ButtonColor fontColor={'#6750A4'} title={'SEND'} mnWidth={'50px'} mxwidth={'100px'} />
            </Stack>
          </Stack>
        </Stack>
        <Stack width={'80%'} >
          <Typography textAlign={'justify'} fontSize={{ xs: '.8rem', sm: '.9rem' }} mt={4} mb={4} >
            We inform you that the person responsible for the personal data you provide
            through this form will be the Legend of Dante. The data provided will be processed
            in order to proceed with the resolution of queries and/or the sending of requested
            information, as well as for the Sending commercial information about products
            and/or services when expressly authorized, and they will not be communicated
            to third parties except by legal obligation. You can access, rectify and delete
            the data, as well as other rights, as explained in the additional information, through
            the following address: info@legendofdante.com. You can consult more information in the Privacy Policy.
          </Typography>
        </Stack>
      </Stack>
    </>
  )
}

export default page
