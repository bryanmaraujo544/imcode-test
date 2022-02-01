import { Container } from './styles';
import { theme } from '../../styles/theme';
import GlobalStyles from '../../styles/global';
import { ThemeProvider } from 'styled-components';

import { MobileApp } from '../../sections/MobileApp';
import { Home } from '../../sections/Home';
import { Services } from '../../sections/Services';
import { Project } from '../../sections/Project';
import { Functionalities } from '../../sections/Functionalities';
import { OurValues } from '../../sections/OurValues';
import { Footer } from '../../sections/Footer';
import { Header } from '../Header';

import ScrollReveal from 'scrollreveal';

function App() {
  const scrollReveal = ScrollReveal();

  // The function responsible to make the scroll animations
  scrollReveal.reveal('.section', {
    origin: 'bottom',
    distance: '30px',
    duration: 900,
    interval: 200
  });

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <Home />
          <MobileApp />
          <Services />
          <Project />
          <Functionalities />
          <OurValues />
          <Footer />
        </Container>

      </ThemeProvider>
    </>
  )
}

export default App
