import { useState } from "react";
import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";

function Payments() {
  const [payments, setPayments] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      amount: "₹2,500",
      date: "20 Aug 2026",
      method: "UPI",
      status: "Paid",
    },
    {
      id: 2,
      name: "Priya Das",
      amount: "₹1,000",
      date: "20 Aug 2026",
      method: "Cash",
      status: "Paid",
    },
    {
      id: 3,
      name: "Aman Kumar",
      amount: "₹4,500",
      date: "19 Aug 2026",
      method: "Card",
      status: "Pending",
    },
  ]);

  const addPayment = () => {
    const newPayment = {
      id: payments.length + 1,
      name: `Member ${payments.length + 1}`,
      amount: "₹1,500",
      date: "20 Aug 2026",
      method: "UPI",
      status: "Paid",
    };

    setPayments([...payments, newPayment]);
  };

  const totalAmount = payments.reduce((total, payment) => {
    return total + Number(payment.amount.replace(/[₹,]/g, ""));
  }, 0);

  const paidCount = payments.filter(
    (payment) => payment.status === "Paid"
  ).length;

  const pendingCount = payments.filter(
    (payment) => payment.status === "Pending"
  ).length;

  return (
    <div className="payments-page">

      <div className="payments-header">
        <PageTitle
          title="Payments"
          description="Manage membership payments and transaction records"
        />

        <Button onClick={addPayment}>+ Add Payment</Button>
      </div>

      <div className="payments-banner">
        <div>
          <span>PAYMENT MANAGEMENT</span>
          <h2>Keep your gym transactions organized</h2>
          <p>
            Track payments, payment methods and pending transactions
            from one place.
          </p>
        </div>

        <div className="payments-banner-icon">💰</div>
      </div>

      <div className="payment-summary">

        <Card
          title="Total Revenue"
          description="Amount collected"
        >
          <div className="payment-summary-value">
            💰 ₹{totalAmount.toLocaleString()}
          </div>
        </Card>

        <Card
          title="Paid Transactions"
          description="Completed payments"
        >
          <div className="payment-summary-value paid-value">
            🟢 {paidCount}
          </div>
        </Card>

        <Card
          title="Pending Payments"
          description="Payments awaiting completion"
        >
          <div className="payment-summary-value pending-value">
            🟠 {pendingCount}
          </div>
        </Card>

      </div>

      <div className="payments-section">

        <div className="section-heading">
          <div>
            <h2>Recent Transactions</h2>
            <p>Latest gym membership payment records</p>
          </div>
        </div>

        <div className="payment-grid">

          {payments.map((payment) => (

            <Card
              key={payment.id}
              title={payment.name}
              description={`Payment Date: ${payment.date}`}
            >

              <div className="payment-card-content">

                <div className="payment-member">
                  <div className="payment-avatar">
                    {payment.name.charAt(0)}
                  </div>

                  <div className="payment-details">
                    <strong>{payment.name}</strong>
                    <span>{payment.method} Payment</span>
                  </div>
                </div>

                <div className="payment-right">

                  <strong className="payment-amount">
                    {payment.amount}
                  </strong>

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

            </Card>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Payments;