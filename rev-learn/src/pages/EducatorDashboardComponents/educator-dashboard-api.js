import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNzIyNTgwNzMyLCJleHAiOjE3MjI2MjM5MzJ9.vkVVlWf_g62HHeMZVj71c7MjbBlxBUNb9SvWDxUBRmr01XeJymMOo2RSs0mbezJwVtH4SISW8wofHcamDHc-nw";

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