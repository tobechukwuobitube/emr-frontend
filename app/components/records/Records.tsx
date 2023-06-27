import React from "react";
import { RecordsContainer } from "./styles";
import { Button, Col, Row, Typography } from "antd";

const { Title } = Typography;

const Records = () => {
  return (
    <RecordsContainer>
      <Row align="middle" justify="center">
        <Col>
          <Title>Records</Title>
          <Button>Add a Record</Button>
        </Col>
      </Row>
    </RecordsContainer>
  );
};

export default Records;
