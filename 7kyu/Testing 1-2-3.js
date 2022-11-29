// Solution 1
// const number = array => {
//   let newArray = [];
  
//   for (let i = 0; i < array.length; i++) {
//     let str = array[i];
//     newArray.push(`${i + 1}: ${str}`);
//   }
  
//   return newArray;
// }

// Solution 2
// const number = inputArr => {
//   let outputArr = [];
//   for (const i in inputArr) {
//     outputArr.push(`${parseInt(i) + 1}: ${inputArr[i]}`)
//   }
//   return outputArr;
// }

// Solution 3
const number = array => {
  return array.map((str, index) => {
    return `${index + 1}: ${str}`;
  })
}