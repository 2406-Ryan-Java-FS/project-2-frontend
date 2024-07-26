import { useEffect } from "react"

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
    // useEffect(() => {
    //     /*TODO: Fetch Educator's information from the backend */
       
    //     
    // },[educatorId])

    return(<div sx={{ display: 'flex' }}>
        <h2>About the Instructor</h2>
        <div>
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="educator profile img" width="100px"/>
        </div>
        <div>
            <div>Instructor name: {educator.user.firstName} {educator.user.lastName}</div>
            <div>Email: {educator.user.email}</div>
            <div>Major: {educator.degreeMajor}</div>
            <div>Major Level: {educator.degreeLevel}</div>
            <div>Alma Mater: {educator.almaMater}</div>
            <div>Year: {educator.year}</div>
            
        </div>
    </div>)
}