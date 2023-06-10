import React from "react";
import useAxiosSecureRequest from "../../../hooks/useAxiosSecureRequest";
import useAuthContext from "../../../hooks/useAuthContext";
import { useQuery } from "@tanstack/react-query";

const MyClass = () => {
  const { user } = useAuthContext();
  const [axiosSecureRequest] = useAxiosSecureRequest();
  const url = `/instructor/myClass/${user?.email}`;
  const { data: myClassData = [], isLoading } = useQuery({
    queryKey: ["myClass", user?.email],
    queryFn: async () => {
      const response = await axiosSecureRequest(url);
      return response.data;
    },
  });

  return (
    <>
      <div className="text-xl font-Poppins text-violet-500 font-semibold mb-4">
        My Classes
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Class Code</th>
              <th>Course Time</th>
              <th>Enrolled Student</th>
              <th>Price</th>
              <th>Total Sets</th>
              <th>Feedback</th>
              <th>Approve Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClassData?.map((singleClassData, index) => {
              const {
                approved_status,
                _id,
                class_code,
                class_name,
                course_time,
                enrolledStudentsId,
                feedback,
                price,
                total_sets,
              } = singleClassData;
              return (
                <tr key={_id}>
                  <th>{index + 1}</th>
                  <td>{class_name}</td>
                  <td>{class_code}</td>
                  <td>{course_time} Week</td>
                  <td>
                    <span className="font-Poppins text-blue-500 mr-1">
                      {enrolledStudentsId.length}
                    </span>
                    Students
                  </td>
                  <td> ${price} </td>
                  <td>{total_sets} </td>
                  <td> {feedback} </td>
                  <td className="capitalize font-Poppins font-semibold text-blue-500">
                    {approved_status}
                  </td>
                  <td>
                    <button className="btn btn-xs font-Poppins">Update</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClass;
