import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "./constants";
import { GetCalcResultResponse } from "./types";

class ApiService {
  private BASE_URL: string;

  private axiosOption: AxiosRequestConfig;

  constructor(BASE_URL: string) {
    this.BASE_URL = BASE_URL;
    this.axiosOption = {
      baseURL: this.BASE_URL,
      timeout: 2000,
    };
  }

  static async get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    const { data }: AxiosResponse<T> = await axios(url, options);
    return data;
  }

  public getCalcResult = async (query: string): Promise<GetCalcResultResponse> => {
    const data = await ApiService.get<GetCalcResultResponse>(query, this.axiosOption);
    return data;
  }
}

const Api = new ApiService(BASE_URL);

export { Api };
