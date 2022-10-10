import axios, { AxiosError, AxiosRequestConfig } from "axios";


export const requestGet = async <T, D>(
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