import React, { useEffect } from "react";
import Modal, { useModal } from "../../shared/Modal";
import EditTeacher from "./EditTeacher";

export type EditTeacherInModalProps = {
  cancelShowModal?: () => void;
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => void;
  success: boolean;
  setSuccess: (args: boolean) => void;
};

const EditTeacherInModal: React.FC<EditTeacherInModalProps> = ({
  modalVisible,
  cancelShowModal,
  setModalVisible,
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

export default EditTeacherInModal;
