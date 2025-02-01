import React, { useState } from "react";
import WorkoutWeekCard from "./WorkoutWeekCard";
import { format, addDays, startOfWeek, isBefore } from "date-fns";
import "../styles/Runner.css";

const RunnerDetails = ({
  selectedRunner,
  weeks,
  setWeeks,
  handleWorkoutRegistration,
  handleUpdateWorkout,
}) => {
  const [expandedWeeks, setExpandedWeeks] = useState([]);

  const getWeekDateRange = (startDate) => {
    const start = startOfWeek(startDate, { weekStartsOn: 1 });
    const end = addDays(start, 6);
    return `${format(start, "dd/MM/yyyy")} - ${format(end, "dd/MM/yyyy")}`;
  };

  const toggleWeekExpand = (weekNumber) => {
    setExpandedWeeks((prevExpandedWeeks) =>
      prevExpandedWeeks.includes(weekNumber)
        ? prevExpandedWeeks.filter((week) => week !== weekNumber)
        : [...prevExpandedWeeks, weekNumber]
    );
  };

  const startDate = new Date(2025, 0, 27);
  const endDate = new Date(2025, 5, 22);

  return (
    <div className="runner-details">
      <h3>Detalhes do Corredor</h3>
      <p>
        <strong>Nome:</strong> {selectedRunner.name || "Não informado"}
      </p>
      <p>
        <strong>Email:</strong> {selectedRunner.email}
      </p>
      <h4>Semanas de Treino:</h4>
      <h5>Obs: treinos sugeridos para os longões já estão cadastrados!</h5>
      <div className="training-weeks">
        {weeks.map((week, weekIndex) => {
          
          const weekStartDate = addDays(startDate, (week.week - 1) * 7);
          const weekDateRange = getWeekDateRange(weekStartDate);

          if (isBefore(weekStartDate, endDate)) {
            return (
              <div key={week.week} className="workout-week-card">
                <div className="week-header">
                  <div className="week-title">
                    <strong>Semana {week.week}</strong>
                    <span className="week-date-range">({weekDateRange})</span>
                  </div>
                  <button
                    onClick={() => toggleWeekExpand(week.week)}
                    className="expand-button"
                  >
                    {expandedWeeks.includes(week.week) ? "Fechar" : "Abrir"}
                  </button>
                </div>

                <div className="week-status">
                  {week.hasWorkout ? (
                    <p className="status-registered">Treino cadastrado</p>
                  ) : (
                    <p className="status-not-registered">Nenhum treino cadastrado</p>
                  )}
                </div>

                {expandedWeeks.includes(week.week) && (
                  <div className="week-workout">
                    <WorkoutWeekCard
                      week={week}
                      weekIndex={weekIndex}
                      weeks={weeks}
                      setWeeks={setWeeks}
                      selectedRunner={selectedRunner}
                      handleWorkoutRegistration={handleWorkoutRegistration}
                      handleUpdateWorkout={handleUpdateWorkout}
                    />
                  </div>
                )}
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default RunnerDetails;