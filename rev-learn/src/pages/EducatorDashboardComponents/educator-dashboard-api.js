import axios from "axios";
import uac from "../../controllers/userAccountController";

const API_BASE_URL = "http://localhost:8080";

/*
  Commented out because this global scope code is only 
  checking for token when the app first starts.
  We need it to check storage after sign in has happened.
*/
// let token; // Declare token variable outside the block

// const loggedInUserString = localStorage.getItem("loggedInUser");
// console.log(`loggedInUserString=${loggedInUserString}`)

// if (loggedInUserString) {
//   const loggedInUser = JSON.parse(loggedInUserString);
//   token = loggedInUser.token; // Assign the token value

//   console.log("Token: ", token);
// } else {
//   console.log("No loggedInUser found in localStorage");
// }

export const getCoursesByEducatorIdApi = (educatorId) => {
  return axios.get(`${API_BASE_URL}/courses/educators/${educatorId}`);
};

export const getLoggedInUserInformationApi = () => {
  return axios.get(`${API_BASE_URL}/users`, {
    headers: {
      Authorization:uac.getLoggedInUser().token,
    },
  });
};

export const createNewCourse = (newCourse) => {
  return axios.post(`${API_BASE_URL}/courses`, newCourse, {
    headers: {
      Authorization:uac.getLoggedInUser().token,
    },
  });
};

export const deleteCourse = (courseId) => {
  return axios.delete(`${API_BASE_URL}/courses/${courseId}`, {
    headers: {
      Authorization:uac.getLoggedInUser().token,
    },
  });
};

export const updateCourse = (courseId, newCourse) => {
  return axios.patch(`${API_BASE_URL}/courses/${courseId}`, newCourse, {
    headers: {
      Authorization:uac.getLoggedInUser().token,
    },
  });
};