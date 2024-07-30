import { FaCircle } from "react-icons/fa";

const StatusBadage = ({ text }: { text: number }) => {
  return (
    <div className="inline-flex items-baseline gap-2 text-gray-dark">
      {text === 1 ? (
        <>
          <FaCircle size={10} className="fill-success-base" />
          <div className="font-[500]"> پرداخت موفق </div>
        </>
      ) : (
        <>
          <FaCircle size={10} className="fill-error-base" />
          <div className="font-[500]">خطا</div>
        </>
      )}
    </div>
  );
};

export default StatusBadage;
