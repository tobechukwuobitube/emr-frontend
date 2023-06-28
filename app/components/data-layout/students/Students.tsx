import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import DataLayout from "../DataLayout";
import { dataSource } from "./data";
import { StudentAppProps } from "../types";
import { columns } from "./tableConfig";
import { getAllStudents } from "./studentsService";

const Students: React.FC<StudentAppProps> = ({
  tabKey,
  success,
  setSuccess,
}) => {
  const [students, setStudents] = useState<Array<{}>>([{}]);

  const getStudents = () => {
    getAllStudents().then((students) => setStudents(students));
  };

  useEffect(() => {
    getStudents();
  }, []);

  useEffect(() => {
    getStudents();
  }, [success]);
  return (
    <div>
      <DataLayout
        owner="Students"
        dataSource={students}
        columns={columns}
        tabKey={tabKey}
        success={success}
        setSuccess={setSuccess}
      />
    </div>
  );
};

export default Students;
