// 과일 갯수 counter
const title = '제목';
const content = '내용';
const memberEmail = '작성자';
let obj = {title:'1234', content:'abcd'};
obj.title = title;
obj['memberEmail'] = memberEmail;
console.log(obj);

const e = {};
e.target = {};
e.target.name = 'title';
e.target.value = '작성한 제목';

console.log(e);

const {name, value} = e.target;
console.log(name, value);

// {a:1, a:2}
// obj[name] = value;
obj = {...obj, [name] : value}
console.log(obj);
// const name = e.target.name; // ? title
// const value = e.target.name; // 작성한 제목