import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Grid, Input, Slider, Stack, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'

// ASSETS
import iconSeach from '@/assets/iconos/tools/iconSearch.svg'
import arrowTop from '@/assets/iconos/tools/arrowTop.svg'
import arrowDown from '@/assets/iconos/tools/arrowDown.svg'
import iconFilter from '@/assets/iconos/tools/iconFilter.svg'
import Wrapper from './Wrapper'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: 'transparent',
  borderTop: `1px solid ${theme.palette.divider}`,
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const InputSearch = styled((props) => (
  <Input disableGutters {...props} />
))(({ theme }) => ({
  width: '80%',
  borderRadius: '10px',
  backgroundColor: '#F5F5F5',
  '&:before': {
    display: 'none'
  },
  '&:after': {
    borderBottom: 0
  }
}))

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor: 'transparent',
  border: '0, 0, 1px solid ',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    justifyContent: 'space-between'
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center'
}))

const rarity = [
  {
    type: 'Common',
    number: '(184)',
    bg: '#D9D9DA'
  },
  {
    type: 'Uncommon',
    number: '(84)',
    bg: '#3C78D8'
  },
  {
    type: 'Rare',
    number: '(30)',
    bg: '#69A84F'
  },
  {
    type: 'Epic',
    number: '(19)',
    bg: '#9B00FF'
  },
  {
    type: 'Legendary',
    number: '(3)',
    bg: '#F1C332'
  },
  {
    type: 'Mythic',
    number: '(1)',
    bg: '#FA0102'
  }
]

const heroes = [
  {
    type: 'Atlanta',
    number: '(2)'
  },
  {
    type: 'Heracles',
    number: '(3)'
  },
  {
    type: 'Aquiles',
    number: '(5)'
  },
  {
    type: 'Helen',
    number: '(2)'
  },
  {
    type: 'Leonidas',
    number: '(2)'
  },
  {
    type: 'Odysseus',
    number: '(50)'
  },
  {
    type: 'Aquiles',
    number: '(47)'
  },
  {
    type: 'Jason',
    number: '(39)'
  },
  {
    type: 'Odysseus',
    number: '(38)'
  },
  {
    type: 'Mythic',
    number: '(1)'
  },
  {
    type: 'Leonidas',
    number: '(32)'
  },
  {
    type: 'helen',
    number: '(32)'
  },
  {
    type: 'Orpheus',
    number: '(26)'
  },
  {
    type: 'Aeneas',
    number: '(7)'
  },
  {
    type: 'Theseus',
    number: '(2)'
  },
  {
    type: 'Tiresias',
    number: '(0)'
  }
]

const classes = [
  {
    type: 'Warriors',
    number: '(2)'
  },
  {
    type: 'Bards',
    number: '(3)'
  },
  {
    type: 'Rangers',
    number: '(5)'
  },
  {
    type: 'Wizards',
    number: '(2)'
  },
  {
    type: 'paladins',
    number: '(2)'
  }
]

const sells = [
  {
    type: 'Dante Official',
    number: '(15)'
  },
  {
    type: 'users',
    number: '(3,562)'
  }
]
export default function CustomizedAccordions() {
  const matches = useMediaQuery('(min-width:600px)')
  const [expanded1, setExpanded1] = React.useState(false)
  const [expanded2, setExpanded2] = React.useState(false)
  const [expanded3, setExpanded3] = React.useState(false)
  const [expanded4, setExpanded4] = React.useState(false)
  const [expanded5, setExpanded5] = React.useState(false)
  const [expanded6, setExpanded6] = React.useState(false)

  const handleChange1 = (panel) => (event, newExpanded) => {
    setExpanded1(newExpanded ? panel : false)
  }
  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded2(newExpanded ? panel : false)
  }
  const handleChange3 = (panel) => (event, newExpanded) => {
    setExpanded3(newExpanded ? panel : false)
  }
  const handleChange4 = (panel) => (event, newExpanded) => {
    setExpanded4(newExpanded ? panel : false)
  }
  const handleChange5 = (panel) => (event, newExpanded) => {
    setExpanded5(newExpanded ? panel : false)
  }
  const handleChange6 = (panel) => (event, newExpanded) => {
    setExpanded6(newExpanded ? panel : false)
  }
  return (
    <>
      {
        matches
          ? <Stack width={['20%', '40%', '40%', '20%', '20%']} display={{ xs: 'none', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex' }}>
            <Stack direction={'row'} justifyContent={'space-between'} p={4} >
              <Stack direction={'row'}>
                <Image alt='icon' src={iconFilter} />
                <Typography ml={2}>Filter</Typography>
              </Stack>
              <Typography>Clear</Typography>
            </Stack>
            <Accordion onChange={handleChange1('panel1')}>
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>Rarity</Typography>
                <Stack>
                  {expanded1 === false
                    ? <Image alt='icon' src={arrowDown} />
                    : <Image alt='icon' src={arrowTop} />
                  }
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2} width={'100%'} bgcolor={'#FBFBFB'} >
                  {rarity && rarity.map((rarity, i) => (
                    <Grid key={i} mb={4} gap={4} item {...{ xs: 1, sm: 8, md: 6, lg: 6, xl: 6 }} justifyContent={['center', 'center', 'center', 'center']} display={'flex'} >
                      <Stack direction={'row'} width={'100%'} borderRadius={'5px'} justifyContent={'space-evenly'} alignItems={'center'} border={'1px solid #DCDCDC'} >
                        <Stack width={'1rem'} height={'1rem'} borderRadius={'50%'} bgcolor={rarity.bg} />
                        <Typography fontWeight={'500'} variant='span' > {rarity.type} </Typography>
                        <Typography ml={2}>{rarity.number}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion onChange={handleChange2('panel2')}>
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>Elements</Typography>
                {expanded2 === false
                  ? <Image alt='icon' src={arrowDown} />
                  : <Image alt='icon' src={arrowTop} />
                }
              </AccordionSummary>
              <AccordionDetails >
                <Stack justifyContent={'center'} width={'80%'}>
                  <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" />
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion onChange={handleChange3('panel3')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Heroe</Typography>
                {expanded3 === false
                  ? <Image alt='icon' src={arrowDown} />
                  : <Image alt='icon' src={arrowTop} />
                }
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2} width={'100%'} bgcolor={'#FBFBFB'} >
                  {heroes && heroes.map((heroe, i) => (
                    <Grid key={i} mb={4} gap={4} item {...{ xs: 12, sm: 8, md: 6, lg: 6, xl: 6 }} justifyContent={['center', 'center', 'center', 'center']} display={'flex'} >
                      <Stack direction={'row'} width={'100%'} borderRadius={'5px'} justifyContent={'space-evenly'} alignItems={'center'} border={'1px solid #DCDCDC'} >
                        <Typography fontWeight={'500'} variant='span' > {heroe.type} </Typography>
                        <Typography ml={2}>{heroe.number}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion onChange={handleChange4('panel4')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Class</Typography>
                {expanded4 === false
                  ? <Image alt='icon' src={arrowDown} />
                  : <Image alt='icon' src={arrowTop} />
                }
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2} width={'100%'} bgcolor={'#FBFBFB'} >
                  {classes && classes.map((classe, i) => (
                    <Grid key={i} mb={4} gap={4} item {...{ xs: 12, sm: 8, md: 6, lg: 6, xl: 6 }} justifyContent={['center', 'center', 'center', 'center']} display={'flex'} >
                      <Stack direction={'row'} width={'100%'} borderRadius={'5px'} justifyContent={'space-evenly'} alignItems={'center'} border={'1px solid #DCDCDC'} >
                        <Typography fontWeight={'500'} variant='span' > {classe.type} </Typography>
                        <Typography ml={2}>{classe.number}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion onChange={handleChange5('panel5')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Sell by</Typography>
                {expanded5 === false
                  ? <Image alt='icon' src={arrowDown} />
                  : <Image alt='icon' src={arrowTop} />
                }
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2} width={'100%'} bgcolor={'#FBFBFB'} >
                  {sells && sells.map((sell, i) => (
                    <Grid key={i} mb={4} gap={4} item {...{ xs: 12, sm: 8, md: 6, lg: 6, xl: 6 }} justifyContent={['center', 'center', 'center', 'center']} display={'flex'} >
                      <Stack direction={'row'} width={'100%'} borderRadius={'5px'} justifyContent={'space-evenly'} alignItems={'center'} border={'1px solid #DCDCDC'} >
                        <Typography fontWeight={'500'} variant='span' > {sell.type} </Typography>
                        <Typography ml={2}>{sell.number}</Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
            <Accordion onChange={handleChange6('panel6')}>
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Ability</Typography>
                {expanded6 === false
                  ? <Image alt='icon' src={arrowDown} />
                  : <Image alt='icon' src={arrowTop} />
                }
              </AccordionSummary>
              <AccordionDetails>
                <InputSearch
                  id="input-with-icon-adornment"
                  placeholder='Type here'
                  startAdornment={
                    <Image alt='icon' src={iconSeach} />
                  }
                />
              </AccordionDetails>
            </Accordion>
          </Stack >
          : <Wrapper />
      }
    </>
  )
}
