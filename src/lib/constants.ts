import Router from "next/router";

interface ObjectLiteral {
  [key: string]: string | undefined;
}

export const GENDER = [
  {
    "id": 1,
    "name": "Male"
  },
  {
    "id": 2,
    "name": "Female"
  },
  {
    "id": 3,
    "name": "Others"
  },
  {
    "id": 4,
    "name": "Prefer Not to Say"
  }
]

export const messageBg: ObjectLiteral = {
  success: "light-green-bg",
  error: "light-red-bg",
  info: "light-blue-bg",
};

export const RACE = [
  {
    "id": 1,
    "name": "American Indian or Alaska Native"
  },
  {
    "id": 2,
    "name": "Asian/Cambodia"
  },
  {
    "id": 3,
    "name": "Asian/China"
  },
  {
    "id": 4,
    "name": "Asian/India"
  },
  {
    "id": 5,
    "name": "Asian/Japan"
  },
  {
    "id": 6,
    "name": "Asian/Korea"
  },
  {
    "id": 7,
    "name": "Asian/Malaysia"
  },
  {
    "id": 8,
    "name": "Asian/Pakistan"
  },
  {
    "id": 9,
    "name": "Asian/Philippines"
  },
  {
    "id": 10,
    "name": "Asian/Vietnam"
  },
  {
    "id": 11,
    "name": "Asian/Other East Asia"
  },
  {
    "id": 12,
    "name": "Asian/Other South Asia"
  },
  {
    "id": 13,
    "name": "Asian/Other Southeast Asia"
  },
  {
    "id": 14,
    "name": "Black or African American/U.S. / African American"
  },
  {
    "id": 15,
    "name": "Black or African American/Africa"
  },
  {
    "id": 16,
    "name": "Black or African American/Caribbean"
  },
  {
    "id": 17,
    "name": "Black or African American/Other"
  },
  {
    "id": 18,
    "name": "Hispanic/Latino/Central America"
  },
  {
    "id": 19,
    "name": "Hispanic/Latino/Cuba"
  },
  {
    "id": 20,
    "name": "Hispanic/Latino/Mexico"
  },
  {
    "id": 21,
    "name": "Hispanic/Latino/Puerto Rico"
  },
  {
    "id": 22,
    "name": "Hispanic/Latino/South America"
  },
  {
    "id": 23,
    "name": "Hispanic/Latino/Spain"
  },
  {
    "id": 24,
    "name": "Hispanic/Latino/Other"
  },
  {
    "id": 25,
    "name": "Native Hawaiian or Other Pacific Islander/Guam"
  },
  {
    "id": 26,
    "name": "Native Hawaiian or Other Pacific Islander/Hawaii"
  },
  {
    "id": 27,
    "name": "Native Hawaiian or Other Pacific Islander/Samoa"
  },
  {
    "id": 28,
    "name": "Native Hawaiian or Other Pacific Islander/Other Pacific Islands"
  },
  {
    "id": 29,
    "name": "White/Europe"
  },
  {
    "id": 30,
    "name": "White/Middle East"
  },
  {
    "id": 31,
    "name": "White/Other"
  },
  {
    "id": 32,
    "name": "Prefer Not to Answer"
  }
]

export const GRADE_LEVEL = [
  {
    "id": 1,
    "name": "Freshman"
  },
  {
    "id": 2,
    "name": "Sophomore"
  },
  {
    "id": 3,
    "name": "Junior"
  },
  {
    "id": 4,
    "name": "Senior"
  }
]