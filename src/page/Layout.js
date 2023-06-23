import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";

const LayoutWrapper = styled.div`
  width: 100%;

  li {
    padding: 20px;

    &:hover {
      color: red;
    }
  }
  
  li + li {
    margin-left: 20px;
  }
`;


const Header = styled.header`
  background-color: #e7e7e7;
  padding: 20px;
  
  .main-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div`
  padding: 10px 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex: 1; */
`;

const Footer = styled.footer`
  background-color: #e7e7e7;
  padding: 20px;

  .footer-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;


function Layout(props) {
  return (
    <LayoutWrapper>
      <Header>
        <Nav>
          <Title>좋아할 만두</Title>
          <ul className='main-menu cursor-pointer'>
            <li>NEW</li>
            <li>BEST</li>
            <li>MAP</li>
            <li>PRODUCT REVIEW</li>
            <li>ADD</li>
          </ul>
        </Nav>
      </Header>

      <Outlet />

      <Footer>
        <Title>좋아할 만두</Title>
        <ul className='footer-menu cursor-pointer'>
          <li>회사 소개</li>
          <li>서비스 소개</li>
          <li>개인정보처리방침</li>
          <li>이용약관</li>
          <li>공지사항</li>
        </ul>
      </Footer>
    </LayoutWrapper>
  );
}

export default Layout;