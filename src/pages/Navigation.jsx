import { Link, Navigate, Outlet } from "react-router-dom";

const Naviagtion = () => {
  return (
    <>
      <Link to="/home">Home</Link>
      <Outlet />
    </>
  );
};

export default Naviagtion;
