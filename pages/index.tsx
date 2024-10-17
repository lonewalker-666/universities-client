import HomeContainer from "@/src/components/home"
import SiteLayout from "@/src/components/layout/siteLayout"

const LandingPage = () => {
  return (
    <SiteLayout title="Universities@USA-Home" fullScreen>
      <HomeContainer />
    </SiteLayout>
  )
}

export default LandingPage
