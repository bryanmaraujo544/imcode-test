import { useState } from 'react'
import { Container } from './styles';

import { theme } from '../../styles/theme';
import GlobalStyles from '../../styles/global';
import { Home } from '../../sections/Home';
import { ThemeProvider } from 'styled-components';


function App() {

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Container>
          <Home />
        </Container>

      </ThemeProvider>
    </>
  )
}

export default App
