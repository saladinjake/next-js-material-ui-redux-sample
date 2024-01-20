import Box from '@mui/material/Box'
import  { DetailInfo } from '@/app/components/shared/Footer'
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Box sx={{ padding: { xs: "8px 14px", md: "80px 147px" } }}>
     
 
      {children}
      </Box>
      <DetailInfo />
    </>
  )
}