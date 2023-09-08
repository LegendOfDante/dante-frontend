'use client'
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import { Stack, Tab, Typography, tabClasses } from '@mui/material'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'
import Image from 'next/image'

// STYLES
import styles from '@/styles/components/filterLanding.module.css'

// ASSETS
import WARRIOR from '@/assets/iconos/Heroes/WARRIOR.svg'
import BARDS from '@/assets/iconos/Heroes/BARDS.svg'
import RANGERS from '@/assets/iconos/Heroes/RANGERS.svg'
import WIZARDS from '@/assets/iconos/Heroes/WIZARDS.svg'
import PALADIN from '@/assets/iconos/Heroes/PALADIN.svg'
import HECTOR from '@/assets/HEROES/HECTOR.png'
import ACHILLES from '@/assets/HEROES/ACHILLES.png'
import LEONIDAS from '@/assets/HEROES/LEONIDAS.png'

const IconWarrior = () => (
  <Image src={WARRIOR} className={styles.iconFilterLanding} />
)
const IconBards = () => (
  <Image src={BARDS} className={styles.iconFilterLanding} />
)
const IconRangers = () => (
  <Image src={RANGERS} className={styles.iconFilterLanding} />
)
const IconWizards = () => (
  <Image src={WIZARDS} className={styles.iconFilterLanding} />
)
const IconPaladin = () => (
  <Image src={PALADIN} className={styles.iconFilterLanding} />
)

function FilterMenu() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Stack width={['100%', '100%', '100%', '100%', '100%']} alignItems={'center'} mb={4} >
      <Box sx={{ maxWidth: { xs: 320, sm: 580 }, bgcolor: 'white' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          values={value}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          <StyledTab sx={{ fontFamily: 'system-ui', fontWeight: '600', fontSize: '13px' }} icon={<IconWarrior />} label='WARRIORS' />
          <StyledTab sx={{ fontFamily: 'system-ui', fontWeight: '600', fontSize: '13px' }} icon={<IconBards />} label='BARDS' />
          <StyledTab sx={{ fontFamily: 'system-ui', fontWeight: '600', fontSize: '13px' }} icon={<IconRangers />} label='RANGERS' />
          <StyledTab sx={{ fontFamily: 'system-ui', fontWeight: '600', fontSize: '13px' }} icon={<IconWizards />} label='WIZARDS' />
          <StyledTab sx={{ fontFamily: 'system-ui', fontWeight: '600', fontSize: '13px' }} icon={<IconPaladin />} label='PALADIN' />
        </StyledTabs>
      </Box>
    </Stack>
  )
}

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#F7C55A'
  }
})

const StyledTab = styled(Tab)`
background-color: white;
  color: #2D2D2D;
  &.${tabClasses.selected} {
    color: #2D2D2D;
  }
`

const imgArray = [
  {
    title: 'HECTOR',
    img: HECTOR
  },
  {
    title: 'ACHILLES',
    img: ACHILLES
  },
  {
    title: 'LEONIDAS',
    img: LEONIDAS
  }
]

const CarouselRatio = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: ['none', 'none', 'center', 'center', 'center'],
        gap: 1,
        py: 1,
        overflow: 'auto',
        width: ['100%', '100%', '100%', '100%', '100%'],
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center'
        },
        '::-webkit-scrollbar': { display: 'none' }
      }}
    >
      {imgArray && imgArray.map((img, i) => (
        <div key={i} className="MuiAspectRatio-root">
          <div className="MuiAspectRatio-content">
            <Stack mr={0} p={2} maxWidth={'200px'} minWidth={'170px'} >
              <Image className={styles.imgFilterLanding} src={img.img} />
              <Typography fontFamily={'system-ui'} fontWeight={'600'} textAlign={'center'} >{img.title}</Typography>
            </Stack>
          </div>
        </div>
      ))}
    </Box>
  )
}

const Filter = () => {
  return (
    <>
      <FilterMenu />
      <Stack direction={'row'} mt={4} width={['100%']} overflowX={'scroll'} flexWrap={'nowrap'} >
        <CarouselRatio />
      </Stack >
    </>
  )
}

export default Filter
