import axios, { AxiosResponse } from "axios";
import { HttpRequest, HttpResponse } from "../HttpClient";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});

export async function axiosHttpClient(
  data: HttpRequest
): Promise<HttpResponse> {
  let axiosResponse: AxiosResponse;

  try {
    axiosResponse = await instance.request({
      url: data.url,
      method: data.method,
      data: data.body,
      headers: data.headers,
    });
  } catch (error) {
    axiosResponse = error.response;
  }

  return {
    statusCode: axiosResponse.status,
    body: axiosResponse.data,
  };
}
