export const LINKS_MINUTES = [{ value: '00' }, { value: '30' }]
export const LINKS_HOURS = [{ value: '00' }, { value: '01' }, { value: '02' }, { value: '03' }, { value: '04' }, { value: '05' }, { value: '06' }, { value: '07' }, { value: '08' }, { value: '09' }, { value: '10' }, { value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' }, { value: '16' }, { value: '17' }, { value: '18' }, { value: '19' }, { value: '20' }, { value: '21' }, { value: '22' }, { value: '23' }]

export function getAllMonth() {
  const linksMonth = []
  for (let i = 1; i <= 12; i++) {
    if (i < 10) {
      i = '0' + i
    }
    linksMonth.push({ value: i.toString() })
  }
  return linksMonth
}
