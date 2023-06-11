import React from "react";
import moment from "moment";
import LoadingAnimation from "../../../shared/LoadingAnimation/LoadingAnimation";
import usePayment from "../../../hooks/usePayment";
const PaymentHistory = () => {
  const [paymentHistoryData, isLoading] = usePayment();
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>TransactionId</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <LoadingAnimation />
          ) : (
            <>
              {paymentHistoryData?.map((singleHistoryData, index) => {
          
                const { className, date, price, quantity, transactionId } =
                  singleHistoryData;
                return (
                  <tr key={singleHistoryData._id}>
                    <th> {index + 1} </th>
                    <td className="flex gap-[2px] ">
                      {className?.map((classData) => (
                        <p>
                          {" "}
                          {classData}
                          {className.length > 1 && ","}{" "}
                        </p>
                      ))}
                    </td>
                    <td>{transactionId}</td>
                    <td className="text-blue-500 font-bold">{quantity}</td>
                    <td className="text-violet-500">{price}</td>
                    <td>
                      <p className="text-[14px]">
                        {moment(date).format("MMMM Do YYYY, h:mm:ss a")}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
