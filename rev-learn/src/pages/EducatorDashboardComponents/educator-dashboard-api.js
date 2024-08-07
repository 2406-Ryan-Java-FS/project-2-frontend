import axios from "axios";
import uac from "../../controllers/userAccountController";

const API_BASE_URL = "http://ec2-100-26-249-35.compute-1.amazonaws.com:8080";

// Get courses by educator ID
export const getCoursesByEducatorIdApi = (educatorId) => {
  return axios.get(`${API_BASE_URL}/courses/educators/${educatorId}`, {
    headers: {
      Authorization:uac.getLoggedInUser().token,
    },
  });
};

// Get logged-in user information
export const getLoggedInUserInformationApi = () => {
  return axios.get(`${API_BASE_URL}/users`, {
    headers: {
      Authorization:uac.getLoggedInUser().token,
    },
  });
};

// Create a new course
export const createNewCourse = (newCourse) => {

  return axios.post(`${API_BASE_URL}/courses`, newCourse, {
    headers: {
      Authorization:uac.getLoggedInUser().token,
    },
  });
};

// Delete a course by ID
export const deleteCourse = (courseId) => {
  return axios.delete(`${API_BASE_URL}/courses/${courseId}`, {
    headers: {
      Authorization:uac.getLoggedInUser().token,
    },
  });
};

// Update a course by ID
export const updateCourse = (courseId, updatedCourse) => {
  return axios.patch(`${API_BASE_URL}/courses/${courseId}`, updatedCourse, {
    headers: {
      Authorization:uac.getLoggedInUser().token,
    },
  });
};