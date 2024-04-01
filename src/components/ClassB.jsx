import { Outlet } from "react-router-dom"


const ClassB = () => {
  return (
    <>
      <div className=" bg-middark">
        Text
      </div>
      <Outlet />
    </>
  )
}

export default ClassB