import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import { usePatients } from "../hooks/usePatients";
import { useState } from "react";

export default function NewPatient() {
  const navigate = useNavigate();
  const { addPatient } = usePatients();

  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    idade: "",
    telefone: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addPatient(form);
    navigate("/patients");
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Novo Paciente</h1>

        <form onSubmit={handleSubmit} style={{ marginTop: "25px" }}>
          <Input label="Nome" name="nome" onChange={handleChange} required />
          <Input label="CPF" name="cpf" onChange={handleChange} required />
          <Input label="Idade" name="idade" onChange={handleChange} required />
          <Input
            label="Telefone"
            name="telefone"
            onChange={handleChange}
            required
          />

          <button style={btn}>Salvar</button>
        </form>
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
  marginTop: "10px",
};
