const template = (
  id: string,
  nickname: string,
  comment: string[]
) => `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="495" height="195">
<rect x="50" y="20" rx="20" ry="20" width="490" height="150" style="fill:red;stroke: black;stroke-width:5;opacity:0.5" />
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">${id} ${nickname} ${comment[0]} ${comment[1]} 방명록 작성하러 가기</text> 
</svg>`;
// TODO - 댓글이 하나인 경우 처리

interface Props {
  id: string;
  nickname: string;
  comment: string[];
}

const layout = ({ id, nickname, comment }: Props): string => {
  return template(id, nickname, comment);
};

export default layout;
