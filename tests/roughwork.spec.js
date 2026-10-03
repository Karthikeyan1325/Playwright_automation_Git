const numbers = [10, 45, 23, 89, 12, 67];

let largest = numbers[0]

for(let i = 1;i<numbers.length;i++){

    if(numbers[i]>largest){

        largest = numbers[i]
        console.log(largest)
    }

}

console.log("Largest number is: " + largest)
