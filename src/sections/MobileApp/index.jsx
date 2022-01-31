import { Container } from './styles';

import { Title } from '../../components/Title';
import MobileImg from '../../assets/images/mobile-app.svg';
import { Text } from '../../components/Text';

import { IoIosUnlock } from 'react-icons/io';
import { AiFillCheckCircle, AiFillApple, AiFillAndroid } from 'react-icons/ai';
import { BsFillBellFill } from 'react-icons/bs';

const qualitiesData = [
  {
    icon: IoIosUnlock,
    text: 'Acesso Seguro'
  },
  {
    icon: AiFillCheckCircle,
    text: 'Gestão de dados eficaz'
  },
  {
    icon: BsFillBellFill,
    text: 'Acompanhameto de pedidos em tempo real'
  },
]


export const MobileApp = () => {
  return (
    <Container>
      <div className="mobile-img-container">
        <img src={MobileImg} alt="mobile-image" />
      </div>
      <div className="app-infos-container">
        <Title >
          Praticidade
        </Title>
        <Title isGreen>
          Tudo o que você precisa na palma da sua mão.
        </Title>
        <Text isBlack isBold className="subtitle">
          Nosso aplicativo tem por objeitivo proporconar novas experiências de controle dos equipamentos de proteção
        </Text>
        <div className="qualities-container">
          {qualitiesData.map(({ text, icon: Icon }) => (
            <div className="quality">
              <Icon className="icon" />
              <p className="quality-text">{text}</p>
            </div>
          ))}
        </div>
        <Text isBlack isBold className="last-text">
            O aplicativo será designado para 
            <AiFillApple size="1.8rem" className="icon"/>e
            <AiFillAndroid size="1.8rem" className="icon" />
        </Text>
      </div>
    </Container>
  );
}