import { useState, useEffect } from "react";

export function useSchedules() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("schedules")) || [];
    setSchedules(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("schedules", JSON.stringify(schedules));
  }, [schedules]);

  function addSchedule(item) {
    const newItem = { ...item, id: Date.now() };
    setSchedules([...schedules, newItem]);
  }

  function deleteSchedule(id) {
    setSchedules(schedules.filter((s) => s.id !== id));
  }

  return { schedules, addSchedule, deleteSchedule };
}
