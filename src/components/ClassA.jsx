import { Outlet } from "react-router-dom"


const ClassA = () => {
  return (
    <>
      <div className=" bg-dark p-3">
        <h2 className=" font-pacifico text-purple text-2xl">Sous route</h2>
      </div>

      <Outlet />
    </>
  )
}

export default ClassA