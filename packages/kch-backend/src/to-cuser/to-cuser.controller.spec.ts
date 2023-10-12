import { Test, TestingModule } from '@nestjs/testing';
import { ToCuserController } from './to-cuser.controller';
import { ToCuserService } from './to-cuser.service';

describe('ToCuserController', () => {
  let controller: ToCuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ToCuserController],
      providers: [ToCuserService]
    }).compile();

    controller = module.get<ToCuserController>(ToCuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
