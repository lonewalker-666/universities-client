import { ARMY_STATUS, CITIZENSHIP, FINIANCIAL_AID, FIRST_GENERATION, GENDER, RACE } from '@/src/lib/constants'
import EditableField from '../../common/editableField'
import EditableSelect from '../../common/editableSelect'
import EditIcon from '../../common/icons/editIcon'
import EditableDatePicker from '../../common/editableDatePicker'
import Button from '../../common/button'
import EditableCell from '../../common/editableCell'

interface Props {
  visible: any
  onShow: any
  onHide: any
  profileData: any
  setProfileData: any
}

const PersonalDetails = (props: Props) => {
  const { visible, onShow, onHide, profileData, setProfileData } = props
  const editButtonTitle = (
    <div className='flex gap-3 items-center justify-center h-full w-full'>
      <EditIcon className="w-4"/> Edit
    </div>
  )
  const saveButtonTitle = (
    <div className='flex gap-3 items-center justify-center h-full w-full'>
      <EditIcon color='white' className="w-4"/> Save
    </div>
  )
  return (
    <div className='w-full xs:p-4 md:p-8 bg-[#FEFEFE] text-black rounded-[15px] border border-[#E8E8E9] flex flex-col justify-center items-center xs:gap-4 md:gap-7'>
      <div className='flex w-full max-w-[1000px] justify-between gap-5'>
        <span className='flex items-center'>
          <h1 className='text-xl font-semibold'>
            Personal Details
          </h1>
        </span>
        <span className='flex items-center justify-end'>
          {visible?.personalDetailEdit ? (
            <Button
              title={saveButtonTitle}
              width={116}
              height={50}
              onClick={() => onHide()}
              className='primary-button'
            />
          ) : (
            <Button
              title={editButtonTitle}
              width={116}
              height={50}
              background='#F5F5F5'
              color='#000'
              border='1px solid #CAD0D9'
              onClick={() => onShow('personalDetailEdit')}
              className='primary-button'
            />
          )}
        </span>
      </div>
      <div className='grid xs:grid-cols-1 w-full md:grid-cols-2 xs:gap-3 md:gap-7 max-w-[1000px] px-2'>
        <EditableSelect
          visible={visible?.personalDetailEdit}
          value={profileData?.gender}
          title='Gender'
          onChange={(e: any) =>
            setProfileData({ ...profileData, gender: e.target.value })
          }
          options={GENDER}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
        />
        <EditableSelect
          visible={visible?.personalDetailEdit}
          value={profileData?.race}
          title='Race'
          onChange={(e: any) =>{
            console.log(e.target.value)
            setProfileData({ ...profileData, race: e.target.value })
          }
          }
          options={RACE}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
        />
               <EditableSelect
          visible={visible?.personalDetailEdit}
          value={profileData?.army_status}
          title='US Armed Forces status'
          onChange={(e: any) =>
            setProfileData({ ...profileData, army_status: e.target.value })
          }
          options={ARMY_STATUS}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
        />
                     <EditableSelect
          visible={visible?.personalDetailEdit}
          value={profileData?.citizen_status}
          title='Citizenship Status'
          onChange={(e: any) =>
            setProfileData({ ...profileData, citizen_status: e.target.value })
          }
          options={CITIZENSHIP}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
        />
                     <EditableSelect
          visible={visible?.personalDetailEdit}
          value={profileData?.first_generation}
          title='First Generation'
          onChange={(e: any) =>
            setProfileData({ ...profileData, first_generation: e.target.value })
          }
          options={FIRST_GENERATION}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
        />
                     <EditableSelect
          visible={visible?.personalDetailEdit}
          value={profileData?.financial_aid}
          title='Scholarships and Financial Aid'
          onChange={(e: any) =>
            setProfileData({ ...profileData, financial_aid: e.target.value })
          }
          options={FINIANCIAL_AID}
          titleStyle={{ fontSize: 14 }}
          style={{ fontSize: 16 }}
        />
      </div>
    </div>
  )
}

export default PersonalDetails
