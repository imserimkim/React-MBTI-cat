import React from 'react';
//css-in-js style-components
import styled from 'styled-components';
import MainImg from '../asset/cat/mainCat.jpg';
import LogoImage from '../asset/cat/logo.png';
// import Bg from '../asset/background.jpeg'; 
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate  } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    // useNavigate 사용 
    navigate('/question');
  }
  return (
    <>
        <Wrapper>
            <Header>예비집사 판별기
              <Logo>
              <img src={LogoImage} width={75} height={75} />
              </Logo>
            </Header>
            <Title> ✦   &nbsp; 나에게 맞는 고양이는?   &nbsp;✦</Title>
            <MainImage>
              <img src={MainImg} width={390} height={370} className="rounded-circle"/>
            </MainImage>
            <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
            <Button onClick={handleClickButton} >테스트 시작하기</Button>
        </Wrapper>
    </>
  )
}

export default Home;

// background-image: url(${Bg});

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`
const Header = styled.div`
  padding-top: 40px;
  font-size: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PyeongChangPeace-Bold';

  @media screen and (max-width: 1440px) {
    padding-top: 30px;
    font-size: 40pt;
  }

  @media screen and (max-width: 500px) {
    padding-top: 60px;
    font-size: 30pt;
  }

`
const Title = styled.div`
  font-size: 30px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center; 
  font-family: 'PyeongChangPeace-Light';

  @media screen and (max-width: 1440px) {
    font-size: 20pt;
    margin-top: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20pt;
    margin-top: 30px;
  }
`
const Logo = styled.div`
  padding: 10px;

  @media screen and (max-width: 500px) {
    img {
      width: 55px;
      height: 55px;
    }
  }
`
const MainImage = styled.div`
  margin-top: 30px;

  @media screen and (max-width: 1440px) {
    img{
      width: 200px;
      height: 180px;
      margint-top: 20px;
    }
  }

  @media screen and (max-width: 500px) {
    img{
      width: 300px;
      height: 280px;
      margint-top: 40px;
    }
  }
`

const Desc = styled.div`
  font-size: 20px;
  margin-top: 30px;
  @media screen and (max-width: 500px) {
    font-size: 13pt;
    padding: 10%;
  }
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
    background-color: #A692D8;
    border: transparent;
    color: #fff;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 500px) {
    paddig: 10%;
  }
`