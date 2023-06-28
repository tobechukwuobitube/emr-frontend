import { useState } from "react";
import { Modal as AntModal, Button } from "antd";

export const useModal = ({ onModalClose }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    onModalClose && onModalClose();
    setVisible(false);
  };

  return {
    loading,
    visible,
    setLoading,
    setVisible,
    showModal,
    handleOk,
    handleCancel,
  };
};

const Modal = ({
  title,
  visible,
  handleOk,
  handleCancel,
  width = 520,
  children,
}) => {
  return (
    <>
      <AntModal
        open={visible}
        title={title}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={width}
      >
        {children}
      </AntModal>
    </>
  );
};

export default Modal;
