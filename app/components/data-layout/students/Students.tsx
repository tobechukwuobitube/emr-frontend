import { Button, Col, Row } from "antd";
import React from "react";
import DataLayout from "../DataLayout";
import { dataSource } from "./data";

const Students = () => {
  const columns = [
    {
      title: "National ID",
      dataIndex: "nationalId",
      key: "nationalId",
      width: "200",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
    },
    {
      title: "Student Number",
      dataIndex: "studentNumber",
      key: "studentNumber",
    },
  ];

  return (
    <div>
      <DataLayout owner="Students" dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Students;
