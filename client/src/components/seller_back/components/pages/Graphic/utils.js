import moment from 'moment'

export function formatDateMoment(stringDate, formatMoment, formatFinal) {
  const date = moment(stringDate, formatMoment)
  return date.isValid() ? date.format(formatFinal) : ''
}

export function formatPorcentage(value) {
  return value.toString().replace('.', ',')
}

const numberFormatterDecimal = (c, i, a) =>
  i && c !== '.' && (a.length - i) % 3 === 0 ? `.${c}` : c

export const formatNumberDecimal = number =>
  number.toString().replace(/./g, numberFormatterDecimal)
