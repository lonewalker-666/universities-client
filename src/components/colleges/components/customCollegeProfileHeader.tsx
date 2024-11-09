import { MouseEvent } from "react"
import Button from "../../common/button"
import BackIcon from "../../common/icons/backIcon"
import { useRouter } from "next/router"
import ShareIcon from "../../common/icons/shareIcon"

const CustomCollegeProfileHeader = () => {
    const router = useRouter()
    const backButtonTitle = (
        <div className='flex gap-3 items-center justify-center h-full w-full'>
            <BackIcon className="w-4" /> Back
        </div>
      )
      const shareButtonTitle = (
        <div className='flex gap-3 items-center justify-center h-full w-full'>
          <ShareIcon className="w-4" color="#fff"/> Share
        </div>
      )
  return (<div className='flex items-center justify-between w-full'>
              <Button
            title={backButtonTitle}
            width={100}
            background='#F5F5F5'
            color='#000'
            border='1px solid #CAD0D9'
            onClick={() => router.back()}
          />
                        <Button
            title={shareButtonTitle}
            width={100}
            onClick={() => console.log("share")}
          />
  </div>)
}

export default CustomCollegeProfileHeader
