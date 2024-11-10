import { get } from 'lodash'

export const ProfileMapper = (data: any) => {
  const firstName = get(data, 'firstName', '')
  const lastName = get(data, 'lastName', '')
  const email = get(data, 'email', '')
  const mobile = get(data, 'mobile', '')
  const location = get(data, 'location', '')
  const gender_id = get(data, 'gender_id', '')
  const race_id = get(data, 'race_id', '')
  const first_generation_id = get(data, 'first_generation_id', '')
  const citizenship_id = get(data, 'citizenship_id', '')
  const armed_force_status_id = get(data, 'armed_force_status_id', '')
  const financial_aid_id = get(data, 'financial_aid_id', '')
  return {
    firstName,
    lastName,
    email,
    mobile,
    location,
    gender_id,
    race_id,
    first_generation_id,
    citizenship_id,
    armed_force_status_id,
    financial_aid_id
  }
}

export const CollegesListMapper = (data: any) => {
  const university_name = get(data, 'university_name', '')
  const city_state = get(data, 'city_state', '')
  const school_type = get(data, 'school_type', '')
  const average_annual_cost = get(data, 'average_annual_cost', '')
  return { university_name, city_state, school_type, average_annual_cost }
}

export const CollegeDetailsMapper = (data: any) => {
  const university_name = get(data, 'overview.university_name', '')
  const city_state = get(data, 'overview.city_state', '')
  const school_type = get(data, 'overview.school_type', '')
  const average_annual_cost = get(data, 'overview.average_annual_cost', '')
  const number_of_undergraduate_students = get(
    data,
    'overview.number_of_undergraduate_students',
    ''
  )
  const official_website = get(data, 'overview.official_website', '')
  const location_type = get(data, 'overview.location_type', '')
  const graduation_rate = get(data, 'overview.graduation_rate', '')
  const median_earnings = get(data, 'overview.median_earnings', '')
  const study_fields = get(data, 'fields_of_study.top_fields', [])
  const costs_average_annual_cost = get(data, 'costs.average_annual_cost', '')
  const by_family_income = get(data, 'costs.by_family_income', [])
  const retention_rate = get(
    data,
    'graduation_and_retention.retention_rate',
    ''
  )
  const transfer_rate = get(data, 'graduation_and_retention.transfer_rate', '')
  const withdrawal_rate = get(
    data,
    'graduation_and_retention.withdrawal_rate',
    ''
  )
  return {
    university_name,
    city_state,
    school_type,
    average_annual_cost,
    number_of_undergraduate_students,
    official_website,
    location_type,
    graduation_rate,
    median_earnings,
    study_fields,
    costs_average_annual_cost,
    by_family_income,
    retention_rate,
    transfer_rate,
    withdrawal_rate
  }
}

export const StudyFieldsMapper = (data: any) => {
  const field = get(data, 'field_of_study', '')
  const median_earnings = get(data, 'median_earnings', '')
  const graduates = get(data, 'graduates', '')
  return { field, median_earnings, graduates }
}
