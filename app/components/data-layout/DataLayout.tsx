import { Button, Col, Row, Table } from "antd";
import React from "react";

type TeachersColumnsType = {
  nationalId: number;
  title: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  teacherNumber: number;
  salary: number;
};

type StudentsColumnsType = {
  nationalId: number;
  title: string;
  name: string;
  surname: string;
  dateOfBirth: string;
  teacherNumber: number;
  salary: number;
};

type AppProps = {
  owner: string;
  dataSource: Array<{}>;
  columns: Array<{}>;
};

const DataLayout: React.FC<AppProps> = ({ owner, dataSource, columns }) => {
  return (
    <div>
      <Row justify="end" className="w-full mb-8">
        <Col>
          <Button>Add a Record</Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>
    </div>
  );
};

export default DataLayout;
