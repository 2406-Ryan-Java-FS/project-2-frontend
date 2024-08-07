import { useEffect, useState } from "react"
import EducatorDashboard from "../pages/EducatorDashboardComponents/educator-dashboard"
import UserCourseCatalog from "../pages/UserCourseCatalog/UserCourseCatalog"
import { EducatorDashboardProvider } from "../pages/EducatorDashboardComponents/educator-dashboard-context";

export default function HomeComponent() {

    const [role, setRole] = useState("");

    useEffect(() => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            const userObject = JSON.parse(loggedInUser);
            setRole(userObject.role);
        }
    }, []);

    return (
        <>
            {role && role === "educator" ?
                <EducatorDashboardProvider>
                    <EducatorDashboard />
                </EducatorDashboardProvider>
                :
                <UserCourseCatalog />
            }

        </>
    )
}