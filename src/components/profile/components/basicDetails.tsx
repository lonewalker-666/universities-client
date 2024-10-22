import Image from 'next/image'
import Button from '../../common/button'
import EditableField from '../../common/editableField'
import EditIcon from '../../common/icons/editIcon'

interface Props {
  visible: any
  onShow: any
  onHide: any
  profileData: any
  setProfileData: any
}

const BassicDetails = (props: Props) => {
  const { visible, onShow, onHide, profileData, setProfileData } = props
  const editButtonTitle = (
    <div className='flex gap-3 items-center justify-center h-full w-full'>
      <EditIcon /> Edit
    </div>
  )
  const saveButtonTitle = (
    <div className='flex gap-3 items-center justify-center h-full w-full'>
      <EditIcon /> Save
    </div>
  )
  return (
    <div className='w-full flex flex-col items-center border border-[#E8E8E9] rounded-[15px] overflow-hidden'>
      <Image
        src='/profilebanner.svg'
        alt='default banner'
        width={1000}
        height={300}
        className='w-full min-h-[80px] object-cover'
      />
      <div className='w-full max-w-[1000px] flex flex-col xs:gap-5 md:gap-12 p-8'>
        <div className='w-full flex justify-between xs:items-start md:items-center xs:flex-col md:flex-row xs:gap-5 md:gap-12'>
          <div className='flex w-full lg:items-center xs:flex-col lg:flex-row xs:gap-5 md:gap-12'>
            <span className='xs:w-full lg:w-auto pt-3 flex justify-between xs:-mt-20 md:-mt-24 lg:-mt-28 gap-5'>
              <Image
                src='/user1.png'
                alt='default profile'
                width={300}
                height={300}
                className='xs:w-[100px] md:w-[130px] lg:w-[150px]'
              />
              {visible?.basicDetailsEdit ? (
                <Button
                  title={saveButtonTitle}
                  width={120}
                  height={50}
                  onClick={() => onHide()}
                  className='primary-button xs:flex lg:hidden xs:mt-[3.2rem] md:mt-20'
                />
              ) : (
                <Button
                  title={editButtonTitle}
                  width={120}
                  height={50}
                  background='#F5F5F5'
                  color='#000'
                  border='1px solid #CAD0D9'
                  onClick={() => onShow('basicDetailsEdit')}
                  className='primary-button xs:flex lg:hidden xs:mt-[3.2rem] md:mt-20'
                />
              )}
            </span>
            <span className='flex flex-col text-black'>
              <EditableField
                visible={visible?.basicDetailsEdit}
                value={profileData?.name || ''}
                onChange={(e: any) =>
                  setProfileData({ ...profileData, name: e.target.value })
                }
                style={{ fontSize: 26 }}
              />
              <EditableField
                visible={visible?.basicDetailsEdit}
                value={profileData?.email || ''}
                onChange={(e: any) =>
                  setProfileData({
                    ...profileData,
                    email: e.target.value.trim()
                  })
                }
                
              />
            </span>
          </div>
          {visible?.basicDetailsEdit ? (
            <Button
              title={saveButtonTitle}
              width={120}
              height={50}
              onClick={() => onHide()}
              className='primary-button xs:hidden lg:flex'
            />
          ) : (
            <Button
              title={editButtonTitle}
              width={120}
              height={50}
              background='#F5F5F5'
              color='#000'
              border='1px solid #CAD0D9'
              onClick={() => onShow('basicDetailsEdit')}
              className='primary-button xs:hidden lg:flex'
            />
          )}
        </div>
        <div className='w-full rounded-[12px] bg-[#F9F9F9] flex justify-between xs:items-start md:items-center xs:flex-col md:flex-row xs:gap-5 md:gap-12 lg:p-8 xs:p-6'>
          <EditableField
            visible={visible?.basicDetailsEdit}
            value={profileData?.name || ''}
            onChange={(e: any) =>
              setProfileData({ ...profileData, name: e.target.value })
            }
            title='Qualification'
          />
        </div>
      </div>
    </div>
  )
}

export default BassicDetails
