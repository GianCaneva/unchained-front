import React, { useContext } from "react";
import {
  Wrapper,
  Mail,
  UserName,
  CloseIcon,
  CloseContainer,
  Container,
  ManageAccountContainer,
  ManageAccount,
  ConfigOptionsContainer,
  ConfigOptions,
  ConfigOption,
  ConfigWrapper,
  ChangePassword,
  DeleteAccount,
  CloseAccount,
  Stats,
} from "./styled";
import { SessionContext } from "../../context/session/SessionContext";
import { useNavigate } from "react-router-dom";

const ConfigPopover = ({ setShowConfig }) => {
  const { mail, setShowDeleteModal} = useContext(SessionContext);
  let navigate = useNavigate();

  //tendriamos que sacar el user cuando cerramos sesion

  const CONFIG_OPTIONS = [
    {
      label: "Ver estadísticas",
      onPress: () => navigate(`/stats`),
      icon: <Stats />,
    },
    {
      label: "Cambiar contraseña",
      onPress: () => {
        navigate(`/change_password`)
        setShowConfig(false)
      },
      icon: <ChangePassword />,
    },
    {
      label: "Cerrar sesión",
      onPress: () => {
        navigate(`/login`)
        setShowConfig(false)
      },
      icon: <CloseAccount />,
    },
    {
      label: "Eliminar cuenta",
      onPress: () => {
        setShowDeleteModal(true)
        setShowConfig(false)
      },
      icon: <DeleteAccount />,
    },
    
  ];

  return (
    <Wrapper>
      <CloseContainer onClick={() => setShowConfig(false)}>
        <CloseIcon />
      </CloseContainer>
      <Container>
        <Mail>{mail}</Mail>
        <UserName>¡Hola!</UserName>
        <ManageAccountContainer>
          <ManageAccount>Gestiona tu cuenta de Unchained</ManageAccount>
        </ManageAccountContainer>
        <ConfigWrapper>
          <ConfigOptionsContainer>
            {CONFIG_OPTIONS.map((option) => (
              <ConfigOptions onClick={() => option.onPress()}>
                {option.icon}
                <ConfigOption>{option.label}</ConfigOption>
              </ConfigOptions>
            ))}
          </ConfigOptionsContainer>
        </ConfigWrapper>
      </Container>
    </Wrapper>
  );
};

export default ConfigPopover;
