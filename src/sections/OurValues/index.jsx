import { Text } from '../../components/Text';
import { Title } from '../../components/Title';
import { Container } from './styles';

export const OurValues = () => {
  return (
    <Container className="section">
      <div className="left-container">
        <Title className="title">Nossos Valores</Title>
        <Text isBlack isBold>A wendy tem como foco trazer o máximo de segurança e respeito para os trabalhadores, queremos levar nossa perspectiva de segurança do trabalho combinando design e tecnologia.</Text>
        <Text isBlack isBold>Nós queremos apresentar na rpimeira versão nossas ideias, nossos desejos e sentimentos para os usuários do nosso aplicativo, somos fissurados em inovação, simplicidade e criação de valor a longo prazo. Nossa cultura é fazer o mundo se sentir mais seguro com a Ada Wendy.</Text>
        <Text isBlack isBold>Pensamos, conversamos e criamos tudo de forma diferente vamos quebrar o padrão e deixar tudo mais simples e bonito</Text>
      </div>
      <div className="right-container">
        <div className="circle"></div>
        <p className="logo">Equipe <span className="ada-wendy">Ada<span>Wendy</span></span></p>
      </div>
    </Container>
  );
}