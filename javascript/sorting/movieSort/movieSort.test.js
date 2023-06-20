const { sortByYear, sortAlphabetically } = require('./movieSort');

describe("Movie Sorting", () => {

  test("Should sort movies by year in ascending order", () => {
    const movies = [
      { title: "Inception", year: 2010 },
      { title: "The Matrix", year: 1999 },
      { title: "Interstellar", year: 2014 }
    ];

    const sortedMovies = sortByYear(movies);

    expect(sortedMovies[0].year).toBe(1999);
    expect(sortedMovies[1].year).toBe(2010);
    expect(sortedMovies[2].year).toBe(2014);
  });

  test("Should sort movies alphabetically, ignoring articles", () => {
    const movies = [
      { title: "The Matrix", year: 1999 },
      { title: "A Beautiful Mind", year: 2001 },
      { title: "Inception", year: 2010 }
    ];

    const sortedMovies = sortAlphabetically(movies);

    expect(sortedMovies[0].title).toBe("A Beautiful Mind");
    expect(sortedMovies[1].title).toBe("Inception");
    expect(sortedMovies[2].title).toBe("The Matrix");
  });

});

