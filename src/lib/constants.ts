import Router from 'next/router'

interface ObjectLiteral {
  [key: string]: string | undefined
}

export const GENDER = [
  {
    value: 1,
    label: 'Male'
  },
  {
    value: 2,
    label: 'Female'
  },
  {
    value: 3,
    label: 'Others'
  },
  {
    value: 4,
    label: 'Prefer Not to Say'
  }
]

export const messageBg: ObjectLiteral = {
  success: 'light-green-bg',
  error: 'light-red-bg',
  info: 'light-blue-bg'
}

export const RACE = [
  {
    value: 1,
    label: 'American Indian or Alaska Native'
  },
  {
    value: 2,
    label: 'Asian/Cambodia'
  },
  {
    value: 3,
    label: 'Asian/China'
  },
  {
    value: 4,
    label: 'Asian/India'
  },
  {
    value: 5,
    label: 'Asian/Japan'
  },
  {
    value: 6,
    label: 'Asian/Korea'
  },
  {
    value: 7,
    label: 'Asian/Malaysia'
  },
  {
    value: 8,
    label: 'Asian/Pakistan'
  },
  {
    value: 9,
    label: 'Asian/Philippines'
  },
  {
    value: 10,
    label: 'Asian/Vietnam'
  },
  {
    value: 11,
    label: 'Asian/Other East Asia'
  },
  {
    value: 12,
    label: 'Asian/Other South Asia'
  },
  {
    value: 13,
    label: 'Asian/Other Southeast Asia'
  },
  {
    value: 14,
    label: 'Black or African American/U.S. / African American'
  },
  {
    value: 15,
    label: 'Black or African American/Africa'
  },
  {
    value: 16,
    label: 'Black or African American/Caribbean'
  },
  {
    value: 17,
    label: 'Black or African American/Other'
  },
  {
    value: 18,
    label: 'Hispanic/Latino/Central America'
  },
  {
    value: 19,
    label: 'Hispanic/Latino/Cuba'
  },
  {
    value: 20,
    label: 'Hispanic/Latino/Mexico'
  },
  {
    value: 21,
    label: 'Hispanic/Latino/Puerto Rico'
  },
  {
    value: 22,
    label: 'Hispanic/Latino/South America'
  },
  {
    value: 23,
    label: 'Hispanic/Latino/Spain'
  },
  {
    value: 24,
    label: 'Hispanic/Latino/Other'
  },
  {
    value: 25,
    label: 'Native Hawaiian or Other Pacific Islander/Guam'
  },
  {
    value: 26,
    label: 'Native Hawaiian or Other Pacific Islander/Hawaii'
  },
  {
    value: 27,
    label: 'Native Hawaiian or Other Pacific Islander/Samoa'
  },
  {
    value: 28,
    label: 'Native Hawaiian or Other Pacific Islander/Other Pacific Islands'
  },
  {
    value: 29,
    label: 'White/Europe'
  },
  {
    value: 30,
    label: 'White/Mvaluedle East'
  },
  {
    value: 31,
    label: 'White/Other'
  },
  {
    value: 32,
    label: 'Prefer Not to Answer'
  }
]

export const GRADE_LEVEL = [
  {
    value: 1,
    label: 'Freshman'
  },
  {
    value: 2,
    label: 'Sophomore'
  },
  {
    value: 3,
    label: 'Junior'
  },
  {
    value: 4,
    label: 'Senior'
  }
]

export const CITIZENSHIP = [
  { value: 1, label: 'US Citizen or US National' },
  { value: 2, label: 'US Permanent Resident' },
  { value: 3, label: 'International' },
  { value: 4, label: 'Prefer Not to Say' }
]

export const ARMY_STATUS = [
  { value: 1, label: "Currently Serving" },
  { value: 2, label: "Previously Served" },
  { value: 3, label: "Current Dependent" },
  { value: 4, label: "Not Applicable" },
  { value: 5, label: "Prefer Not to Answer" }
]

export const FIRST_GENERATION = [
  { value: 1, label: "Yes" },
  { value: 2, label: "No" },
  { value: 3, label: "Prefer Not to Answer" }
];

export const FINIANCIAL_AID = [
  { value: 1, label: "Less than $30,000" },
  { value: 2, label: "$30,000 - $50,000" },
  { value: 3, label: "$50,000 - $75,000" },
  { value: 4, label: "$75,000 - $100,000" },
  { value: 5, label: "$100,000 - $150,000" },
  { value: 6, label: "More than $150,000" },
  { value: 7, label: "Prefer not to Answer" }
];