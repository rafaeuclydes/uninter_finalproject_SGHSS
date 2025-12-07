import { useState, useEffect } from "react";

export function usePatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(data);
  }, []);

  const addPatient = (patient) => {
    const updated = [...patients, patient];
    setPatients(updated);
    localStorage.setItem("patients", JSON.stringify(updated));
  };

  const deletePatient = (cpf) => {
    const updated = patients.filter((p) => p.cpf !== cpf);
    setPatients(updated);
    localStorage.setItem("patients", JSON.stringify(updated));
  };

  return { patients, addPatient, deletePatient };
}
