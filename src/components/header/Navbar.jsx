import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "../../public/robert.png",
};

const signUser = [
  {
    nom: "Profile",
    to: "/login",
  },
  {
    nom: "Sign up",
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {

  const login = (ev) => {
    ev.preventDefault();
    console.log("");
  }

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
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={user.imageUrl}
                    alt=""
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {signUser.map((item) => (
                    <Menu.Item key={item.nom}>
                      {({ active }) => (
                        <Link
                          to={item.to}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          {item.nom}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
