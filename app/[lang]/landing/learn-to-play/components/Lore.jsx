import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'

// ASSETS
import ACHILLE from '@/assets/dashboard/ACHILLE.png'

// STYLES
import styles from '@/styles/landing/games.module.css'

const Lore = () => {
  return (
    <>
      <Stack direction={['column', 'column', 'row', 'row']} width={'100%'} height={['210vh', '184vh', '120vh', '120vh', '80vh']} justifyContent={'center'} >
        <Box mr={[0, 0, 4, 4]} display={'flex'} alignItems={'center'} justifyContent={['center', 'center', 'none', 'none']} >
          <Image alt='Lore image' src={ACHILLE} className={styles.imgLoreText} />
        </Box>
        <Box ml={[0, 0, 4, 4]} display={'flex'} flexDirection={'column'} alignItems={['center', 'center', 'none', 'none']} justifyContent={'center'} width={['100%', '100%', '55%', '45%']} >
          <Stack >
            <Typography variant={'h5'} fontSize={['2rem', '2rem', '1.5rem', '1.5rem']} textAlign={'center'} fontWeight={'bolder'} mt={2} >ACHILLES</Typography>
          </Stack>
          <Stack width={'90%'} height={['95%', '95%', '85%', '85%', '85%']} mt={4} justifyContent={'center'} alignItems={'center'} bgcolor={'#FBFBFB'} >
            <Stack justifyContent={'center'} width={'80%'} >
              <Typography fontWeight={'bolder'} mb={1} mt={2} >Lore</Typography>
              <Typography textAlign={'justify'} mb={2} mt={1} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere ullamcorper ex,
                sit amet vehicula nisl maximus et. Mauris aliquet nibh eget efficitur fringilla. Donec
                tempus nec erat et tempor. Nulla malesuada molestie mauris, nec mollis nulla. Nullam
                fringilla consequat felis non ultrices. Nunc maximus, dui et sagittis volutpat, mi tortor
                mollis magna, a tristique mauris tortor eu orci. Donec tortor leo, interdum at varius vitae,
                tincidunt nec orci. Curabitur tincidunt egestas arcu, in malesuada turpis scelerisque sit amet.
                Ut scelerisque suscipit sem, at tempor quam semper non. Cras interdum felis ac suscipit finibus.
                Aliquam id urna nibh. Vestibulum varius risus sed lacus dapibus tempor.
              </Typography>
              <Typography mt={2} mb={4} textAlign={'justify'} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc posuere ullamcorper ex,
                sit amet vehicula nisl maximus et. Mauris aliquet nibh eget efficitur fringilla. Donec
                tempus nec erat et tempor. Nulla malesuada molestie mauris, nec mollis nulla. Nullam
                fringilla consequat felis non ultrices. Nunc maximus, dui et sagittis volutpat, mi tortor
                mollis magna, a tristique mauris tortor eu orci. Donec tortor leo, interdum at varius vitae,
                tincidunt nec orci. Curabitur tincidunt egestas arcu, in malesuada turpis scelerisque sit amet.
                Ut scelerisque suscipit sem, at tempor quam semper non. Cras interdum felis ac suscipit finibus.
                Aliquam id urna nibh. Vestibulum varius risus sed lacus dapibus tempor.
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}

export default Lore
