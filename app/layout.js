'use client'
import NavBarLanding from '@/components/Navbar'
import styles from '@/styles/body.modules.css'
import theme from '@/styles/themes/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
