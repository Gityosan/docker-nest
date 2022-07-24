import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormConfig from '../ormconfig';
import { TestObjectModule } from './test-object/test-object.module';
@Module({
  imports: [TypeOrmModule.forRoot(ormConfig), TestObjectModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
