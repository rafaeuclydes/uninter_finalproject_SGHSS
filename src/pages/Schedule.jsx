import Navbar from "../components/Navbar";
import Input from "../components/Input";
import { useState } from "react";
import { useSchedules } from "../hooks/useSchedules";
import ScheduleCard from "../components/ScheduleCard";

export default function Schedule() {
  const { schedules, addSchedule, deleteSchedule } = useSchedules();

  const [form, setForm] = useState({
    paciente: "",
    especialidade: "",
    data: "",
    hora: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addSchedule(form);
    alert("Consulta agendada com sucesso!");
    setForm({ paciente: "", especialidade: "", data: "", hora: "" });
  }

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Agendar Consulta</h1>

        <form onSubmit={handleSubmit} style={{ marginTop: "25px" }}>
          <Input
            label="Nome do Paciente"
            name="paciente"
            value={form.paciente}
            onChange={handleChange}
          />
          <Input
            label="Especialidade"
            name="especialidade"
            value={form.especialidade}
            onChange={handleChange}
          />
          <Input
            label="Data"
            type="date"
            name="data"
            value={form.data}
            onChange={handleChange}
          />
          <Input
            label="Hora"
            type="time"
            name="hora"
            value={form.hora}
            onChange={handleChange}
          />

          <button
            style={{
              background: "#28a745",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          >
            Agendar
          </button>
        </form>

        <h2 style={{ marginTop: "40px" }}>Consultas Agendadas</h2>

        {schedules.length === 0 ? (
          <p style={{ marginTop: "10px" }}>Nenhum agendamento encontrado.</p>
        ) : (
          <div style={styles.list}>
            {schedules.map((item) => (
              <ScheduleCard
                key={item.id}
                schedule={item}
                onDelete={() => deleteSchedule(item.id)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
};
