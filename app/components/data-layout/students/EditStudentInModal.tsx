import React, { useEffect } from "react";
import Modal, { useModal } from "../../shared/Modal";
import EditStudent from "./EditStudent";

export type EditStudentInModalProps = {
  cancelShowModal?: () => void;
  studentModalVisible: boolean;
  setStudentModalVisible: (arg: boolean) => void;
  success: boolean;
  setSuccess: (args: boolean) => void;
};

const EditStudentInModal: React.FC<EditStudentInModalProps> = ({
  studentModalVisible,
  cancelShowModal,
  setStudentModalVisible,
  success,
  setSuccess,
}) => {
  useEffect(() => {
    setSuccess(false);
  }, []);

  const { visible, setVisible, handleOk, handleCancel } = useModal({
    onModalClose: cancelShowModal,
  });

  return (
    <Modal
      title={"Add Student details"}
      visible={studentModalVisible}
      handleOk={handleOk}
      handleCancel={cancelShowModal}
      width={500}
    >
      <EditStudent
        closeModal={setStudentModalVisible}
        setSuccess={setSuccess}
      />
    </Modal>
  );
};

export default EditStudentInModal;
