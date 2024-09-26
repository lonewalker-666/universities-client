import { get } from "lodash";

interface DropDownProps {
  id: number;
  name: string;
  icon?: string | JSX.Element;
}
interface ListOptionType {
  type?: number;
  path?: string;
  listdependentField?: string;
  body?: any;
  dependentparamName?: string;
  constantList?: Array<DropDownProps>;
}

export const UserMapper = (data: any) => {
  const user_id = get(data, "user_id", null);
  const name = get(data, "name", "");
  const email = get(data, "email", "");
  const token = get(data, "token", "");
  const user_type_id = get(data, "user_type_id", null);
  const user_type = get(data, "user_type", "");
  const mobile = get(data, "mobile", "");
  const profileUpdated = get(data, "profileUpdated", false);
  const uuid = get(data, "uuid", "");
  const onboarding_status_id = get(data,"onboarding_status_id","")
  return {
    user_id,
    mobile,
    email,
    name,
    token,
    user_type_id,
    user_type,
    profileUpdated,
    uuid,
    onboarding_status_id
  };
};

export const DropdownMapper = (listOptions: ListOptionType) => {
  const path = get(listOptions, "path", "");
  const listdependentField = get(listOptions, "listdependentField", "");
  const list = get(listOptions, "constantList", []);
  const type = get(listOptions, "type", 1);
  const body = get(listOptions, "body", {});
  const dependentparamName = get(listOptions, "dependentparamName", "");
  return { path, list, listdependentField, type, body, dependentparamName };
};

export const ChatDataMapper = (data: any) => {
  const chatId = get(data, "id", null);
  const name = get(data, "name", "");
  const messages = get(data, "messages", []);
  const active = get(data, "active", false);
  const dp = get(data, "dp", "");
  const type = get(data, "type", "");
  const participants = get(data, "participants", []);
  return { chatId, name, messages, active, dp, type, participants };
};

export const StoreProductMapper = (data: any) => {
  const product_id = get(data, "id", null);
  const name = get(data, "name", "");
  const cost = get(data, "cost", "");
  const discountPercent = get(data, "discountPercent", "");
  const thumbnail = get(data, "thumbnail", "");
  const favourite = get(data, "favourite", false);
  const delivered_by = get(data, "delivered_by", "");
  const colors = get(data, "colors", []);
  return {
    product_id,
    cost,
    delivered_by,
    discountPercent,
    thumbnail,
    favourite,
    colors,
    name
  };
};

export const ReviewMapper = (data:any) => {
  const id= get(data, 'id');
  const comment= get(data, 'comment', '');
  const commentedBy= get(data, 'commented_by', '');
  const starCount=get(data, 'star_count', 0);
  const likes= get(data, 'likes', 0);
  const dislikes= get(data, 'dislikes', 0);
  const userLiked=  get(data, 'user_liked', 0)
 return{
  id,
  comment,
  commentedBy,
  starCount,
  likes,
 dislikes,
 userLiked 
 }
};



export const CourseProductMapper = (data: any) => {
  const course_id = get(data, "id", null);
  const about=get(data,"about","");
  const name = get(data, "name", "");
  const cost = get(data, "cost", "");
  const selling_price = get(data, "selling_price", "");
  const thumbnail = get(data, "thumbnail", "");
  const review = get(data, "review", "");
  const difficulty = get(data, "difficulty", "");
  const completion = get(data, "completion", "");
  const author = get(data,"author","");
  const duration = get(data,"duration","");
  const objectives = get(data,"objectives",[]);
  const modules = get(data,"modules",[])
  const faq =get(data,"faq",[])
  const creator_about= get(data,"creator_about","")
  return {
    course_id,
    cost,
    difficulty,
    selling_price,
    thumbnail,
    review,
    completion,
    name,
    author,
    duration,
    objectives,
    about,
    modules,
    creator_about,
    faq,
  };
};


export const ResponseMapper = (data:any) => {
  const responseCode = get(data,"data.responseCode","")
  const responseDescription = get(data,"data.responseDescription","")
  const responseData = get(data,"data.data",null)
  return{
    responseCode,
    responseDescription,
    responseData
  }
}
