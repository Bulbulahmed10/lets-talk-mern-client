import React from "react";
import useAxiosSecureRequest from "../../../hooks/useAxiosSecureRequest";
import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../hooks/useAuthContext";
import moment from "moment";
const PaymentHistory = () => {
  const [axiosSecureRequest] = useAxiosSecureRequest();
  const { user } = useAuthContext();
  const { data: paymentHistoryData = [], refetch } = useQuery({
    queryKey: ["payment-history"],
    queryFn: async () => {
      const res = await axiosSecureRequest(
        `/payment-history?email=${user?.email}`
      );

      return res.data;
    },
  });
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
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistoryData?.map((singleHistoryData, index) => {
            console.log(singleHistoryData);
            const {
              className,
              date,
              orderStatus,
              price,
              quantity,
              transactionId,
            } = singleHistoryData;
            return (
              <tr key={singleHistoryData._id}>
                <th> {index + 1} </th>
                <td className="flex gap-[1px] ">
                  {className?.map((id) => (
                    <p> {id}, </p>
                  ))}
                </td>
                <td>{transactionId}</td>
                <td className="text-blue-500 font-bold">{quantity}</td>
                <td className="text-violet-500">{price}</td>
                <td>
                  <p className="text-[10px]">
                    {moment(date).format("MMMM Do YYYY, h:mm:ss a")}
                  </p>
                </td>
                <td className="capitalize text-blue-600">{orderStatus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
