import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";

const List=()=>{
  const {data,loading,error,req}=useAxios();

  const navigate = useNavigate();
  // effect >> adi호출
  useEffect(() =>{
    req('get','board/list');
    // req('get','board/list'); //2번 하면 비동기
  },[req]);

  if(error) {
    return <div><h1>에러 발생</h1></div>;
  }
  if(loading){
    return <div><h1>로딩중</h1></div>;
  } 


  return(
    <div>
      <button onClick={()=>navigate('/write')}>글쓰기</button>
      <ul>
        {data && data.map(b => <li key={b.num}><Link to={`/notes/${b.num}`}>{b.title}</Link> <span>좋아요 {b.likesCnt}</span> <span> {b.attachCnt > 0 && 'm'}</span></li>)}
      </ul>
    </div>
  )

}
export default List;