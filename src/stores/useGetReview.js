import { useQuery } from "react-query";
import { getReviewById, getReviews } from "../api/review";

const useGetReviews = ({ node }) => {
  const { isLoading, isError, data } = useQuery(["reviews", node], getReviews, {
    staleTime: 10 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  });

  return { isLoading, isError, data };
};

const useGetReview = ({ globalId }) => {
  const { isLoading, isError, data } = useQuery(
    ["review", globalId],
    () => getReviewById(globalId),
    {
      staleTime: 10 * 60 * 1000,
      cacheTime: 60 * 60 * 1000,
    }
  );

  return { isLoading, isError, data };
};

export { useGetReviews, useGetReview };
