let payments = [
    {
        name: "Hire Me Now",
        number: 1995,
        amount: "$12,800",
        date: "11/01/2020",
    },
    {
        name: "Venice Local INC",
        number: 2000,
        amount: "$9,000",
        date: "09/29/2020",
    },
    {
        name: "Ocean Drive",
        number: 2003,
        amount: "$7,500",
        date: "06/18/2020",
    },
    {
        name: "Tap 445.com",
        number: 1997,
        amount: "$10,000",
        date: "08/02/2020",
    },
    {
        name: "Open Sens",
        number: 1998,
        amount: "$6,600",
        date: "12/25/2020",
    }
];

export function getPayments() {
    return payments;
}

export function getPayment(number) {
    return payments.find((payment) => payment.number === number);
}
