import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

const Dashboard = () => {
  const {email, token, logout} = useAuth();
  return (
    <div>
      <h1>시작페이지</h1>
      <p>{email || 'guest'}</p>
      <p>{token}</p>
      {email ? <><button onClick={logout}>로그아웃</button><Link to={'/list'} >게시글</Link></> : <Link to={'/'}> 로그인 </Link>}
    </div>
  );
}

export default Dashboard;