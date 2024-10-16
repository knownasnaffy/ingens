import { useRouteError } from "react-router-dom";

const RootErrorBoundary = () => {
  const error = useRouteError() as { status: number };
  return (
    <>
      <div className="min-h-screen bg-zinc-800 text-white flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl font-bold">{error.status}</h1>
        <p className="text-lg">
          Oops! Looks like something malfunctioned. <br />
          Feel free to research that error code on your own.
        </p>
      </div>
    </>
  );
};

export default RootErrorBoundary;
