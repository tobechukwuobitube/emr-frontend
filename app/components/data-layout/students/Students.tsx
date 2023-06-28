import { Button, Col, Row } from "antd";
import React from "react";
import DataLayout from "../DataLayout";
import { dataSource } from "./data";
import { StudentAppProps } from "../types";
import { columns } from "./tableConfig";

const Students: React.FC<StudentAppProps> = ({
  tabKey,
  success,
  setSuccess,
}) => {
  return (
    <div>
      <DataLayout
        owner="Students"
        dataSource={dataSource}
        columns={columns}
        tabKey={tabKey}
        success={success}
        setSuccess={setSuccess}
      />
    </div>
  );
};

export default Students;
