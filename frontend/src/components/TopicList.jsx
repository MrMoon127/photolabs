import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, actions, selectTopic, selectedTopic } = props

  const clickTopic = (id) => {
    let setId = id;

    if (selectedTopic && selectedTopic.id === id) {
      setId = 0;
    }

    selectTopic({ type: actions.SELECT_TOPIC, array: topics, id: setId})
  }

  const topicList = (props.topics || []).map((topic) => (
    <TopicListItem 
    {...topic} 
    key={topic.id} 
    clickTopic={ () => clickTopic(topic.id) } 
    />
  ));

  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
