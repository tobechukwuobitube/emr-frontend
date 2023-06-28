// import fetch from "node-fetch";
import axios from "axios";
import { api } from "@/app/api";

import { TeacherType } from "../types";

export const getAllTeachers = async () => {
  const response = await axios.get(`${api}/teachers`);
  return await response?.data;
};

export const createTeacher = async (data: TeacherType) => {
  const response = await axios.post(`${api}/teachers`, {
    ...data,
  });

  return await response?.data;
};
