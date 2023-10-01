import React, {useReducer, useState} from "react";

const useApplicationData = () => {
  const ACTIONS = {
    FAV_PHOTO_TOGGLE: 'FAV_PHOTO_TOGGLE',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_PHOTO: 'SELECT_PHOTO',
    TOGGLE_MODAL: 'TOGGLE_MODAL'
  }

  function reducer(state, action) {
    switch (action.type) {
      case 'FAV_PHOTO_TOGGLE':
        console.log(state)
        if (state.includes(action.id)) {
          const filtered = state.filter((favPhotoId) => favPhotoId !== action.id);
          return filtered;
        }
        return [...state, action.id];
      case 'SET_PHOTO_DATA':
        return action.data;
      case 'SET_TOPIC_DATA':
        return action.data;
      case 'SELECT_PHOTO':
        return action.array.find((photo) => (photo.id === action.id));
      case 'TOGGLE_MODAL':
        return !state;
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  const [favPhotoIds, toggleFav] = useReducer(reducer, []);
  const [selectedPhoto, selectPhoto] = useReducer(reducer, 0);
  const [openModal, toggleModal] = useReducer(reducer, false);

  const state = {
    ACTIONS,
    selectedPhoto,
    openModal,
    favPhotoIds
  };

  return {
    state,
    selectPhoto,
    toggleFav,
    toggleModal
  };
};

export default useApplicationData;