import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function CourseDetailEducator({educatorId}){

    const educator = {
        educatorId: educatorId,
        degreeLevel: "Degree-level",
        degreeMajor: "Degree-Major",
        almaMater: "Alma-Mater",
        year: "year??",
        user:{
            firstName: "firstName",
            lastName: "lastName",
            email: "email@emailAddress.com"

        }
    }

    // const [educator, setEducator] = useState([]);
    //useEffect(() => {
        //TODO: Fetch Educator's information from the backend 
        // fetch()
        // .then(res => res.json())
        // .then(setEducator)
        // .error(error => console.error(error))

       
        
    //},[educatorId]) 

    return(<>
        <h2>About the Instructor</h2>
        <Card sx={{display: 'flex'}}>
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
                    <Typography variant="body2" sx={{marginBottom:"5px"}} color="text.secondary">
                        Email: {educator.user.email}
                     </Typography>
                     <Typography variant="body2"  sx={{marginBottom:"5px"}}color="text.secondary">
                        Major: {educator.degreeMajor}
                     </Typography>
                     <Typography variant="body2"  sx={{marginBottom:"5px"}} color="text.secondary">
                        Major Level: {educator.degreeLevel}
                     </Typography>
                     <Typography variant="body2" 
                     sx={{marginBottom:"5px"}}color="text.secondary">
                        Alma Mater: {educator.almaMater}
                     </Typography>
                     <Typography variant="body2" 
                     sx={{marginBottom:"5px"}}color="text.secondary">
                        Year: {educator.year}
                     </Typography>
                </CardContent>
            </Box>
        </Card>
        {/* <Box sx={{display:'flex', justifyContent: 'space-around', mt:'10px'}}>
            <Box>
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="educator profile img" width="100px"/>
            </Box>
            <Box>
                <div><b>Instructor name: </b>{educator.user.firstName} {educator.user.lastName}</div>
                <div><b>Email:</b> {educator.user.email}</div>
                <div><b>Major:</b> {educator.degreeMajor}</div>
                <div><b>Major Level: </b>{educator.degreeLevel}</div>
                <div><b>Alma Mater:</b> {educator.almaMater}</div>
                <div><b>Year:</b> {educator.year}</div>
                
            </Box>
        </Box> */}
        
    </>)
}