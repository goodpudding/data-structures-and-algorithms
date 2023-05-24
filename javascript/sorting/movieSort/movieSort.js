function sortByYear(movies) {
  const sortedMovies = [];
  movies.forEach(movie => {
    let inserted = false;
    for (let i = 0; i < sortedMovies.length; i++) {
      if (movie.year > sortedMovies[i].year) {
        sortedMovies.splice(i, 0, movie);
        inserted = true;
        break;
      }
    }
    if (!inserted) {
      sortedMovies.push(movie);
    }
  });
  return sortedMovies;
}

function sortAlphabetically(movies) {
  const sortedTitles = [];
  movies.forEach((movie, index) => {
    let title = movie.title.replace(/^(a|an|the)\s+/i, '');
    sortedTitles.push({ title: title, index: index });
  });
  sortedTitles.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return a.index - b.index;
  });
  const sortedMovies = [];
  sortedTitles.forEach(title => {
    sortedMovies.push(movies[title.index]);
  });
  return sortedMovies;
}


module.exports = { sortByYear, sortAlphabetically }
;
