function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const newArray = [];
  numbers.forEach(number => {
  if (number % 2 === 0) {
      newArray.push(number + value);
  };
     newArray.push(number);
  });
   return newArray;
    // Пиши код выше этой строки
}
 
console.log(changeEven([1, 2, 3, 4, 5], 10));


// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//    const newNumbers = [];
//   numbers.forEach(number => number % 2 === 0 ? newNumbers.push(number + value) : newNumbers.push(number));
//   return newNumbers;
//     // Пиши код выше этой строки
// }
  
// console.log(changeEven([1, 2, 3, 4, 5], 10));