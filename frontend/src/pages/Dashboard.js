import { jwtDecode } from "jwt-decode";   // ✅ FIXED
import Navbar from "../components/Navbar"; // make sure this exists

function Dashboard() {
  const token = localStorage.getItem("access");
  const user = token ? jwtDecode(token) : null;  // ✅ FIXED

  return (
    <div>
      <Navbar />

      <h1>Dashboard</h1>

      {user && (
        <div>
          <p>Welcome: {user.username}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
