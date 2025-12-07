export default function PatientCard({ patient, onDelete }) {
  return (
    <div style={styles.card}>
      <div>
        <h3 style={styles.p}>{patient.nome}</h3>
        <p style={styles.p}>
          <strong>CPF:</strong> {patient.cpf}
        </p>
        <p style={styles.p}>
          <strong>Idade:</strong> {patient.idade}
        </p>
        <p style={styles.p}>
          <strong>Telefone:</strong> {patient.telefone}
        </p>
      </div>

      <button style={styles.delete} onClick={() => onDelete(patient.cpf)}>
        Excluir
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "#ffffffff",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "10px",
    boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
    display: "flex",
    gap: "20px",
    marginTop: "25px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  p: {
    margin: "10px",
  },
  delete: {
    background: "#cc0000",
    color: "white",
    padding: "8px 15px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
