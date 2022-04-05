import Image from "next/image";
const MovieHeader = (props) => {
  return (
    <header
      className="bg-no-repeat w-contain bg-opacity-1"
      style={{
        backgroundImage: `url(${process.env.API_IMG_URI_1920}${props.data.backdrop_path})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div
        className="w-full"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(18 18 18) 150px, rgb(34 34 34 / 84%) 100%)",
        }}
      >
        <div className="max-w-screen-xl m-auto flex gap-8 p-12 ">
          <div className="w-full">
            <Image
              src={`${process.env.API_IMG_URI}${props.data.poster_path}`}
              layout="responsive"
              height="100%"
              width="100%"
              alt={props.name}
            />
          </div>
          <div className="text-white my-auto">
            <h2 className="font-bold text-5xl">
              {props.data.title}
              <span className="text-gray-400">
                ({props.data.release_date.split("-")[0]})
              </span>
            </h2>
            <div className="py-2">
              {props.data.genres.map((genre) => genre.name).join(",")}
            </div>
            <h4 className="font-bold text-2xl mt-4">Overview:</h4>
            <p className="text-xl">{props.data.overview}</p>
            <div className="mt-4">
              <span>
                Language Spoken:{" "}
                <span className="font-bold">
                  {props.data.spoken_languages
                    .map((language) => language.english_name)
                    .join(",")}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MovieHeader;
