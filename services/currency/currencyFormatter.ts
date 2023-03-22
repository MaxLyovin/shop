export const zlotyCurrancy = new Intl.NumberFormat('pl', {
  style: 'currency',
  currency: 'PLN',
  currencyDisplay: 'symbol',
  minimumFractionDigits: 0,
});

export const formatToZloty = (value: number) => zlotyCurrancy.format(value / 100);
