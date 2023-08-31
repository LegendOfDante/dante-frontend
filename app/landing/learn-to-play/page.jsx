'use client'
import { useCallback, useState } from 'react'

// COMPONENTS
import HeaderImg from '@/components/HeaderImg'
import SubNavbar from '@/components/SubNavbar'
import Lore from './components/Lore'
import Companion from './components/Companion'
import Stats from './components/Stats'

const page = () => {
  const [page, setPage] = useState(0)

  const renderContent = useCallback(() => {
    switch (page) {
      case 1:
        return <Lore />

      case 2:
        return <Companion />

      default:
        return <Stats />
    }
  }, [page])

  return (
    <>
      <HeaderImg title={'ACHILLES'} />
      <SubNavbar label={[
        {
          title: 'STATS'
        },
        {
          title: 'LORE'
        },
        {
          title: 'COMPANION'
        }
      ]} setPage={setPage} />
      {renderContent()}
    </>
  )
}

export default page
