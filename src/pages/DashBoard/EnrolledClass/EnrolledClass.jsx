import moment from "moment";
import usePayment from "../../../hooks/usePayment";
import LoadingAnimation from "../../../shared/LoadingAnimation/LoadingAnimation";

const EnrolledClass = () => {
  const [paymentHistoryData, isLoading] = usePayment();
  {
    isLoading && <LoadingAnimation />;
  }
  return (
    <div className="overflow-x-auto w-full px-8">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Enroll Date</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistoryData?.map((classItem, index) => {
            console.log(classItem);
            return (
              <tr key={classItem._id}>
                <td> {index + 1} </td>
                <td>
                  {classItem.className?.map((classData) => (
                    <p key={classItem._id}>{classData}</p>
                  ))}
                </td>
                <td>
                  {classItem.instructor_name?.map((instructorData) => (
                    <p key={classItem._id}>{instructorData}</p>
                  ))}
                </td>
                <td>
                  {moment(classItem.date).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledClass;
