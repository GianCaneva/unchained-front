import styled from "styled-components";
import Colors from "../../utils/theme/colors";
import { Close } from "@styled-icons/evil/Close";
import { PersonEdit } from "styled-icons/fluentui-system-filled";
import { CloseCircleOutline } from "styled-icons/evaicons-outline";
import { Logout } from "@styled-icons/material-twotone/Logout";
import { StatsBars } from "styled-icons/icomoon";

export const Wrapper = styled.div`
  background-color: ${Colors.beige};
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 10px;
  margin-right: 100px;
  @media (max-width: 1200px) {
    margin-right: 80px;
  }

  @media (max-width: 670px) {
    margin-right: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
`;

export const Mail = styled.p`
  margin: 0;
  font-family: "Arial";
  font-size: 14px;
  line-height: 17px;
  color: ${Colors.black};
`;

export const CloseContainer = styled.div`
  position: absolute;
  right: 105px;
  @media (max-width: 1200px) {
    right: 85px;
  }

  @media (max-width: 670px) {
    right: 25px;
  }
`;

export const CloseIcon = styled(Close)`
  width: 20px;
  height: 20px;
  color: ${Colors.black};
  cursor: pointer;
`;

export const UserName = styled.p`
  margin: 0;
  font-family: "Arial";
  font-size: 20px;
  line-height: 17px;
  color: ${Colors.black};
`;

export const ManageAccountContainer = styled.div`
  margin-top: 10px;
`;

export const ManageAccount = styled(Mail)`
  color: ${Colors.red};
  font-weight: 700;
`;

export const ConfigWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const ConfigOptionsContainer = styled.div`
  margin-top: 10px;
  background-color: ${Colors.white};
  border-radius: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ConfigOptions = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid ${Colors.lightGray};
  cursor: pointer;
  &:hover {
    background-color: ${Colors.lightGray};
  }
`;

export const ConfigOption = styled.p`
  margin: 0;
  font-family: "Arial";
  font-size: 14px;
  line-height: 17px;
  color: ${Colors.black};
  padding: 10px;
  font-weight: 500;
`;

// Icons

export const Stats = styled(StatsBars)`
  width: 20px;
  height: 20px;
  color: ${Colors.black};
  margin-left: 5px;
`;

export const ChangePassword = styled(PersonEdit)`
  width: 20px;
  height: 20px;
  color: ${Colors.black};
  margin-left: 5px;
`;

export const DeleteAccount = styled(CloseCircleOutline)`
  width: 20px;
  height: 20px;
  color: ${Colors.black};
  margin-left: 5px;
`;

export const CloseAccount = styled(Logout)`
  width: 20px;
  height: 20px;
  color: ${Colors.black};
  margin-left: 5px;
`;
