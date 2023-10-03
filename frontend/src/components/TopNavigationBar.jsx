import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { photos, topics, actions, selectTopic, setPhotoData, selectedTopic, favPhotoIds } = props

  const isFavPhotoExist = favPhotoIds.length > 0;

  const favPhotos = (photos || []).filter((photo) => favPhotoIds.includes(photo.id))

  console.log(favPhotos);

  const clickFavBadge = () => {
    setPhotoData({ type: actions.SET_PHOTO_DATA, payload: favPhotos})
  }

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
      topics={topics} 
      actions={actions}
      selectTopic={selectTopic} 
      selectedTopic={selectedTopic}
      />
      <FavBadge 
      clickFavBadge={clickFavBadge}
      isFavPhotoExist={isFavPhotoExist}
      />
    </div>
  )
}

export default TopNavigation;