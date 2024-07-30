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

export default function makePayment() {
    const [paymentMethodsRows, setPaymentMethodRows] = useState(<></>);
    
    function paymentMethods () {
        if (inputPayment.current.value == "CC") {
            setPaymentMethodRows(<>
            <label>
                Enter Credit Card Number:
                <input type= "number" ref={ioption1} />
            </label>
            <label>
                Enter Credit Card Expiration Date:
                <input type="date" ref={ioption2} />
            </label>
            <button onClick={makePayment}>Make Payment</button>
            </>);
        } else if  (inputPayment.current.value == "DC") {
            setPaymentMethodRows(<>
                <label>
                    Enter Debit Card Number:
                    <input type= "number" />
                </label>
                <label>
                    Enter Debit Card Expiration Date:
                    <input type="date" />
                </label>
                </>);
        } else {
            alert("Error");
        }

    }
})