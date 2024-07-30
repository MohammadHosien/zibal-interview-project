"use client";
import SettelementForm from "@/components/SettelementFrom.tsx/SettlementForm";
import { Button, Divider, Modal } from "antd";
import { useState } from "react";

const PartTwo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModalHandler = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="text-center mt-10">
      <Button onClick={showModalHandler} type="primary">
        تسویه حساب
      </Button>
      <Modal
        className="top-0"
        title={
          <>
            <div className="flex gap-4 items-baseline">
              <span className="font-[500] ">تسویه کیف پول</span>
              {"  "}
              <span className="text-gray-dark text-[12px]">اصلی زیب</span>
            </div>
            <Divider />
          </>
        }
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <SettelementForm setIsModalOpen={setIsModalOpen} />
      </Modal>
    </div>
  );
};

export default PartTwo;
