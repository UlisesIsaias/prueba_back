export class SolveResponseDto {
    route: number[];
    totalDistance: number;
  
    constructor(route: number[], totalDistance: number) {
      this.route = route;
      this.totalDistance = totalDistance;
    }
  }
  