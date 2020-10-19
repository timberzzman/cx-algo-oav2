function insertionSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
            let temp = array[j]
            array.splice(j, 1)
            array.splice(j - 1, 0, temp)
        }
    }
    return array
}

const array = [-2, 45, 0, -9, -11, 9]
console.log(insertionSort(array))