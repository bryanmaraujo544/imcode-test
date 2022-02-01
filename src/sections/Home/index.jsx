import { Container, MainSection } from './styles';
import { Title } from '../../components/Title';
import { Text } from '../../components/Text';

import SecurityImg from '../../assets/images/security-img.svg';

export const Home = () => {
  return (
    <Container className="section" id="Início">
      <MainSection>
        <div className="left-container">
          <Text className="uptitle">Nós somos o futuro</Text>
          <Title className="title">
            Segurança do Trabalho
          </Title>
          <Text className="subtitle">
            O projeto destinado a revolucionar a área de segurança do trabalho
          </Text>

        </div>
        <div className="right-container">
          <img src={SecurityImg} alt="security-img" />
        </div>
      </MainSection>
    </Container>
  )
}