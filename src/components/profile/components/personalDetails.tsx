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
      <EditIcon /> Edit
    </div>
  )
  const saveButtonTitle = (
    <div className='flex gap-3 items-center justify-center h-full w-full'>
      <EditIcon color='white' /> Save
    </div>
  )
  return (
    <div className='w-full p-8 bg-[#FEFEFE] text-black rounded-[15px] border border-[#E8E8E9] flex flex-col justify-center items-center gap-7'>
      <div className='flex xs:flex-col sm:flex-row w-full max-w-[1000px] justify-between gap-5'>
        <span className='flex items-center'>
          <h1 className='xs:text-2xl md:text-3xl font-semibold'>
            Personal Details
          </h1>
        </span>
        <span className='flex items-center justify-end'>
          {visible?.personalDetailEdit ? (
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
              onClick={() => onShow('personalDetailEdit')}
              className='primary-button'
            />
          )}
        </span>
      </div>
      <div className='grid xs:grid-cols-1 w-full md:grid-cols-2 gap-7 max-w-[1000px]'>
        <EditableSelect
          visible={visible?.personalDetailEdit}
          value={profileData?.gender}
          title='Gender'
          onChange={(e: any) =>
            setProfileData({ ...profileData, gender: e.target.value })
          }
          options={GENDER}
          titleStyle={{ fontSize: 18 }}
          style={{ fontSize: 20 }}
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
          titleStyle={{ fontSize: 18 }}
          style={{ fontSize: 20 }}
        />
               <EditableSelect
          visible={visible?.personalDetailEdit}
          value={profileData?.army_status}
          title='US Armed Forces status'
          onChange={(e: any) =>
            setProfileData({ ...profileData, army_status: e.target.value })
          }
          options={ARMY_STATUS}
          titleStyle={{ fontSize: 18 }}
          style={{ fontSize: 20 }}
        />
                     <EditableSelect
          visible={visible?.personalDetailEdit}
          value={profileData?.citizen_status}
          title='Citizenship Status'
          onChange={(e: any) =>
            setProfileData({ ...profileData, citizen_status: e.target.value })
          }
          options={CITIZENSHIP}
          titleStyle={{ fontSize: 18 }}
          style={{ fontSize: 20 }}
        />
                     <EditableSelect
          visible={visible?.personalDetailEdit}
          value={profileData?.first_generation}
          title='First Generation'
          onChange={(e: any) =>
            setProfileData({ ...profileData, first_generation: e.target.value })
          }
          options={FIRST_GENERATION}
          titleStyle={{ fontSize: 18 }}
          style={{ fontSize: 20 }}
        />
                     <EditableSelect
          visible={visible?.personalDetailEdit}
          value={profileData?.financial_aid}
          title='Scholarships and Financial Aid'
          onChange={(e: any) =>
            setProfileData({ ...profileData, financial_aid: e.target.value })
          }
          options={FINIANCIAL_AID}
          titleStyle={{ fontSize: 18 }}
          style={{ fontSize: 20 }}
        />
      </div>
    </div>
  )
}

export default PersonalDetails
