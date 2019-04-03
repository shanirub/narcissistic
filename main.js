narcissistic(153)

function narcissistic(value) {
    console.log(value)
    // Code me to return true or false
    var digitSum = value.toString().split('').map(x => x ** value.length)
        .reduce(function (accumulator, currentValue) {
            return accumulator + currentValue
        })
    if (Number(digitSum) == value) {
        console.log("true")
        return true
    }
    else {
        console.log("false")
        return false
    }
}