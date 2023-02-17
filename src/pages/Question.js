import React from 'react'
import { ProgressBar} from 'react-bootstrap';
import styled from 'styled-components';
import { QuestionData } from '../asset/data/QuestionData';
import { createSearchParams, useNavigate } from 'react-router-dom';


const Question = () => {
  const [questionNo, setQuestionNo] = React.useState(0);
  const [totalScore, setTotalScore] = React.useState([
    {id: "EI", score: 0},
    {id: "SN", score: 0},
    {id: "TF", score: 0},
    {id: "JP", score: 0},
  ])
  const navigate = useNavigate();

  console.log('questionNo', questionNo); 

  const handleClickButton = (no, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + no } : s
    );

    setTotalScore(newScore);

    if (QuestionData.length !== questionNo + 1) {
      // 다음문제로 문제수 증가
      setQuestionNo(questionNo + 1);
    } else {
      // mbti도출
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc + (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        ""
      );
      // 결과 페이지 이동
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({
          mbti: mbti,
        })}`
      });
    }
  }
  
  return (
    <Wrapper>
      <ProgressBar striped variant="danger" now={(questionNo / QuestionData.length) * 100 } style={{backgroundColor:"transparent" }}/>
      <Title>{QuestionData[questionNo].title} </Title>
      <ButtonGroup>
        <Button onClick={()=>handleClickButton(1, QuestionData[questionNo].type)}> {QuestionData[questionNo].answera} </Button>
        <Button onClick={()=>handleClickButton(0, QuestionData[questionNo].type)} 
        style={{
          marginTop: "20px"
        }}> {QuestionData[0].answerb} </Button>
      </ButtonGroup>

    </Wrapper>
  )
}


export default Question;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`

const Title = styled.div`
  font-size: 30px;
  padding-top: 100px;
  text-align: center;

  @media screen and (max-width: 1440px) {
    font-size: 20pt;
    margin-top: 10px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20pt;
    margin-top: 30px;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`
const Button = styled.button`
  background-color: rgba(240, 240, 240, 0.3);
  border: 1px solid black;
  border-radius: 10px 10px 10px 10px;
  padding: 1%;
  width: 40%; 
  minHeight: 200px; 
  fontSize: 15pt;
  cursor: pointer;

  &:hover{
    background-color: #A692D8;
    border: transparent;
    color: #fff;
    transition: all 0.3s ease;
  }
`
