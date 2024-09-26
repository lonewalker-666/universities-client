import { USER } from "./action";
import { defaultGlobalState } from "./defaultGlobalState";

const reducer = (state = defaultGlobalState, action: any) => {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;