import { IsArray, ValidateNested, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CityDto {
  @IsNumber()
  id: number;

  @IsNumber()
  x: number;

  @IsNumber()
  y: number;
}

export class SolveRequestDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CityDto)
  cities: CityDto[];
}
