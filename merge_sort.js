function Merge_Sort(arr) {
  if (arr.length <= 1) return arr;
  else {
    let [left_half, right_half] = Split(arr);

    let left = Merge_Sort(left_half);
    let right = Merge_Sort(right_half);
    return Merge(left, right);
  }

  function Split(arr) {
    let middle = Math.floor(arr.length / 2);
    let left = arr.splice(0, middle);
    let right = arr;

    return [left, right];
  }
  function Merge(arrA, arrB) {
    let arr = [];
    let i = 0;
    let j = 0;
    while (i < arrA.length && j < arrB.length) {
      if (arrA[i] < arrB[j]) {
        arr.push(arrA[i]);
        i += 1;
      } else {
        arr.push(arrB[j]);
        j += 1;
      }
    }
    while (i < arrA.length) {
      arr.push(arrA[i]);
      i += 1;
    }
    while (j < arrB.length) {
      arr.push(arrB[j]);
      j += 1;
    }

    return arr;
  }
}
let result = Merge_Sort([4, 5, 8, 64, 322, 75]);

console.log(result);
