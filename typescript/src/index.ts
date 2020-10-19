function bubbleSort(array: Array<number>): Array<number> {
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

function insertionSort(array: Array<number>): Array<number> {
    let result = [array]
    for (let i = 0; i < result.length; i++) {
        for (let j = i; j > 0 && result[j - 1] > result[j]; j--) {
            let temp = result[j]
            result.splice(j, 1)
            result.splice(j - 1, 0, temp)
        }
    }
    return result
}

function selectionSort(array: Array<number>): Array<number> {
    let result = [array]
    let n = result.length
    for (let i = 0; i <= n - 2; i++) {
        let min = i
        for (let j = i + 1; j <= n - 1; j++) {
            console.log(j, result[j], result[min])
            if (result[j] < result[min]){
                min = j
            }
        }
        if (min != i) {
            let temp = result[i]
            result[i] = result[min]
            result[min] = temp
        }
    }
    return result
}

const array = [-2, 45, 0, -9, -11, 9]

console.log(bubbleSort(array))
console.log(insertionSort(array))
console.log(selectionSort(array))