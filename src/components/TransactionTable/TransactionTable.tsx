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
          className="inline-flex items-center flex-row-reverse gap-2"
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
    {
      title: "وضعیت تراکنش",
      dataIndex: "status",
      key: "status",
      render: (text: number) => <StatusBadage text={text} />,
    },
    {
      title: "مبلغ",
      dataIndex: "amount",
      key: "amount",
      render: (text: string) => (
        <div className="inline-flex flex-row">
          <div className="font-[500]">{text.toLocaleString()}</div>
          <div>ریال</div>
        </div>
      ),
    },
    {
      title: "تاریخ پرداخت",
      dataIndex: "paidAt",
      key: "paidAt",
    },
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
      render: (text: string) => <div className="ltr">{text}</div>,
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
      footer={() => (
        <div className="font-[500] px-6">
          تعداد نتایج {filterdTransationData.length}
        </div>
      )}
      pagination={false}
      columns={columns}
    />
  );
};

export default TransactionTable;
