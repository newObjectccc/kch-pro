import { Test, TestingModule } from '@nestjs/testing';
import { ToBuserController } from './to-buser.controller';
import { ToBuserService } from './to-buser.service';

describe('ToBuserController', () => {
  let controller: ToBuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToBuserController],
      providers: [ToBuserService]
    }).compile();

    controller = module.get<ToBuserController>(ToBuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
