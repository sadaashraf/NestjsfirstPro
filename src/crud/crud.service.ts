import { Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { Repository } from 'typeorm';
import { Crud } from './entities/crud.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CrudService {
  constructor(
    @InjectRepository(Crud)
    private readonly crudRepository: Repository<Crud>,
  ) { }
  create(createCrudDto: CreateCrudDto) {
    const crud = this.crudRepository.create(createCrudDto)
    return this.crudRepository.save(crud)
  }

  findAll() {
    const crud = this.crudRepository.find()
    return crud
  }

  findOne(id: number) {
    return `This action returns a #${id} crud`;
  }

  update(id: number, updateCrudDto: UpdateCrudDto) {
    return `This action updates a #${id} crud`;
  }

  remove(id: number) {
    return `This action removes a #${id} crud`;
  }
}
