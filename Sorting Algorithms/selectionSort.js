function selectionSort(arr) {
  // Selection Sort Algorithm
  // We loop through the array and find the min value.
  // Once we have the min value we place it at the front of the array.
  // Then we iterate through the array where the length of the array we iterate over is now n - 1,
  // since we're going to be iterating through all values except where the min value was just finished beng placed at.
  // Every iteration, our range of the array we're iterating over will shrink, finding the new min at each new sub array we're iterating over
  // and placing the new found in at the beginning of that sub array, until we reach the end.

  // We need to initialize the front pointer, i.
  let i = 0;

  // We need to loop over the array
  while (i < arr.length) {
    // We also need to initialize the traversing pointer, j.
    let j = i;
    // And we also need to rememeber the min value;
    let min = Infinity;

    while (j < arr.length) {
      const current = arr[j];
      min = Math.min(current, min);
      ++j;
    }
    // We also need to keep track of the index of min
    let minIndex = arr.indexOf(min);

    // once we get to this part of the algorithm, we'd have found the min in the sub array from i to arr.length
    // so then we just swap the elments at i and the index of min
    console.log(arr, arr[i], arr[minIndex]);
    // We swap the values at the beginning of our sub array and the element at minIndex.
    swap(i, minIndex, arr);
    // Then we increment i to adjust the window of out sub array.
    ++i;
  }
}

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [3, 11, 5, -934, 121, -1];
console.log("Before selection sort: [" + arr + "]");
selectionSort(arr);
console.log("After selection sort: [" + arr + "]\n");

const arr2 = [-3, -11, -5, -934, -121, -1];
console.log("Before selection sort: [" + arr2 + "]");
selectionSort(arr2);
console.log("After selection sort: [" + arr2 + "]\n");

const arr3 = [3, -1];
console.log("Before selection sort: [" + arr3 + "]");
selectionSort(arr3);
console.log("After selection sort: [" + arr3 + "]\n");

const arr4 = [-1];
console.log("Before selection sort: [" + arr4 + "]");
selectionSort(arr4);
console.log("After selection sort: [" + arr4 + "]\n");

const arr5 = [];
console.log("Before selection sort: [" + arr5 + "]");
selectionSort(arr5);
console.log("After selection sort: [" + arr5 + "]\n");
