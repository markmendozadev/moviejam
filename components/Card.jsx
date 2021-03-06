import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
  return `https://image.tmdb.org/t/p/w500${src}`;
};

const Card = (props) => {
  return (
    <Link href={`/movies/${props.link}`} passHref>
      <div className="flex flex-col rounded overflow-hidden shadow-md relative bg-gray-900 hover:scale-105 transition ease-in-out cursor-pointer">
        <div className="w-full">
          <Image
            loader={myLoader}
            src={props.poster}
            layout="responsive"
            height="100%"
            width="100%"
            alt={props.name}
          />
        </div>
        <div className="py-3 px-2">
          <p className="text-left text-white text-sm font-xs">{props.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
