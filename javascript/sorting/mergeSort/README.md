# Merge Sort

Merge Sort is an efficient, stable sorting algorithm that works on the principle of Divide and Conquer. It repeatedly breaks down a list into several sublists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.

## Description

The key idea behind Merge Sort is that it's easier to sort two sorted lists rather than one unsorted one. First, the unsorted list is divided into N sublists, each containing one element (a list of one element is considered sorted). Then repeatedly merge the sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

## Diagram

![Merge Sort Diagram](./mergeSort.png)

## Time Complexity

The time complexity of Merge Sort is O(nLogn) in all the three cases (worst, average, and best) as merge sort always divides the array into two halves and takes linear time to merge two halves.

## Space Complexity

The space complexity of Merge sort is O(n) because an equal size of auxiliary space (n) is needed.
