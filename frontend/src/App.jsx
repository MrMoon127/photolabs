import React, { useState } from 'react';

import './App.scss';

import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData'


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    selectPhoto,
    selectTopic,
    toggleFav,
    toggleModal,
    setPhotoData
  } = useApplicationData();

  return (
    <div className="App home-route">
      <HomeRoute 
      actions={state.ACTIONS}
      topics={state.topicData ? state.topicData.topicData : []} 
      photos={state.photoData ? state.photoData.photoData : []} 
      toggleModal={toggleModal}
      selectPhoto={selectPhoto}
      selectTopic={selectTopic}
      setPhotoData={setPhotoData}
      selectedTopic={state.selectedTopic}
      favPhotoIds={state.favPhotoIds}
      toggleFav={toggleFav}
      />
      {state.openModal && <PhotoDetailsModal 
      actions={state.ACTIONS}
      photos={state.photoData ? state.photoData.photoData : []}
      toggleModal={toggleModal}
      selectPhoto={selectPhoto}
      selectedPhoto={state.selectedPhoto}
      favPhotoIds={state.favPhotoIds}
      toggleFav={toggleFav}
      />}
    </div>
  );
};

export default App;
