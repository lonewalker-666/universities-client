import Button from '../../common/button'
import EditIcon from '../../common/icons/editIcon'
import EditableCell from '../../common/editableCell'
import { GENDER, GRADE_LEVEL, RACE } from '@/src/lib/constants'
import EditableDatePicker from '../../common/editableDatePicker'
import EditableSelect from '../../common/editableSelect'

interface Props {
  visible: any
  onShow: any
  onHide: any
  profileData: any
  setProfileData: any
}

const AcademicDetails = (props: Props) => {
  const { visible, onShow, onHide, profileData, setProfileData } = props
  const editButtonTitle = (
    <div className='flex gap-3 items-center justify-center h-full w-full'>
      <EditIcon /> Edit
    </div>
  )
  const saveButtonTitle = (
    <div className='flex gap-3 items-center justify-center h-full w-full'>
      <EditIcon color='white' /> Save
    </div>
  )
  const highSchool =[{value:1,label:'School1'},{value:2,label:'School2'},{value:3,label:'School3'}]
  return (
    <div className='w-full p-8 bg-[#FEFEFE] text-black border rounded-[15px] border-[#E8E8E9] flex flex-col justify-center items-center gap-7'>
    <div className='flex xs:flex-col sm:flex-row w-full max-w-[1000px] justify-between gap-5'>
      <span className='flex items-center'>
        <h1 className='xs:text-2xl md:text-3xl font-semibold'>
          Academic Background
        </h1>
      </span>
      <span className='flex items-center justify-end'>
        {visible?.academicDetailEdit ? (
          <Button
            title={saveButtonTitle}
            width={120}
            height={50}
            onClick={() => onHide()}
            className='primary-button'
          />
        ) : (
          <Button
            title={editButtonTitle}
            width={120}
            height={50}
            background='#F5F5F5'
            color='#000'
            border='1px solid #CAD0D9'
            onClick={() => onShow('academicDetailEdit')}
            className='primary-button'
          />
        )}
      </span>
    </div>
    <div className='grid xs:grid-cols-1 w-full md:grid-cols-2 gap-7 max-w-[1000px]'>
      <EditableSelect
        visible={visible?.academicDetailEdit}
        value={profileData?.highSchool}
        title='High School'
        onChange={(e: any) =>
          setProfileData({ ...profileData, highSchool: e.target.value })
        }
        options={highSchool}
        titleStyle={{ fontSize: 18 }}
        style={{ fontSize: 20 }}
      />
      <EditableSelect
        visible={visible?.academicDetailEdit}
        value={profileData?.gradeLevel}
        title='Grade Level'
        onChange={(e: any) =>
          setProfileData({ ...profileData, gradeLevel: e.target.value })
        }
        options={GRADE_LEVEL}
        titleStyle={{ fontSize: 18 }}
        style={{ fontSize: 20 }}
      />
      <EditableDatePicker
        visible={visible?.academicDetailEdit}
        value={profileData?.startDate}
        title='College Start Date'
        onChange={(e: any) =>
          setProfileData({ ...profileData, startDate: e.target.value })
        }
        titleStyle={{ fontSize: 18 }}
        style={{ fontSize: 20 }}
      />
      <EditableDatePicker
        visible={visible?.academicDetailEdit}
        value={profileData?.graduationDate}
        title='Graduation Date'
        onChange={(e: any) =>
          setProfileData({ ...profileData, graduationDate: e.target.value })
        }
        titleStyle={{ fontSize: 18 }}
        style={{ fontSize: 20 }}
      />
      <EditableCell
        visible={visible?.academicDetailEdit}
        titleStyle={{ fontSize: 18 }}
        style={{ fontSize: 20 }}
        value={profileData?.rank || ''}
        onChange={(e: any) =>
          setProfileData({
            ...profileData,
            rank: e.target.value
          })
        }
        title='Class Rank'
      />
      <EditableCell
        visible={visible?.academicDetailEdit}
        titleStyle={{ fontSize: 18 }}
        style={{ fontSize: 20 }}
        value={profileData?.gpa || ''}
        onChange={(e: any) =>
          setProfileData({
            ...profileData,
            gpa: e.target.value
          })
        }
        title='GPA'
      />
    </div>
  </div>
  )
}

export default AcademicDetails
