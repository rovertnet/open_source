import React from "react";

const PageCompoonent = ({ title, button = "", children }) => {
  return (
    <>
      <header className="bg-dark p-3 shadow-md">
        <div className="flex justify-between items-center mx-auto max-w-7xl py-4 px-7">
          <h1 className=" text-2xl font-bold tracking-tight text-white">
            {" "}
            {title}{" "}
          </h1>
          {button}
        </div>
      </header>
      <main>
        <div className="">{children}</div>
      </main>
    </>
  );
};

export default PageCompoonent;
