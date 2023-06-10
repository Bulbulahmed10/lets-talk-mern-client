import React, { useState } from "react";
import useAxiosSecureRequest from "../../../hooks/useAxiosSecureRequest";
import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../hooks/useAuthContext";
import toast from "react-hot-toast";

const ManageClasses = () => {
  const { user } = useAuthContext();
  const [axiosSecureRequest] = useAxiosSecureRequest();
  const [loading, setLoading] = useState(false);
  const { data: allClasses = [], refetch } = useQuery({
    queryKey: ["allClasses", user?.email],
    queryFn: async () => {
      const response = await axiosSecureRequest("/admin/allClasses");
      return response.data;
    },
  });

  const approveStatusByColor = (approved_status) => {
    if (approved_status === "approved") {
      return "text-blue-500";
    } else if (approved_status === "pending") {
      return "text-yellow-500";
    } else {
      return "text-red-500";
    }
  };

  const updateStatus = ({ status, id }) => {
    if (user?.email) {
      setLoading(true);
      axiosSecureRequest
        .patch(`/admin/updateClass/`, { status, id })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            toast.success("Class status updated");
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err.message);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allClasses?.map((singleClass, index) => {
              const {
                approved_status,
                class_image,
                class_name,
                instructor_email,
                instructor_name,
                total_sets,
                price,
                _id,
              } = singleClass;

              return (
                <tr key={singleClass._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-2">
                      <div className="avatar">
                        <div className="mask mask-squircle w-10 h-10">
                          <img src={class_image} alt={class_name} />
                        </div>
                      </div>
                      <div className="text-sm">{class_name}</div>
                    </div>
                  </td>
                  <td> {instructor_name} </td>
                  <td>{instructor_email}</td>
                  <td>{total_sets}</td>
                  <td> {price} </td>
                  <td
                    className={`capitalize ${approveStatusByColor(
                      approved_status
                    )} font-Poppins font-bold`}>
                    {approved_status}
                  </td>
                  <th className="flex gap-2 flex-col">
                    <button
                      onClick={() => updateStatus({ status: "deny", id: _id })}
                      disabled={
                        approved_status === "deny" ||
                        approved_status === "approved" ||
                        loading
                      }
                      className="disabled: btn btn-ghost btn-xs btn-outline ">
                      Deny
                    </button>
                    <button
                      onClick={() =>
                        updateStatus({ status: "approved", id: _id })
                      }
                      disabled={
                        approved_status === "deny" ||
                        approved_status === "approved" ||
                        loading
                      }
                      className="btn btn-ghost btn-xs btn-outline">
                      Approve
                    </button>
                    <button className="btn btn-ghost btn-xs btn-outline ">
                      Send Feedback
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageClasses;
