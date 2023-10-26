import { ADD_FAVORITE, DELETE_FAVORITE, SET_USER } from "./action-types"

const initialState = {
  favorites: [], //* [ { 1 }, ..., { 7 } ]
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
    case ADD_FAVORITE: {
      return {
        ...state,
        favorites: [ ...state.favorites, action.payload ]
      }
    }
    case DELETE_FAVORITE: {
      const filteredFavs = state.favorites.filter(
        fav => fav.id !== action.payload
      );
      return {
        ...state,
        favorites: filteredFavs
      }
    }
    default: {
      return { ...state }
    }
  }
}

export default reducer;