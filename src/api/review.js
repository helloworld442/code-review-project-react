import api from "./instance";

const getReviews = async () => {
  const response = await api.get("/reviews");
  return response.data;
};

const getReviewById = async (req) => {
  const response = await api.get("/reviews/" + req);
  return response.data;
};

const postReviews = async (req) => {
  const response = await api.post("/reviews", req);
  return response.data;
};

export { getReviews, getReviewById, postReviews };
