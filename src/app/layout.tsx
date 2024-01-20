import Box from '@mui/material/Box'
import Navigation from '@/app/components/shared/Header'

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
        <Navigation />
        <Box>{children}</Box>
      </body>
    </html>
  )
}
