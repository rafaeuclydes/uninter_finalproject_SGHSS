export default function ScheduleCard({ schedule, onDelete }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{schedule.paciente}</h3>

      <p>
        <strong>Especialidade:</strong> {schedule.especialidade}
      </p>
      <p>
        <strong>Data:</strong> {schedule.data}
      </p>
      <p>
        <strong>Hora:</strong> {schedule.hora}
      </p>

      <button style={styles.delete} onClick={onDelete}>
        Excluir
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "#ffffff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    borderLeft: "6px solid #AEE8C5", // tom verde pastel
  },
  name: {
    margin: 0,
    color: "#003366",
  },
  delete: {
    marginTop: "10px",
    background: "#cc0000",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    alignSelf: "flex-start",
  },
};
