import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function CourseDetailEducator({educator}){


    return(<>
        <h2>About the Instructor</h2>
        {educator?<Card sx={{display: 'flex'}}>
            <Box sx={{display: 'flex', flexDirection:'row'}}>
                <CardMedia
                    component="img"
                    sx ={{width: 151, flex: '1 0 auto', marginRight: "10px"}}
                    image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                    alt="educator's headshot" />
                <CardContent>
                    <Typography variant="h5" component="div" sx={{marginBottom:"5px"}} >
                    {educator.user.firstName} {educator.user.lastName}
                    </Typography>
                    {/* <Typography variant="body2" sx={{marginBottom:"5px"}} color="text.secondary">
                        Email: {educator.user.email}
                     </Typography> */}
                     <Typography variant="body2"  sx={{marginBottom:"5px"}}color="text.secondary">
                        Major: {educator.educator.degreeMajor}
                     </Typography>
                     <Typography variant="body2"  sx={{marginBottom:"5px"}} color="text.secondary">
                        Major Level: {educator.educator.degreeLevel}
                     </Typography>
                     <Typography variant="body2" 
                     sx={{marginBottom:"5px"}}color="text.secondary">
                        Alma Mater: {educator.educator.almaMater}
                     </Typography>
                     <Typography variant="body2" 
                     sx={{marginBottom:"5px"}}color="text.secondary">
                        Year: {educator.educator.year}
                     </Typography>
                </CardContent>
            </Box>
        </Card>:<p></p>}
        
        
    </>)
}