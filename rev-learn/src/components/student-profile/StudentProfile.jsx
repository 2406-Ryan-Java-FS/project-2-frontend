import BasicTable from "./BasicTable";
import ResponsiveDrawer from "./ResponsiveDrawer";
import StudentAppBar from "./StudentAppBar";
import StudentCard from "./StudentCard";

export default function StudentProfile() {

    return (
        <>
            {<StudentAppBar />}
            {<StudentCard />}
            {<BasicTable />}

        </>
    );
}