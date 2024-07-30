import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function unpaidTable() {
    


    
    const [paymentInfo, setPaymentInfo] = useState([]);
    //const [paymentMethodsRows, setPaymentMethodRows] = useState(<></>)

    let total = 0;
    total = paymentInfo.reduce((p,c) => p.price + c.price, 0);
    return ( <>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>TestCell1</TableCell>
                <TableCell align="right">TestCell2</TableCell>
                <TableCell align="right">TestCell3</TableCell>
                <TableCell align="right">TestCell4</TableCell>
                <TableCell align="right">TestCell5</TableCell>
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
        <div>
              <h5>The Total is ${total}</h5>
        </div>

      </>);
   
    
    async function getPaymentDetails() {
        try {
            const url = `http://localhost:8080//enrollments/${studentId}`;
            const httpResponse = await fetch(url, { 
                method: 'GET',  
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                }})
                const infoList = await httpResponse.json();
                setPaymentInfo(infoList);
            }catch(e) {
            console.log("Error");
        }
    }
    
    
    
}