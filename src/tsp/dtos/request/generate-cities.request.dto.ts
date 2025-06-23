import { IsInt, Min } from 'class-validator';

export class GenerateCitiesRequestDto {
  @IsInt()
  @Min(2) // Al menos dos ciudades para que tenga sentido el problema
  count: number;
}
