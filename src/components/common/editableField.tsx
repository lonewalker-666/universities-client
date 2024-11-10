import { isEmpty } from 'lodash'

interface Props {
  visible: boolean
  value: string
  onChange: <HTMLInputElement>(e: React.ChangeEvent<HTMLInputElement>) => void
  fontSize?: number | string
  fontWeight?: number
  title?: string
  titleStyle?: any
  style?: any
  hideTitle?: boolean
  placeholder?: string
  errorMsg?: string
}

const EditableField = (props: Props) => {
  const {
    visible,
    value,
    onChange,
    style,
    title,
    titleStyle,
    hideTitle,
    placeholder,
    errorMsg
  } = props

  return (
    <div className='flex flex-col max-w-full justify-center'>
      <p
        className='text-black font-medium text-opacity-30 text-sm'
        style={titleStyle || {}}
      >
        {hideTitle ? '' : title}
      </p>
      {visible ? (
        <>
          <input
            type='text'
            className={`border-b bg-transparent text-lg text-black max-w-full p-2 font-medium text-opacity-80 ${
              !errorMsg
                ? 'border-gray-300 focus:outline-none focus:border-blue-500'
                : 'border-red-600'
            }`}
            value={value}
            onChange={onChange}
            placeholder={placeholder || `Enter your ${title}`}
          />
          {errorMsg && (
            <p className='font-medium text-red-600'>
              {errorMsg}
            </p>
          )}
        </>
      ) : (
        <p
          className='font-medium text-opacity-80 text-black overflow-hidden text-ellipsis whitespace-nowrap'
          style={style || {}}
        >
          {value}
        </p>
      )}
    </div>
  )
}

export default EditableField
