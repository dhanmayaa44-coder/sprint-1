import { useState } from "react";

function Payments() {
  const [payments, setPayments] = useState([
    {
      id: 1,
      member: "Rahul Sharma",
      amount: "₹1,000",
      date: "20 Aug 2026",
      status: "Paid",
    },
    {
      id: 2,
      member: "Priya Das",
      amount: "₹2,500",
      date: "19 Aug 2026",
      status: "Paid",
    },
    {
      id: 3,
      member: "Aman Kumar",
      amount: "₹1,000",
      date: "18 Aug 2026",
      status: "Pending",
    },
  ]);

  const addPayment = () => {
    const newPayment = {
      id: payments.length + 1,
      member: `Member ${payments.length + 1}`,
      amount: "₹1,500",
      date: "20 Aug 2026",
      status: "Paid",
    };

    setPayments([...payments, newPayment]);
  };

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>Payments</h1>
          <p>Manage membership payments and transactions</p>
        </div>

        <button className="primary-btn" onClick={addPayment}>
          + Add Payment
        </button>
      </div>

      <div className="payment-list">
        {payments.map((payment) => (
          <div className="payment-card" key={payment.id}>
            <div>
              <h3>{payment.member}</h3>
              <p>{payment.date}</p>
            </div>

            <div className="payment-info">
              <strong>{payment.amount}</strong>

              <span
                className={
                  payment.status === "Paid"
                    ? "active-status"
                    : "inactive-status"
                }
              >
                {payment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payments;