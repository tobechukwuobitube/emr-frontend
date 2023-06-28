import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  DatePickerProps,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  message,
} from "antd";
import dayjs from "dayjs";
import { useForm } from "antd/es/form/Form";
import { StudentType, TeacherType } from "../types";
import { createStudent, getAllStudents } from "./studentsService";

export type EditStudentProps = {
  closeModal: (arg: boolean) => void;
  setSuccess: (arg: boolean) => void;
};

const EditStudent: React.FC<EditStudentProps> = ({
  closeModal,
  setSuccess,
}) => {
  const [form] = useForm();
  const [yearsDifference, setYearsDifference] = useState(0);
  const [lessThan21, setLessThan21] = useState(false);

  const minStudentAge = 22;
  const isLessThan21 = yearsDifference < minStudentAge;

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    const dateOfBirth = dayjs(date).format("YYYY-MM-DD");
    const yearsDiff = dayjs().diff(dateOfBirth, "years");
    setYearsDifference(dayjs().diff(dateOfBirth, "years"));

    if (yearsDiff < minStudentAge) {
      setLessThan21(true);
      message.error("You are less than 21 years");
    }
  };

  const onClose = () => {
    closeModal(false);
  };

  const onFinish = async (values: StudentType) => {
    const variables = {
      nationalId: Number(values.nationalId),
      name: values.name,
      surname: values.surname,
      dateOfBirth: dayjs(values?.dateOfBirth).format("YYYY-MM-DD"),
      studentNumber: Number(values.studentNumber),
    };

    createStudent(variables)
      .then((res) => {
        if (res.id) setSuccess(true);
        message.success("Your entry was successful");
        setSuccess(true);
        form.resetFields();
        onClose();
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  return (
    <Form layout="vertical" name="dynamic_rule" form={form} onFinish={onFinish}>
      <Form.Item
        label="National ID"
        name="nationalId"
        rules={[
          { required: true, message: "Please enter your National ID number!" },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Surname"
        name="surname"
        rules={[{ required: true, message: "Please enter your surname!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Date of Birth"
        name="dateOfBirth"
        rules={[
          {
            required: true,
            message: "Ensure you're not less than 21 years!",
          },
        ]}
      >
        <DatePicker style={{ width: "100%" }} onChange={onChange} />
      </Form.Item>
      <Form.Item
        label="Student Number"
        name="studentNumber"
        rules={[
          { required: true, message: "Please enter your student number!" },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Divider />
      <Row align="middle" justify="center" className="w-full">
        <Col span={12} className="text-center">
          <Button className="px-12" htmlType="submit">
            Submit
          </Button>
        </Col>
        <Col span={12} className="text-center">
          <Button className="px-12" onClick={onClose}>
            Cancel
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EditStudent;
