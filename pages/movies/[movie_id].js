import axios from "axios";
import MovieHeader from "../../components/Movies/MovieHeader";
import Videos from "../../components/Movies/Videos";

const SingleMoviePage = (props) => {
  return (
    <>
      <MovieHeader data={props.movie} casts={props.casts} />
      <Videos data={props.videos} />
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const [movie, casts, videos] = await Promise.all([
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
      axios.get(
        `${process.env.API_URI}/movie/${context.query.movie_id}/videos`,
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
        videos: videos.data,
      }, // will be passed to the page component as props
    };
  } catch (error) {}
}

export default SingleMoviePage;
