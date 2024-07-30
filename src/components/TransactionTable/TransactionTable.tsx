"use client";

import { Table } from "antd";
import transationData from "../../data/transactionData.json";
import SearchButton from "../SearchButton/SearchButton";
import StatusBadage from "../StatusBadage/StatusBadage";
import { MdOutlineContentCopy } from "react-icons/md";
import { useState, useMemo } from "react";
import { toast } from "react-toastify";

const TransactionTable = () => {
  const [searchInputValue, setSearchInputValue] = useState({
    numberCart: "",
    trackId: "",
  });
  
  const columns = [
    {
      title: (
        <SearchButton
          value={searchInputValue.numberCart}
          onChange={(d) => {
            setSearchInputValue({ ...searchInputValue, numberCart: d });
          }}
          label="شماره کارت"
        />
      ),
      dataIndex: "cardNumber",
      key: "cardNumber",
    },
    {
      title: "تاریخ پرداخت",
      dataIndex: "paidAt",
      key: "paidAt",
    },
    {
      title: "مبلغ",
      dataIndex: "amount",
      key: "amount",
      render: (text: string) => (
        <div className="flex flex-row font-[500]">
          <div>ریال</div>
          {text.toLocaleString()}
        </div>
      ),
    },
    {
      title: "وضعیت تراکنش",
      dataIndex: "status",
      key: "status",
      render: (text: number) => <StatusBadage text={text} />,
    },

    {
      title: (
        <SearchButton
          value={searchInputValue.trackId}
          onChange={(e) => {
            setSearchInputValue({ ...searchInputValue, trackId: e });
          }}
          label="شماره تراکنش"
        />
      ),
      dataIndex: "trackId",
      key: "trackId",
      render: (text: string) => (
        <div
          className="flex gap-2 items-center"
          onClick={() => {
            navigator.clipboard
              .writeText(text)
              .then(() => {
                toast.success("با موفقیت کپی شد");
              })
              .catch(() => {
                toast.error("مشکلی پیش آمده دوباره تلاش کنید");
              });
          }}
        >
          <MdOutlineContentCopy className="fill-purlple-base" />
          {text}
        </div>
      ),
    },
  ];

  const filterdTransationData = useMemo(() => {
    return transationData.data.filter((i) => {
      if (
        searchInputValue.numberCart === "" &&
        searchInputValue.trackId === ""
      ) {
        return true;
      } else {
        if (
          i.trackId.toString().startsWith(searchInputValue.trackId) &&
          i.cardNumber.startsWith(searchInputValue.numberCart)
        ) {
          return true;
        } else {
          return false;
        }
      }
    });
  }, [searchInputValue]);

  return (
    <Table
      className="mx-10"
      dataSource={filterdTransationData}
      rowClassName={(record, index) =>
        index % 2 === 0 ? "bg-white-base" : "bg-gray-light"
      }
      direction="rtl"
      footer={() => (
        <div className="text-end font-[500]">
          تعداد نتایج {filterdTransationData.length}
        </div>
      )}
      pagination={false}
      columns={columns}
    />
  );
};

export default TransactionTable;
