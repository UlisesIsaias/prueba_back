import { City } from './city';

export class TSPSolver {
  private visited: Set<number> = new Set();

  solve(cities: City[]): { route: number[]; totalDistance: number } {
    if (cities.length === 0) {
      return { route: [], totalDistance: 0 };
    }

    const route: number[] = [];
    let currentCity = cities[0];
    this.visited.clear(); 
    this.visited.add(currentCity.id);
    route.push(currentCity.id);

    let totalDistance = 0;

    while (this.visited.size < cities.length) {
      const nextCity = this.findNearestCity(currentCity, cities);
      if (!nextCity) break;

      totalDistance += currentCity.distanceTo(nextCity);
      currentCity = nextCity;
      this.visited.add(currentCity.id);
      route.push(currentCity.id);
    }

    
    const firstCity = cities[0];
    totalDistance += currentCity.distanceTo(firstCity);
    route.push(firstCity.id);

    return { route, totalDistance };
  }

  private findNearestCity(from: City, cities: City[]): City | null {
    let nearest: City | null = null;
    let minDistance = Infinity;

    for (const city of cities) {
      if (this.visited.has(city.id)) continue;

      const dist = from.distanceTo(city);
      if (dist < minDistance) {
        minDistance = dist;
        nearest = city;
      }
    }

    return nearest;
  }
}
