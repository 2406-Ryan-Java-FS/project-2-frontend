import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'

import userAccountController from '../../controllers/userAccountController';


export default function UnpaidTable() {
    


    
    const [paymentInfo, setPaymentInfo] = useState([]);
    //const [paymentMethodsRows, setPaymentMethodRows] = useState(<></>)

    let total = 0;
    total = paymentInfo.reduce((p,c) => p.price + c.price, 0);
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
                  
                  <TableCell align="right">{p.id}</TableCell>
                  <TableCell align="right">{p.name}</TableCell>
                  <TableCell align="right">{p.price}</TableCell>
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
   
    const [studentId, setStudentId] = useState(0);
  
    async function getPaymentDetails() {
      
      try {
        const url = `http://localhost:8080/users`;
        const httpResponse = await fetch(url, { 
            method: 'GET',  
            headers: {
                'Authorization': `Bearer ${ userAccountController.loggedInUser.token}`,
            }})
            const body  = await httpResponse.json();
            setStudentId(body.userId);
      }catch(e) {
        console.log("Error");
        alert("Error");
      }
      
      try {
            
            const url = `http://localhost:8080/enrollments/${studentId}`;
            const httpResponse = await fetch(url, { 
                method: 'GET',  
                headers: {
                   'Authorization': `Bearer ${ userAccountController.loggedInUser.token}`,
                }})
                const body = await httpResponse.json();
                let infoList = [];
                if (!body instanceof Array) {
                  infoList.push(body);
                }else {
                  infoList = body;
                }
                setPaymentInfo(infoList);
            }catch(e) {
              console.log("Error");
              alert("Error");
        }
    }
    
    
    
}