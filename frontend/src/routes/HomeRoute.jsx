import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation 
      topics={props.topics} 
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
