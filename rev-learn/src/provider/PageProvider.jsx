// import { createContext, useState } from "react";


// export const PageContext = createContext();

// export const PageProvider = ({ children }) => {
//     // const [courseId, setCourseId] = useState(!!localStorage.getItem("courseId"))
//     const [courseId, setCourseId] = useState(localStorage.getItem("courseId"))

//     const updateCourseId = (id) => {
//         setCourseId(id)
//         localStorage.setItem("courseId", id)
//     }

//     return (
//         <PageContext.Provider value={{ courseId, setCourseId: updateCourseId }}>
//             {children}
//         </PageContext.Provider>
//     )


// }