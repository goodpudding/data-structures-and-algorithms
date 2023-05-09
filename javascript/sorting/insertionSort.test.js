const insertionSort = require('./insertionSort'); // Assuming insertionSort is in a module

describe("insertionSort", () => {
  test("sorts an array of numbers", () => {
    expect(insertionSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
  });

  test("sorts an array of numbers with duplicates", () => {
    expect(insertionSort([4, 3, 2, 1, 2, 3, 4])).toEqual([1, 2, 2, 3, 3, 4, 4]);
  });

  test("sorts an array with negative numbers", () => {
    expect(insertionSort([-4, 3, -2, 1])).toEqual([-4, -2, 1, 3]);
  });

  test("sorts an array with one element", () => {
    expect(insertionSort([1])).toEqual([1]);
  });
  test("sorts an array with zero", () => {
    expect(insertionSort([0, 0, 0, 0])).toEqual([0, 0, 0, 0]);
  });
});
