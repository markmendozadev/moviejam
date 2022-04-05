import React from "react";
import Cast from "./Cast";

const Casts = (props) => {
  return (
    <>
      <h2 className="text-2xl font-bold mt-4">Casts</h2>
      <div className="md:grid md:grid-cols-3 xl:flex gap-2 ">
        {props.data.cast.slice(0, 5).map((cast) => (
          <Cast key={cast.id} cast={cast} />
        ))}
      </div>
    </>
  );
};

export default Casts;
