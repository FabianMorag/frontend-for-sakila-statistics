import axios from "axios";

export const fetcher = <T>(url: string): Promise<T> =>
  axios.get<T>(`http://localhost:3000/api${url}`).then((res) => res.data);
