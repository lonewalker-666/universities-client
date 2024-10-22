interface Props {
  visible: boolean
  value: string
  onChange: <HTMLInputElement>(e: React.ChangeEvent<HTMLInputElement>) => void
  fontSize?: number | string
  fontWeight?: number
  title?: string
  titleStyle?: any
  style?: any
}

const EditableField = (props: Props) => {
  const { visible, value, onChange, style, title,titleStyle } = props

  return (
    <div className='flex flex-col gap-1 max-w-full'>
      <p className='text-black font-medium text-opacity-30 text-sm' style={titleStyle || {}}>{title}</p>
      {visible ? (
        <>
          <input
            type='text'
            className={`border-b bg-transparent text-black max-w-full font-medium text-opacity-80 ${
              value
                ? 'border-gray-300 focus:outline-none focus:border-blue-500'
                : 'border-red-600'
            }`}
            value={value}
            onChange={onChange}
          />
          {!value && (
            <p className='font-medium text-red-600'>
              {title || 'Field'} should not be empty
            </p>
          )}
        </>
      ) : (
        <p className='font-medium text-opacity-80 text-black' style={style || {}}>{value}</p>
      )}
    </div>
  )
}

export default EditableField
