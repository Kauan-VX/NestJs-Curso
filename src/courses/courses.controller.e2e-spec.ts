import { dataSource } from './../database/orm-cli-config';
import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';
import { INestApplication } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Tag } from './entities/tags.entity';
import { CoursesModule } from './courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import request from 'supertest';

describe('CoursesController 2e2 tests', () => {
  let app: INestApplication;
  let controller: CoursesController;
  let data: any;
  let courses: Course[];
  let testingModule: TestingModule; // Renomeado

  const dataSoureTest: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'docker',
    database: 'devtraining',
    entities: [Course, Tag],
    synchronize: false,
  };

  beforeAll(async () => {
    testingModule = await Test.createTestingModule({
      imports: [
        CoursesModule,
        TypeOrmModule.forRootAsync({
          useFactory: async () => {
            return dataSoureTest;
          },
        }),
      ],
    }).compile();

    app = testingModule.createNestApplication();
    await app.init();

    data = {
      name: `Node.js`,
      description: 'Node.js',
      tags: ['nodejs', 'nestjs'],
    };
  });

  beforeEach(async () => {
    const dataSource = await new DataSource(dataSoureTest).initialize();
    const repository = dataSource.getRepository(Course);
    courses = await repository.find();
    await dataSource.destroy();
  });

  afterAll(async () => {
    await app.close(); // Use 'app.close()' para encerrar a aplicação
  });

  describe('POST /courses', () => {
    it('should create a course', async () => {
      const res = await request(app.getHttpServer())
        .post('/courses')
        .send(data)
        .expect(201);
      console.log(res.body);
    });
  });
});
