import { Box, Grid } from '@mui/material'

// COMPONENTS
import CardsLayout from '@/components/marketplace/CardsLayout'

// ASSETS
import Heroe1 from '@/assets/dashboard/heroe1.svg'
import Heroe2 from '@/assets/dashboard/heroe2.svg'
import Heroe3 from '@/assets/dashboard/heroe3.svg'
import Heroe4 from '@/assets/dashboard/heroe4.svg'
import fireCirle from '@/assets/iconos/tools/fire-circle.svg'
import lightCircle from '@/assets/iconos/tools/light-circle.svg'
import brainCircle from '@/assets/iconos/tools/brain-circle.svg'

const heroes = [
  {
    type: 'Common',
    img: Heroe1,
    price: '$900,00',
    number: '40',
    color: '#9B00FF',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: Heroe2,
    price: '$900,00',
    number: '40',
    color: '#69A84F',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: Heroe3,
    price: '$900,00',
    number: '40',
    color: '#69A84F',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: Heroe4,
    price: '$900,00',
    number: '40',
    color: '#9B00FF',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Mythic',
    img: Heroe1,
    price: '$900,00',
    number: '40',
    color: '#9B00FF',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: Heroe2,
    price: '$900,00',
    number: '40',
    color: '#69A84F',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Legendary',
    img: Heroe3,
    price: '$900,00',
    number: '40',
    color: '#69A84F',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: Heroe4,
    price: '$900,00',
    number: '40',
    color: '#69A84F',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: Heroe1,
    price: '$900,00',
    number: '40',
    color: '#F1C332',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: Heroe2,
    price: '$900,00',
    number: '40',
    color: '#F1C332',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: Heroe3,
    price: '$900,00',
    number: '40',
    color: '#F1C332',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Mythic',
    img: Heroe4,
    price: '$900,00',
    number: '40',
    color: '#F1C332',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: Heroe1,
    price: '$900,00',
    number: '40',
    color: '#F1C332',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Legendary',
    img: Heroe2,
    price: '$900,00',
    number: '40',
    color: '#9B00FF',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: Heroe3,
    price: '$900,00',
    number: '40',
    color: '#9B00FF',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: Heroe4,
    price: '$900,00',
    number: '40',
    color: '#9B00FF',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  }
]

const Heros = () => {
  return (
    <Box sx={{}} width={['77%', '100%', '60%', '60%', '60%']} display={'flex'} justifyContent={'center'} >
      <Grid container spacing={1} mt={'0'} ml={'0'} width={'100%'} >
        <CardsLayout elements={heroes} />
      </Grid>
    </Box>
  )
}

export default Heros
