import { Container } from './styles';

import { theme } from '../../styles/theme';
import GlobalStyles from '../../styles/global';
import { ThemeProvider } from 'styled-components';

import { MobileApp } from '../../sections/MobileApp';
import { Home } from '../../sections/Home';
import { Services } from '../../sections/Services';


function App() {

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container>
          <Home />
          <MobileApp />
          <Services />
        </Container>

      </ThemeProvider>
    </>
  )
}

export default App
