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
            <Header>예비집사 판별기
              <Logo>
              <img src={LogoImage} width={75} height={75}  />
              </Logo>
            </Header>
            <Title> 나에게 맞는 고양이는? </Title>
            <MainImage>
              <img src={MainImg} width={390} height={370} className="rounded-circle"/>
            </MainImage>
            <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
            <Button>테스트 시작하기</Button>
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
  padding-top: 20px;
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PyeongChangPeace-Bold';
`
const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center; 
  font-family: 'PyeongChangPeace-Light';
`
const Logo = styled.div`

`
const MainImage = styled.div`
  margin-top: 20px;
`

const Desc = styled.div`
  font-size: 20px;
  margin-top: 20px;
`
const Button = styled.button`
  margin-top: 20px;
  border-radius: 50%;
  padding: 1.5%;
  background-color: transparent;
  cuser: pointer;
  border: 1px solid;
  font-family: 'PyeongChangPeace-Bold';
  &:hover{
    background-color: #D282FF;
    border: transparent;
    color: #fff;
    transition: all 0.3s ease;
  }
`