//'use client'
import LayoutLanding from './layout'
import Template from './template'
import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import LoadingSkeleton from './loading'

import Box from '@mui/material/Box'
import { usePathname } from 'next/navigation'
import { DetailInfo } from '@/app/components/shared/Footer'
import SlateTalksAboutUs from '@/app/components/shared/SlateTalk'
import OurService from '@/app/components/shared/Services'
import IntroBlocks from  '@/app/components/shared/IntroBlocks'
import Posts from  '@/app/components/shared/Posts'

export const metadata: Metadata = {
  title: 'Next.js',
}
export default function Page() {
  // const pathname = usePathname();
  const key = Date.now()
  return (
    <LayoutLanding>
      {/* Include shared UI here e.g. a header or sidebar */}

      <Suspense fallback={<LoadingSkeleton />}>
        <IntroBlocks />
        <OurService />
        <Posts />
        <SlateTalksAboutUs />
      </Suspense>
    </LayoutLanding>
  )
}
