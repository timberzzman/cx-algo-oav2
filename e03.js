function selectionSort(array) {
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
console.log(selectionSort(array))