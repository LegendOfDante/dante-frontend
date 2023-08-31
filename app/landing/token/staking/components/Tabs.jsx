'use client'
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import PropTypes from 'prop-types'
import { Divider, Stack, Tab, Typography, tabClasses } from '@mui/material'
import Box from '@mui/material/Box'
import Image from 'next/image'
import styled from '@emotion/styled'

// COMPONENTS
import { ButtonColor } from '@/styles/themes/components/Button'

// STYLES
import styles from '@/styles/components/token/staking.module.css'

// ASSETS
import iconHeaderDante from '@/assets/iconos/iconHeaderDante.svg'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }} mt={4} >
          {children}
        </Box>
      )}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function SubNavbar({ position }) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Stack width={'100%'} height={['65%', '65%', '70%', '70%', '75%']} alignItems={'center'} >
      <Box sx={{ width: '80%', bgcolor: '#FBFBFB', display: 'flex', justifyContent: 'start' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          values={value}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          <StyledTab label='Active Pool (1)' {...a11yProps(0)} />
          <StyledTab label='Inactive Pool (2)' {...a11yProps(1)} />
        </StyledTabs>
      </Box>
      <Stack width={'80%'} >
        <Divider />
      </Stack>
      <Box>
        <CustomTabPanel value={value} index={0}>
          <Stack
            direction={['column', 'column', 'row', 'row', 'row']} mr={4}
            width={'100%'}
            justifyContent={['center', 'center', 'space-evenly', 'space-evenly', 'space-evenly']}
          >
            <Stack
              width={['100%', '100%', '35%', '35%', '35%']} borderRadius={'8px'} height={['320px', '320px', '320px', '320px', '320px']} bgcolor={'#FFFF'}
              alignItems={'center'} justifyContent={'space-evenly'}
            >
              <Stack width={'80%'} direction={'row'} alignItems={'center'} >
                <Image className={styles.iconDanteStaking} src={iconHeaderDante} alt='icon dante' />
                <Typography variant='h4' fontWeight={'600'} ml={4} >DANTE Staking Pool</Typography>
              </Stack>

              <Stack direction={'row'} width={'90%'} justifyContent={'space-between'} >
                <Typography>APY</Typography>
                <Stack direction={'row'} >
                  <Typography>5%</Typography>
                  <Typography ml={2}>-</Typography>
                  <Typography ml={2}>15%</Typography>
                </Stack>
              </Stack>

              <Stack direction={'row'} width={'90%'} justifyContent={'space-between'} >
                <Typography>TLV</Typography>
                <Stack direction={'row'} >
                  <Typography>0.001234</Typography>
                  <Typography ml={2}>DANTE</Typography>
                </Stack>
              </Stack>

              <Stack width={'95%'} >
                <Divider />
              </Stack>

              <Stack width={'90%'} >
                <ButtonColor title={'VIEW POOL'} fontColor={'#6750A4'} mnWidth={'100px'} mxwidth={'127px'} h={'40px'} />
              </Stack>
            </Stack>

            <Stack
              width={['90%', '90%', '50%', '40%', '40%']} ml={[0, 0, 4, 4, 4]} bgcolor={'#FFFF'} height={['568px', '568px', '568px', '468px', '468px']}
              alignItems={'center'} justifyContent={'space-evenly'} borderRadius={'8px'} display={['none', 'none', 'flex', 'flex', 'flex']}
            >
              <Stack width={'90%'} >
                <Typography variant='h4' fontWeight={'600'} >
                  Details
                </Typography>
              </Stack>
              <Stack width={'80%'} textAlign={'justify'} >
                <Typography>
                  Lorem ipsum dolor sit amet consectetur. Egestas fringilla sed at nisi mollis egestas augue proin massa.
                  At integer scelerisque urna non magna vestibulum diam pretium purus. Vel viverra vel neque id vel viverra.
                  Ac tincidunt dictumst dictumst varius imperdiet sit. Mi ut nibh non at massa. Nunc lorem elit at cras vel
                  duis nunc. Morbi suspendisse pulvinar montes pretium porta mattis.
                  <br />
                  Sed nunc mi euismod donec sit quis id. Quisque velit in dictumst nulla velit fusce justo.
                  Eleifend sagittis enim tincidunt quam ullamcorper iaculis curabitur sagittis sed. Neque risus
                  at nisl sit. Nibh at viverra sagittis eleifend eu quis. Vitae gravida aliquam pulvinar et enim.
                  Aliquet non pellentesque metus lectus vulputate sapien malesuada. Sollicitudin pellentesque etiam
                  urna nisl at.
                  <br />
                  Libero rutrum sociis porttitor magna lacus vulputate. Faucibus cras aliquam venenatis id.
                </Typography>
              </Stack>
            </Stack>
          </Stack >
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
      </Box>
    </Stack >
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
    backgroundColor: '#767676'
  }
})

const StyledTab = styled(Tab)`
background-color: #FBFBFB;
  color: #2D2D2D
  &. Mui-selected {
    color: #2D2D2D
  }
  &.${tabClasses.selected} {
    color: #2D2D2D
  }
`
