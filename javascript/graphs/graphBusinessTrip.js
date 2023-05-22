function businessTrip(graph, cities) {
  let cost = 0;

  for (let i = 0; i < cities.length - 1; i++) {
    const currentCity = cities[i];
    const nextCity = cities[i + 1];

    // If there's no direct flight from currentCity to nextCity, return null
    if (!graph[currentCity] || !(nextCity in graph[currentCity])) {
      return null;
    }

    cost += graph[currentCity][nextCity];
  }

  // If the cost is 0 (i.e., no flights were found), return null
  if (cost === 0) {
    return null;
  }

  return cost;
}



module.exports = businessTrip;
