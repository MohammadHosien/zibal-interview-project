import { FaCircle } from "react-icons/fa"

const StatusBadage=({text}:{text:number})=>{
    return (    <div className="flex items-baseline gap-2 text-gray-dark">
        {text === 1 ? (
          <>
            <div className="font-[500]"> پرداخت موفق </div>
            <FaCircle size={10} className="fill-success-base" />
          </>
        ) : (
          <>
            <div className="font-[500]">خطا</div>
            <FaCircle size={10} className="fill-error-base" />
          </>
        )}
      </div>)
}

export default StatusBadage