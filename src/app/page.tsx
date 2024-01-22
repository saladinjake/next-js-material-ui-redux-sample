import LayoutLanding from './layout'
import Template from './template'
import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import LoadingSkeleton from './loading'

import Navigation from '@/app/components/shared/Header'

import LandingModule from '@/app/store/front'
export const metadata: Metadata = {
  title: 'Next Basket Shopping Website',
}
export default function Page() {
  // const pathname = usePathname();
  const key = Date.now()
  return (
    <>
      <LandingModule />
    </>
  )
}
