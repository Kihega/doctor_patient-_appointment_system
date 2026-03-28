import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function DoctorPanel() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    API.get("appointments/")
      .then((res) => setAppointments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />

      <h2>Doctor Panel</h2>

      {appointments.map((a, index) => (
        <div key={index}>
          <p>Date: {a.date}</p>
          <p>Reason: {a.reason}</p>
        </div>
      ))}
    </div>
  );
}

export default DoctorPanel;
