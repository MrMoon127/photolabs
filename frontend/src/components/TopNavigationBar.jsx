import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavIcon from './FavIcon';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const isFavPhotoExist = props.favPhotoIds.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
      topics={props.topics} 
      actions={props.actions}
      selectTopic={props.selectTopic} 
      selectedTopic={props.selectedTopic}
      />
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;