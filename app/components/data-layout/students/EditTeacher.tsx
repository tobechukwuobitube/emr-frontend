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
import { TeacherType } from "../types";
import { createTeacher, getAllTeachers } from "./teachersService";

export type EditTeacherProps = {
  closeModal: (arg: boolean) => void;
  setSuccess: (arg: boolean) => void;
};

const EditTeacher: React.FC<EditTeacherProps> = ({
  closeModal,
  setSuccess,
}) => {
  const [form] = useForm();
  const [yearsDifference, setYearsDifference] = useState(0);
  const [lessThan21, setLessThan21] = useState(false);

  const minTeacherAge = 21;
  const isLessThan21 = yearsDifference < minTeacherAge;

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    const dateOfBirth = dayjs(date).format("YYYY-MM-DD");
    const yearsDiff = dayjs().diff(dateOfBirth, "years");
    setYearsDifference(dayjs().diff(dateOfBirth, "years"));

    if (yearsDiff < minTeacherAge) {
      setLessThan21(true);
      message.error("You are less than 21 years");
    }
  };

  const onClose = () => {
    closeModal(false);
  };

  const onFinish = async (values: TeacherType) => {
    const variables = {
      nationalId: Number(values.nationalId),
      title: values.title,
      name: values.name,
      surname: values.surname,
      dateOfBirth: dayjs(values?.dateOfBirth).format("YYYY-MM-DD"),
      teacherNumber: Number(values.teacherNumber),
      salary: Number(values.salary),
    };

    createTeacher(variables)
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
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please select a title!" }]}
      >
        <Input />
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
        label="Teacher Number"
        name="teacherNumber"
        rules={[
          { required: true, message: "Please enter your teacher number!" },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item label="Salary (optional)" name="salary">
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

export default EditTeacher;
