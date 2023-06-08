/**
 * @param {string} money
 * @returns {String}
 */
export function formatVnMoney(money) {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  })
  return money !== '' && money !== null && money !== undefined ? formatter.format(money) : ''
}

export function formatInteger(value) {
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
