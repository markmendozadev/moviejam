import axios from "axios";
import MovieHeader from "../../components/Movies/MovieHeader";

const SingleMoviePage = (props) => {
  console.log(props.casts);
  return (
    <>
      <MovieHeader data={props.movie} />
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const [movie, casts] = await Promise.all([
      axios.get(`${process.env.API_URI}/movie/${context.query.movie_id}`, {
        params: {
          api_key: process.env.API_KEY,
        },
      }),
      axios.get(
        `${process.env.API_URI}/movie/${context.query.movie_id}/credits`,
        {
          params: {
            api_key: process.env.API_KEY,
          },
        }
      ),
    ]);

    return {
      props: {
        movie: movie.data,
        casts: casts.data,
      }, // will be passed to the page component as props
    };
  } catch (error) {}
}

export default SingleMoviePage;
