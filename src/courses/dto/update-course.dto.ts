import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDTO } from './create-course.dto';

export class updateCourseDTO extends PartialType(CreateCourseDTO) {}
