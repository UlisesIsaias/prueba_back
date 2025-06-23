export class GenerateCitiesResponseDto {
    cities: { id: number; x: number; y: number }[];
  
    constructor(cities: { id: number; x: number; y: number }[]) {
      this.cities = cities;
    }
  }
  