const { mergeSort } = require('./mergeSort'); 

describe('mergeSort', () => {
  test('sorts an array of numbers', () => {
    const unsorted = [3, 2, 1];
    const sorted = [1, 2, 3];
    mergeSort(unsorted);
    expect(unsorted).toEqual(sorted);
  });

  test('sorts an array with duplicate numbers', () => {
    const unsorted = [3, 2, 2, 1, 3];
    const sorted = [1, 2, 2, 3, 3];
    mergeSort(unsorted);
    expect(unsorted).toEqual(sorted);
  });

  test('sorts an array with negative numbers', () => {
    const unsorted = [-3, -1, -2];
    const sorted = [-3, -2, -1];
    mergeSort(unsorted);
    expect(unsorted).toEqual(sorted);
  });

  test('sorts an empty array', () => {
    const unsorted = [];
    const sorted = [];
    mergeSort(unsorted);
    expect(unsorted).toEqual(sorted);
  });

  test('sorts an array with one element', () => {
    const unsorted = [1];
    const sorted = [1];
    mergeSort(unsorted);
    expect(unsorted).toEqual(sorted);
  });

  test('sorts an array with two elements', () => {
    const unsorted = [2, 1];
    const sorted = [1, 2];
    mergeSort(unsorted);
    expect(unsorted).toEqual(sorted);
  });
});
