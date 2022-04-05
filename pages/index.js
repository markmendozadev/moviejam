import axios from "axios";
import Card from "../components/Card";
import Router from "next/router";
import React from "react";
import { motion } from "framer-motion";

export default function Home(props) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  if (loading) {
    return <div className="m-auto text-center">Loading..</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-screen-xl m-auto "
    >
      <h2 className="p-6 pb-0 text-2xl font-bold text-black">
        Discover New Movies
      </h2>
      <section className="grid grid-cols-4 gap-6 p-6">
        {props.movies.results.map((movie) => (
          <Card
            key={movie.id}
            name={movie.original_title}
            poster={movie.poster_path}
            link={movie.id}
          />
        ))}
      </section>
      <h2 className="p-6 pb-0 text-2xl font-bold text-black">
        Discover New Series
      </h2>
      <section className="grid grid-cols-4 gap-6 p-6">
        {props.tv_series.results.map((series) => (
          <Card
            key={series.id}
            name={series.original_name}
            poster={series.poster_path}
          />
        ))}
      </section>
    </motion.div>
  );
}

export async function getStaticProps(context) {
  try {
    const [movies, series] = await Promise.all([
      axios.get(`${process.env.API_URI}/discover/movie`, {
        params: {
          api_key: process.env.API_KEY,
        },
      }),
      axios.get(`${process.env.API_URI}/discover/tv`, {
        params: {
          api_key: process.env.API_KEY,
        },
      }),
    ]);
    return {
      props: {
        movies: movies.data,
        tv_series: series.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
