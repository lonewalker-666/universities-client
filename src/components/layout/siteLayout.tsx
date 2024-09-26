import Header from './header'
import SiteHeader from './siteHeader'

interface Props {
  title: string
  children: string | JSX.Element
  fullScreen?: boolean
}

const SiteLayout = (props: Props) => {
  const { title, children, fullScreen } = props
  return (
    <div className='h-screen flex relative flex-col items-center w-full overflow-y-auto'>
      <Header title={title} />
      <SiteHeader />
      <div
        className={`flex flex-col w-full ${
          !fullScreen ? 'max-w-[1300px]' : ''
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default SiteLayout
