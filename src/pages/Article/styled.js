import styled from 'styled-components';

export const Wrapper = styled.div`
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 30px 20px;
  @media (min-width: 920px) {
    flex-direction: row;
    padding: 50px 80px;
  }
`

export const RightSideBar = styled.div`
  display: none;
  @media (min-width: 920px) {
    display: flex;
    margin-left: auto
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 40px;
`

export const Title = styled.p`
  font-family: Chonburi;
  font-weight: 400px;
  font-size: 40px;
  line-height: 50px;
  color: #171A22;
  margin: 0px;
`

export const Text = styled.p`
  font-family: Chonburi;
  font-weight: 400px;
  font-size: 16px;
  line-height: 30px;
  color: #000000;
  margin: 0px;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
`