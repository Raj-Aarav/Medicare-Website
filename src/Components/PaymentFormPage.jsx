import React, { useState } from 'react';
import "../Styling/PaymentForm.css";
import Navbar from './Navbar';
const PaymentFormPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handlePayment = () => {

        if (!cardNumber || !expiryDate || !cvv) {
            setErrorMessage('Please fill in all required fields.');
            return;
        }
        const cardNumberRegex = /^\d{12}$/;
        if (!cardNumberRegex.test(cardNumber)) {
            setErrorMessage('Invalid card number format. Please enter 12 digits.');
            return;
        }
        const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{4}$/;
        if (!expiryDateRegex.test(expiryDate)) {
            setErrorMessage('Invalid expiry date format. Please enter MM/YYYY.');
            return;
        }

        alert('Processing payment...');
        setTimeout(() => {
            // Reset fields after successful payment
            setCardNumber('');
            setExpiryDate('');
            setCvv('');
            setErrorMessage('');
            alert('Payment successful!');
        }, 2000);



    };

    return (
        <div><Navbar></Navbar>
            <h2>Payment Gateway</h2>
            <div className="payment-form">
                <h2>Card Details</h2>
                <label>
                    Card Number
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Enter card number"

                    />
                </label>
                <label>
                    Expiry Date
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder="MM/YYYY"

                    />
                </label>
                <label>
                    CVV
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="Enter CVV"

                    />
                </label>
                <button onClick={handlePayment}>Make Payment</button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>

    );
};

export default PaymentFormPage;