import useScrollPosition from '@/src/hooks/useScrollPosition'
import Header from './header'
import SiteFooter from './siteFooter'
import SiteHeader from './siteHeader'
import { ToastContainer } from 'react-toastify';


interface Props {
  title: string
  children: string | JSX.Element
  containerRef?: any
  transparentHeader?: boolean
  noFooter?:boolean
}

const SiteLayout = (props: Props) => {
  const { title, children, containerRef,transparentHeader,noFooter } = props
  const scrollPos = useScrollPosition(containerRef)
  console.log(scrollPos);
  return (
    <div className='siteLayout' ref={containerRef}>
      
      <Header title={title} />
      <SiteHeader transparent={transparentHeader && scrollPos?.y === 0}/>
      <ToastContainer />
      <div
        className="flex flex-col w-full min-h-[calc(100vh_-_66px)]"
      >
        {children}
        {!noFooter && <SiteFooter />}
      </div>
    </div>
  )
}

export default SiteLayout
