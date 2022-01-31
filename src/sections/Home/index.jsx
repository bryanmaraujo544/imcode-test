import { Header } from '../../components/Header';
import { Container, MainSection } from './styles';
import { Title } from '../../components/Title';
import { BoldText } from '../../components/BoldText';

import SecurityImg from '../../assets/images/security-img.svg';

export const Home = () => {
  return (
    <Container>
      <Header />
      <MainSection>
        <div className="left-container">
          <BoldText className="uptitle">Nós somos o futuro</BoldText>
          <Title className="title">
            Segurança do Trabalho
          </Title>
          <BoldText className="subtitle">
            O projeto destinado a revolucionar a área de segurança do trabalho
          </BoldText>

        </div>
        <div className="right-container">
          <img src={SecurityImg} alt="security-img" />
        </div>
      </MainSection>
    </Container>
  )
}