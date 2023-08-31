import { Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'

// STYLES
import styles from '@/styles/components/cardLayout.module.css'

// ASSETS
import trailingIcon from '@/assets/iconos/tools/trailing-icon.svg'

const CardsLayout = ({ elements }) => {
  return (
    <Grid display={'flex'} justifyContent={'center'} columnGap={1} container item spacing={3} mt={4} mb={4} ml={'0'} >
      {elements && elements.map((element, i) => (
        <Grid mb={4} key={i} {...{ xs: 8, sm: 6, md: 5, lg: 3.5, xl: 2.5 }} minHeight={160}>
          <Stack height={'100%'} width={['100%', '100%', '77%', '77%', '77%']} justifyContent={'center'} alignItems={'center'} >
            <Stack position={'relative'}>
              <Stack position={'absolute'} top={'-10px'} left={'-20px'} width={'2.5rem'} height={'2.5rem'} borderRadius={'50%'} bgcolor={element.color} alignItems={'center'} justifyContent={'center'} >
                <Typography color={'white'} >{element.number}</Typography>
              </Stack >
              <Image className={styles.imgArrayElement} alt='elements' src={element.img} />
            </Stack>
            <Stack width={'85%'} direction={'row'} p={2} justifyContent={'space-between'} >
              <Typography fontWeight={'600'} >{element.price}</Typography>
              <Stack direction={'row'} alignItems={'center'} >
                <Image alt='icon' src={trailingIcon} />
                <Typography ml={2} >25</Typography>
              </Stack>
            </Stack>
            <Stack display={['none', 'none', 'flex', 'flex']} width={'90%'} >
              <Typography ml={2}>{element.type}</Typography>
            </Stack>
            <Stack direction={'row'} width={'90%'} >
              <Stack mr={4} ml={2} ><Image alt='icon atribute' src={element.atribute} /></Stack>
              <Stack mr={4}><Image alt='icon atribute' src={element.atribute2} /></Stack>
              <Stack><Image alt='icon atribute' src={element.atribute3} /></Stack>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  )
}

export default CardsLayout
