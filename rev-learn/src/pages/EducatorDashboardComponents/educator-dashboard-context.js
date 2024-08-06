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
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getLoggedInUserInformationApi();
        if (response.data.user === undefined) {
          setUserData(response.data);
        } else {
          var data = response.data;
          var user = data.user;
          var educator = data.educator;
          setUserData(user);
        }
        
        if (user && user.role === "educator") {
          setEducatorData(educator || {}); // Default to an empty object if educator is undefined
          await fetchCourses(user.userId); // Wait for courses to be fetched
        }
      } catch (error) {
        console.error("There was an error fetching the logged in user.", error);
      } finally {
        setLoading(false); // Set loading to false when done
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
        loading, // Pass the loading state
      }}
    >
      {children}
    </EducatorDashboardContext.Provider>
  );
};

export const useEducatorDashboardContext = () => {
  return useContext(EducatorDashboardContext);
};
