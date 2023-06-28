import { Button, Col, Row } from "antd";
import React from "react";
import DataLayout from "../DataLayout";
import { dataSource } from "./data";

const Teachers = () => {
  const columns = [
    {
      title: "National ID",
      dataIndex: "nationalId",
      key: "nationalId",
      width: "200",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
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
      title: "Teacher Number",
      dataIndex: "teacherNumber",
      key: "teacherNumber",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
  ];

  return (
    <div>
      <DataLayout owner="Teachers" dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Teachers;
