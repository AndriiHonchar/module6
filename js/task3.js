function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  firstArray.forEach(function(item){
  if (secondArray.includes(item)) {
        commonElements.push(item);
      }
  })
      return commonElements;
    // Пиши код выше этой строки
  }