// Time Complexity: O(n^2) because we're checking each element with every other element.
// Space Complexity: O(1) because we're sorting inplace, and not using any auxillary space.

function bubbleSort(arr) {
  // Bubble Sort Algorithm
  // We keep a pointer at the end of the array and another at the front of the array.
  // We loop the front pointer until we get to the back pointer, comparing each element the pointers are pointing at.
  // At the end of each iteration we decrement the back pointer by 1, and continue the comparison.
  // We halt once the front pointer = 0;

  // We initialize the back pointer, i.
  for (let i = arr.length - 1; i >= 0; i--) {
    // We initialize the front pointer, j.
    for (let j = 0; j < i; j++) {
      const bubbledUpElement = arr[i];
      const current = arr[j];
      // If the front pointer is greater than the back pointer we swap the element;
      if (current > bubbledUpElement) {
        swap(i, j, arr);
      }
    }
  }
}

function swap(i, j, arr) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [3, 11, 5, -934, 121, -1];
console.log("Before bubble sort: [" + arr + "]");
bubbleSort(arr);
console.log("After bubble sort: [" + arr + "]\n");

const arr2 = [-3, -11, -5, -934, -121, -1];
console.log("Before bubble sort: [" + arr2 + "]");
bubbleSort(arr2);
console.log("After bubble sort: [" + arr2 + "]\n");

const arr3 = [3, -1];
console.log("Before bubble sort: [" + arr3 + "]");
bubbleSort(arr3);
console.log("After bubble sort: [" + arr3 + "]\n");

const arr4 = [-1];
console.log("Before bubble sort: [" + arr4 + "]");
bubbleSort(arr4);
console.log("After bubble sort: [" + arr4 + "]\n");

const arr5 = [];
console.log("Before bubble sort: [" + arr5 + "]");
bubbleSort(arr5);
console.log("After bubble sort: [" + arr5 + "]\n");
