import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestObject } from './test-object';
import { TestObjectController } from './test-object.controller';
import { TestObjectService } from './test-object.service';

@Module({
  imports: [TypeOrmModule.forFeature([TestObject])],
  exports: [TypeOrmModule],
  providers: [TestObjectService],
  controllers: [TestObjectController],
})
export class TestObjectModule {}
