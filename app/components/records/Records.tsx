import React from "react";
import { RecordsContainer } from "./styles";
import { Button, Col, Row, Typography, Tabs } from "antd";
import type { TabsProps } from "antd";
import Teachers from "../data-layout/teachers/Teachers";
import Students from "../data-layout/students/Students";

const { Title } = Typography;

const Records = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "teachers",
      label: `Teachers`,
      children: <Teachers />,
    },
    {
      key: "students",
      label: `Students`,
      children: <Students />,
    },
  ];
  return (
    <RecordsContainer>
      <Row align="middle" justify="center">
        <Col className="my-8">
          <Title>EMR Records</Title>
        </Col>
      </Row>
      <Row style={{ width: "80%", margin: "0 auto" }}>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          style={{ width: "100%", margin: "0 auto" }}
        />
      </Row>
    </RecordsContainer>
  );
};

export default Records;
