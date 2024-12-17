import Image from 'next/image'
import Button from '../../common/button'
import EditableField from '../../common/editableField'
import EditIcon from '../../common/icons/editIcon'
import { ProfileMapper } from '@/src/lib/mapper'
import { useShowHide } from '@/src/hooks/useShowHide'
import { basicDetailsSchema } from '@/src/helpers/validators'
import { useState } from 'react'
import { updateProfile } from '@/src/services/userApi'
import Ai from '../../common/icons/ai'
import { useRouter } from 'next/router'

interface Props {
  refetch: any
  profileData: any
  setProfileData: any
}

const BasicDetails = (props: Props) => {
  const { profileData, setProfileData, refetch } = props
  const { firstName, lastName, email, mobile, location } =
    ProfileMapper(profileData)
  const [errors, setErrors] = useState<any>({})
  const router = useRouter()

  const form = {
    firstName,
    lastName,
    email,
    mobile,
    location
  }

  const validate = () => {
    const { error } = basicDetailsSchema.validate(form, { abortEarly: false })
    if (!error) return null

    // Map Joi error messages
    const newErrors: any = {}
    error.details.forEach(item => {
      newErrors[item.path[0]] = item.message
    })
    return newErrors
  }

  const handleSave = async () => {
    const newErrors = validate()
    setErrors(newErrors || {})
    if (!newErrors) {
      const res = await updateProfile({
        profileEmojiId: 1,
        mobile: mobile,
        email: email,
        firstName: firstName,
        lastName: lastName,
        location: location
      })
      if (res) {
        refetch()
        onHide()
      }
    }
  }

  const { visible, onShow, onHide } = useShowHide(false)
  const editButtonTitle = (
    <div className='flex gap-3 items-center justify-center h-full w-full'>
      <EditIcon className='w-4' /> Edit
    </div>
  )
  const saveButtonTitle = (
    <div className='flex gap-3 items-center justify-center h-full w-full'>
      <EditIcon className='w-4' color='white' /> Save
    </div>
  )
  return (
    <div className='w-full flex flex-col items-center border relative border-[#E8E8E9] rounded-[15px] overflow-hidden'>
      <Image
        src='/profilebanner.svg'
        alt='default banner'
        width={1000}
        height={300}
        className='w-full min-h-[80px] object-cover'
      />
      {
        <button className=' gradient-text absolute top-5 right-5 p-2 small border border-[#ad6df4] xs:flex lg:hidden rounded-[13px] items-center justify-center gap-2 py-2 text-black w-[130px]'
        onClick={() => router.push('/upgrade')}>
          <Ai className='w-5 h-4' /> Upgrade
        </button>
      }
      <div className='w-full max-w-[1000px] flex flex-col xs:gap-5 lg:gap-12 p-6'>
        <div className='w-full flex justify-between xs:items-start md:items-center xs:flex-col md:flex-row xs:gap-5 md:gap-12'>
          <div className='flex w-full lg:items-center xs:flex-col lg:flex-row xs:gap-5 md:gap-12'>
            <span className='xs:w-full lg:w-auto pt-3 flex justify-between xs:-mt-20 md:-mt-24 lg:-mt-28 gap-5'>
              <Image
                src='/user1.png'
                alt='default profile'
                width={300}
                height={300}
                className='xs:w-[100px] md:w-[130px]'
              />
              {visible ? (
                <Button
                  title={saveButtonTitle}
                  width={120}
                  height={50}
                  onClick={() => handleSave()}
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
                  onClick={() => onShow('visible')}
                  className='primary-button xs:flex lg:hidden xs:mt-[3.2rem] md:mt-20'
                />
              )}
            </span>
            <span className='flex flex-wrap gap-2 text-black'>
              <EditableField
                visible={visible}
                value={firstName}
                onChange={(e: any) =>
                  setProfileData({ ...profileData, firstName: e.target.value })
                }
                style={{ fontSize: 20, fontWeight: 600 }}
                hideTitle
                title='FirstName'
                errorMsg={errors?.firstName}
              />
              <EditableField
                visible={visible}
                value={lastName}
                onChange={(e: any) =>
                  setProfileData({
                    ...profileData,
                    lastName: e.target.value
                  })
                }
                hideTitle
                title='LastName'
                style={{ fontSize: 20, fontWeight: 600 }}
                errorMsg={errors?.lastName}
              />
            </span>
          </div>
          {visible ? (
            <Button
              title={saveButtonTitle}
              width={120}
              height={50}
              onClick={() => handleSave()}
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
              onClick={() => onShow('visible')}
              className='primary-button xs:hidden lg:flex'
            />
          )}
        </div>
        <div className='w-full rounded-[12px] bg-[#F9F9F9] grid xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 xs:gap-2 sm:gap-8 md:gap-2 lg:gap-12 py-4 lg:px-8 xs:px-6'>
          <span className=' pr-6 xs:border-b sm:border-b-0 md:border-b lg:border-b-0 xs:border-r-0 sm:border-r md:border-r-0 lg:border-r pb-4 border[#3b3b3b]'>
            <EditableField
              visible={visible}
              titleStyle={{ fontSize: 14 }}
              style={{ fontSize: 16 }}
              value={email}
              onChange={(e: any) =>
                setProfileData({
                  ...profileData,
                  email: e.target.value
                })
              }
              title='Email'
              errorMsg={errors?.email}
            />
          </span>
          <span className=' pr-6 xs:border-b sm:border-b-0 md:border-b lg:border-b-0 xs:border-r-0 sm:border-r md:border-r-0 lg:border-r pb-4 border[#3b3b3b]'>
            <EditableField
              visible={visible}
              titleStyle={{ fontSize: 14 }}
              style={{ fontSize: 16 }}
              value={mobile}
              onChange={(e: any) =>
                setProfileData({
                  ...profileData,
                  mobile: e.target.value
                })
              }
              title='Mobile No.'
              errorMsg={errors?.mobile}
            />
          </span>
          <span className=''>
            <EditableField
              visible={visible}
              titleStyle={{ fontSize: 14 }}
              style={{ fontSize: 16 }}
              value={location}
              onChange={(e: any) =>
                setProfileData({
                  ...profileData,
                  location: e.target.value
                })
              }
              title='Location'
              errorMsg={errors?.location}
            />
          </span>
        </div>
      </div>
    </div>
  )
}

export default BasicDetails
