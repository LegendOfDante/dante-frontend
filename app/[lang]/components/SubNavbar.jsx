'use client'
import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import { Stack, Tab, tabClasses } from '@mui/material'
import Box from '@mui/material/Box'
import styled from '@emotion/styled'

export default function SubNavbar({ label, setPage, position }) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    setPage(newValue)
  }

  return (
    <Stack zIndex={'1'} width={'100%'} alignItems={'center'} bgcolor={'#FBFBFB'} position={position} >
      <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          values={value}
          variant="scrollable"
          scrollButtons={false}
          aria-label="scrollable prevent tabs example"
        >
          {label && label.map((label, i) => (
            <StyledTab label={label.title} key={i} />
          ))}
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
background-color: #FBFBFB;
  color: #2D2D2D;
  &.${tabClasses.selected} {
    color: #2D2D2D;
  }
`
