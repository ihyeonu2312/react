import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

const View = () => {

  const param = useParams();
  const num = param.num;
  const {loading, error, req} = useAxios();
  const nav = useNavigate();
  const {email} = useAuth();
  const [note, setNote] = useState({});
  const [myLike, setMyLike] = useState({});


  // effect >> api 호출
  const o = {email, num};
  useEffect(() => {

    (async() => {
      setNote(await req('get', `notes/${num}`));
      const queryString = new URLSearchParams(o).toString();
      setMyLike(await req('get', `likes?${queryString}`));
    })();
  }, [num, req, email]);

  if(error) {
    return <div><h1>에러발생</h1></div>
  }


 if(loading) {
   return <div><h1>로딩중</h1></div>
}
  // 삭제 처리
const handleDelete = e => {
  e.preventDefault();
  console.log('삭제 동작');
  if(!window.confirm("삭제 하시겠습니까?")) {
    return;
  }
  req('delete', `notes/${num}`);
  nav('/notes');
};

// 좋아요 토글
const handleLikesToggle = async e => {
  e.preventDefault();
  const ret = await req('get', `likes`, {email, num}) ;
  setMyLike(!myLike);
  setNote({...note, likesCnt:note.likesCnt + (ret.result ? -1 : 1)})
}
return note && (
  <div>
    <h1>View</h1>
    <p>{param.num} 번 게시글</p>
    <p>{note.title}</p>
    <p>{note.content}</p>
    <p>{note.writer}</p>
    <p>{note.regDate}</p>
    <p>{note.modDate}</p>
    <p><button onClick={handleLikesToggle}>좋아요 <span style={{color: 'red'}}>{myLike ? '♥' : '♡'}</span> {note.likesCnt}</button></p>

    <div>
      <h3>attachs : {note.attachDtos && note.attachDtos.length}</h3>
      <ul>
        {note.attachDtos && note.attachDtos.map(a => <li key={a.uuid}><Link to={a.url}>{a.origin}</Link></li>)}
      </ul>
    </div>
    <Link to={`/notes/modify/${note.num}`}><button>수정</button></Link>
    <button onClick={handleDelete}>삭제</button>
  </div>
)
}

export default View;

