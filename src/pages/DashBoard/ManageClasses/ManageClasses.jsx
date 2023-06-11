import React, { useState, useRef } from "react";
import useAxiosSecureRequest from "../../../hooks/useAxiosSecureRequest";
import { useQuery } from "@tanstack/react-query";
import useAuthContext from "../../../hooks/useAuthContext";
import toast from "react-hot-toast";

const ManageClasses = () => {
  const { user } = useAuthContext();
  const [axiosSecureRequest] = useAxiosSecureRequest();
  const [loading, setLoading] = useState(false);
  const modalRef = useRef(null);
  const feedbackTestRef = useRef(null);
  const [feedbackClassId, setFeedbackClassId] = useState("");
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
          setLoading(false);
        });
    }
  };

  const openModal = (id) => {
    if (modalRef.current) {
      modalRef.current.showModal();
      setFeedbackClassId(id);
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleSentFeedback = () => {
    let feedbackValue = feedbackTestRef.current.value;
    if (user?.email && feedbackTestRef.current.value) {
      setLoading(true);
      axiosSecureRequest
        .patch(`/admin/updateClassFeedback`, { feedbackClassId, feedbackValue })
        .then((res) => {
          if (res.data.modifiedCount > 0) {
            toast.success("Feedback Sent Successful");
            feedbackTestRef.current.value = "";
            refetch();
            closeModal();
            setLoading(false);
          }
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
              <th>Sent Feedback</th>
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
                feedback,
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
                    className={`font-Poppins font-semibold ${
                      feedback ? "text-blue-500" : "text-yellow-500"
                    }`}>
                    {" "}
                    {feedback ? "True" : "False"}{" "}
                  </td>
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

                    <div>
                      <button
                        className="btn btn-ghost btn-xs btn-outline"
                        onClick={() => openModal(_id)}>
                        Send Feedback
                      </button>

                      <dialog ref={modalRef} className="modal">
                        <form method="dialog" className="modal-box w-full">
                          <p className="py-4">
                            <textarea
                              ref={feedbackTestRef}
                              className="textarea resize-none textarea-info w-full "
                              placeholder="Send class feedback to instructor why you denied or approve"
                              rows={3}></textarea>
                          </p>
                          <p
                            disabled={loading}
                            onClick={() => handleSentFeedback(_id)}
                            className="btn btn-outline">
                            Send Feedback
                          </p>
                          <div className="modal-action">
                            <button
                              disabled={loading}
                              className="btn"
                              onClick={() => closeModal(_id)}>
                              Close
                            </button>
                          </div>
                        </form>
                      </dialog>
                    </div>
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
