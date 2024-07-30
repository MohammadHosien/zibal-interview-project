"use client";

import {
  Button,
  Divider,
  Form,
  FormProps,
  Input,
  Radio,
  TreeSelect,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { toast } from "react-toastify";

type FieldType = {
  destination: string;
  amount: string;
  explaination: string;
};

const SettelementForm = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (modal: boolean) => void;
}) => {
  const numberExample = 150000;

  const onFinishHandler: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    setIsModalOpen(false);
    toast.success("با موفقیت ثبت شد");
  };

  const onFinishFailedHandler: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      onFinish={onFinishHandler}
      layout="vertical"
      onFinishFailed={onFinishFailedHandler}
      name="basic"
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <p>موجودی فعلی:</p>
      <h1 className="text-[20px] text-purlple-base mt-5">
        {numberExample.toLocaleString()}ریال
      </h1>
      <Divider />
      <Radio.Group buttonStyle="solid">
        <Radio.Button className="!rounded-none" value="small">
          به حساب
        </Radio.Button>
        <Radio.Button className="!rounded-none" value="default">
          به کیف پول
        </Radio.Button>
      </Radio.Group>
      <Form.Item<FieldType>
        className="mt-3"
        label="مقصد تسویه"
        name="destination"
        rules={[{ required: true, message: "لطفا مقصد تسویه را وارد کنید" }]}
      >
        <TreeSelect
          size="large"
          rootClassName="!rounded-none"
          treeData={[
            { id: 1, pId: 0, value: "1", title: "Expand to load" },
            { id: 2, pId: 0, value: "2", title: "Expand to load" },
            { id: 3, pId: 0, value: "3", title: "Tree Node", isLeaf: true },
          ]}
        />
      </Form.Item>
      <Form.Item<FieldType>
        label="مبلغ تسویه"
        name="amount"
        rules={[{ required: true, message: "لطفا مبلغ تسویه را وارد کنید" }]}
      >
        <Input size="large" className="!rounded-none" />
      </Form.Item>
      <Form.Item<FieldType>
        label="توضیحات (بابت)"
        name="explaination"
        rules={[{ required: true, message: "لطفا مقصد تسویه را وارد کنید" }]}
      >
        <TextArea size="large" className="!rounded-none" />
      </Form.Item>
      <Divider />
      <Form.Item>
        <div className="flex gap-3 justify-end ">
          <Button type="default" onClick={()=>{setIsModalOpen(false)}}>انصراف</Button>
          <Button type="primary" htmlType="submit">
            ثبت در خواست تسویه
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default SettelementForm;
