import { Route, Routes } from "react-router-dom";
import Root from "./Root";
import RootErrorBoundary from "./RootErrorBoundary";
import Index from "./Index";
import Login from "./Login";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<Root />} errorElement={<RootErrorBoundary />} path="/">
          <Route index element={<Index />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
