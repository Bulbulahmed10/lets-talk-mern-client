import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosSecureRequest from "./useAxiosSecureRequest";

const useInstructor = () => {
  const { user, loading } = useAuthContext();
  const [axiosSecureRequest] = useAxiosSecureRequest();

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled:
      !loading &&
      !!user?.email &&
      !!localStorage.getItem("lets-talk-auth-access-token"),
    queryFn: async () => {
      const response = await axiosSecureRequest(
        `/users/instructor/${user?.email}`
      );
      return response.data.isInstructor;
    },
  });

  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
