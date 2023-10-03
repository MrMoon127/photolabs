import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, clickFavBadge }) => {
  return (
    <div onClick={clickFavBadge} className='fav-badge'>
      <FavIcon selected={true} displayAlert={!!isFavPhotoExist}/>
    </div>
  ) 
};

export default FavBadge;