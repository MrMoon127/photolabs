import React, { Fragment } from "react";

import PhotoFavButton from "./PhotoFavButton";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { favPhotoIds, setFav, clickPhoto } = props;

  /* Insert React */
  return (
    <li className="photo-list__item">
      <PhotoFavButton setFav={setFav} favPhotoIds={favPhotoIds} id={props.id} />
      <img src={props.urls.regular} className="photo-list__image" onClick={clickPhoto}></img>
      <section className="photo-list__user-details">
        <img src={props.user.profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          <span>{props.user.username}</span>
          <div>
            <span className="photo-list__user-location">{props.location.city}, {props.location.country}</span>
          </div>
        </div>
      </section>
    </li>
  )
};

export default PhotoListItem;
