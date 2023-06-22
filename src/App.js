import './App.css';
import { Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

import Layout from './page/Layout';

const GlobalStyle = createGlobalStyle`
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

        </Route>
      </Routes>
    </>
  );
}

export default App;
