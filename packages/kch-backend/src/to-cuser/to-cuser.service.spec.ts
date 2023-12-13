import { Test, TestingModule } from '@nestjs/testing';
import { ToCuserService } from './to-cuser.service';

describe('ToCuserService', () => {
  let service: ToCuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToCuserService]
    }).compile();

    service = module.get<ToCuserService>(ToCuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
