import React from "react";
import Modal, { useModal } from "../../shared/Modal";
import EditTeacher from "./EditTeacher";

export type StudentInModalProps = {
  cancelShowModal?: () => void;
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => void;
  success: boolean;
  setSuccess: () => void;
};

const StudentInModal: React.FC<StudentInModalProps> = ({
  modalVisible,
  cancelShowModal,
  setModalVisible,
  setSuccess,
}) => {
  const { visible, setVisible, handleOk, handleCancel } = useModal({
    onModalClose: cancelShowModal,
  });

  return (
    <Modal
      title={"Add Teacher details"}
      visible={modalVisible}
      handleOk={handleOk}
      handleCancel={cancelShowModal}
      width={500}
    >
      <EditTeacher closeModal={setModalVisible} setSuccess={setSuccess} />
    </Modal>
  );
};

export default StudentInModal;
