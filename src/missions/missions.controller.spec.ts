import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { MissionsController } from './missions.controller';
import { MissionsService } from './missions.service';
import { AirtableModule } from '../airtable/airtable.module';
import { Mission } from './entities/mission.entity';

describe('MissionsController', () => {
  let controller: MissionsController;
  let service: MissionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MissionsController],
      providers: [MissionsService],
      imports: [ConfigModule.forRoot(), AirtableModule],
    }).compile();

    controller = module.get<MissionsController>(MissionsController);
    service = module.get<MissionsService>(MissionsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of missions', async () => {
      const missions: Mission[] = [
        {
          id: '42',
          label: 'Create a website for a client',
          beginDate: new Date('2020-09-18'),
          endDate: new Date('2021-09-18'),
          missionType: 'Development',
          freelance: {
            id: '1',
            firstname: 'Michel',
            lastname: 'Cacahuete',
            email: 'michel.cacahuete@gmail.com',
          },
        },
        {
          id: '9',
          label: 'Share the new portfolio',
          beginDate: new Date('2020-09-18'),
          endDate: new Date('2021-09-18'),
          missionType: 'Community management',
          freelance: {
            id: '2',
            firstname: 'Sandy',
            lastname: 'Courgette',
            email: 'sandy.courgette@gmail.com',
          },
        },
        {
          id: '16',
          label: 'Show the project to the client',
          beginDate: new Date('2020-10-18'),
          endDate: new Date('2021-10-18'),
          missionType: 'Business',
          freelance: {
            id: '3',
            firstname: 'Laura',
            lastname: 'Choux',
            email: 'laura.choux@gmail.com',
          },
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(missions);

      expect(await controller.findAll()).toBe(missions);
    });
  });
});
