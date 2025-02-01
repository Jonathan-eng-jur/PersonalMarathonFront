import React from "react";
import "../styles/WorkoutWeekCard.css";

const WorkoutWeekCard = ({
  week = {},
  weekIndex,
  weeks,
  setWeeks,
  selectedRunner,
  handleWorkoutRegistration,
  handleUpdateWorkout,
}) => {

  const daysOfWeek = {
    monday: "Segunda-feira",
    tuesday: "Terça-feira",
    wednesday: "Quarta-feira",
    thursday: "Quinta-feira",
    friday: "Sexta-feira",
    saturday: "Sábado",
    sunday: "Domingo",
  };

  const workoutData = {
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
    ...(week.workout || {}),
  };

  const handleChange = (e, day) => {
    const updatedWeeks = [...weeks];
    if (!updatedWeeks[weekIndex].workout) {
      updatedWeeks[weekIndex].workout = {}; 
    }
    updatedWeeks[weekIndex].workout[day] = e.target.value; 
    setWeeks(updatedWeeks); 
  };

  const handleLongRunChange = (e, field) => {
    const updatedWeeks = [...weeks];
    updatedWeeks[weekIndex][field] = e.target.value;
    setWeeks(updatedWeeks);
  };

  return (
    <div className="workout-week-card-content">
      {Object.entries(workoutData).map(([day, value]) => {
        if (daysOfWeek[day]) {
          return (
            <div key={day} className="workout-field">
              <label>{daysOfWeek[day]}:</label>
              <input
                type="text"
                value={value || ""}
                onChange={(e) => handleChange(e, day)}
                className="workout-input"
              />
            </div>
          );
        }
        return null;
      })}

      <div className="workout-field">
        <label>Distância do Longão (km):</label>
        <input
          type="number"
          placeholder="Ex: 15"
          value={week.longRunDistance || ""}
          onChange={(e) => handleLongRunChange(e, "longRunDistance")}
          className="workout-input"
        />
      </div>

      <div className="workout-field">
        <label>Duração do Longão (hh:mm:ss):</label>
        <input
          type="time"
          step="1"
          value={week.longRunDurationMinutes || ""}
          onChange={(e) => handleLongRunChange(e, "longRunDurationMinutes")}
          className="workout-input"
        />
      </div>

      <div className="workout-field">
        <label>Pace Longão (calculado automaticamente):</label>
        <input
          type="text"
          placeholder="Calculado após inserir KM, Duração e Atualizar."
          value={week.longRunPace || ""}
          readOnly
          className="workout-input"
        />
      </div>

      <button
        onClick={() =>
          week.hasWorkout
            ? handleUpdateWorkout(week)
            : handleWorkoutRegistration(week)
        }
        className={`button ${week.hasWorkout ? "workout-update-button" : "workout-register-button"
          }`}
      >
        {week.hasWorkout ? "Atualizar Treino" : "Registrar Treino"}
      </button>
    </div>
  );
};

export default WorkoutWeekCard;