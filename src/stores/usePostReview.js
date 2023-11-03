import { useMutation, useQueryClient } from "react-query";
import { postReviews } from "../api/review";

const usePostReview = () => {
  const queryClient = useQueryClient();
  const reviewMutation = useMutation(postReviews, {
    onSuccess: () => {
      queryClient.invalidateQueries("reviews");
      window.location.href = "/";
    },
    onError: (err) => {
      console.log("[DEBUG] review form error: " + err);
    },
  });

  const callback = (data) => {
    reviewMutation.mutate(data);
  };

  const refresh = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return { status: reviewMutation, callback, refresh };
};

export default usePostReview;
