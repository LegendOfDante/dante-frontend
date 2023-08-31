'use client'
import { Stack } from '@mui/material'

// COMPONENTS
import LabTabs from './components/Tabs'

const page = () => {
  return (
    <Stack height={['85vh', '85vh', '130vh', '110vh', '90vh']} justifyContent={'center'} bgcolor={'#FBFBFB'} >
      <LabTabs />
    </Stack>
  )
}

export default page
