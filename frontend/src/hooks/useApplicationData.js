import React, {useReducer, useState, useEffect} from "react";

const useApplicationData = () => {
  
  const ACTIONS = {
    FAV_PHOTO_TOGGLE: 'FAV_PHOTO_TOGGLE',
    SET_PHOTO_DATA: 'SET_PHOTO_DATA',
    SET_TOPIC_DATA: 'SET_TOPIC_DATA',
    SELECT_TOPIC: 'SELECT_TOPIC',
    SELECT_PHOTO: 'SELECT_PHOTO',
    TOGGLE_MODAL: 'TOGGLE_MODAL'
  }
  
  const [favPhotoIds, toggleFav] = useReducer(reducer, []);
  const [selectedPhoto, selectPhoto] = useReducer(reducer, 0);
  const [selectedTopic, selectTopic] = useReducer(reducer, undefined);
  const [openModal, toggleModal] = useReducer(reducer, false);
  const [photoData, setPhotoData] = useReducer(reducer, []);
  const [topicData, setTopicData] = useReducer(reducer, []);
  
  useEffect(() => {
    if (selectedTopic) {
      fetch(`/api/topics/photos/${selectedTopic.id}`)
        .then(res => res.json())
        .then((data) => setPhotoData({ type: ACTIONS.SET_PHOTO_DATA, payload: data}))
    } else {
      fetch("/api/photos")
        .then((response) => response.json())
        .then((data) => setPhotoData({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
    }
  }, [selectedTopic]);

  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => setTopicData({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, [])

  function reducer(state, action) {
    switch (action.type) {
      case 'FAV_PHOTO_TOGGLE':
        if (state.includes(action.id)) {
          const filtered = state.filter((favPhotoId) => favPhotoId !== action.id);
          return filtered;
        }
        return [...state, action.id];
      case 'SET_PHOTO_DATA':
        return { ...state, photoData: action.payload };
      case 'SET_TOPIC_DATA':
        return { ...state, topicData: action.payload };
      case 'SELECT_PHOTO':
        return action.array.find((photo) => (photo.id === action.id));
      case 'SELECT_TOPIC':
        return action.array.find((topic) => (topic.id === action.id));
      case 'TOGGLE_MODAL':
        return !state;
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }
  
  const state = {
    ACTIONS,
    selectedPhoto,
    selectedTopic,
    openModal,
    favPhotoIds,
    photoData,
    topicData
  };
  
  return {
    state,
    selectPhoto,
    selectTopic,
    toggleFav,
    toggleModal,
    setPhotoData
  };
};

export default useApplicationData;