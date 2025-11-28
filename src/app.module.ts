
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudModule } from './crud/crud.module';
import { Crud } from './crud/entities/crud.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'testdb',
      entities: [Crud],
      synchronize: true,
    }),
    CrudModule,
  ],
})
export class AppModule { }
