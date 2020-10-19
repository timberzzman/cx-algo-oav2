function bubbleSort(array, mode) {
    let result = []
    result.push(array[0])
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j <= result.length && j < array.length; j++) {
            if (j == result.length)
            {
                result.push(array[i])
                break
            }
            else if (array[i] < result[j])
            {
                result.splice(j, 0, array[i])
                break
            }
        }
    }
    return result
}

const array = [-2, 45, 0, -9, -11, 9]

console.log(bubbleSort(array))