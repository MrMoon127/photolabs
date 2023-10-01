import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {setFav, favPhotoIds, id} = props

  const handleFav = () => {
    setFav(id);
  }

  const colorCheck = favPhotoIds.includes(id);

  return (
    <div className="photo-list__fav-icon" onClick={handleFav}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon displayAlert={null} selected={colorCheck}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;
