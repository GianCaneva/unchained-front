import styled from 'styled-components';
import Colors from '../../utils/theme/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${Colors.beige};
  height: 100vh
`

export const Container = styled.div`
  box-shadow: 0 0 10px #c9c9c9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
`