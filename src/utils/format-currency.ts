import numeral from 'numeral'

export const formatCurrency = (amount: number) =>
  numeral(amount).format('$0,0.00')
