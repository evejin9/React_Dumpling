import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  background-color: #fff;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li + li {
    padding-left: 20px;
  }
`;

const Footer = styled.div`
`;

function Layout(props) {
  return (
    <>
      <Header>
        <nav>
          <div>좋아할 만두</div>
          <ul className='main-menu cu'>
            <li>NEW</li>
            <li>BEST</li>
            <li>MAP</li>
            <li>PRODUCT REVIEW</li>
            <li>ADD</li>
          </ul>
        </nav>
      </Header>

      <Outlet />

      <Footer>
        <h2>좋아할 만두</h2>
        <ul>
          <li>회사 소개</li>
          <li>서비스 소개</li>
          <li>개인정보처리방침</li>
          <li>이용약관</li>
          <li>공지사항</li>
        </ul>
      </Footer>
    </>
  );
}

export default Layout;