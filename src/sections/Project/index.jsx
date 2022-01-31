import { Container } from './styles';
import { Title } from '../../components/Title';
import { Text } from '../../components/Text'
import Collab from '../../assets/images/collab.svg';

import { FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

export const Project = () => {
  return (
    <Container>
      <Title>Projeto</Title>
      <div className="main-container">
        <div className="left-container">
          <h3 className="title">Projeto é destinado para ajudar você</h3>
          <img src={Collab} alt="" />
          <div className="text-container">
            <p>Projeto AdaWendy tem como proposito ajudar todas as empresas, estamos desenvolvendo um aplicativo que tem como foco automatizar vários procedimento, assim ajudando a área do SESMT.</p>
            <p>Nós seguimos uma fórmula de inovação que é utilizar a tecnologia e o design para criarmos um aplicativo mais simple e bonito</p>
          </div>
        </div>
        <div className="right-container">
          <Text className="title">
            Iniciaremos o aplicativo para os dispositivos android.
          </Text>
          <Text>Queremos envolver uma série de funcionalidades em nosso aplicativo. Na primeira versão vamos disponibilizar a ficha de EPI digital e leitura das normas regulamentadoras. Lembrando a ficha digital é válida, devido ao nosso sistema ser eletrônico.</Text>
          <Text>Nós estamos estudando várias tecnologias para o Back-End, queremos proporcionar um desempenho absoluto para nossos usuários. O Front-End será também com tecnologia de ponta para proporcionar uma experência única para todos os públicos.</Text>
          <Text>Vamos adicionar ferramentas que indique como utilizar todo o aplicativo, esse tipo de funcionalidade possibilita pessoas que tenham alguma limitação tenham autonomia para utilizar nosso serviço.</Text>
          <Text className="text">O aplicativo est[ passando pela fase de design e desenvolvimento,  não temos uma data prevista para o lançamento, manteremos as atualizações do projeto no <a target="_blank" href="https://www.instagram.com/">Instagram</a> e <a target="_blank" href="https://www.linkedin.com/">LinkedIn</a></Text>
          <div className="social-medias">
            <a href="https://www.linkedin.com/" target="_blank" className="icon">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/" target="_blank" className="icon">
              <BsInstagram  />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}