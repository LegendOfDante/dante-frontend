import theme from '@/styles/themes/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'

// COMPONENTS
import NavBarLanding from './components/Navbar'
import Footer from './components/Footer'

// STYLES
import styles from '@/styles/body.modules.css'

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className={styles.body}>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <NavBarLanding />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
