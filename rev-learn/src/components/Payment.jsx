import { useEffect } from "react"
import UnpaidTable from "./payment/unpaidTable"
import MakePayment from "./payment/makePayment"
import SideBar from "../pages/individual-course-student/course-side-bar"
export default function Payment() {

    return (<>

        {<SideBar />}
        
        <center>
            <UnpaidTable />

            <hr style={{ marginLeft: "8px", marginRight: "8px" }} />

            <MakePayment />
        </center>
    </>)
}