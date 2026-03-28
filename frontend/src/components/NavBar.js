import { Link } from "react-router-dom";

function Navbar() {
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
      <Link to="/dashboard" style={{ marginRight: "10px", color: "#fff" }}>
        Dashboard
      </Link>

      <Link to="/appointments" style={{ marginRight: "10px", color: "#fff" }}>
        Appointments
      </Link>

      <Link to="/doctor" style={{ marginRight: "10px", color: "#fff" }}>
        Doctor Panel
      </Link>

      <Link to="/admin" style={{ marginRight: "10px", color: "#fff" }}>
        Admin
      </Link>

      <button onClick={logout} style={{ marginLeft: "20px" }}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
