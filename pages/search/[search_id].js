import Card from "../../components/Card";
import axios from "axios";
import { useRouter } from "next/router";
const SearchPage = (props) => {
  const router = useRouter();
  console.log();
  return (
    <div className="max-w-screen-xl m-auto ">
      <h2 className="p-6 pb-0 text-2xl font-medium text-black">
        You Searched For{" "}
        <span className="font-bold uppercase">{router.query.search_id}</span>
      </h2>
      <section className="grid grid-cols-4 gap-6 p-6">
        {props.search_result.results.map((movie) => (
          <Card
            key={movie.id}
            name={movie.original_title}
            poster={movie.poster_path}
            link={movie.id}
          />
        ))}
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  const response = await axios.get(`${process.env.API_URI}/search/movie/`, {
    params: {
      api_key: process.env.API_KEY,
      query: context.query.search_id,
    },
  });
  return {
    props: {
      search_result: response.data,
    },
  };
}
export default SearchPage;
