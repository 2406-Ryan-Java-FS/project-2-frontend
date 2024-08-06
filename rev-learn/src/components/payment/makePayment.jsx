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

export default function MakePayment() {

  const FormGrid = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
  }));


  const [paymentType, setPaymentType] = useState('debitCard');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [accountNumber, setAccountNumber] = useState();
  const [routingNumber, setRoutingNumber] = useState();

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    if (value.length <= 16) {
      setCardNumber(formattedValue);
    }
  };

  const handleCvvChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  const handleExpirationDateChange = (event) => {
    const value = event.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{2})(?=\d{2})/, '$1/');
    if (value.length <= 4) {
      setExpirationDate(formattedValue);
    }
  };

  return (
    <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap width="50%">
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
              backgroundColor: '#F36928'
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
              backgroundColor: '#F36928'
              //   outlineColor:
              //     paymentType === 'creditCard' ? 'primary.main' : 'divider',
              //   backgroundColor:
              //     paymentType === 'creditCard' ? 'background.default' : '',
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
              backgroundColor: '#F36928'
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
              backgroundColor: '#F36928'
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
              border: '5px solid ',
              borderColor: 'divider',
              backgroundColor: 'white',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2">Credit card</Typography>
            </Box>
            <hr style={{ marginLeft: "8px", marginRight: "8px" }} />
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
                <OutlinedInput
                  id="card-number"
                  autoComplete="card-number"
                  placeholder="0000 0000 0000 0000"
                  required
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
              </FormGrid>
              <FormGrid sx={{ maxWidth: '20%' }}>
                <FormLabel htmlFor="cvv" required>
                  CVV
                </FormLabel>
                <OutlinedInput
                  id="cvv"
                  autoComplete="CVV"
                  placeholder="123"
                  required
                  value={cvv}
                  onChange={handleCvvChange}
                />
              </FormGrid>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                  Name
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="card-name"
                  placeholder="John Smith"
                  required
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-expiration" required>
                  Expiration date
                </FormLabel>
                <OutlinedInput
                  id="card-expiration"
                  autoComplete="card-expiration"
                  placeholder="MM/YY"
                  required
                  value={expirationDate}
                  onChange={handleExpirationDateChange}
                />
              </FormGrid>
            </Box>
            <FormControlLabel
              control={<Checkbox name="saveCard" />}
              label="Remember credit card details for next time"
            />
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
              border: '5px solid ',
              borderColor: 'divider',
              backgroundColor: 'white',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2">Dedit card</Typography>
            </Box>
            <hr style={{ marginLeft: "8px", marginRight: "8px" }} />
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
                <OutlinedInput
                  id="card-number"
                  autoComplete="card-number"
                  placeholder="0000 0000 0000 0000"
                  required
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
              </FormGrid>
              <FormGrid sx={{ maxWidth: '20%' }}>
                <FormLabel htmlFor="cvv" required>
                  CVV
                </FormLabel>
                <OutlinedInput
                  id="cvv"
                  autoComplete="CVV"
                  placeholder="123"
                  required
                  value={cvv}
                  onChange={handleCvvChange}
                />
              </FormGrid>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-name" required>
                  Name
                </FormLabel>
                <OutlinedInput
                  id="card-name"
                  autoComplete="card-name"
                  placeholder="John Smith"
                  required
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="card-expiration" required>
                  Expiration date
                </FormLabel>
                <OutlinedInput
                  id="card-expiration"
                  autoComplete="card-expiration"
                  placeholder="MM/YY"
                  required
                  value={expirationDate}
                  onChange={handleExpirationDateChange}
                />
              </FormGrid>
            </Box>
            <FormControlLabel
              control={<Checkbox name="saveCard" />}
              label="Remember dedit card details for next time"
            />
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
              border: '5px solid ',
              borderColor: 'divider',
              backgroundColor: 'white',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2">Bank Transfer</Typography>
            </Box>
            <hr style={{ marginLeft: "8px", marginRight: "8px" }} />
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
                <OutlinedInput
                  id="account-number"
                  autoComplete="account-number"
                  placeholder=""
                  required
                  value={accountNumber}
                />
              </FormGrid>
              <FormGrid sx={{ flexGrow: 1 }}>
                <FormLabel htmlFor="routing-number" required>
                  Routing Number
                </FormLabel>
                <OutlinedInput
                  id="routing_number"
                  autoComplete="routing-number"
                  placeholder=""
                  required
                  value={routingNumber}

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
            //justifyContent: 'space-between',
            p: 3,
            height: { xs: 300, sm: 350, md: 375 },
            width: '100%',
            borderRadius: '20px',
            border: '5px solid ',
            borderColor: 'divider',
            backgroundColor: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
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
    </Stack>
  );
}