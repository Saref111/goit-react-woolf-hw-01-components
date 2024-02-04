import css from './TransactionHistory.module.scss';

export const TransactionHistory = ({ items }) => {
  const tableItems = items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));

  const tableBody = (
    <tbody>
      {tableItems?.length ? (
        tableItems
      ) : (
        <tr>
          <td colSpan="3">No transactions</td>
        </tr>
      )}
    </tbody>
  );
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {tableBody}
    </table>
  );
};
