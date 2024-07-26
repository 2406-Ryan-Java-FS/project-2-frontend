import BasicTable from "./BasicTable";
import ResponsiveDrawer from "./ResponsiveDrawer";
import StudentAppBar from "./StudentAppBar";

export default function StudentProfile() {

    return (
        <>

<br />
      <br />
      <br />
            {<ResponsiveDrawer />}
            <br />
      <br />
      <br />
            {<StudentAppBar />}
            {<BasicTable />}
            

        </>
    );
}