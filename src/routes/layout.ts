import { Request, Response } from "express";
import config from "../config";
import { requestGet } from "../utils/axios";
import layout from "../view/layout";

interface UserModel {
  id: string;
  nickname: string;
}

interface CommentModel {
  body: { idx: string; comment: string; iso_time: string }[];
}

const sliceComment = (commentModel: CommentModel, count: number) => {
  return commentModel.body.map((_) => _.comment).slice(0, count);
};

const handler = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  console.log(`요청이 들어왔습니다 id: ${userId}`);

  const user: UserModel = await requestGet(
    config.backendUri,
    `/api/user/${userId}`
  );
  const comment: CommentModel = await requestGet(
    config.backendUri,
    `/api/comment/${userId}`
  );

  res.writeHead(200, { "Content-Type": "image/svg+xml" }).end(
    layout({
      id: user.id,
      nickname: user.nickname,
      comment: sliceComment(comment, 2),
    })
  );
};

export default [handler];
