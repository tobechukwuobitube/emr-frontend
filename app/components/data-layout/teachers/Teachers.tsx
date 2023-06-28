import React, { useEffect, useState } from "react";
import DataLayout from "../DataLayout";
import { getAllTeachers } from "./teachersService";
import { columns } from "./tableConfig";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  const getTeachers = () => {
    getAllTeachers().then((teachers) => {
      setTeachers(teachers);
    });
  };

  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <div>
      <DataLayout owner="Teachers" dataSource={teachers} columns={columns} />
    </div>
  );
};

export default Teachers;
