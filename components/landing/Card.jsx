// DEPENDENCIAS
import Card from '@mui/material/Card'
import { Box } from '@mui/material'
import Image from 'next/image'

// STYLES
import styles from '@/styles/components/card.module.css'

const CardComponent = ({ img, icon, backgroundColor }) => {
  return (
    <Box
      minWidth={[290, 300, 300, 300, 300]}
      sx={{
        display: 'flex',
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
      <div className="MuiAspectRatio-root">
        <div className="MuiAspectRatio-content">
          <Card sx={{ maxWidth: [250, 250, 300, 300], maxHeight: ['375px'], backgroundColor: { backgroundColor }, boxShadow: 'none' }}>
            <Image alt='icon' src={icon} className={styles.cardIcon} />
            <Image alt='image' className={styles.cardImg} src={img} />
          </Card>
        </div>
      </div>
    </Box>
  )
}

export default CardComponent
