import { sortedArr } from "./array.js";

function Recursive_Binary_Search(arr, value) {

   
  if (arr.length === 0) {
    return false;
  } else {
    let midpoint = Math.floor(arr.length/2);
    
    if (arr[midpoint] === value) {
      return midpoint;
    } else {
      if (arr[midpoint] < value) {
        return Recursive_Binary_Search(
          arr.splice(midpoint + 1, arr.length),
          value
        );
      } else {
        return Recursive_Binary_Search(arr.splice(0, midpoint), value);
      }
    }
  }
}

function ver(result) {
  if (!result) {
    console.log("Value not found.");
  } else {
    console.log(`Target found at index ${result}`);
  }
}
let result = Recursive_Binary_Search(sortedArr, 6);
ver(result);
