import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="hidden">
        <ul className="flex justify-end gap-8 py-4 px-8">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/personal-info">Personal-Info</Link>
          </li>
          {/* <li>
            <Link to="/image-section">Image Section</Link>
          </li>
          <li>
            <Link to="/input">Input</Link>
          </li>
          <li>
            <Link to="/pentagon">Pentagon</Link>
          </li>
          <li>
            <Link to="/secure">Secure</Link>
          </li> */}
          <li>
            <Link to="/all-components">All Components</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;