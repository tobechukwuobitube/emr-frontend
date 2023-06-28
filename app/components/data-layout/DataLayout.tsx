import { Button, Col, Row, Table } from "antd";
import React from "react";
import { AppProps } from "./types";

const DataLayout: React.FC<AppProps> = ({ dataSource, columns }) => {
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
