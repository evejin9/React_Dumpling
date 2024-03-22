import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from "styled-components";
import dayjs from 'dayjs';

import { FaTwitter, FaInstagram, FaFacebook  } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import Button from './ui/Button';
import logoImg from "../image/Title.png";

const LayoutWrapper = styled.div`
  width: 100%;
  word-break: keep-all;

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
  /* background-color: #e7e7e7; */
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  
  .main-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.div`
  padding: 10px 20px;

  img {
    width: 160px;
  };
`;

const Nav = styled.nav`
  width: 1000px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  ul {
    flex: 1;
  }
`;

const Footer = styled.footer`
  background-color: #F3F7FF;
  padding: 20px;
  font-size: 15px;

  .footer-menu {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .snsIcons  {
    display: flex;
    justify-content: center;
    align-items: center;
    
    li {
      padding: 12px;
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }

  .componyInfo {
    font-size: 12px;
  }

  ul + ul {
  }
  
  p {
    margin-top: 20px;
    font-size: 13px;
  }
`;

const BackToTopBtn = styled.div`
  display: ${props => props.ShowButton ? '' : 'none'};
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 50px;
  right: 50px;
  color: #5A80C9;
  border: 3px solid #5A80C9;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);

  svg {
    font-size:25px;
    margin: 9px;
  }

  &:hover {
  background-color: #5A80C9;
  color: #fff;
  border: 3px solid #fff;
  }
`;

const Today = dayjs();

function Layout(props) {
  const [ShowButton, setShowButton] = useState(false);

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const showButtonClick = () => {
      if (window.scrollY > 800) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }
    window.addEventListener("scroll", showButtonClick)
    return () => {
      window.removeEventListener("scroll", showButtonClick)
    }
  }, [])

  return (
    <LayoutWrapper>
      <Header>
        <Nav>
          <Title> 
            <img
              className='cursor-pointer'
              src={logoImg}
            /> 
          </Title>

          <ul className='main-menu cursor-pointer'>
            <li>NEW</li>
            <li>BEST</li>
            <li>MAP</li>
            <li>PRODUCT REVIEW</li>
            <li>ADD</li>
          </ul>
          <Button text={'Sign In'} />
          {/* <Button text={'Register'} /> */}
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

        <ul className='snsIcons cursor-pointer'>
          <li><FaInstagram/></li>
          <li><FaFacebook/></li>
          <li><FaTwitter/></li>
        </ul>

        <ul className='footer-menu componyInfo cursor-pointer'>
          <li>좋아할 만두(주)</li>
          <li>대표자 김수진</li>
          <li>인천 남동구 독곡로48번길 9,  6층 (서해빌딩)</li>
          <li>TEL: 1577-0510</li>
          <li>EMAIL: eveji9@naver.com</li>
        </ul>

        <p>
          &copy; {Today.get('y')}&nbsp;
          Mandu, I Like It. All Rights Reserved.
        </p>
      </Footer>

      <BackToTopBtn 
        className='cursor-pointer'
        onClick={MoveToTop}
        ShowButton={ShowButton}
      >
        <IoIosArrowUp />
      </BackToTopBtn>
    </LayoutWrapper>
  );
}

export default Layout;