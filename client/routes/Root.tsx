import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="min-h-screen bg-zinc-800 text-white">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
