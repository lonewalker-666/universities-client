import Badge from "../../common/icons/badge"
import Discord from "../../common/icons/discord"
import Facebook from "../../common/icons/facebook"
import Instagram from "../../common/icons/instagram"
import LinkedIn from "../../common/icons/linkedIn"
import HeaderContainer from "./headerContainer"




const Community = () => {
    return(
        <div className='relative w-full items-center flex flex-col p-8 gap-10 pt-[66px]'>
        <div className='w-full mt-[50px]'>
          <HeaderContainer
            title='Community'
            heading='Where Support Meets Success'
            description='Be part of a thriving community that drives each other forward.'
          />
        </div>
        <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] grid grid-cols-5 xs:gap-3 lg:gap-5">
          <span className="social-icon-container facebook">
            <Facebook className="social-icon"/>
          </span>
          <span className="social-icon-container discord">
            <Discord className="social-icon"/>
          </span>
          <span className="social-icon-container badge">
            <Badge className="social-icon"/>
          </span>
          <span className="social-icon-container instagram">
            <Instagram className="social-icon"/>
          </span>
          <span className="social-icon-container linkedIn">
            <LinkedIn className="social-icon"/>
          </span>
        </div>
        </div>
        </div>
    )
}

export default Community