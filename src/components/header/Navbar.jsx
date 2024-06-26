import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const user = {
  name: "Robert",
  email: "robert@example.com",
  imageUrl: "../../public/robert.png",
};

const navigation = [
  { name: "Home", to: "/" },
  { name: "Scool", to: "/scool" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const signUser = [
  {
    nom: "Profile",
    to: "/profile",
  },
  {
    nom: "Log out",
    to: "/login",
  },
  {
    nom: "Settings",
    to: "/settings",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-bleue">
          {({ open }) => (
            <>
              <div className=" md:px-10 ">
                <div className="flex items-center justify-between gap-2 md:px-10 px-9">
                  <div className="flex justify-start items-center gap-20">
                    <div className=" flex-shrink-0 p-3">
                      <Link to={"/"}>
                        <img
                          src="../../public/vite.svg"
                          alt=""
                          className="w-8 h-8"
                        />
                      </Link>
                    </div>

                    <div className=" hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.to}
                            className={({ isActive }) =>
                              classNames(
                                isActive
                                  ? " text-white text-xl font-bold border-white border-b-8"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "p-6 text-xl font-bold text-purple"
                              )
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className=" bg-dark p-6 text-dark font-bold text-2xl hidden md:block">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm ring-2 ring-bleue ring-offset-2 ring-offset-gray-800 focus:outline-none focus:ring-2 focus:ring-bleue focus:ring-offset-2 focus:ring-offset-gray-800">
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
                                    active ? "bg-grayClaire" : "",
                                    "block px-4 py-2 text-sm text-dark hover:text-slate-700"
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

                  <div className="-mr-2 flex md:hidden p-3">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-purple p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <div></div>

              <Disclosure.Panel className={" md:hidden"}>
                <div className="space-y-1 px-10 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        classNames(
                          isActive
                            ? "bg-[#3e4781dd] text-white"
                            : "text-purple hover:bg-[#3e4781dd] hover:text-white",
                          "block rounded-md px-3 py-2 text-lg font-medium"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center px-10">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-lg font-bold leading-none text-white pb-2">
                        {user.name}
                      </div>
                      <div className="text-base font-medium leading-none text-gray">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {signUser.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        to={item.to}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
};

export default Navbar;
