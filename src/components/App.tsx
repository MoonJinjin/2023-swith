import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Header from './Header/Header';

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

const Section = styled.section`
  width: 100%;
  height: calc(100vh - 30px);
`;

const AuthRoute: React.FC = () => {
  return (
    <Container>
      <Header />
      <Section>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Section>
    </Container>
  )
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/" element={<AuthRoute />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
