import { Box, Button } from "@mui/material";
import StudentAppBar from "./StudentAppBar";
import StudentCard from "./StudentCard";
import { useState } from "react";
import BasicTable from "./BasicTable";

export default function StudentProfile() {

    const [cardState, setCardState] = useState(false);
    const [tableState, setTableState] = useState(false);



    return (
        <>
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
            {< StudentAppBar />}

            {cardState ? <StudentCard /> : null}
            {tableState ? <BasicTable /> : null}

        </>
    );
}