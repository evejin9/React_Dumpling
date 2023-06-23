import './App.css';
import { Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Layout from './page/Layout';
import reset from 'styled-reset';
import Main from './page/Main';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    box-sizing: border-box;
  }

  #root {
    text-align: center;
  }

  * {
    box-sizing: inherit;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
