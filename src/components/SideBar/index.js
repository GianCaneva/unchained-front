import React, { useState } from "react";
import {
  Container,
  Wrapper,
  HamburgerContainer,
  MenuContainer,
  TopicContainer,
  Topic,
} from "./styled";
import Hamburger from "hamburger-react";

const SideBar = ({ topics, onSelectTopic }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <HamburgerContainer>
        <Hamburger rounded size={24} toggled={isOpen} toggle={setIsOpen} />
      </HamburgerContainer>

      {isOpen && (
        <Container>
          <MenuContainer>
            {topics.map((topic) => (
              <TopicContainer
                key={topic.id}
                onClick={() => {
                  onSelectTopic(topic.id);
                  setIsOpen(false);
                }}
              >
                <Topic>{topic.label}</Topic>
              </TopicContainer>
            ))}
          </MenuContainer>
        </Container>
      )}
    </Wrapper>
  );
};

export default SideBar;
