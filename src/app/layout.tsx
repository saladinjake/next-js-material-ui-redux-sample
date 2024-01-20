import Box from '@mui/material/Box'
import Navigation from '@/app/components/shared/Header'
import AppThemeProvider from "@/app/theme"
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
      <AppThemeProvider>
        <Navigation />
        <Box>{children}</Box>
      </AppThemeProvider>
      </body>
    </html>
  )
}
