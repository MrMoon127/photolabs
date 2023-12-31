import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation 
      photos={props.photos}
      topics={props.topics} 
      actions={props.actions}
      selectTopic={props.selectTopic}
      setPhotoData={props.setPhotoData}
      selectedTopic={props.selectedTopic}
      favPhotoIds={props.favPhotoIds}
      />
      <PhotoList 
      photos={props.photos} 
      actions={props.actions}
      toggleFav={props.toggleFav} 
      favPhotoIds={props.favPhotoIds}
      toggleModal={props.toggleModal}
      selectPhoto={props.selectPhoto}
      />
    </div>
  );
};

export default HomeRoute;
