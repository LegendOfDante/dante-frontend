'use client'
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import PropTypes from 'prop-types'
import { Stack, Tab, ToggleButton, ToggleButtonGroup, Typography, tabClasses } from '@mui/material'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'

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
  const [alignment, setAlignment] = React.useState('left')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  return (
    <Stack width={'100%'} alignItems={'center'} >
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          values={value}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          <StyledTab label='PRIVATE' {...a11yProps(0)} />
          <StyledTab label='ADVISORS' {...a11yProps(1)} />
        </StyledTabs>
      </Box>
      <Box>
        <CustomTabPanel value={value} index={0}>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned" sx={{ borderRadius: '20px' }} >
              <Typography width={['60px', '60px', '70px', '90px', '90px']} >130d</Typography>
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <Typography width={['60px', '60px', '70px', '90px', '90px']} >40h</Typography>
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned" sx={{ borderRadius: '20px' }}>
              <Typography width={['60px', '60px', '70px', '90px', '90px']} >15min</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
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
  color: #2D2D2D
  &. Mui-selected {
    color: #2D2D2D
  }
  &.${tabClasses.selected} {
    color: #2D2D2D
  }
`
