import { Container } from './styles';
import { Title } from '../../components/Title';
import { Text } from '../../components/Text';

import { BsArrowRightCircle, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { GiShakingHands } from 'react-icons/gi';

export const Footer = () => {
  return (
    <Container className="section" id="Contato">
      <div className="left-container">
        <div className="contact-container">
          <BsArrowRightCircle className="arrow-icon" />
          <div className="text">Nos siga no Intagram e LinkedIn</div>
          <div className="social-medias">
            <FaLinkedinIn className="icon" />
            <BsInstagram className="icon" />
          </div>
        </div>
        <div className="donation-container">
          <div className="header">
            <Title>Doação</Title>
            <GiShakingHands className="hands-icon" />
          </div>
          <Text className="donation-text" isBold isBlack>Gostou da nossa ideia e que acelerar o processo de desenvolvimento?</Text>
          <Text className="donation-text" isBold isBlack>Nos ajude com qualquer quantia</Text>
        </div>
      </div>
      <div className="right-container" id="Equipe">
        <div className="infos-box">
          <div className="header">
            <p className="uptitle">Idealizador</p>
            <div className="title-name">Felipe "Nit" Rodrigues</div>
            <Text isBold className="description">Opá tudo bem? Um cara que curte fazer coisas diferentes, estudante da área de segurança do trabalho e viciado em consumir qualquer coisa que envolva tecnologia</Text>
          </div>
          <div className="footer">
            <Text className="title" isBold>_Me siga no</Text>
            <FaLinkedinIn className="icon" />
          </div>
        </div>
        <div className="infos-box">
          <div className="header">
            <p className="uptitle">Designer</p>
            <div className="title-name">Isabela "Yui" Messias</div>
            <Text isBold>Se descreva</Text>
          </div>
          <div className="footer">
            <Text className="title" isBold>_Me siga no</Text>
            <FaLinkedinIn className="icon" />
          </div>
        </div>
      </div>
    </Container>
  );
}