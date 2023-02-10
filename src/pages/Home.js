import React from 'react';
//css-in-js style-components
import styled from 'styled-components';

const Home = () => {
  return (
    <>
        <Wrapper>
            <div>헤더입니다.</div>
        </Wrapper>
    </>
  )
}

export default Home;

const Wrapper = styled.div`
    background-color: pink;
`