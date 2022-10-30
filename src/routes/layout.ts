import { Request, Response } from "express";
import { requestGet } from "../utils/axios";
import layout from "../view/layout";

interface UserModel {
  id: string;
  nickname: string;
}

interface CommentModel {
  body: { idx: string; comment: string; iso_time: string }[];
}

const handler = async (req: Request, res: Response) => {
  // TODO - http://localhost:8080 환경변수로 변경
  // TODO - 다른 닉네임 적용
  const user: UserModel = await requestGet(
    "http://localhost:8080",
    "/api/user/jindo"
  );
  const recentComment: CommentModel = await requestGet(
    "http://localhost:8080",
    "/api/comment/jindo"
  );

  res.writeHead(200, {
    "Content-Type": "image/svg+xml",
  });

  res.end(
    layout({
      id: user.id,
      nickname: user.nickname,
      comment: recentComment.body.map((_) => _.comment).slice(0, 2),
    })
  );
};

export default [handler];
