const template = (
  id: string,
  nickname: string,
  comment: string[]
) => `
      <?xml-stylesheet type="text/css" href="data:text/css;base64,QGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R2FsYWRhJmFtcDtmYW1pbHk9R293dW4rQmF0YW5nOndnaHRANzAwJmFtcDtmYW1pbHk9UG9vcitTdG9yeSZhbXA7ZmFtaWx5PVllb24rU3VuZyZhbXA7ZGlzcGxheT1zd2FwJyk7DQpAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Hb3d1bitCYXRhbmc6d2dodEA3MDAnKTsNCkBmb250LWZhY2Ugew0KICBmb250LWZhbWlseTogJ0NhZmUyNFNzdXJyb3VuZCc7DQogIHNyYzogdXJsKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvcHJvamVjdG5vb25udS9ub29uZm9udHNfMjEwNV8yQDEuMC9DYWZlMjRTc3Vycm91bmQud29mZicpIGZvcm1hdCgnd29mZicpOw0KICBmb250LXdlaWdodDogbm9ybWFsOw0KICBmb250LXN0eWxlOiBub3JtYWw7DQp9" ?>
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="350" height="210" >


        <!-- 메인 박스 그라데이션 적용-->
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(30)">
            <stop offset="20%" stop-color="#dfe8ff" />
            <stop offset="50%" stop-color="#f3c6f1" />
            <stop offset="80%" stop-color="#ffcfd1" />
          </linearGradient>
        </defs>

        <!-- 메인 박스 -->
        <rect width="350" height="210" rx="10" ry="10" x="0" y="0" fill="url('#myGradient')"/>
        
        <!-- 타이틀 -->
        <text x="25" y="38" font-family='Cafe24Ssurround' font-size="18" fill="#453a3a">${nickname}의 방명록</text>
        
        <!-- 타이틀 -->
        <text x="25" y="30%" font-family='Cafe24Ssurround' font-size="11" fill="#453a3a">Recent Comments</text>
        
        
        <!-- 첫번째 댓글 -->
        <!-- <rect width="310" height="30" rx="10" ry="10" x="20" y="80" fill="#ffffff"/> -->
        <path d="M325,80 a8,8 0 0 1 8,8 v20 a8,8 0 0 1 -8,8 h-310  v-28 a8,8 0 0 1 8,-8 z" fill="#ffffff"/>
        <text x="50%" y ="50%" text-anchor="middle" font-family="Gowun Batang, serif">${comment ? comment[0] : "---"}</text>
    
      
        <!-- 두번째 댓글 -->
        <path d="M325,125 a8,8 0 0 1 8,8 v20 a8,8 0 0 1 -8,8 h-310  v-28 a8,8 0 0 1 8,-8 z" fill="#ffffff"/>
        <text x="50%" y ="71%" text-anchor="middle" font-family="Gowun Batang, serif">${comment? (comment[1]) : "---"}</text>
        

        <!-- footer -->
        <text x="255" y="190" font-family="Galada, cursive" fill="#453a3a"  font-size="18">MEMOME</text>
        
        <!-- <a href="https://memome.be/${id}" class="button">
          <text x="235" y="188" font-family='Cafe24Ssurround' font-size="13" fill="#453a3a">댓글 쓰러 가기</text>
        </a> -->
      </svg>`
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