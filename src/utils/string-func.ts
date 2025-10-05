export const getInitialName = (name: string) => {
  return name
  // const splitName = name.split(' ')
  // //   console.log(splitName[0][0]?.toUpperCase())
  // if (splitName.length === 1) {
  //   return splitName[0][0]?.toUpperCase() || ''
  // } else {
  //   return (
  //     splitName[0][0] +
  //       (splitName[splitName.length - 1][0]?.toUpperCase() || '')
  //   )
  // }
}
  
export const getForenCensorName = (name: string) => {
  const splitName = name.split(' ')
  const cencorName = splitName[1].replace(splitName[1].substring(1, splitName[1].length), '*'.repeat(2))
  return splitName[0] + ' ' + cencorName
}
  
export const getCensorName = (nama: string) => {
  const splitName = nama.split(' ')
  const newName: string[] = []
  splitName.map(e =>
    newName.push(e.replace(e.substring(1, e.length), '*'.repeat(e.length - 1))),
  )
  return newName.join(' ')
}
  
export const getNickName = (name: string) => {
  const splitName = name.split(' ')
  // const markName = splitName[1].replace(splitName[1].substring(1, splitName[1].length), '.'.repeat(1))
  return splitName[0] + ' ' + splitName[1]?.[0] + '.'
}

export const capitalizeWords = (str:string) => {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') 
}

export const isEmpty = (val: string | boolean | number | undefined | Date) => 
  val === '' || val === undefined || val === null ? true : false