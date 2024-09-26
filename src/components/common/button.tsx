import { title } from 'process'

interface Props {
  title: string | JSX.Element
  onClick: React.MouseEventHandler<HTMLButtonElement>
  width?: number | string
  height?: number | string
  background?: string
  border?: string
  color?: string
}

const Button = (props: Props) => {
  const { onClick, title, width, height, background, border, color } = props
  const styleProps = {
    width: width || 440,
    height: height || 40,
    background: background || '#6F42C1E5',
    border: border || 'none',
    color : color || "#fff"
  }
  return (
    <button onClick={onClick} className={`primary-button`} style={styleProps}>
      {title}
    </button>
  )
}

export default Button
