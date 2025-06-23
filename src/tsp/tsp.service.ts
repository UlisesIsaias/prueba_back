import { Injectable } from '@nestjs/common';
import { City } from './domain/tsp-solver/city';
import { TSPSolver } from './domain/tsp-solver/tsp-solver';
import { SolveResponseDto } from './dtos/response/solve.response.dto';
import { GenerateCitiesResponseDto } from './dtos/response/generate-cities.response.dto';

@Injectable()
export class TspService {
  solveTsp(citiesInput: { id: number; x: number; y: number }[]): SolveResponseDto {
    const cities = citiesInput.map(c => new City(c.id, c.x, c.y));
    const solver = new TSPSolver();
    const result = solver.solve(cities);

    return new SolveResponseDto(result.route, result.totalDistance);
  }

  generateCities(count: number): GenerateCitiesResponseDto {
    const cities = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    }));

    return new GenerateCitiesResponseDto(cities);
  }
}
