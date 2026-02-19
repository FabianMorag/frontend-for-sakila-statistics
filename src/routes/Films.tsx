import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) =>
  axios.get("http://localhost:3000/api" + url).then((res) => res.data);

export default function Films() {
  const { data, isLoading } = useSWR("/films", fetcher);

  if (isLoading) return <div>Is loading...</div>;
  if (!data) return <div>There are no elements...</div>;

  return (
    <main className="flex justify-center items-center">
      <h1 className="font-bold text-4xl">Films</h1>
    </main>
  );
}
