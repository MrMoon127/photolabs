import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { actions, photos, toggleFav, favPhotoIds, toggleModal, selectPhoto } = props

  const clickPhoto = (id) => {
    selectPhoto({type: actions.SELECT_PHOTO, array: photos, id: id});
    toggleModal({type: actions.TOGGLE_MODAL});
  }

  const setFav = (id) => {
    toggleFav({type: actions.FAV_PHOTO_TOGGLE, id: id})
  }

  const photoList = photos.map((photo) => (
    <PhotoListItem
    favPhotoIds={favPhotoIds}
    {...photo}
    key={photo.id}
    setFav={() => { setFav(photo.id) }}
    clickPhoto={() => { clickPhoto(photo.id) }}
    />
  ));

  return (
    <ul className="photo-list">
      {photoList}
    </ul>
  );
};

export default PhotoList;
