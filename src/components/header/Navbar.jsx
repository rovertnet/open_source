import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "../../public/robert.png",
};

const navigation = [
  { name: "Home", to: "/" },
  { name: "Scool", to: "/scool"},
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
]

const signUser = [
  {
    nom: "Profile",
    to: "/profile",
  },
  {
    nom: "Log out",
    to: "/login",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <>
      <div className=" md:px-10 px-5 bg-bleue">
        <div className="flex items-center justify-between gap-2 md:px-10 px-9">
          <div className="flex justify-start items-center gap-20">
            <img src="../../public/vite.svg" alt="" className="w-8 h-8" />
            <div className="flex gap-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
          <button className=" bg-purple p-4 text-dark font-bold text-2xl">
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-bleue focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-10 w-10 rounded-full"
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
                            active ? "bg-gray-500" : "",
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
