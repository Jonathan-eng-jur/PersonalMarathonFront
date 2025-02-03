import axios from "axios";
import { apiConstants } from "../utils/apiConstants";

const api = axios.create({
  baseURL: apiConstants.BASE_URL,
});

export const createWorkout = (email, workout) => {
  const payload = {
    week: workout.week,
    trainingWeek: workout.trainingWeek,
  };

  return api.post(apiConstants.URI_CREATE_OR_UPDATE_WORKOUT + `${email}`, payload);
};

export const updateWorkout = (email, workoutId, distance, duration) =>
  api.put(apiConstants.URI_CREATE_OR_UPDATE_WORKOUT +  + `${email}/${workoutId}`, null, {
    params: { distance, duration },
  });
