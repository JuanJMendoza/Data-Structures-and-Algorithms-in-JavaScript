function insertionSort(arr){
  // algorithm
  // we want a pointer to keep track of the exploring pointer
  let pointer = 1;
  // now we want to iterate through the array with the exploring pointer until the last element
  while (pointer < arr.length){
  // current will reinitialize at pointer at every iteration
  let current = pointer;
  // we want to also make another pointer, traverse, that will traverse back and compare itself to the element at current
  let traverse = pointer - 1;
      
  // now we want to compare the element at the current pointer and compare it to the elements before it and while the element at the current pointer is less than a previous element...
  while(arr[traverse] > arr[current]){
    console.log('Is ' + arr[traverse] + ' > ' + arr[current] + '?', arr)
    // ... we want to continue swapping them
    swap(arr, current, traverse);
    console.log('swaped: ',arr[traverse] , arr[current], arr)
  
    // and we only want to decrement traverse if its greater than 0 b/c if the firs 2 elements are unsorted and traverse is at 0, traverse will decrement to -1 and the while loop check will break
    if(traverse > 0){
      // we decrement traverse and current so we're constantly check if arr[traverse] > arr[current]
      --traverse;
      --current;
    }
  }
  // after we've inserted the element at the current pointer in the right place we want to incrememnt the exploring pointer by 1 so in the next iteration traverse & current will recalibrate accordingly to pointer and pointer - 1
  ++pointer;
  }
}
  
function swap(arr, curr, trav){
  const temp = arr[curr];
  arr[curr] = arr[trav];
  arr[trav] = temp;
}
  
  const arr = [3,11,5,-934,121,-1];
  console.log('Before insertion sort: [' + arr + ']')
  insertionSort(arr);
  console.log('After insertion sort: [' + arr + ']\n')
  
  const arr2 = [-3,-11,-5,-934,-121,-1];
  console.log('Before insertion sort: [' + arr2 + ']')
  insertionSort(arr2);
  console.log('After insertion sort: [' + arr2 + ']\n')
  
  const arr3 = [3,-1];
  console.log('Before insertion sort: [' + arr3 + ']')
  insertionSort(arr3);
  console.log('After insertion sort: [' + arr3 + ']\n')
  
  const arr4 = [-1];
  console.log('Before insertion sort: [' + arr4 + ']')
  insertionSort(arr4);
  console.log('After insertion sort: [' + arr4 + ']\n')
  
  const arr5 = [];
  console.log('Before insertion sort: [' + arr5 + ']')
  insertionSort(arr5);
  console.log('After insertion sort: [' + arr5 + ']\n')