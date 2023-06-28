import React, { useEffect, useState } from "react";
import DataLayout from "../DataLayout";
import { getAllTeachers } from "./teachersService";
import { columns } from "./tableConfig";
import { TeacherAppProps } from "../types";

const Teachers: React.FC<TeacherAppProps> = ({
  tabKey,
  success,
  setSuccess,
}) => {
  const [teachers, setTeachers] = useState<Array<{}>>([{}]);

  const getTeachers = () => {
    getAllTeachers().then((teachers) => setTeachers(teachers));
  };

  useEffect(() => {
    getTeachers();
  }, []);

  useEffect(() => {
    getTeachers();
  }, [success]);

  return (
    <div>
      <DataLayout
        owner="Teachers"
        dataSource={teachers}
        columns={columns}
        tabKey={tabKey}
        success={success}
        setSuccess={setSuccess}
      />
    </div>
  );
};

export default Teachers;
