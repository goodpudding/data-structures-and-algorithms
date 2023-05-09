  function insert(sorted, value) {
  let i = 0;
  while (value > sorted[i]) {
    i++;
  }

  for (; i < sorted.length; i++) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
  }

  sorted.push(value);
}

function insertionSort(input) {
  let sorted = [];
  sorted[0] = input[0];

  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }

  return sorted;
}

module.exports = insertionSort;
