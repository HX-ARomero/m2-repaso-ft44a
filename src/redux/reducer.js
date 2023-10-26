import {
  ADD_FAVORITE,
  COMPLETED_FAVORITE,
  DELETE_FAVORITE,
  RATING_FAVORITE,
  SET_USER,
} from "./action-types";

const initialState = {
  favorites: [], //* [ { 1 }, ..., { 7 } ]
  user: {}, //* { name: , email: }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      //* payload: { name: FT44a, email:ft44a@gmail }
      return {
        ...state,
        user: action.payload,
      };
    }
    case ADD_FAVORITE: {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }
    case DELETE_FAVORITE: {
      const filteredFavs = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
      return {
        ...state,
        favorites: filteredFavs,
      };
    }
    case COMPLETED_FAVORITE: {
      const newFavorites = state.favorites.map((fav) =>
        fav.id === action.payload
          ? { ...fav, completed: !fav.completed }
          : { ...fav }
      );
      return {
        ...state,
        favorites: newFavorites,
      };
    }
    case RATING_FAVORITE: {
      const newFavoritesRating = [...state.favorites];
      const favorite = newFavoritesRating.find(
        (fav) => fav.id === action.payload.id
      );
      favorite.rating = action.payload.rating;
      return {
        ...state,
        favorites: newFavoritesRating,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
