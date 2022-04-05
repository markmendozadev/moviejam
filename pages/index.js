import axios from "axios";
import Card from "../components/Card";
import React from "react";

export default function Home(props) {
  return (
    <div className="max-w-screen-xl m-auto ">
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
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const response = await axios.get(`${process.env.API_URI}/discover/movie`, {
      params: {
        api_key: process.env.API_KEY,
      },
    });

    return {
      props: {
        movies: response.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
