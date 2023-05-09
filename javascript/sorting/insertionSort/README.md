# Insertion Sort Algorithm

This project includes an implementation of the Insertion Sort algorithm in JavaScript.

## Description

The Insertion Sort algorithm sorts an array by dividing it into a sorted and an unsorted region. The sorted region starts with the first element only, then on each repetition, it includes the next element of the unsorted region.

The insertion sort works by taking one element from the unsorted region and inserting it into the correct position in the sorted region. This process repeats until the unsorted region is empty and the array is sorted.

## Code

The core of the project is the `insertionSort` function, which sorts an array in-place:

```javascript
function insertionSort(input) {
  if (input.length <= 1) {
    return input;
  }

  for (let i = 1; i < input.length; i++) {
    let key = input[i];
    let j = i - 1;

    while (j >= 0 && input[j] > key) {
      input[j + 1] = input[j];
      j = j - 1;
    }

    input[j + 1] = key;
  }

  return input;
}

## Diagram

![Diagram](./InsertionSort.png)


