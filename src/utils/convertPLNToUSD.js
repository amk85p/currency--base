export const convertPLNToUSD = (PLN) => {
  const PLNtoUSD = PLN / 3.5;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const F = formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');

  console.log(PLN, F, typeof PLN);

  if (typeof PLN === 'object' || typeof PLN === 'function') {
    return 'Error';
  }
  if (
    (Number.isInteger(PLN) === false && typeof PLN === 'string') ||
    typeof PLN === 'undefined'
  ) {
    return parseInt(formatter.format(PLNtoUSD).replace(/\u00a0/g, ' '));
  }
  if (PLN < 0) {
    return '$0.00';
  }

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
};
