import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import '../styles/PhotoListItem.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { actions, photos, toggleModal, selectPhoto, selectedPhoto, favPhotoIds, toggleFav } = props

  const setFav = (id) => {
    toggleFav({type: actions.FAV_PHOTO_TOGGLE, id: id})
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => toggleModal({type: actions.TOGGLE_MODAL})}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton setFav={setFav} favPhotoIds={favPhotoIds} id={selectedPhoto.id} />
        <img className='photo-details-modal__image' src={selectedPhoto.urls.regular} />
        <section className="photo-list__user-details">
        <img src={selectedPhoto.user.profile} className="photo-list__user-profile"></img>
        <div className="photo-list__user-info">
          <span>{selectedPhoto.user.username}</span>
          <div>
            <span className="photo-list__user-location">{selectedPhoto.location.city}, {selectedPhoto.location.country}</span>
          </div>
        </div>
      </section>
        <h1 className='photos-details-modal__header'>Similar Photos</h1>
        <PhotoList 
          actions={actions}
          photos={Object.values(selectedPhoto.similar_photos)} 
          toggleFav={toggleFav} 
          favPhotoIds={favPhotoIds}
          toggleModal={toggleModal}
          selectPhoto={selectPhoto}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
