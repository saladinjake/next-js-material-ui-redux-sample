//'use client'
import LayoutLanding from "./layout"
import Template from "./template"
import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from "react"
import LoadingSkeleton from "./loading"
import Error from "./error"
 
import { usePathname } from 'next/navigation'
 import ErrorBoundary from "@/app/components/basic/ErrorBoundary"
export const metadata: Metadata = {
  title: 'Next.js',
}
export default function Page() {
  // const pathname = usePathname();
  const key = Date.now()
  return (
    <LayoutLanding>
  
     {/* Include shared UI here e.g. a header or sidebar */}
      <nav>Nav Bar</nav>
     <Suspense fallback={<LoadingSkeleton />}>
      
            <h1>Hello, Landing!</h1>
        
     </Suspense>
   

    </LayoutLanding>
    )
}