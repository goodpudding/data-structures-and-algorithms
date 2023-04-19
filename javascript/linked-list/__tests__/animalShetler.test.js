const AnimalShelter = require('../AnimalShelter');

describe('AnimalShelter class', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  describe('enqueue method', () => {
    it('should enqueue a cat', () => {
      shelter.enqueue({ name: 'Fluffy', species: 'cats' });
      expect(shelter.cats).toBeTruthy();
      expect(shelter.cats.name).toEqual('Fluffy');
    });

    it('should enqueue a dog', () => {
      shelter.enqueue({ name: 'Rex', species: 'dogs' });
      expect(shelter.dogs).toBeTruthy();
      expect(shelter.dogs.name).toEqual('Rex');
    });

    it('should not enqueue an animal if the species is not cat or dog', () => {
      shelter.enqueue({ name: 'Bunny', species: 'rabbit' });
      expect(shelter.cats).toBeFalsy();
      expect(shelter.dogs).toBeFalsy();
    });
  });

  describe('dequeue method', () => {
    it('should dequeue a cat', () => {
      shelter.enqueue({ name: 'Fluffy', species: 'cats' });
      shelter.enqueue({ name: 'Mittens', species: 'cats' });
      const adoptedCat = shelter.dequeue('cats');
      expect(adoptedCat).toBeTruthy();
      expect(adoptedCat.name).toEqual('Fluffy');
      expect(shelter.cats.name).toEqual('Mittens');
    });

    it('should dequeue a dog', () => {
      shelter.enqueue({ name: 'Rex', species: 'dogs' });
      shelter.enqueue({ name: 'Max', species: 'dogs' });
      const adoptedDog = shelter.dequeue('dogs');
      expect(adoptedDog).toBeTruthy();
      expect(adoptedDog.name).toEqual('Rex');
      expect(shelter.dogs.name).toEqual('Max');
    });

    it('should return a cat if the preference is not cat or dog', () => {
      shelter.enqueue({ name: 'Fluffy', species: 'cats' });
      const adoptedPet = shelter.dequeue('rabbit');
      expect(adoptedPet.name).toEqual('Fluffy');
      expect(shelter.cats).toEqual();
    });

    it('should return null if there are no pets that match the preference', () => {
      shelter.enqueue({ name: 'Fluffy', species: 'cats' });
      const adoptedPet = shelter.dequeue('dogs');
      expect(adoptedPet).toBeNull();
      expect(shelter.cats.name).toEqual('Fluffy');
    });
  });
});
