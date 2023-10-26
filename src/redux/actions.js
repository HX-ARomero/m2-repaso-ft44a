import * as actionTypes from "./action-types";

//* actionTypes = { SET_USER, ADD_FAVORITE, DELETE_FAVORITE, RATING_FAVORITE, COMPLETED_FAVORITE }
//! REDUCRER => SOLO FUNCIONES PURAS !!! => NO AXIOS !!!

export const setUser = (data) => {
  return {
    type: actionTypes.SET_USER,
    payload: data
  }
}

export const addFavorite = (episode) => {
  return {
    type: actionTypes.ADD_FAVORITE,
    payload: episode
  }
}

export const deleteFavorite = (id) => {
  return {
    type: actionTypes.DELETE_FAVORITE,
    payload: id
  }
}

export const ratingFavorite = ({ id, rating }) => {
  return {
    type: actionTypes.RATING_FAVORITE,
    payload: { id, rating }
  }
}

export const completedFavorite = (id) => {
  return {
    type: actionTypes.COMPLETED_FAVORITE,
    payload: id
  }
}



