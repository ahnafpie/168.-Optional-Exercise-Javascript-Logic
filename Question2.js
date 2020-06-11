const answer = (arr, num) => {
  let result = [];
  arr.forEach((element, i) => {
    let cArr = [].concat(arr);
    cArr.splice(i, 1);
    cArr.forEach((cElement) => {
      if (element + cElement === num) {
        if (
          result.includes(element) === false &&
          result.includes(cElement) === false
        ) {
          result.push(element);
          result.push(cElement);
        }
      }
    });
  });
  console.log(result);
};

answer([1, 2, 3, 4], 5);
