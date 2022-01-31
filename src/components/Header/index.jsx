import { useState } from 'react';
import { Container, ListItem} from './styles';

const items = ['Início', 'Projeto', 'Contato', 'Equipe'];

export const Header = () => {
  const [wichSectionIsActive, setWichSectionIsActive] = useState('Início');

  return (
    <Container>
      <nav>
        <ul className="list-container">
          {items.map((item) => (
            <ListItem isActive={item === wichSectionIsActive}>
              {item}
            </ListItem>
          ))}
        </ul>

      </nav>
    </Container>
  );
}

