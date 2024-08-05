import { Box, Button } from "@mui/material";
import StudentAppBar from "./StudentAppBar";
import StudentCard from "./StudentCard";
import { useState } from "react";
import BasicTable from "./BasicTable";
import { Typography } from "@mui/material";
import SideBar from "../../pages/individual-course-student/course-side-bar";

export default function StudentProfile() {

    const [cardState, setCardState] = useState(false);
    const [tableState, setTableState] = useState(false);



    return (
        <>

            {/* {< StudentAppBar />} */}
            <SideBar />

           
            <Box>
                <Button variant='contained' onClick={() => { setCardState(true) }}>
                    Populate Card
                </Button>
                <Button variant='contained' onClick={() => { setTableState(true) }}>
                    Populate Table
                </Button>
            </Box >
            <Box>

                <Button variant='outlined' onClick={() => {
                    setCardState(false);
                    setTableState(false);
                }}>
                    Clear Page
                </Button>
            </Box>

            {cardState ? <StudentCard /> : null}
            {tableState ? <BasicTable /> : null}

        </>
    );
}