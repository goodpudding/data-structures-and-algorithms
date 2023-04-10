"use strict";

// Require our linked list implementation
const LinkedList = require("../index");

describe("Testing the Linked List data structure", () => {
  test("Can successfully instantiate an empty linked list", () => {
    let newList = new LinkedList();
    expect(newList).toBeTruthy();
  });

  test("Can properly insert into the linked list", () => {
    let newList = new LinkedList();
    newList.insert("Tacos");
    expect(newList.traverse().value).toEqual("Tacos");
  });

  test("The head property will properly point to the first node in the linked list", () => {
    let newList = new LinkedList();
    newList.insert("Tacos");
    newList.append("Cheese");
    newList.append("Pizza");
    expect(newList.head.value).toEqual("Tacos");
  });

  test("Can properly insert multiple nodes into the linked list", () => {
    let newList = new LinkedList();
    newList.insert("Tacos");
    newList.append("Cheese");
    newList.append("Pizza");
    expect(newList.includes("Tacos")).toEqual(true);
    expect(newList.includes("Cheese")).toEqual(true);
    expect(newList.includes("Pizza")).toEqual(true);
  });

  test("Will return true when finding a value within the linked list that exists", () => {
    let newList = new LinkedList();
    newList.insert("Tacos");
    newList.append("Cheese");
    newList.append("Pizza");
    let isTrue = false;
    if (newList.includes("Cheese")) {
      isTrue = true;
    }
    expect(isTrue).toEqual(true);
    expect(newList.includes("Tacos")).toEqual(true);
    expect(newList.includes("Cheese")).toEqual(true);
    expect(newList.includes("Pizza")).toEqual(true);
  });

  test("Will return false when searching for a value in the linked list that does not exist", () => {
    let newList = new LinkedList();
    newList.insert("Tacos");
    newList.insert("Cheese");
    newList.insert("Pizza");
    expect(newList.includes("Salad")).toEqual(false);
  });

  test("Can properly return a collection of all the values that exist in the linked list", () => {
    let newList = new LinkedList();
    newList.insert("Tacos");
    newList.append("Cheese");
    newList.append("Pizza");
    expect(newList.toString(newList)).toEqual(
      "{ Tacos } -> { Cheese } -> { Pizza } -> NULL"
    );
  });
});

describe("Tesing for lab 6", () => {
  test("Can successfully add a node to the end of the linked list", () => {
    
  });
  test("Can successfully add multiple nodes to the end of a linked list", () => {});
  test("Can successfully insert a node before a node located i the middle of a linked list", () => {});
  test("Can successfully insert a node before the first node of a linked list", () => {});
  test("Can successfully insert after a node in the middle of the linked list", () => {});
  test("Can successfully insert a node after the last node of the linked list", () => {});
});
