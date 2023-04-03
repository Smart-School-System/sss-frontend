export const searchFilter = (searchBy, arr) => {
    //const name = arr
    return arr.filter(item => (`${item.first_name} ${item.last_name}`).toLowerCase().includes(searchBy.toLowerCase()))
}