import { get } from 'lodash'

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
    study_fields
  }
}

export const StudyFieldsMapper = (data: any) => {
const field = get(data, 'field_of_study', '')
const median_earnings = get(data, 'median_earnings', '')
const graduates = get(data, 'graduates', '')
return { field, median_earnings, graduates }
}