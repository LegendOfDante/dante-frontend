import { Box, Grid } from '@mui/material'

// COMPONENTS
import CardsLayout from '@/app/[lang]/components/marketplace/CardsLayout'

// ASSETS
import demons1 from '@/assets/demons/demons1.svg'
import demons2 from '@/assets/demons/demons2.png'
import demons3 from '@/assets/demons/demons3.svg'
import demons4 from '@/assets/demons/demons4.svg'
import fireCirle from '@/assets/iconos/tools/fire-circle.svg'
import lightCircle from '@/assets/iconos/tools/light-circle.svg'
import brainCircle from '@/assets/iconos/tools/brain-circle.svg'

const demons = [
  {
    type: 'Common',
    img: demons1,
    price: '$900,00',
    number: '40',
    color: '#9B00FF',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: demons2,
    price: '$900,00',
    number: '40',
    color: '#69A84F',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: demons3,
    price: '$900,00',
    number: '40',
    color: '#69A84F',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: demons4,
    price: '$900,00',
    number: '40',
    color: '#9B00FF',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Mythic',
    img: demons1,
    price: '$900,00',
    number: '40',
    color: '#9B00FF',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: demons2,
    price: '$900,00',
    number: '40',
    color: '#69A84F',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Legendary',
    img: demons3,
    price: '$900,00',
    number: '40',
    color: '#69A84F',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: demons4,
    price: '$900,00',
    number: '40',
    color: '#69A84F',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: demons1,
    price: '$900,00',
    number: '40',
    color: '#F1C332',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: demons2,
    price: '$900,00',
    number: '40',
    color: '#F1C332',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: demons3,
    price: '$900,00',
    number: '40',
    color: '#F1C332',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Mythic',
    img: demons4,
    price: '$900,00',
    number: '40',
    color: '#F1C332',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: demons1,
    price: '$900,00',
    number: '40',
    color: '#F1C332',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Legendary',
    img: demons2,
    price: '$900,00',
    number: '40',
    color: '#9B00FF',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: demons3,
    price: '$900,00',
    number: '40',
    color: '#9B00FF',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  },
  {
    type: 'Common',
    img: demons4,
    price: '$900,00',
    number: '40',
    color: '#9B00FF',
    atribute: fireCirle,
    atribute2: lightCircle,
    atribute3: brainCircle
  }
]

const Demons = () => {
  return (
    <Box sx={{}} width={['60%']} display={'flex'} justifyContent={'center'} >
      <Grid container spacing={1} mt={'0'} ml={'0'} width={'100%'} >
        <CardsLayout elements={demons} />
      </Grid>
    </Box>
  )
}

export default Demons
