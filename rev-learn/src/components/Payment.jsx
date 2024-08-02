import { useRef, useState } from "react";
import { Typography } from "../../node_modules/@mui/joy/index";

export default function Payment() {



    const ioption1 = useRef();
    const ioption2 = useRef();
    const inputPayment = useRef();
    const [paymentInfo, setPaymentInfo] = useState([]);
    const [paymentMethodsRows, setPaymentMethodRows] = useState(<></>)

    let total = 0;
    total = paymentInfo.reduce((p, c) => p.price + c.price, 0);
    const paymentTableRows = paymentInfo.map(p =>
        <tr>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>${p.price}</td>

        </tr>
    )

    async function makePayment() {

    }
    function paymentMethods() {
        if (inputPayment.current.value == "CC") {
            setPaymentMethodRows(<>
                <table style={{ backgroundColor: '#F36928' }}>
                    <label>
                        Enter Credit Card Number:
                        <input type="number" ref={ioption1} />
                    </label>
                    <label>
                        Enter Credit Card Expiration Date:
                        <input type="date" ref={ioption2} />
                    </label>
                    <button onClick={makePayment}>Make Payment</button>
                </table>
            </>);
        } else if (inputPayment.current.value == "DC") {
            setPaymentMethodRows(<>
                <table style={{ backgroundColor: '#F36928' }}>
                    <label>
                        Enter Debit Card Number:
                        <input type="number" />
                    </label>
                    <label>
                        Enter Debit Card Expiration Date:
                        <input type="date" />
                    </label>
                </table>
            </>);
        } else {
            alert("Error");
        }

    }

    async function getPaymentDetails() {
        try {
            const url = ""//"http://localhost:8080/" add something later ;
            const httpResponse = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                }
            })
            const infoList = await httpResponse.json();
            setPaymentInfo(infoList);
        } catch (e) {
            console.log("Error");
        }
    }


    return (<>


        <Typography
            sx={{
                flexGrow: 1, backgroundColor: '#F36928',
                borderRadius: '25px', color: 'black', fontSize: '32px',
                border: 'solid black 1px'
            }}>
            Payment Information
        </Typography>

        <hr style={{ marginLeft: "8px", marginRight: "8px" }} />
        <center>
            <table style={{
                backgroundColor: '#F36928',
                border: 'solid black 1px'
            }}>
                <thead>
                    <tr>
                        <td>Course ID</td>
                        <td>Course Name</td>
                        <td>Price</td>

                    </tr>
                </thead>
                <tbody>
                    {paymentTableRows}
                </tbody>
            </table>

            <table style={{ backgroundColor: '#F36928', border: 'solid black 1px'  }}>
                <center>
                    <Typography
                        sx={{
                            flexGrow: 1, backgroundColor: '#F36928',
                            borderRadius: '25px', color: 'black', 
                            fontSize: '24px'
                        }}>
                        Total Cost: ${total}
                    </Typography>

                    <select onChange={paymentMethods} name="paymentOptions" ref={inputPayment}>
                        <option value="CC">Credit Card</option>
                        <option value="DC">Debit Card</option>
                        <option value="O1">Other</option>
                        <option value="O2">Other</option>
                    </select>
                    <div>{paymentMethodsRows}</div>
                </center>
            </table>

        </center>

    </>)
}