import React from 'react';
import styled from '@emotion/styled';

import Header from '../components/Header';

// import LatestMovieSection from '../features/movie/latest';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const MainPage: React.FC = () => (
  <>
    <Header />
    <Main>
      main
      {/*<Container>*/}
      {/*  <LatestMovieSection />*/}
      {/*</Container>*/}
    </Main>
  </>
)

export default MainPage;
