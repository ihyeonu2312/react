import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const Modify = () => {
  const param = useParams();
  const num = param.num;

  const [board, setBoard] = useState({title:'',content:'',writer:'',attachDtos:[]});
  const navigate = useNavigate();
  const {req, data} = useAxios();

  useEffect(()=>{
    (async()=> {
      const resp = await req('get', `notes/${num}`);
      console.log(resp);

    })();
  }, [req, num]);

  const handleChange = e => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(board);

    req('put', `notes/${num}`, {...board, attachDtos:uploaded});

    alert('글수정 성공');
    navigate("/notes");
  }

  return (
    <div>
      <h1>Modify</h1>
      <form onSubmit={handleSubmit}>
        <input name='title' value={board.title} onChange={handleChange} />
        <input name='content' value={board.content} onChange={handleChange} />
        <input name='memberEmail' value={board.writer} onChange={handleChange} readOnly/>
        <div>
          <h3>attachs : {board.attachDtos.length}</h3>
          <ul>
            {board.attachDtos.map(a => <li key={a.uuid}><Link to={a.url}>{a.origin}</Link></li>)}
          </ul>
        </div>
        <button>글수정</button>
      </form>
    </div>
  );
}

export default Modify;
