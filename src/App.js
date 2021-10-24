import {useState} from 'react'
import Navbar from './Components/Navbar';
import { Formik, Form} from 'formik';
import * as Yup from 'yup'
import { Grid, Container, Typography , InputAdornment, Paper, makeStyles, Box,} from '@material-ui/core';
import Textfield from './Components/FormsUI/Textfield'
import Button from './Components/FormsUI/Button'
import Select from './Components/FormsUI/Select';
import rates from './rates.json'
// form initial values
const INITIAL_FORM_STATE = {
firstInput: '',
secondInput: '',
currency: 'EUR',
crypto: 'BTC',
payment: 'Bank Transfer',
};
// currency array 
const currencyArray = ['USD', 'EUR',  'GBP',  'PLN', 'CZK',
'SEK',  'NOK', 'DKK',  'CHF',  'ZAR', 'AUD',
'JPY',  'NZD', 'TRY',  'BRL',  'CAD', 'HKD',
'HUF',  'INR', 'RUB',  'ILS',  'MYR', 'MXN',
'SGD',  'RON', 'IDR',  'PHP',  'ARS', 'THB',
'NGN',  'PKR', 'AED',  'UAH',  'BGN', 'CLP',
'KRW',  'EGP', 'SAR',  'QAR'];
// crypto array
const cryptoArray = ['BTC', 'LTC', 'ETH', 'BCH', 'XRP', 'NANO', 'TRX', 'DAI', 'DOGE', 'USDT', 'BTT', 'AVA', 'BTCV'];
// form validation
const FORM_VALIDATION = Yup.object().shape({
  firstInput: Yup.number()
  .typeError('Enter a number')
  .required('Required'),
  secondInput: Yup.number()
  .required('Required')
});



const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));
function App() {
  const classes = useStyles();
  // checking crypto and currency changes
  const [currencyValue, setCurrencyValue] = useState('EUR');
  const [cryptoValue, setCryptoValue] = useState('BTC');
  const theRatio = rates.merchant[cryptoValue][currencyValue]
  return (
    <div className="App">
      <Navbar>
      </Navbar>
          <Box>
            <Paper>
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi et ex impedit error voluptatem expedita necessitatibus, itaque ducimus nostrum veniam suscipit, repellendus nemo. Reiciendis provident magnam ipsa error praesentium hic!
                </p>
                <p>
                  <a href="/"> Start now</a>
                </p>
              </div>
              
               </Paper>
            <Paper
            elevation= '3'
            >
         <Grid container>
           <Grid item>
           <Container> 
             <div className= {classes.formWrapper}>
              <Formik
              initialValues = {{...INITIAL_FORM_STATE}}
              validationSchema = {FORM_VALIDATION}
              onSubmit = {
                values => {
                  console.log(values)
                }
              }
              >
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Textfield
                        name= 'firstInput'
                        ratio = {theRatio}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">Pay</InputAdornment>,
                        }}
                        >
                        </Textfield>
                    </Grid>
                    <Grid item xs= {6}>
                      
                      <Select
                      name= 'currency'
                      options = {currencyArray}
                      onValueChange={e => setCurrencyValue(e.target.value)}

                      >
                        
                      </Select>
                       </Grid>
                    <Grid item xs={6}>
                        <Textfield
                        name="secondInput"
                        ratio = {theRatio}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">Buy</InputAdornment>,
                        }}
                        >

                        </Textfield>
                        
                    </Grid>
                    <Grid item xs= {6}>
                      
                      <Select
                      name= 'crypto'
                      options = {cryptoArray}
                      onValueChange={e => setCryptoValue(e.target.value)}
                      >
                      </Select>
                       </Grid>
                       <Grid item xs= {12}>
                       <Typography>
                         Payment Method
                         </Typography>
                      <Select
                      name= 'payment'
                      options = {['Bank Transfer', 'Debit card', 'Apple pay']}
                      >
                      </Select>
                       </Grid>
                       <Grid item xs= {12}>
                         <Button
                         >
                           {`Buy ${cryptoValue}`}
                         </Button>
                        </Grid>
                    
                  </Grid>
                  
                </Form>
              </Formik>
              </div>
             </Container>
            </Grid>
           
           
            </Grid>
            </Paper>
            </Box>
      
      </div>
  );
}

export default App;
