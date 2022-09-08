
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import MainLayout from "./components/MainLayout.js";
import ErrorPage from './pages/ErrorPage.js';
import Expenses from "./pages/Expenses.js";
import Invoices from "./pages/Invoices.js";
import Invoice from './pages/Invoice.js';
import Home from './pages/Home.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="Expenses" element={<Expenses />} />
                    <Route path="Invoices" element={<Invoices />} >
                        <Route index element={<div className='select-invoice'>Select an invoice to see details.</div>} />
                        <Route path=":invoiceId" element={<Invoice />} />
                    </Route>
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;


