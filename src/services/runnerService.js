import axios from "axios";
import { apiConstants } from "../utils/apiConstants";

const api = axios.create({
  baseURL: apiConstants.BASE_URL,
});

export const getRunners = () => api.get(apiConstants.URI_ALL_RUNNERS);

export const getRunnerByEmail = (email) => api.get(apiConstants.URI_RUNNER_BY_EMAIL + `${email}`);

export const createOrUpdateRunner = (runner) => api.post(apiConstants.URI_CREATE_OR_UPDATE_RUNNER, runner);

export const getWorkoutsForRunner = (email) => api.get(apiConstants.URI_WORKOUT_FOR_RUNNER + `${email}`);