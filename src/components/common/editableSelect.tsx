import { isEmpty } from 'lodash'

interface optionsObject {
  label: string
  value: string | number
}
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
  options: Array<optionsObject>
  placeholder?: string
  errMsg?:string
}

const EditableSelect = (props: Props) => {
  const {
    visible,
    value,
    onChange,
    style,
    title,
    titleStyle,
    hideTitle,
    options,
    placeholder,
    errMsg
  } = props
  const selectedValue = !isEmpty(options) ? options.find(
    (option) => option.value == value)?.label || "" : ""

  return (
    <div className='flex flex-col gap-3 max-w-full'>
      <p
        className='text-black font-medium text-opacity-30 text-sm'
        style={titleStyle || {}}
      >
        {hideTitle ? '' : title}
      </p>
      {visible ? (
        <>
          <select
            className={`border p-4 rounded-xl bg-[#FAFAFA] max-w-full font-medium text-opacity-80 ${
              !errMsg
                ? 'border-gray-300 focus:outline-none focus:border-blue-500'
                : 'border-red-600'
            }`}
            onChange={onChange}
            placeholder={placeholder || 'Select Any One'}
          >
            {!isEmpty(options) &&
              options.map((option, index) => (
                <option key={index} selected={option?.value == value}  value={option?.value}>
                  {option?.label}
                </option>
              ))}
          </select>
          {errMsg && (
            <p className='font-medium text-red-600'>
              Please Select any one of the options
            </p>
          )}
        </>
      ) : (
        <p
          className='font-medium text-opacity-80 text-black'
          style={style || {}}
        >
          {selectedValue}
        </p>
      )}
    </div>
  )
}

export default EditableSelect
