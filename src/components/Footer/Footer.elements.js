import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#fff' : '#fff')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #000000;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

export const FooterSubHeading = styled.p`
  font-family: 'Poppins', sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: bold;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialIcon = styled.img`
  margin-right: 0.5rem;
  height: 48px; 
  width: 68px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 240px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;
