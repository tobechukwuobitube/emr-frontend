import { Button, Col, Row, Table } from "antd";
import React, { useState } from "react";
import { AppProps } from "./types";
import TeacherInModal from "./teachers/TeacherInModal";

const DataLayout: React.FC<AppProps> = ({
  dataSource,
  columns,
  tabKey,
  success,
  setSuccess,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddRecordButtonClick = () => {
    tabKey === "teachers" ? setModalVisible(true) : null;
  };

  const cancelShowModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <Row justify="end" className="w-full mb-8">
        <Col>
          <Button onClick={() => handleAddRecordButtonClick()}>
            Add a Record
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table dataSource={dataSource} columns={columns} />
        </Col>
      </Row>

      <TeacherInModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        success={success}
        setSuccess={setSuccess}
        cancelShowModal={cancelShowModal}
      />
    </div>
  );
};

export default DataLayout;
