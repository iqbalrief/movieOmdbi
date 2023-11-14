
export const formatCurrency = (amount) => {
    if (typeof amount === 'number') {
      return amount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
    } else {
      return 'Invalid Amount';
    }
  };
  