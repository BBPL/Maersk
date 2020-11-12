
export const date = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateTime = new Date()
    const day = dateTime.getDate()
    const month = months[dateTime.getMonth()]
    const year = dateTime.getFullYear()
    return `${day} ${month} ${year}`
}

export const randomDate = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dateTime = new Date()
    const day = Math.floor(Math.random() * 31) + 1
    const randMonth = Math.floor(Math.random() * 12 ) +1
    const month = months[randMonth]
    const year = Math.floor(Math.random() * (dateTime.getFullYear()+5 - dateTime.getFullYear()+1)) + dateTime.getFullYear()
    return `${day} ${month} ${year}`
}

