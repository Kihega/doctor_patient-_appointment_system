import { Link } from "react-router-dom";

function Navbar() {
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  return (
    <nav style={{ padding: "10px", background: "#333", color: "white" }}>
      <Link to="/dashboard" style={{ marginRight: "10px", color: "white" }}>
        Dashboard
      </Link>

      <Link to="/appointments" style={{ marginRight: "10px", color: "white" }}>
        Appointments
      </Link>

      <Link to="/doctor" style={{ marginRight: "10px", color: "white" }}>
        Doctor Panel
      </Link>

      <Link to="/admin" style={{ marginRight: "10px", color: "white" }}>
        Admin
      </Link>

      <button onClick={logout} style={{ marginLeft: "20px" }}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
