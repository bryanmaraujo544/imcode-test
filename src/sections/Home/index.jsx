import { Header } from '../../components/Header';
import { Container, MainSection } from './styles';
import { Title } from '../../components/Title';
import { BoldText } from '../../components/BoldText';

export const Home = () => {
  return (
    <Container>
      <Header />
      <MainSection>
        <div className="left-container">
          <BoldText className="uptitle">Nós somos o futuro</BoldText>
          <Title>
            Segurança do Trabalho
          </Title>
          <BoldText className="subtitle">
            O projeto destinado a revolucionar a área de segurança do trabalho
          </BoldText>

        </div>
        <div className="right-container">
          b
        </div>
      </MainSection>
    </Container>
  )
}