import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Appointments() {
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const bookAppointment = async () => {
    await API.post("appointments/", {
      date,
      reason,
    });

    alert("Appointment booked successfully");
  };

  return (
    <div>
      <Navbar />

      <h2>Book Appointment</h2>

      <input type="date" onChange={(e) => setDate(e.target.value)} />

      <input
        placeholder="Reason"
        onChange={(e) => setReason(e.target.value)}
      />

      <button onClick={bookAppointment}>Submit</button>
    </div>
  );
}

export default Appointments;
