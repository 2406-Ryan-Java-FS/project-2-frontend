import React, { createContext, useContext, useState } from "react";
import {
  getCoursesByEducatorIdApi,
  getLoggedInUserInformationApi,
} from "./educator-dashboard-api";

export const EducatorDashboardContext = createContext();

export const EducatorDashboardProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [educatorData, setEducatorData] = useState(null);

  const [state, setState] = useState({
    newCourse: {
      courseId: "",
      educatorId: "",
      title: "",
      description: "",
      category: "",
      price: "",
      imgUrl: "",
      creationDate: "",
    },
    courses: [],
  });

  const getCoursesByEducatorId = (educatorId) => {
    getCoursesByEducatorIdApi(educatorId)
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          courses: response.data,
        }));
        console.log(response.data); // For testing if it successfully retrieved the data from the back end.
      })
      .catch((error) =>
        console.error("There was an error fetching the courses.", error)
      );
  };

  const getLoggedInUserInformation = () => {
    getLoggedInUserInformationApi()
      .then((response) => {
        const { user, educator } = response.data;
        setUserData(user);
        console.log("User Data:", user); // Print user data to console here
        if (user.role === "educator") {
          setEducatorData(educator);
        }
        console.log("Educator Data:", educator);
      })
      .catch((error) =>
        console.error("There was an error fetching the logged in user.", error)
      );
  };

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
    ...prevState,
    newCourse: {
        ...prevState.newCourse,
        [name]: value,
    },
    }));
};


  return (
    <EducatorDashboardContext.Provider
      value={{
        state,
        setState,
        getCoursesByEducatorId,
        userData, // Provide userData
        educatorData, // Provide educatorData
        getLoggedInUserInformation, // Provide the function to fetch user info
        handleInputChange,
      }}
    >
      {children}
    </EducatorDashboardContext.Provider>
  );
};

export const useEducatorDashboardContext = () => {
  return useContext(EducatorDashboardContext);
};
