import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosSecureRequest from "./useAxiosSecureRequest";

const useCart = () => {
  const { user, loading } = useAuthContext();
  const [axiosSecureRequest] = useAxiosSecureRequest();

  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading && !!user?.email && !! localStorage.getItem("lets-talk-auth-access-token"),
    queryFn: async () => {
      const res = await axiosSecureRequest(`/carts?email=${user?.email}`);
      return res.data;
    },
  });

  return [carts, refetch];
};
export default useCart;
