import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosSecureRequest from "./useAxiosSecureRequest";

const useAdmin = () => {
  const { user, loading } = useAuthContext();
  const [axiosSecureRequest] = useAxiosSecureRequest();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled:
      !loading &&
      !!user?.email &&
      !!localStorage.getItem("lets-talk-auth-access-token"),
    queryFn: async () => {
      const response = await axiosSecureRequest(`/users/admin/${user?.email}`);
      return response.data.isAdmin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
