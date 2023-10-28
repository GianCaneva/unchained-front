import styled from 'styled-components';
import {Instagram} from '@styled-icons/bootstrap/Instagram'
import {Twitter} from '@styled-icons/bootstrap/Twitter'
import {Facebook} from '@styled-icons/bootstrap/Facebook'
import {Youtube} from '@styled-icons/bootstrap/Youtube'

export const Wrapper = styled.div`
  background-color: #171a22;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 20px;
  @media (min-width: 500px) {
    flex-direction: row;
    gap: 100px;
    padding: 20px 80px;
  }
`

export const Topics = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 50px
`

export const TopicRow = styled.div`
  display: flex;
  flex-wrap: row;
  gap: 50px
`

export const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 500px) {
    margin-left: auto;
    max-width: 230px;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: 'center';
  gap: 20px;
`

export const Info = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #FFFFFF;
  font-family: "Montserrat";
`

export const Title = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 17.07px;
  color: #FFFFFF;
  cursor: pointer;
  font-family: "Montserrat";
`

export const Section = styled(Title)`
  text-transform: uppercase;
  ${props => props.selected && 'text-decoration: underline'};
  text-underline-offset: 10px;
`

export const InstagramIcon = styled(Instagram)`
  width: 17px;
  height: 17px;
  color: #FFFFFF; 
  cursor: pointer;
`

export const TwitterIcon = styled(Twitter)`
  width: 17px;
  height: 17px;
  color: #FFFFFF; 
  cursor: pointer;
`

export const FacebookIcon = styled(Facebook)`
  width: 17px;
  height: 17px;
  color: #FFFFFF; 
  cursor: pointer;
`

export const YoutubeIcon = styled(Youtube)`
  width: 17px;
  height: 17px;
  color: #FFFFFF;
  cursor: pointer; 
`