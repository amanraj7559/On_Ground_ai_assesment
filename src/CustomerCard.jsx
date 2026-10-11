// Displays the details of the customer that the agent currently has loaded.
function CustomerCard({ customer }) {
  if (!customer) {
    return (
      <section className="customer-card empty">
        <p>No active call. Accept a call from the queue to see customer details.</p>
      </section>
    );
  }

  return (
    <section className="customer-card">
      <h2>Customer Information</h2>
      <div className="customer-details">
        <p>
          <strong>Name:</strong> {customer.name}
        </p>
        <p>
          <strong>Phone:</strong> {customer.phone}
        </p>
        <p>
          <strong>Email:</strong> {customer.email}
        </p>
        <p>
          <strong>Account Status:</strong>{" "}
          <span className={`account-status status-${customer.accountStatus.toLowerCase().replace(" ", "-")}`}>
            {customer.accountStatus}
          </span>
        </p>
      </div>

      <h3>Past Interactions</h3>
      <ul className="history-list">
        {customer.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </section>
  );
}

export default CustomerCard;
