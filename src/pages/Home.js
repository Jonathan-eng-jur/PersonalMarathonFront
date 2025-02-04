import React, { useState } from "react";
import CountdownDisplay from "../components/CountdownDisplay";
import RegisterForm from "../components/RegisterForm";
import RunnerDetails from "../components/RunnerDetails";
import useWorkouts from "../hooks/useWorkouts";
import { createOrUpdateRunner, getRunnerByEmail } from "../services/runnerService";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "../styles/Home.css";
import { apiConstants } from "../utils/apiConstants";
import { DEFAULT_WORKOUTS } from "../utils/constants";

const Home = () => {
  const [selectedRunner, setSelectedRunner] = useState(null);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const { weeks, setWeeks, loadWorkouts } = useWorkouts();

  const title = "PERSONAL MARATHON";

  const handleSearch = async () => {
    if (!email) return setError("Por favor, insira um e-mail.");
    setError("");

    try {
      const response = await getRunnerByEmail(email);
      setSelectedRunner(response.data);
      await loadWorkouts(response.data.email);
    } catch (error) {
      setError("Usuário não encontrado.");
    }
  };

  const createDefaultWorkouts = async (email) => {
    try {
      await Promise.all(
        DEFAULT_WORKOUTS.map((treino) => {
          const url = apiConstants.BASE_URL + apiConstants.URI_CREATE_OR_UPDATE_WORKOUT + `${email}`;
          return fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(treino),
          }).then((response) => {
            if (!response.ok) {
              throw new Error("Erro ao cadastrar treino padrão.");
            }
          });
        })
      );
      console.log("Treinos padrão cadastrados com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar treinos padrão:", error);
    }
  };

  const handleRegister = async (newRunner) => {
    try {
      const response = await createOrUpdateRunner(newRunner);
      setSelectedRunner(response.data);
      await createDefaultWorkouts(response.data.email);
      await loadWorkouts(response.data.email);
      setShowRegisterForm(false);
      setError("");
    } catch (error) {
      setError("Erro ao cadastrar o usuário.");
    }
  };

  const handleWorkoutRegistration = async (week) => {
    if (selectedRunner && week) {
      const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = week.workout;
      const trainingWeek = { monday, tuesday, wednesday, thursday, friday, saturday, sunday };

      const url = apiConstants.BASE_URL + apiConstants.URI_CREATE_OR_UPDATE_WORKOUT + `${selectedRunner.email}`;

      let longRunDurationFormatted = "00:00:00";

      if (week.longRunDurationMinutes) {
        const [hours, minutes, seconds] = week.longRunDurationMinutes.split(':').map(Number);

        if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
          const hoursFormatted = hours.toString().padStart(2, '0');
          const minutesFormatted = minutes.toString().padStart(2, '0');
          const secondsFormatted = seconds.toString().padStart(2, '0');

          longRunDurationFormatted = `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`;
        }
      }

      const body = {
        week: week.week,
        trainingWeek,
        longRunDistance: week.longRunDistance,
        longRunDurationMinutes: longRunDurationFormatted,
      };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (response.ok) {
          alert("Treino cadastrado com sucesso!");
          setWeeks((prevWeeks) =>
            prevWeeks.map((w) =>
              w.week === week.week
                ? { ...w, hasWorkout: true, workout: trainingWeek }
                : w
            )
          );
        } else {
          throw new Error("Erro ao cadastrar o treino.");
        }
      } catch (error) {
        console.error("Erro ao cadastrar o treino:", error);
        alert("Erro ao cadastrar o treino.");
      }
    }
  };

  const handleUpdateWorkout = async (week) => {
    if (selectedRunner && week) {
      const { longRunDistance, longRunDurationMinutes, workout } = week;
  
      const url = apiConstants.BASE_URL + apiConstants.URI_CREATE_OR_UPDATE_WORKOUT + `${selectedRunner.email}/${week.week}?distance=${longRunDistance}&duration=${longRunDurationMinutes}`;
  
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(workout),
        });
  
        if (response.ok) {
          const data = await response.json();
          alert("Treino atualizado com sucesso!");
  
          setWeeks((prevWeeks) =>
            prevWeeks.map((w) =>
              w.week === week.week
                ? {
                    ...w,
                    longRunDistance: week.longRunDistance,
                    longRunDurationMinutes: week.longRunDurationMinutes,
                    longRunPace: data.longRunPace,
                    workout: data.workout || w.workout,
                  }
                : w
            )
          );
        } else {
          throw new Error("Erro ao atualizar o treino.");
        }
      } catch (error) {
        console.error("Erro ao atualizar o treino:", error);
        alert("Erro ao atualizar o treino.");
      }
    }
  };

  return (
    <div className="container">
      <Header />
      <main className="main-content">
        <h1 className="title">{title}</h1>
        {error && <p className="error">{error}</p>}

        {!selectedRunner && !showRegisterForm && (
          <div className="countdown-container">

            <CountdownDisplay />
          </div>
        )}

        {!selectedRunner && !showRegisterForm && (
          <div className="search-container">
            <h2>Buscar Treinos</h2>
            <input
              type="email"
              placeholder="Digite o e-mail do corredor"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
            <button onClick={handleSearch} className="button">
              Buscar
            </button>
          </div>
        )}

        {!selectedRunner && !showRegisterForm && (
          <div className="register-button">
            <button onClick={() => setShowRegisterForm(true)} className="button">
              Cadastrar
            </button>
          </div>
        )}

        {showRegisterForm && (
          <RegisterForm
            onSubmit={handleRegister}
            onCancel={() => setShowRegisterForm(false)}
          />
        )}

        {selectedRunner && (
          <RunnerDetails
            selectedRunner={selectedRunner}
            weeks={weeks}
            setWeeks={setWeeks}
            handleWorkoutRegistration={handleWorkoutRegistration}
            handleUpdateWorkout={handleUpdateWorkout}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Home;