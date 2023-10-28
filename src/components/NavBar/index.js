import React, { useContext } from "react";
import { Topic, TopicContainer, Wrapper } from "./styled";

const NavBar = ({ onSelectTopic, currentTopic, topics }) => {
  
  return (
    <Wrapper>
      {topics.map((topic) => (
        <TopicContainer
          isSelected={currentTopic === topic.id}
          key={topic.id}
          onClick={() => onSelectTopic(topic.id)}
        >
          <Topic>{topic.label}</Topic>
        </TopicContainer>
      ))}
    </Wrapper>
  );
};

export default NavBar;
