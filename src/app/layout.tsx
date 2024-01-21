import Box from '@mui/material/Box'
import Navigation from '@/app/components/shared/Header'
import Footer, { DetailInfo } from '@/app/components/shared/Footer'
import AppThemeProvider from '@/app/theme'
import { StorageProviders } from "@/app/lib/redux/store"
export const metadata = {
  title: 'Next Basket Tutorial',
  description: 'Next Basket Online Shopping',
  icons: {
    icon: '/assets/nextbasket.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/logo-sample.jpg" sizes="any" />

      <body>
      <StorageProviders>
        <AppThemeProvider>
          <Navigation />
          <Box
            component="main"
            sx={{
              
              mt: { xs: '64px', md: '140px' },
            }}
          >
            {children}
          </Box>
        
          <Footer height="121px" />
        </AppThemeProvider>
        </StorageProviders>
      </body>
    </html>
  )
}
