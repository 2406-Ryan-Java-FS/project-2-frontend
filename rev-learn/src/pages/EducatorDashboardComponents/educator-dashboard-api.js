// import axios from "axios";

// const API_BASE_URL = "http://localhost:8080";

// let token; // Declare token variable outside the block

// const loggedInUserString = localStorage.getItem("loggedInUser");

// if (loggedInUserString) {
//   const loggedInUser = JSON.parse(loggedInUserString);
//   token = loggedInUser.token; // Assign the token value

//   console.log("Token: ", token);
// } else {
//   console.log("No loggedInUser found in localStorage");
// }

// export const getCoursesByEducatorIdApi = (educatorId) => {
//   return axios.get(`${API_BASE_URL}/courses/educators/${educatorId}`);
// };

// export const getLoggedInUserInformationApi = () => {
//   return axios.get(`${API_BASE_URL}/users`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const createNewCourse = (newCourse) => {
//   return axios.post(`${API_BASE_URL}/courses`, newCourse, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const deleteCourse = (courseId) => {
//   return axios.delete(`${API_BASE_URL}/courses/${courseId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const updateCourse = (courseId, newCourse) => {
//   return axios.patch(`${API_BASE_URL}/courses/${courseId}`, newCourse, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };
import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const getToken = () => {
  const loggedInUserString = localStorage.getItem("loggedInUser");
  if (loggedInUserString) {
    const loggedInUser = JSON.parse(loggedInUserString);
    return loggedInUser.token; // Return the token
  }
  return null;
};

// Get courses by educator ID
export const getCoursesByEducatorIdApi = (educatorId) => {
  const token = getToken();
  return axios.get(`${API_BASE_URL}/courses/educators/${educatorId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Get logged-in user information
export const getLoggedInUserInformationApi = () => {
  const token = getToken();
  return axios.get(`${API_BASE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Create a new course
export const createNewCourse = (newCourse) => {
  const token = getToken();
  return axios.post(`${API_BASE_URL}/courses`, newCourse, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Delete a course by ID
export const deleteCourse = (courseId) => {
  const token = getToken();
  return axios.delete(`${API_BASE_URL}/courses/${courseId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Update a course by ID
export const updateCourse = (courseId, updatedCourse) => {
  const token = getToken();
  return axios.patch(`${API_BASE_URL}/courses/${courseId}`, updatedCourse, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};