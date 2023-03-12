export const dollarCurrancy = new Intl.NumberFormat('pl', {
  style: 'currency',
  currency: 'USD',
  currencyDisplay: 'symbol',
  minimumFractionDigits: 0,
});

export const formatToDollars = (value: number) => dollarCurrancy.format(value);
