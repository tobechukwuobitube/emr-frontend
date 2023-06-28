import { Button, Col, Row, Table } from "antd";
import React, { useState } from "react";
import { AppProps } from "./types";
import EditTeacherInModal from "./teachers/EditTeacherInModal";
import EditStudentInModal from "./students/EditStudentInModal";

const DataLayout: React.FC<AppProps> = ({
  dataSource,
  columns,
  tabKey,
  success,
  setSuccess,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [studentModalVisible, setStudentModalVisible] = useState(false);

  const handleAddRecordButtonClick = () => {
    tabKey === "teachers"
      ? setModalVisible(true)
      : tabKey === "students"
      ? setStudentModalVisible(true)
      : null;
  };

  const cancelShowModal = () => {
    setModalVisible(false);
    setStudentModalVisible(false);
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
      <EditTeacherInModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        success={success}
        setSuccess={setSuccess}
        cancelShowModal={cancelShowModal}
      />
      <EditStudentInModal
        studentModalVisible={studentModalVisible}
        setStudentModalVisible={setStudentModalVisible}
        success={success}
        setSuccess={setSuccess}
        cancelShowModal={cancelShowModal}
      />
    </div>
  );
};

export default DataLayout;
