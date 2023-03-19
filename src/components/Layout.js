import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="container border rounded d-flex justify-content-evenly shadow p-3 mb-5 bg-white rounded">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login/Register</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;