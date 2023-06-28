// import fetch from "node-fetch";
import axios from "axios";
import { api } from "@/app/api";

import { StudentType } from "../types";

export const getAllStudents = async () => {
  const response = await axios.get(`${api}/students`);
  return await response?.data;
};

export const createStudent = async (data: StudentType) => {
  const response = await axios.post(`${api}/students`, {
    ...data,
  });

  return await response?.data;
};
