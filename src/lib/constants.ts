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

export const ACT_SUBJECTS = [
  {
      "id": 1,
      "name": "Composite",
      "total_score": 36
  },
  {
      "id": 2,
      "name": "English",
      "total_score": 36
  },
  {
      "id": 3,
      "name": "Math",
      "total_score": 36
  },
  {
      "id": 4,
      "name": "Reading",
      "total_score": 36
  },
  {
      "id": 5,
      "name": "Science",
      "total_score": 36
  }
]

export const SAT_SUBJECTS = [
  {
      "id": 6,
      "name": "Reading and Writing",
      "total_score": 800
  },
  {
      "id": 7,
      "name": "Math",
      "total_score": 800
  }
]

export const AP_SUBJECTS = [
  {
      "id": 8,
      "name": "AP 2-D Art and Design",
      "total_score": 5
  },
  {
      "id": 9,
      "name": "AP 3-D Art and Design",
      "total_score": 5
  },
  {
      "id": 10,
      "name": "AP Art History",
      "total_score": 5
  },
  {
      "id": 11,
      "name": "AP Biology",
      "total_score": 5
  },
  {
      "id": 12,
      "name": "AP Calculus AB",
      "total_score": 5
  },
  {
      "id": 13,
      "name": "AP Chemistry",
      "total_score": 5
  },
  {
      "id": 14,
      "name": "AP Chinese Language and Culture",
      "total_score": 5
  },
  {
      "id": 15,
      "name": "AP Comparative Government and Politics",
      "total_score": 5
  },
  {
      "id": 16,
      "name": "AP Computer Science A",
      "total_score": 5
  },
  {
      "id": 17,
      "name": "AP Computer Science Principles",
      "total_score": 5
  },
  {
      "id": 18,
      "name": "AP Drawing",
      "total_score": 5
  },
  {
      "id": 19,
      "name": "AP English Language and Composition",
      "total_score": 5
  },
  {
      "id": 20,
      "name": "AP English Literature and Composition",
      "total_score": 5
  },
  {
      "id": 21,
      "name": "AP Environmental Science",
      "total_score": 5
  },
  {
      "id": 22,
      "name": "AP European History",
      "total_score": 5
  },
  {
      "id": 23,
      "name": "AP French Language and Culture",
      "total_score": 5
  },
  {
      "id": 24,
      "name": "AP German Language and Culture",
      "total_score": 5
  },
  {
      "id": 25,
      "name": "AP Human Geography",
      "total_score": 5
  },
  {
      "id": 26,
      "name": "AP Italian Language and Culture",
      "total_score": 5
  },
  {
      "id": 27,
      "name": "AP Japanese Language and Culture",
      "total_score": 5
  },
  {
      "id": 28,
      "name": "AP Latin",
      "total_score": 5
  },
  {
      "id": 29,
      "name": "AP Macroeconomics",
      "total_score": 5
  },
  {
      "id": 30,
      "name": "AP Microeconomics",
      "total_score": 5
  },
  {
      "id": 31,
      "name": "AP Music Theory",
      "total_score": 5
  },
  {
      "id": 32,
      "name": "AP Physics 1: Algebra-Based",
      "total_score": 5
  },
  {
      "id": 33,
      "name": "AP Physics 2: Algebra-Based",
      "total_score": 5
  },
  {
      "id": 34,
      "name": "AP Physics C: Electricity and Magnetism",
      "total_score": 5
  },
  {
      "id": 35,
      "name": "AP Physics C: Mechanics",
      "total_score": 5
  },
  {
      "id": 36,
      "name": "AP Precalculus",
      "total_score": 5
  },
  {
      "id": 37,
      "name": "AP Psychology",
      "total_score": 5
  },
  {
      "id": 38,
      "name": "AP Research",
      "total_score": 5
  },
  {
      "id": 39,
      "name": "AP Seminar",
      "total_score": 5
  },
  {
      "id": 40,
      "name": "AP Spanish Language and Culture",
      "total_score": 5
  },
  {
      "id": 41,
      "name": "AP Spanish Literature and Culture",
      "total_score": 5
  },
  {
      "id": 42,
      "name": "AP Statistics",
      "total_score": 5
  },
  {
      "id": 43,
      "name": "AP United States Government and Politics",
      "total_score": 5
  },
  {
      "id": 44,
      "name": "AP United States History",
      "total_score": 5
  },
  {
      "id": 45,
      "name": "AP World History: Modern",
      "total_score": 5
  }
]

export const TOEFL_SUBJECTS = [
  {
      "id": 46,
      "name": "Reading",
      "total_score": 30
  },
  {
      "id": 47,
      "name": "Speaking",
      "total_score": 30
  },
  {
      "id": 48,
      "name": "Listening",
      "total_score": 30
  },
  {
      "id": 49,
      "name": "Writing",
      "total_score": 30
  }
]

export const IELTS_SUBJECTS = [
  {
      "id": 50,
      "name": "Reading",
      "total_score": 9
  },
  {
      "id": 51,
      "name": "Speaking",
      "total_score": 9
  },
  {
      "id": 52,
      "name": "Listening",
      "total_score": 9
  },
  {
      "id": 53,
      "name": "Writing",
      "total_score": 9
  }
]