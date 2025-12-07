import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { usePatients } from "../hooks/usePatients";
import PatientCard from "../components/PatientCard";

export default function Patients() {
  const { patients, deletePatient } = usePatients();

  return (
    <>
      <Navbar />
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Pacientes</h1>
          <Link to="/patients/new">
            <button style={btn}>Novo Paciente</button>
          </Link>
        </div>

        {patients.length === 0 && (
          <p style={{ marginTop: "25px" }}>Nenhum paciente cadastrado.</p>
        )}

        {patients.map((p, index) => (
          <PatientCard key={index} patient={p} onDelete={deletePatient} />
        ))}
      </div>
    </>
  );
}

const btn = {
  background: "#0066cc",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "8px",
};
