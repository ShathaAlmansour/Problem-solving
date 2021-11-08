function isPalindrome(x) {
  return x.toLowerCase().split("").reverse().join("") === x.toLowerCase();
}

// Teacher
// function isPalindrome (x) {
//     const str = x.toLowerCase ()
//     let length = str.length - 1
//     for (let i = 0 ; i < str.length ; i++ ) {
//         if (str [i] !== str [length-i]){
//         }
//     }
// return true
// }
