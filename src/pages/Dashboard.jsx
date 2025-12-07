import Navbar from "../components/Navbar";
import { usePatients } from "../hooks/usePatients";
import { useSchedules } from "../hooks/useSchedules";

export default function Dashboard() {
  const { patients } = usePatients();
  const { schedules } = useSchedules();

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>Dashboard</h1>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Total de Pacientes</h3>
            <p style={styles.value}>{patients.length}</p>
          </div>

          <div style={styles.card}>
            <h3>Total de Agendamentos</h3>
            <p style={styles.value}>{schedules.length}</p>
          </div>

          <div style={styles.card}>
            <h3>Sistema</h3>
            <p style={styles.value}>VidaPlus Ativo</p>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  title: {
    marginBottom: "20px",
  },
  cards: {
    display: "flex",
    gap: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    flex: 1,
    boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
  },
  value: {
    fontSize: "32px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#003366",
  },
};
