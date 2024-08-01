import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNzIyNDkxNjg4LCJleHAiOjE3MjI1MzQ4ODh9.kvxEyt6T9QlqDYlybx1NtMPaC7trdD-r0_ONRVItvS3dqn9aPGISlam1CXfn7v0jWSLTWlT6QwCr316TaVeEBg";

export const getCoursesByEducatorIdApi = (educatorId) => {
  return axios.get(`${API_BASE_URL}/courses/educators/${educatorId}`);
};

export const getLoggedInUserInformationApi = () => {
  return axios.get(`${API_BASE_URL}/users`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
};
