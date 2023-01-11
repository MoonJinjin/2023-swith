import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Header from './Header/Header';
import Vocabulary from './Vocabulary/Vocabulary';
import Footer from './Footer/Footer';
import CreateVocabulary from './Vocabulary/CreateVocabulary';
import Memorize from './Memorize/Memorize';

const Container = styled.div`
  display: flex;
`;

const Section = styled.section`
  width: 100%;
  /* height: calc(100vh - 30px); */
  height: 100%;
  min-height: 100vh;
`;

const AuthRoute: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Section>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/voca" element={<Vocabulary />} />
            <Route path="/makevoca" element={<CreateVocabulary />} />
            <Route path="/memorize" element={<Memorize />} />
          </Routes>
        </Section>
      </Container>
      <Footer />
    </>
  )
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="swith/*" element={<AuthRoute />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
