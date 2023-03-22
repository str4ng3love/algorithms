import { sortedArr, arr } from "./array.js";

export function Binary_Search(arr, x) {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let middle = Math.floor((first + last) / 2);

    if (arr[middle] === x) {
      return middle;
    } else if (arr[middle] < x) {
      first = middle + 1;
    } else if (arr[middle] > x) {
      last = middle - 1;
    }
  }
  return null;
}
let result;
result = Binary_Search(sortedArr, 7);
verify(result);
result = Binary_Search(sortedArr, 1);
verify(result);

export function verify(res) {
  if (!res) {
    console.log("Value not found.");
  } else {
    console.log(`Target found at index ${res}`);
  }
}
