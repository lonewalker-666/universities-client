import HomeContainer from '@/src/components/home'
import SiteLayout from '@/src/components/layout/siteLayout'
import useScrollPosition from '@/src/hooks/useScrollPosition'
import { useRef } from 'react'

const LandingPage = () => {
  const ref = useRef<any>()
  return (
    <SiteLayout
      title='Universities@USA-Home'
      containerRef={ref}
      transparentHeader
    >
      <HomeContainer />
    </SiteLayout>
  )
}

export default LandingPage
