import axios, { AxiosError, AxiosRequestConfig } from "axios";
import express, { Request, Response } from "express";
import layout from "./view/layout";

interface UserModel {
  id: string;
  nickname: string;
}

interface CommentModel {
  body: { idx: string; comment: string; iso_time: string }[];
}

const requestGet = async <T, D>(
  base: string,
  url: string,
  config?: AxiosRequestConfig<D>
): Promise<T> => {
  try {
    const response = await axios.get(new URL(url, base).toString(), config);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      // TODO - custom error 만들기
      // TODO - 던진 에러 처리해야 함
      console.log(`Axios Error : ${error.message}`);
      throw new Error(error.message);
    }
    throw error;
  }
};

async function startServer() {
  const app = express();

  app.get("/status", (req: Request, res: Response) => {
    res.status(200).end();
  });

  app.get("/layout", async (req: Request, res: Response) => {
    // TODO - http://localhost:8080 환경변수로 변경
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
  });

  app.listen(9000, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${9000} 🛡️
      ################################################
    `);
  });
}

startServer();
