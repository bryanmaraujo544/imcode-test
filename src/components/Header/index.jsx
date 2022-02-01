import { Container, ListItem} from './styles';
import { Link } from 'react-scroll';

const items = ['Início', 'Projeto', 'Contato', 'Equipe'];

export const Header = () => {
  return (
    <Container>
      <nav>
        <ul className="list-container">
          {items.map((item) => (
            <ListItem>
              <Link to={item} smooth={true} offset={-128} spy={true} activeClass="isActive">
                {item}
              </Link>
            </ListItem>
          ))}
        </ul>

      </nav>
    </Container>
  );
}

