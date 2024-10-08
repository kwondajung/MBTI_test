import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>MBTI 테스트</h1>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해주세요</p>
      <button
        onClick={() => {
          navigate('/test');
        }}
      >
        테스트하러 가기
      </button>
      <Link to="/login">로그인하기</Link>
    </div>
  );
};

export default Home;
