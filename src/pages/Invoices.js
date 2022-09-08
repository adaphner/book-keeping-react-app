import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getInvoices } from "../data";
import invoicePic from './images/invoice-graphic.png';

function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />;
}

function Invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div className='invoices-container'>
            <nav className="invoices-links">
                <input value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }} placeholder="Search invoice..." />
                {invoices.filter((invoice) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = invoice.name.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                }).map((invoice) => (<QueryNavLink style={({ isActive }) => ({ color: isActive ? "#ff6f00" : "#263238" })}
                    to={`/Invoices/${invoice.number}`} key={invoice.number}>
                    {invoice.name}
                </QueryNavLink>
                ))}
            </nav>
            <Outlet />
            <div className="invoice-graphic">
                <img src={invoicePic} alt='Invoice Graphic' />
            </div>
        </div>
    );
}

export default Invoices;