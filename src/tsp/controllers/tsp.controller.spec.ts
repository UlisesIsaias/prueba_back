import { Test, TestingModule } from '@nestjs/testing';
import { TspController } from './tsp.controller';
import { TspService } from '../tsp.service';

describe('TspController', () => {
  let controller: TspController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TspController],
      providers: [TspService],
    }).compile();

    controller = module.get<TspController>(TspController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
