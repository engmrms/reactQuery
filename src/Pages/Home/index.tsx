import { useQuery } from "react-query";
import Axios from "../../API/config";
type Post = {
  title: string;
  id: number;
  userId: number;
  body: string;
};

function Home() {
  const getPosts = async () => await (await Axios.get("/posts")).data;

  const { data, isLoading, isError, error } = useQuery<Post[]>("posts", getPosts);
  console.log({ data, isLoading, isError, error });
  return (
    <>
      {isLoading && <div>Loading ...</div>}
      {!isLoading && (
        <div>
          <h1>Posts</h1>
          <ul>
            {data?.map(item => (
              <li key={item.id}>
                <a href="">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Home;
