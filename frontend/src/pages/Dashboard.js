import { jwtDecode } from "jwt-decode";
import Navbar from "../components/Navbar";

function Dashboard() {
  let user = null;

  try {
    const token = localStorage.getItem("access");

    if (token) {
      user = jwtDecode(token);
    }
  } catch (error) {
    console.log("Invalid token detected");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }

  return (
    <div>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <h1>Dashboard</h1>

        {user ? (
          <div>
            <p>
              <strong>Welcome:</strong> {user?.username || "User"}
            </p>

            <p>
              <strong>Role:</strong> {user?.role || "Unknown"}
            </p>
          </div>
        ) : (
          <p>No user data found. Please login again.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
