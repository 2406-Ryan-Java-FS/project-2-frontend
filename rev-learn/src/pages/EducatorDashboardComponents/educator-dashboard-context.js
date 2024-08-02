import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getCoursesByEducatorIdApi,
  getLoggedInUserInformationApi,
} from "./educator-dashboard-api";

const EducatorDashboardContext = createContext();

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

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getLoggedInUserInformationApi();
        const { user, educator } = response.data;
        setUserData(user);
        if (user.role === "educator") {
          setEducatorData(educator);
          fetchCourses(user.userId);
        }
      } catch (error) {
        console.error("There was an error fetching the logged in user.", error);
      }
    };

    fetchUserData();
  }, []);

  const fetchCourses = async (educatorId) => {
    try {
      const response = await getCoursesByEducatorIdApi(educatorId);
      setState((prevState) => ({
        ...prevState,
        courses: response.data,
      }));
    } catch (error) {
      console.error("There was an error fetching the courses.", error);
    }
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
        userData,
        educatorData,
        fetchCourses,
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
