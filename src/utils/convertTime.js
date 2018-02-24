export default function convertTime (timeObj) {
  const year = timeObj.getFullYear()
  const month = timeObj.getMonth() + 1
  const date = timeObj.getDate()
  return year + '-' + month + '-' + date
}
