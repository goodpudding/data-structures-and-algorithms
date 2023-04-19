class NewAnimal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.cats = null;
    this.dogs = null;
  }

  traverseCats() {
    let current = this.cats;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  traverseDogs() {
    let current = this.dogs;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  enqueue(animal) {
    if (animal.species === "cats") {
      if (this.cats === null) {
        this.cats = animal;
      } else {
        let lastCat = this.traverseCats();
        lastCat.next = animal;
      }
    }
    if (animal.species === "dogs") {
      if (this.dogs === null) {
        this.dogs = animal;
      } else {
        let lastDog = this.traverseDogs();
        lastDog.next = animal;
      }
    }
  }
  dequeue(pref) {
    if (pref === "cats") {
      if (this.cats === null) {
        return null; // No more cats available
      } else {
        let adoptedCat = this.cats;
        this.cats = this.cats.next;
        adoptedCat.next = null;
        return adoptedCat;
      }
    } else if (pref === "dogs") {
      if (this.dogs === null) {
        return null; // No more dogs available
      } else {
        let adoptedDog = this.dogs;
        this.dogs = this.dogs.next;
        adoptedDog.next = null;
        return adoptedDog;
      }
    } else {
      // If no preference is specified, adopt a cat first, then a dog
      if (this.cats !== null) {
        let adoptedCat = this.cats;
        this.cats = this.cats.next;
        adoptedCat.next = null;
        return adoptedCat;
      } else if (this.dogs !== null) {
        let adoptedDog = this.dogs;
        this.dogs = this.dogs.next;
        adoptedDog.next = null;
        return adoptedDog;
      } else {
        return null; // No more pets available
      }
    }
  }

}

module.exports = AnimalShelter;
