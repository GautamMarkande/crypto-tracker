const CurrencyFormatter = ({ amount }) => {
    // Format the amount using Intl.NumberFormat
    const formattedAmount = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  
    return <div>{formattedAmount}</div>;
  };
  export default CurrencyFormatter