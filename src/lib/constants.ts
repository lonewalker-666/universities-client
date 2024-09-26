import Router from "next/router";

interface ObjectLiteral {
  [key: string]: string | undefined;
}



export const COURSE_FEATURES = [
  {
    icon: "/Groupicon.png",
    description: "Connect with Like minded People",
  },
  {
    icon: "/Groupbundle.png",
    description: "Curated Bundles and Kits for you",
  },
  {
    icon: "/Groupbar.png",
    description: "Course Comparative Analysis",
  },
];

export const messageBg: ObjectLiteral = {
  success: "light-green-bg",
  error: "light-red-bg",
  info: "light-blue-bg",
};

export const defaultError = {
  responseCode: "500",
  responseDescription: "Internal Error",
};

export const Categories = [
  {
      "value": 1,
      "label": "Arts and Humanities"
  },
  {
      "value": 2,
      "label": "Business"
  },
  {
      "value": 3,
      "label": "Computer Science"
  },
  {
      "value": 4,
      "label": "Data Science"
  },
  {
      "value": 5,
      "label": "Engineering"
  },
  {
      "value": 6,
      "label": "Health and Medicine"
  },
  {
      "value": 7,
      "label": "Mathematics"
  },
  {
      "value": 8,
      "label": "Science"
  },
  {
      "value": 9,
      "label": "Social Science"
  },
  {
      "value": 10,
      "label": "Personal Development"
  },
  {
      "value": 11,
      "label": "Education"
  },
  {
      "value": 12,
      "label": "Language Learning"
  }
]



export const DIFFICULTY = [{
  value:1,
  label:"Beginner"
},{
  value:2,
  label:"Intermediate"
},{
  value:3,
  label:"Advanced"
}]

export const LANGUAGE = [
  {
    value: 1,
    label: "English"
  },
  {
    value:2,
    label: "Hindi"
  },
  {
    value:3,
    label: "French"
  }
]

export const AUTH_ENDPOINT: any = process.env.NEXT_PUBLIC_AUTH_END_POINT;
export const COURSE_ENDPOINT: any = process.env.NEXT_PUBLIC_COURSE_END_POINT;
export const USER_ENDPOINT: any = process.env.NEXT_PUBLIC_USER_END_POINT;
export const AES_KEY: any = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
export const AES_IV: any = process.env.NEXT_PUBLIC_ENCRYPTION_IV;
export const FILE_END_POINT:any = process.env.NEXT_PUBLIC_FILE_END_POINT

export const noAuthCheckPaths = [
  "/login",
  "/signup",
  "/",
  "/home",
  "/courses",
  "/about",
];
export const homePath = ["/", "/home"];

export const slideImages = ["/slide-1.png","/slide-2.png","/slide-3.png"]
export const productSlideImages = ["/productSlide.png","/slide-1.png","/productSlide.png"]