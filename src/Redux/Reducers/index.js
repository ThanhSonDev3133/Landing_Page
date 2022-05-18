import { GET_DATA } from "../Constants";

const initialState = {
  
};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      state.data = action.payload;
      return { ...state  };

    default:
      return state;
  }
};
