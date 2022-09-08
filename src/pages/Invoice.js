import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getInvoice, deleteInvoice } from "../data.js";
import { getPayment } from "../paymentdata.js";

function Invoice() {
    let navigate = useNavigate();
    let location = useLocation();
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId, 10));
    let payment = getPayment(parseInt(params.invoiceId, 10));

    return (
        <div className='invoice-details'>
            <div className='total-due'>
                <h2>Total Due: {invoice.amount}</h2>
                <p>{invoice.name} - BID: {invoice.number}</p>
                <p>Due Date: {invoice.due}</p>
                <button onClick={() => {
                    deleteInvoice(invoice.number);
                    navigate("/invoices" + location.search);
                }}>
                    Delete Invoice
                </button>
            </div>
            <div className='last-payment'>
                <h2>Last Payment: {payment.amount}</h2>
                <p>{invoice.name} - BID: {payment.number}</p>
                <p>Last Payment: {payment.date}</p>
            </div>
        </div>
    );
}
export default Invoice;