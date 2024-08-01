import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNzIyNTM2NTY3LCJleHAiOjE3MjI1Nzk3Njd9.z4273-TZBfdz9nWq-OPHgWWFMhbouXFXtxzVmdVeIpZRekeIKugFaBQEWor1qlCZVR1mFQZu44-_gCSLyuCS7Q";

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

export const createNewCourse = (newCourse) => {
    return axios.post(`${API_BASE_URL}/courses`, newCourse);
};

export const deleteCourse = (courseId) => {
    return axios.delete(`${API_BASE_URL}/courses/${courseId}`);
};
