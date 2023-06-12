import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuthContext from "../../../hooks/useAuthContext";
import useAxiosSecureRequest from "../../../hooks/useAxiosSecureRequest";
import LoadingAnimation from "../../../shared/LoadingAnimation/LoadingAnimation";
import Swal from "sweetalert2";
import useDarkTheme from "../../../hooks/useDarkTheme";
const ManageUsers = () => {
  const { user } = useAuthContext();
  const [axiosSecureRequest] = useAxiosSecureRequest();
  const {darkTheme} = useDarkTheme()
  const {
    data: allUsers = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allUsers", user?.email],
    queryFn: async () => {
      const response = await axiosSecureRequest("/admin/allUsers");
      return response.data;
    },
  });

  const userRole = (role) => {
    if (role === "admin") {
      return "text-violet-500";
    } else if (role === "instructor") {
      return "text-blue-500";
    } else {
      return "text-yellow-500";
    }
  };

  const handleUpdateUserRole = ({ updatedRole, email }) => {

    if (user?.email) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to update user role?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, update it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecureRequest
            .patch("/admin/updateUser", { role: updatedRole, email })
            .then((res) => {
              if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire("Updated!", "User role updated!", "success");
              }
            });
        }
      });
    }
  };

  return (
    <>
      <div className="overflow-x-auto w-full px-4">
        <table className="table">
          <thead>
            <tr className={`${darkTheme && "text-neutral-200"}`}>
              <th>#</th>
              <th>Name</th>
              <th>Email </th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          {isLoading && <LoadingAnimation />}
          <tbody className={`${darkTheme && "text-neutral-300"}`}>
            {allUsers?.map((singleUser, index) => {
              const { _id, email, name, profilePictureURL, role } = singleUser;
              return (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={profilePictureURL} alt={name} />
                        </div>
                      </div>

                      <div className="font-medium">{name}</div>
                    </div>
                  </td>
                  <td className="font-medium font-Poppins">{email}</td>
                  <td
                    className={`font-semibold font-Poppins capitalize ${userRole(
                      role
                    )}`}>
                    {role}
                  </td>
                  <th>
                    <button
                      onClick={() =>
                        handleUpdateUserRole({
                          updatedRole: "student",
                          email,
                        })
                      }
                      disabled={role === "student"}
                      className="btn btn-info btn-xs btn-outline mr-2">
                      Make Student
                    </button>
                    <button
                      onClick={() =>
                        handleUpdateUserRole({
                          updatedRole: "instructor",
                          email,
                        })
                      }
                      disabled={role === "instructor"}
                      className="btn btn-info btn-xs btn-outline ">
                      Make Instructor
                    </button>
                    <button
                      onClick={() =>
                        handleUpdateUserRole({ updatedRole: "admin", email })
                      }
                      disabled={role === "admin"}
                      className="btn btn-primary ml-2 btn-outline btn-xs">
                      Make Admin
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

export default ManageUsers;
