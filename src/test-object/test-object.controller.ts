import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TestObject } from './test-object';
import { CreateTestDataDTO, UpdateTestDataDTO } from './test-object.dto';
import { TestObjectService } from './test-object.service';

@Controller('test-object')
export class TestObjectController {
  constructor(private readonly service: TestObjectService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  all(): Promise<TestObject[]> {
    return this.service.all();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  one(@Param('id') id: number): Promise<TestObject> {
    return this.service.one(id);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createTestDataDto: CreateTestDataDTO,
  ): Promise<TestObject> {
    return this.service.create(createTestDataDto);
  }

  @Put('update/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async update(
    @Param('id') id: number,
    @Body() updateTestDataDto: UpdateTestDataDTO,
  ): Promise<void> {
    this.service.update(id, updateTestDataDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: number): Promise<void> {
    this.service.remove(id);
  }
}
