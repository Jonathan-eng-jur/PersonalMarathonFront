import { useState } from "react";
import { getWorkoutsForRunner } from "../services/api";
import { INITIAL_WEEKS } from "../utils/constants";

const useWorkouts = () => {
  const [weeks, setWeeks] = useState(INITIAL_WEEKS);

  const loadWorkouts = async (email) => {
    try {
      const response = await getWorkoutsForRunner(email);
      const workouts = response.data;
      setWeeks((prevWeeks) =>
        prevWeeks.map((week) => {
          const workout = workouts.find((w) => w.week === week.week);
          return {
            ...week,
            hasWorkout: !!workout,
            workout: workout ? workout.trainingWeek : {
              monday: "",
              tuesday: "",
              wednesday: "",
              thursday: "",
              friday: "",
              saturday: "",
              sunday: "",
            },
            longRunDistance: workout ? workout.longRunDistance : 0.0,
            longRunDurationMinutes: workout ? workout.longRunDurationMinutes : 0,
            longRunPace: workout ? workout.longRunPace : 0,
          };
        })
      );
    } catch (error) {
      console.error("Erro ao carregar treinos:", error);
    }
  };

  return { weeks, setWeeks, loadWorkouts };
};

export default useWorkouts;