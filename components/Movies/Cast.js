import Image from "next/image";
import React from "react";
import default_img from "../../assets/default_img.png";
const myLoader = ({ src, width, quality }) => {
  return `${process.env.API_IMG_URI}${src}`;
};

const Cast = (props) => {
  return (
    <div className="mt-5 rounded ">
      <div className="w-48 h-42">
        <Image
          loader={myLoader}
          src={`${
            props.cast.profile_path
              ? `${props.cast.profile_path}`
              : `${default_img.src}`
          }`}
          alt={props.cast.name}
          width="100%"
          height="100%"
          layout="responsive"
          className="rounded"
        />
      </div>
      <h6 className="text-center font-bold text-xl">{props.cast.name}</h6>
    </div>
  );
};

export default Cast;
