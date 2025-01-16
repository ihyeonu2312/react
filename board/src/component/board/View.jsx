import React from 'react';

const View = () => {
  return (
    <div>
      
    </div>
  );
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
return data && (
  <div>
    <h1>View</h1>
    <p>{param.num} 번 게시글</p>
    <p>{data.title}</p>
    <p>{data.content}</p>
    <p>{data.writer}</p>
    <p>{data.regDate}</p>
    <p>{data.modDate}</p>
    
    <div>
      <h3>attachs : {data.attachDtos.length}</h3>
      <ul>
        {data.attachDtos.map(a => <li key={a.uuid}><Link to={a.uuid}>{a.origin}</Link></li>)}
      </ul>
    </div>
    <Link to={`/notes/modify/${data.num}`}><button>수정</button></Link>
    <button onClick={handleDelete}>삭제</button>
  </div>
)
}

export default View;

