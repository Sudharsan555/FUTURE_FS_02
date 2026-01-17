import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="app-container">
      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>Lead CRM</h2>

        <NavLink to="/" end>
          Dashboard
        </NavLink>

        <NavLink to="/leads">
          Leads
        </NavLink>

        <NavLink to="/settings">
          Settings
        </NavLink>
      </div>

      {/* MAIN CONTENT (THIS WAS MISSING ❌) */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
