import { fetchData } from "./api";

export const getPatients = () => fetchData("patients");