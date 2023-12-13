import { Test, TestingModule } from '@nestjs/testing';
import { ToBuserService } from './to-buser.service';

describe('ToBuserService', () => {
  let service: ToBuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToBuserService]
    }).compile();

    service = module.get<ToBuserService>(ToBuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
