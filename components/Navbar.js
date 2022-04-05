import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const onSearchHandler = (e) => {
    e.preventDefault();
    router.replace(`/search/${search}`);
  };
  return (
    <nav className="bg-black text-white shadow-xl">
      <div className="max-w-screen-xl m-auto flex  px-6 py-4 justify-between items-center">
        <h2 className="font-medium text-3xl">
          <Link href="/">
            <a>
              Movie<span className="text-red-900"> Jam</span>
            </a>
          </Link>
        </h2>
        <ul>
          <li>
            <form onSubmit={onSearchHandler}>
              <input
                className="text-black p-2"
                placeholder="Search Movie"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
