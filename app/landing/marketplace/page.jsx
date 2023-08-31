'use client'
import { useCallback, useState } from 'react'
import Aside from '@/components/marketplace/Aside'
import { Stack } from '@mui/material'

// COMPONENTS
import SubNavbar from '@/components/SubNavbar'
import Heros from './components/Heros'
import Demons from './components/Demons'

const page = () => {
  const [page, setPage] = useState()

  const renderContent = useCallback(() => {
    switch (page) {
      case 1:
        return <Demons />

      default:
        return <Heros />
    }
  }, [page])
  return (
    <>
      <Stack mt={'59px'} >
        <SubNavbar setPage={setPage} position={'fixed'} label={[
          {
            title: 'HERO'
          },
          {
            title: 'DEMONS'
          },
          {
            title: 'PETS'
          },
          {
            title: 'EQUIPMENT'
          },
          {
            title: 'SPELLS'
          }
        ]} />
      </Stack>
      <Stack mt={'3rem'} direction={['column', 'row', 'row', 'row', 'row']} height={'100%'} justifyContent={'center'} alignItems={['center', 'start', 'start', 'start', 'start']} >
        <Aside />
        {renderContent()}
      </Stack>
    </>
  )
}

export default page
