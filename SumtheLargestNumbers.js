/*
Sums the two largest numbers in an array of numbers.*/
function sumLargestNumbers(data) {
    // Ensure the array is sorted large -> small
    data = data.sort(function (a, b) {
        return b - a;
    });
    return data[0] + data[1];
};
console.log(sumLargestNumbers([1, 10])); // > 11
console.log(sumLargestNumbers([1, 2, 3])); // > 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); // > 126