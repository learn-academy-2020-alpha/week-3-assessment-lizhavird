// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// function fib() {
// //     let array = []
// //     for (let i=0;i<10;i++) {
// //     if (i===1 ||i=== 0)
// //         array.push(1)
// //     else 
// //      array.push (array [i-1] + array [i-2])
    
// // }
// //         return array
// // //     }
// // // console.log(fib())
// // // // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// //             //keeps returning undefined, i'm not sure why
// // var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // // // // Expected output: [-9, 9, 7, 199]
// // // // var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // // // // Expected output: [-823, 7, 23]

// // const isOdd = (array) => {
// //     const filtered = array.filter(function(x) {
// //         if(typeof(array) === "number" &&  x % 2 === 1 ||  x % 2 === -1 )
    
// //             return array.sort();
// //     //     } 
// //     })

// // }

// // console.log(isOdd(fullArr1))
// // // // --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

//                 //can we go over this at lunch?
        
// // var middleLetters1 = "hello"
// // // // // Expected output: “l”
// // var middleLetters2 = "rhinoceros"
// // // // // Expected output: “oc”

// // var split = middleLetters1.split(" ");

// // //splits word into individual strings in a new array
// // //once word is in it's own array, .length indicates the length of the array 
// // // 
// // var middle = Math.floor(middleLetters1.length / 2);





// // // --------------------4) Create a class to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

// class Sphere {
//     constructor (sphere) {
//         this.volume = 4 * Math.PI * radius * radius 
// }
//     string (){
//         return `the radius of the sphere is  ${this.volume}`
//     }
// }

// let sphere1 = this.volume = 4
// let sphere 2 = this.volume = 2
// let sphere 3 = this.volume = 6

// // --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// function additUp() {
//     let array = []
//     for (let i=0;i<array.length;i++) {
  
//         return i++array.length
//     }
    
// }

// console.log(additUp(numbersToAdd1))

var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]
// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
// var numbersToAdd3 = []
// // Expected output: []
 

function additUp (array) {

    var arrayTotal =array.length; 
    var totalSum = 0;

    for(var x = 0; x < arrayTotal; x++){
        totalSum += array[x];
    }

    return(totalSum); 
}

console.log (additUp (numbersToAdd1))