import React from 'react';
//css-in-js style-components
import styled from 'styled-components';
import MainImg from '../asset/cat/mainCat.jpg';
import LogoImage from '../asset/cat/logo.png';
import Bg from '../asset/background.jpeg'; 
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  return (
    <>
        <Wrapper>
            <Header>예비집사 판별기.
              <Logo>
              <img src={LogoImage} width={75} height={75}  />
              </Logo>
            </Header>
            <Title> 나에게 맞는 고양이는? </Title>
            <MainImage>
              <img src={MainImg} width={350} height={350} className="rounded-circle"/>
            </MainImage>
        </Wrapper>
    </>
  )
}

export default Home;

const Wrapper = styled.div`
    background-image: url(${Bg});
    background-size: cover;
    height: 100vh;
    width: 100%;
`
const Header = styled.div`
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center; 
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
`
const Logo = styled.div`
`
const MainImage = styled.div`

`
