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
}

const EditableCell = (props: Props) => {
  const {
    visible,
    value,
    onChange,
    style,
    title,
    titleStyle,
    hideTitle,
    placeholder
  } = props

  return (
    <div className='flex flex-col gap-3 max-w-full justify-center'>
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
            className={`border p-4 rounded-xl bg-[#FAFAFA] text-lg text-black max-w-full font-medium text-opacity-80 ${
              value
                ? 'border-gray-300 focus:outline-none focus:border-blue-500'
                : 'border-red-600'
            }`}
            value={value}
            onChange={onChange}
            placeholder={placeholder || `Enter your ${title}`}
          />
          {!value && (
            <p className='font-medium text-red-600'>
              {title || 'Field'} should not be empty
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

export default EditableCell
