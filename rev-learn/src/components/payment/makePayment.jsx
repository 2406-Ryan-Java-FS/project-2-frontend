import { useState, useRef, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
//import userAccountController from '../../controllers/userAccountController'


export default function MakePayment() {
    






const FormGrid = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));


  const [paymentType, setPaymentType] = useState('debitCard');
  const cardNumber = useRef('');
  const cvv= useRef('');
  const expirationDate = useRef('');
  const accountNumber = useRef(''); 
  const routingNumber = useRef('');

  

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };



  return (
    <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap width= "50%">
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="Payment options"
          name="paymentType"
          value={paymentType}
          onChange={handlePaymentTypeChange}
          sx={{
            flexDirection: { sm: 'column', md: 'row' },
            gap: 2
          }}
        >

          <Card
            raised={paymentType === 'debitCard'}
            sx={{
              maxWidth: { sm: '100%', md: '50%' },
              flexGrow: 1,
              outline: '1px solid',
              backgroundColor:  '#F36928'
            }}
          >
            <CardActionArea onClick={() => setPaymentType('debitCard')}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography fontWeight="medium">Debit Card</Typography>
              </CardContent>
            </CardActionArea>
          </Card>


          <Card
            raised={paymentType === 'creditCard'}
            sx={{
              maxWidth: { sm: '100%', md: '50%' },
              flexGrow: 1,
              outline: '1px solid',
              backgroundColor:  '#F36928'
           
            }}
          >
            <CardActionArea onClick={() => setPaymentType('creditCard')}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography fontWeight="medium" fontSize="14">Credit Card</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          
          
          <Card
            raised={paymentType === 'bankTransfer'}
            sx={{
                maxWidth: { sm: '100%', md: '50%' },
                flexGrow: 1,
                outline: '1px solid',
                backgroundColor:  '#F36928'
            }}
          >
            <CardActionArea onClick={() => setPaymentType('bankTransfer')}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {/* <AccountBalanceRoundedIcon color="primary" fontSize="small" /> */}
                <Typography fontWeight="medium">Bank account</Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card
            raised={paymentType === 'cash'}
            sx={{
                maxWidth: { sm: '100%', md: '50%' },
                flexGrow: 1,
                outline: '1px solid',
                backgroundColor:  '#F36928'
            }}
          >
            <CardActionArea onClick={() => setPaymentType('cash')}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography fontWeight="medium">Cash</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </RadioGroup>
      </FormControl>
      
      {paymentType === 'creditCard' && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 3,
              height: { xs: 300, sm: 350, md: 375 },
              width: '100%',
              borderRadius: '20px',
              border: '1px solid ',
              borderColor: 'divider',
              backgroundColor: '#F36928',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2">Credit card</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: 2,
              }}
            >
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-number" required>
                  Card number
                </FormLabel>
                
                <input 
                type="text"
                id="card-number"
                placeholder=''
                ref = {cardNumber}
                 />
              </FormGrid>
              <FormGrid sx={{ maxWidth: '20%' }}>
                <FormLabel htmlFor="cvv" required>
                  CVV
                </FormLabel>
                
                <input 
                type="text"
                id="cvv"
                placeholder=''
                ref = {cvv}
                 />
              </FormGrid>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                  Name
                </FormLabel>
                <input
                type="text"
                id="card-name"
                placeholder=''
                 />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-expiration" required>
                  Expiration date
                </FormLabel>
               
                <input 
                type="text"
                id="card-number"
                placeholder=''
                ref = {expirationDate}
                 />
              </FormGrid>
            </Box>
          </Box>
          
        </Box>
      )}

    {paymentType === 'debitCard' && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                justify: 'center',
                p: 3,
                height: { xs: 300, sm: 350, md: 375 },
                width: '100%',
                borderRadius: '20px',
                border: '1px solid ',
                borderColor: 'divider',
                backgroundColor: '#F36928',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2">Dedit card</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                gap: 2,
              }}
            >
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-number" required>
                  Card number
                </FormLabel>
                
                <input 
                type="text"
                id="card-number"
                placeholder=''
                ref = {cardNumber}
                 />
              </FormGrid>
              <FormGrid sx={{ maxWidth: '20%' }}>
                <FormLabel htmlFor="cvv" required>
                  CVV
                </FormLabel>
                
                <input 
                type="text"
                id="cvv"
                placeholder=''
                ref = {cvv}
                 />
              </FormGrid>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                  Name
                </FormLabel>
                
                <input 
                type="text"
                id="card-name"
                placeholder=''
                 />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-expiration" required>
                  Expiration date
                </FormLabel>
              
                <input 
                type="text"
                id="card-expiration"
                placeholder=''
                ref = {expirationDate}
                 />
              </FormGrid>
            </Box>
          </Box>
          
        </Box>
      )}

      {paymentType === 'bankTransfer' && (
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            //justifyContent: 'space-between',
            p: 3,
            height: { xs: 300, sm: 350, md: 375 },
            width: '100%',
            borderRadius: '20px',
            border: '1px solid ',
            borderColor: 'divider',
            backgroundColor: '#F36928',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="subtitle2">Bank Transfer</Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              gap: 2,
            }}
          >
            <FormGrid sx={{ flexGrow: 1 }}>
              <FormLabel htmlFor="account-number" required>
                Account number
              </FormLabel>
              <input
                type='text'
                id="account-number"
                placeholder=""
                ref={accountNumber}
              />
            </FormGrid>
            <FormGrid sx={{ flexGrow: 1}}>
              <FormLabel htmlFor="routing-number" required>
                Routing Number
              </FormLabel>
              <input
                type = "text"
                id="routing_number"
                placeholder=""
                ref={routingNumber}
                
              />
            </FormGrid>
          </Box>
        </Box>
        </Box>
      )}

    
{paymentType === 'cash' && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            backgroundColor: '#F36928',
          }}
        >
          <Alert severity="warning" >
            Your order will be processed once we receive the funds.
          </Alert>
          <Typography variant="title2" fontWeight="medium">
            Cash
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please place your cash payment as follows:
          </Typography>
          
            <Typography variant="body1" gutterBottom>
              First go to Rally Park
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              Then go to the Sportman's Path
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              Circle the path three times then find the tree with two cut branches
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              Place the money in a shopping bag inside of the whole in the back of the tree.
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              Then send an email to CustomerService@SuperLegimateBusiness.com with subject line: Payment
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              Explain payment made in body.
            </Typography>
            <Typography variant="body1" fontWeight="medium">
              Important! Do not inform IRS or any other authority about this payment!
            </Typography>
        </Box>
      )}
      <Button onClick = {paymentSubmission}>Make Payment</Button>
    </Stack>
  );

  async function paymentSubmission() {
    
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const si = loggedInUser.userId
    //const si = 1
    let t = loggedInUser.token 
    //let t =  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzIzMDQyMzI0LCJleHAiOjE3MjMwODU1MjR9.3hb8h0Qkqhc-FWwNJPBBRdF6V1zeoSfYD52CylmdPAvnCd0r7zSMCKI1dhZVlIU-ywtx-WiE349wyrvk_7nbng"
    
    let initialList = [];
    if (paymentType === "debitCard" || paymentType === "creditCard") {
        console.log(cardNumber.current.value)
        if (cardNumber.current.value.length !== 16) {
            return (alert("Invalid Card Number"))
        }
    
        // if (expirationDate.current.value.length !== 4 || expirationDate.current.value.length !== 5) {
        //     return (alert("Invalid Expiration Date"))
    
        // }
        if (cvv.current.value.length !== 3) {
            return (alert("Invalid CVV"))
        }
        try {
            
            const url = `http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/enrollments/students/${si}/pending`;
            const httpResponse = await fetch(url, { 
                method: 'GET',  
                headers: {
                   'Authorization': `Bearer ${t}`,
                }})
                const body = await httpResponse.json();
                
                if (!(body instanceof Array)) {
                  initialList.push(body);
                }else {
                  initialList = body;
                }
                
            }catch(e) {
              console.log("Error");
              alert("Error");
        }
        for (let i of initialList) {

            try {
                
              const url = `http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/enrollments/payStatus/${i.enrollmentId}`;
              console.log(url)
              const httpResponse = await fetch(url, { 
                  method: 'PATCH',  
                  headers: {
                     'Authorization': `Bearer ${t}`,
                  },
                  body: JSON.stringify({
                    "payStatus" : "COMPLETED"
                  })
                })
                  const body = await httpResponse.json();
                  console.log(body.status)
    
              }catch(e) {
                console.log("Error");
                alert("Error");
            }
    
          }
        return(alert("Payment Recieved"))
    }
    else if(paymentType === "bankTransfer") {
        console.log(routingNumber.current.value)
        console.log(accountNumber.current.value)
        if (routingNumber.current.value.length !== 9) {
            return (alert("Invalid Routing Number"))
        }
    
        if (accountNumber.current.value.length < 8) {
            return (alert("Invalid Account Number"))
        }

        try {
            
            const url = `http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/enrollments/students/${si}/pending`;
            const httpResponse = await fetch(url, { 
                method: 'GET',  
                headers: {
                   'Authorization': `Bearer ${t}`,
                }})
                const body = await httpResponse.json();
                
                if (!(body instanceof Array)) {
                  initialList.push(body);
                }else {
                  initialList = body;
                }
                
            }catch(e) {
              console.log("Error");
              alert("Error");
        }
        for (let i of initialList) {

            try {
                
              const url = `http://ec2-100-26-249-35.compute-1.amazonaws.com:8080/enrollments/payStatus/${i.enrollmentId}`;
              const httpResponse = await fetch(url, { 
                  method: 'PATCH',  
                  headers: {
                     'Authorization': `Bearer ${t}`,
                  },
                  body: JSON.stringify({
                    "payStatus" : "COMPLETED"
                  })
                })
                  const body = await httpResponse.json();
                  console.log(body.status)
    
              }catch(e) {
                console.log("Error");
                alert("Error");
            }
    
          }
        return(alert("Test worked"))
        
    }else{
        return(alert("Cash Payment"))
    }


  }
}
