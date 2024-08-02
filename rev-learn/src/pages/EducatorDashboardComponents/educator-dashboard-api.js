import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNzIyNjA5NzA5LCJleHAiOjE3MjI2NTI5MDl9.STdiqArgqSRSQjVjg-qYj8Uuw6KGCogoJ709di8a5Yy_9IbKJ7S7Zx3h0by1d6KmYx8STIizAa2Ioq56yZXVjQ";
  
export const getCoursesByEducatorIdApi = (educatorId) => {
  return axios.get(`${API_BASE_URL}/courses/educators/${educatorId}`);
};

export const getLoggedInUserInformationApi = () => {
  return axios.get(`${API_BASE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createNewCourse = (newCourse) => {
  return axios.post(`${API_BASE_URL}/courses`, newCourse, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteCourse = (courseId) => {
  return axios.delete(`${API_BASE_URL}/courses/${courseId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateCourse = (courseId, newCourse) => {
  return axios.patch(`${API_BASE_URL}/courses/${courseId}`, newCourse, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};