export const formatDate = (dt: number): string => {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const date = new Date(dt * 1000);

  return `${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
}

export const formatTemp = (temp: number): string => {
  if (temp < 0) {
    return `${Math.floor(temp)}°`
  } else {
    return `+${Math.floor(temp)}°`
  }
}

export const getItemsPerPage = (arr: any, current: number): any => {
  return arr.slice(((current * 3) - 3), current * 3);
}