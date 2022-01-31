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


function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container>
          <Home />
          <MobileApp />
          <Services />
          <Project />
          <Functionalities />
          <OurValues />
        </Container>

      </ThemeProvider>
    </>
  )
}

export default App
