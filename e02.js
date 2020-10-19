function insertionSort(array) {
    let result = array
    for (let i = 0; i < result.length; i++) {
        for (let j = i; j > 0 && result[j - 1] > result[j]; j--) {
            let temp = result[j]
            result.splice(j, 1)
            result.splice(j - 1, 0, temp)
        }
    }
    return result
}

const array = [-2, 45, 0, -9, -11, 9]
console.log(insertionSort(array))