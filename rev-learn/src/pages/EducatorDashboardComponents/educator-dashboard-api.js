import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

let token; // Declare token variable outside the block

const loggedInUserString = localStorage.getItem("loggedInUser");

if (loggedInUserString) {
  const loggedInUser = JSON.parse(loggedInUserString);
  token = loggedInUser.token; // Assign the token value

  console.log("Token: ", token);
} else {
  console.log("No loggedInUser found in localStorage");
}

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