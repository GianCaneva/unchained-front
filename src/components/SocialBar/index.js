import React from "react";
import { Info, Line, Title, Wrapper } from "./styled";


const SOCIALS = [
  {link: 'https://www.instagram.com/unchainednews', key: 'INSTAGRAM'},
  {link: 'https://twitter.com/unchainedAiNews', key: 'TWITTER'},
  {link: 'https://www.facebook.com/profile.php?id=61551723342180', key: 'FACEBOOK'},
  {link: 'https://www.youtube.com/channel/UCxzAmmk_cmnjpuAc4QZrXVQ', key: 'YOUTUBE'}
]

const SocialBar = () => {

  const openSocial = (url) => {
    window.open(url, '_blank')
  }

  return (
    <Wrapper>
      <Title>SOCIAL MEDIA</Title>
      <Line />
      {SOCIALS.map((s) => (
        <Info key={s.key} onClick={() => openSocial(s.link)}>
          {s.key}
        </Info>
      ))}
    </Wrapper>
  );
};

export default SocialBar;
