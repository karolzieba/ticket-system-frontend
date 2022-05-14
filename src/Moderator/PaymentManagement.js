import React, { useState, useEffect } from 'react';

const PaymentManagement = () => {
    const axios = require('axios').default;
    axios.defaults.withCredentials = true;

    const [payments, setPayments] = useState("");
    let paymentList = [];

    useEffect(() => { 
       axios
            .get('http://localhost:8080/api/payment')
            .then(function (response) {
                setPayments(response.data);
                console.log(payments);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [paymentList]);

    for(let i = 0; i < payments.length; i++) {
        if (payments[i] !== undefined) {
            paymentList.push(<tr>
                <th scope="row">
                    {payments[i].idPayment}
                </th>
                <td>
                    {payments[i].startDatePayment}
                </td>
                <td>
                    {payments[i].endDatePayment === null?<button type="button" class="btn btn-primary" 
                    onClick={() => {acceptPayment(payments[i].idPayment)}}>Potwierdź płatność</button>:payments[i].endDatePayment}
                </td>
                <td>
                    {payments[i].typePayment.nameTypePayment === "Gotowka"?"Przelew tradycyjny":"PayPal"}
                </td>
            </tr>);
        }
    }

    const acceptPayment = (id) => {
        let date = new Date();
		date.setHours(date.getHours() + 2);

        axios
            .patch('http://localhost:8080/api/payment/' + id, {
                endDatePayment: date
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (payments.length !== 0 ? <div className='parentMenu'>
        <br/><br/>
        <h2>ZARZĄDZANIE PŁATNOŚCIAMI</h2>
        <br/><br/>
        <table class="table table-light">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Data rozpoczęcia</th>
                    <th scope="col">Data zakończenia</th>
                    <th scope="col">Rodzaj płatności</th>
                </tr>
            </thead>
            <tbody>
                {paymentList}
            </tbody>
        </table>
    </div>
    :
    <div className='parentMenu'>
        <br/><br/>
        <h2>ZARZĄDZANIE PŁATNOŚCIAMI</h2>
        <br/><br/>
        <text>W systemie nie ma żadnych płatności.</text>
    </div>);
}

export default PaymentManagement;