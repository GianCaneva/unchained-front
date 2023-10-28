import React, { useContext, useEffect, useState } from "react";
import { ButtonContainer, Container, LoginWrapper, ModalButtons, ModalText, ModalWrapper, Wrapper } from "./styled";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import { useNavigate } from "react-router-dom";
import { NewsContext } from "../../context/news/NewsContext";
import { Icons } from "../../utils/theme/icons";
import Colors from "../../utils/theme/colors";
import useScreenSize from "../../hooks/useScreenSize";
import UnchainedLogo from "../UnchainedLogo";
import AccountConfigPopover from "../AccountConfigPopover";
import { Popover } from "react-tiny-popover";
import { SessionContext } from "../../context/session/SessionContext";
import Modal from "../Modal";
import SmallButton from "../SmallButton";

const Header = ({}) => {
  const navigate = useNavigate();
  const { topics, currentTopic, setCurrentTopic } = useContext(NewsContext);
  const { showDeleteModal, setShowDeleteModal, deleteAccount, userId } = useContext(SessionContext);
  const { width } = useScreenSize();

  const [loginIconSize, setLoginIconSize] = useState(100);
  const [showConfig, setShowConfig] = useState(false);

  const onSelectTopic = (id) => {
    setCurrentTopic(id);
    if (id === "home") {
      navigate(`/home`);
    } else {
      navigate(`/home/${id}`);
    }
  };

  useEffect(() => {
    if (width < 1000) {
      setLoginIconSize(80);
    }
    if (width < 670) {
      setLoginIconSize(45);
    }
    if (width >= 1000) {
      setLoginIconSize(100);
    }
  }, [width]);

  const onDeleteAccount = () => {
    deleteAccount(userId, () =>  navigate(`login`))
  }

  return (
    <Wrapper>
      <Container>
        <SideBar topics={topics} onSelectTopic={onSelectTopic} />
        <UnchainedLogo />
        <Popover
          isOpen={showConfig}
          content={<AccountConfigPopover setShowConfig={setShowConfig} />}
          positions={["bottom"]}
          padding={5}
          align={"center"}
          onClickOutside={() => setShowConfig(false)}
        >
          <LoginWrapper onClick={() => setShowConfig(!showConfig)}>
            {Icons(Colors.black, loginIconSize, loginIconSize).login}
          </LoginWrapper>
        </Popover>
      </Container>

      <NavBar
        topics={topics}
        onSelectTopic={onSelectTopic}
        currentTopic={currentTopic}
      />
      {showDeleteModal && <Modal>
        <ModalWrapper>
          <ModalText>¿Realmente desea eliminar su cuenta? </ModalText>
          <ModalButtons>
              <SmallButton text="Cancelar" isSecondary onPress={() => setShowDeleteModal(false)}/>
              <SmallButton text="Eliminar" onPress={onDeleteAccount}/>
          </ModalButtons>
        </ModalWrapper>
      </Modal>}
    </Wrapper>
  );
};

export default Header;
