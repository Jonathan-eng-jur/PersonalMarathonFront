import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getRunners = () => api.get("/runner/all");
export const getRunnerByEmail = (email) => api.get(`/runner/get/${email}`);
export const createOrUpdateRunner = (runner) => api.post("/runner", runner);

export const getWorkoutsForRunner = (email) => api.get(`/workout/runner/${email}`);

export const createWorkout = (email, workout) => {
  const payload = {
    week: workout.week,
    trainingWeek: workout.trainingWeek,
  };

  return api.post(`/workout/${email}`, payload);
};

export const updateWorkout = (email, workoutId, distance, duration) =>
  api.put(`/workout/${email}/${workoutId}`, null, {
    params: { distance, duration },
  });
