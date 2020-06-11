const dArray = [1, 2, 4, 591, "7", 392, 391, "3", "4", 2, 5, 10, 2, 1, 1, 1, 20, 20, "2", "3"];

// sorting all the Elements of the array
const sortedArray = dArray.sort((a, b) => a - b);

// generating array for same numbers
let init = [];
// generating array for all numbers and same numbers array
let nestArr = [];
// generating array for same stings
let strArr = [];
// generating array for all string and same string array
let strfull = [];
// generating array for output array
let full = [];

sortedArray.forEach((num, i) => {
  // checking the elements of array is a number or string
  if (typeof num == "number") {
    //   if it is a number and it's same to it's next element
    if (sortedArray[i] === sortedArray[i + 1]) {
      // pushing the number in the init array
      init.push(sortedArray[i]);
      // this if logic won't push the last of the same number series as it's checking
      // the number either it's same to the next or not, the next next of a series will not same
      // so else if is checking the number if it's same to the previous number and pushing to init array
      // and push the init array in the nestArr array which is created for all number elements
      // this else if will be only used for the last element of a seires
    } else if (sortedArray[i] === sortedArray[i - 1]) {
      init.push(sortedArray[i]);
      nestArr.push(init);
      // once a same number array is complete , init method is cleaned for the next series
      init = [];
      // if number is not in a same series , pushing to the all number array
    } else {
      nestArr.push(num);
    }
    //   the else is for string element and all the logics are same as used for number element
  } else {
    if (sortedArray[i] === sortedArray[i + 1]) {
      strArr.push(sortedArray[i]);
    } else if (sortedArray[i] === sortedArray[i - 1]) {
      strArr.push(sortedArray[i]);
      strfull.push(strArr);
      strArr = [];
    } else {
      strfull.push(num);
    }
  }
});

// pushing the number and string array to the final array
full.push(nestArr);
full.push(strfull);
console.log(full);
