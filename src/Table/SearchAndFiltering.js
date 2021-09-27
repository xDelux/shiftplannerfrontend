const [rowdata, setRowData] = useState([])
const [filteredData, setFilteredData] = useState([])
// Searchbar functionality
const onSearchbarChange = e => {
    const value = e.target.value
    if (value === "") {
        setFilteredData(rowdata)
    } else {
        if (filteredData.length > 0) {
            const result = filteredData.filter(item => item.email === value)
            setFilteredData(result)
        } else {
            const result = rowdata.filter(item => item.email === value)
            setFilteredData(result)
        }
    }
}
// Filter functionality
const onItemClick = e => {
    console.log("e", e)
    if (e === "all") {
        setFilteredData(rowdata)
    } else {
        const result = rowdata.filter(item => item.gender === e)
        setFilteredData(result)
    }
}