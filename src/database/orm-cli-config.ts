import { DataSource } from 'typeorm';
import { dataSoureOptions } from './database.module';
import { CreateCoursesTable1729356418968 } from 'src/migrations/1729356418968-CreateCoursesTable';
import { CreateTagsTable1729357456988 } from 'src/migrations/1729357456988-CreateTagsTable';
import { CreateCoursesTagsTable1729360681898 } from 'src/migrations/1729360681898-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagTable1729647601740 } from 'src/migrations/1729647601740-AddCoursesIdToCoursesTagTable';

export const dataSource = new DataSource({
  ...dataSoureOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1729356418968,
    CreateTagsTable1729357456988,
    CreateCoursesTagsTable1729360681898,
    AddCoursesIdToCoursesTagTable1729647601740,
  ],
});
