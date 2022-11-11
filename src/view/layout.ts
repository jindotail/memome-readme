const template = (
  id: string,
  nickname: string,
  comment: string[]
) => `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="350" height="210" >

        <!-- CSS -->
          <!-- 폰트 적용 -->
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Galada');
            @font-face {
              font-family: "GowunBatang";
              src: url("../assets/fonts/GowunBatang-Bold.ttf") format("truetype"); 
            }

            @font-face {
              font-family: 'Cafe24Ssurround';
              src: url('../assets/fonts/Cafe24Ssurround.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
          }


            .comment{
              text-anchor: middle;
              font-fammily: "Cafe24Ssurround";
            }

            .footer{
              font-family: "Galada";
              fill: #453a3a;
              font-size:"180";
            }
            
          </style>

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
        
        <!-- 제목 -->
        <text x="25" y="38">${nickname}의 방명록</text>
        
        <!-- 부제목 -->
        <text x="25" y="30%">Recent Comments</text>
        
        
        <!-- 첫번째 댓글 -->
        <!-- <rect width="310" height="30" rx="10" ry="10" x="20" y="80" fill="#ffffff"/> -->
        <path d="M325,80 a8,8 0 0 1 8,8 v20 a8,8 0 0 1 -8,8 h-310  v-28 a8,8 0 0 1 8,-8 z" fill="#ffffff"/>
        <text x="50%" y ="50%" class="comment">${comment ? comment[0] : "---"}</text>
    
      
        <!-- 두번째 댓글 -->
        <path d="M325,125 a8,8 0 0 1 8,8 v20 a8,8 0 0 1 -8,8 h-310  v-28 a8,8 0 0 1 8,-8 z" fill="#ffffff"/>
        <text x="50%" y ="71%" class="comment">${comment? (comment[1]) : "---"}</text>
        

        <!-- footer -->
        <text x="255" y="190" class="footer">MEMOME</text>
        
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