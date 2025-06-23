import { Body, Controller, Post } from '@nestjs/common';
import { TspService } from '../tsp.service';
import { SolveRequestDto } from '../dtos/request/solve.request.dto';
import { SolveResponseDto } from '../dtos/response/solve.response.dto';
import { GenerateCitiesRequestDto } from '../dtos/request/generate-cities.request.dto';
import { GenerateCitiesResponseDto } from '../dtos/response/generate-cities.response.dto';

/**
 * The TspController class is a NestJS controller responsible for handling HTTP
 * requests. It provides endpoints for the TSP Service.
 */
@Controller('api/tsp')
export class TspController {
  constructor(private readonly tspService: TspService) {}

  @Post('solve')
  solve(@Body() payload: SolveRequestDto): SolveResponseDto {
    return this.tspService.solveTsp(payload.cities);
  }

  @Post('generate-cities')
  generateCities(
    @Body() payload: GenerateCitiesRequestDto,
  ): GenerateCitiesResponseDto {
    return this.tspService.generateCities(payload.count);
  }
}
