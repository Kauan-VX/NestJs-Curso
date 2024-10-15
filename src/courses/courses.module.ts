/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from 'src/models/courses.entity';

@Module({
  controllers: [CoursesController],
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CoursesService],
})
export class CoursesModule {}
