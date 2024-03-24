import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">LiteBank </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/view-all-customers">View All Customers</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/view-all-transation">View All transaction</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;