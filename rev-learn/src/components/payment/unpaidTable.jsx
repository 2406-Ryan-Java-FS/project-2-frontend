import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

//import userAccountController from '../../controllers/userAccountController';


export default function UnpaidTable() {
    


    
    
    //const [paymentMethodsRows, setPaymentMethodRows] = useState(<></>)
    const [studentId, setStudentId] = useState(0);
    const [paymentInfo, setPaymentInfo] = useState([]);
    let total = 0;
    total = paymentInfo.reduce((t,c) => t + c.price, 0);
    return ( <>
    
        <TableContainer component={Paper}>
          <Table sx={{ width: '50%', justify:'center', backgroundColor:  '#F36928', fontSize: 14 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                  <TableCell align="center" fontSize="20">Course ID</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paymentInfo.map(p =>
                <TableRow
                  key={p.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  
                  <TableCell align="center">{p.courseId}</TableCell>
                  <TableCell align="center">{p.title}</TableCell>
                  <TableCell align="center">{p.price}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Button onClick={getPaymentDetails}>Click Here to View Bill</Button>
        <div>
              <h5>The Total is ${total}</h5>
        </div>

      </>);
   
    
  
    async function getPaymentDetails() {
     
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      setStudentId(loggedInUser.userId)
      //setStudentId(1)
      let t = loggedInUser.token 
      //let t =  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzIzMDQyMzI0LCJleHAiOjE3MjMwODU1MjR9.3hb8h0Qkqhc-FWwNJPBBRdF6V1zeoSfYD52CylmdPAvnCd0r7zSMCKI1dhZVlIU-ywtx-WiE349wyrvk_7nbng"
      let initialList = [];
      let infoList = []
      try {
            
            const url = `http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/enrollments/students/${studentId}/pending`;
            const httpResponse = await fetch(url, { 
                method: 'GET',  
                headers: {
                   'Authorization': `Bearer ${t}`,
                }})
                const body = await httpResponse.json();
                console.log(httpResponse.status)
                console.log(body)
                if (!body instanceof Array) {
                  initialList.push(body);
                }else {
                  initialList = body;
                }
                if (initialList.length === 0) {
                  alert("No outstanding debts")
                }
                
            }catch(e) {
              console.log("Error");
              alert("Error");
        }

      for (let i of initialList) {

        try {
            
          const url = `http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/courses/${i.courseId}`;
          const httpResponse = await fetch(url, { 
              method: 'GET',  
              headers: {
                 'Authorization': `Bearer ${t}`,
              }})
              const body = await httpResponse.json();
              
              infoList.push(body);

          }catch(e) {
            console.log("Error");
            alert("Error");
        }

      }
      setPaymentInfo(infoList)

    }
    
    
    
}