import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import useAxiosSecureRequest from "./useAxiosSecureRequest";

const usePayment = () => {
  const [axiosSecureRequest] = useAxiosSecureRequest();
  const { user } = useAuthContext();
  const { data: paymentHistoryData = [], isLoading } = useQuery({
    queryKey: ["payment-history"],
    queryFn: async () => {
      const res = await axiosSecureRequest(
        `/payment-history?email=${user?.email}`
      );
      return res.data;
    },
  });

  return [paymentHistoryData, isLoading];
};

export default usePayment
