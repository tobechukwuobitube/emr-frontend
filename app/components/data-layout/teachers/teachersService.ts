import { api } from "@/app/api";
import { TeacherType } from "../types";

export const getAllTeachers = async () => {
  const response = await fetch(`${api}/teachers`);
  return await response.json();
};

export const createTeacher = async (data: TeacherType) => {
  console.log({ data });
  const response = await fetch("http://localhost:3001/teachers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Headers": "*",
    },
    body: JSON.stringify({ ...data }),
  });

  return await response.json();
};
