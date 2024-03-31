import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" md:px-10 px-5 bg-bleue">
        <div className="flex items-center justify-between gap-2 md:px-10 px-9">
          <div className="flex justify-start items-center gap-20">
            <img src="../../public/vite.svg" alt="" className="w-8 h-8" />
            <ul className="flex gap-6">
              <li className="text-xl font-bold text-purple font-pacifico">
                <Link to="/">Home</Link>
              </li>
              <li className="text-xl font-bold text-purple font-pacifico">
                <Link to="/scool">Scool</Link>
              </li>
              <li className="text-xl font-bold text-purple font-pacifico">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <button className=" bg-purple p-4 text-dark font-bold text-2xl">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
