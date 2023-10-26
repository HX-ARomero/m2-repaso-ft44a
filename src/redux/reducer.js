import { SET_USER } from "./action-types"

const initialState = {
  favorites: [], //* [ { 1 }, { 5 }, ... ]
  user: {} //* { name: , email: }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      //* payload: { name: FT44a, email:ft44a@gmail }
      return {
        ...state,
        user: action.payload
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default reducer;