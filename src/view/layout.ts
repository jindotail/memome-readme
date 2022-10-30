const template = (
  id: string,
  nickname: string,
  comment: string[]
) => `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="350" height="210" >

        <!-- CSS -->
        <defs>
          <!-- 폰트 적용 -->
          <style type="text/css">
            @import url('https://fonts.googleapis.com/css2?family=Galada&amp;family=Gowun+Batang:wght@700&amp;family=Poor+Story&amp;family=Yeon+Sung&amp;display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&amp;family=Galada&amp;family=Nanum+Gothic&amp;display=swap');
            @font-face {
              font-family: 'Cafe24Ssurround';
              src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff') format('woff');
              font-weight: normal;
              font-style: normal;
            };
            @font-face {
              font-family: 'GangwonEdu_OTFBoldA';
              src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
              font-weight: normal;
              font-style: normal;
            };
          </style>
        </defs>

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
        <rect width="310" height="30" rx="10" ry="10" x="20" y="80" fill="#ffffff"/>
        <text x="50%" y ="48%" text-anchor="middle" font-family="Gowun Batang, serif">${comment ? comment[0] : "---"}</text>
        <!--
        <path d="M320,80 a20,20 0 0 1 20,20 v30 a20,20 0 0 1 -20,20 h-300  v-50 a20,20 0 0 1 20,-20 z" z-index="99"/>
        -->
        <!-- 두번째 댓글 -->
        <rect width="310" height="30" rx="10" ry="10" x="20" y="120" fill="#ffffff"/>
        <text x="50%" y ="67%" text-anchor="middle" font-family="Gowun Batang, serif">${comment? (comment[1]) : "---"}</text>
        

        <!-- footer -->
        <text x="25" y="190" font-family="Galada, cursive" fill="#453a3a"  font-size="18">MEMOME</text>
        
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