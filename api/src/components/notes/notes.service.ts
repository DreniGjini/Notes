import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrUpdateNoteInput } from './dto/createOrUpdateNoteInput';
import { Note } from './entities/note.entity';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private readonly noteRepository: Repository<Note>,
  ) {}

  async createOrUpdate(
    createOrUpdateNoteInput: CreateOrUpdateNoteInput,
  ): Promise<Note> {
    return await this.noteRepository.save({ ...createOrUpdateNoteInput });
  }

  async findAll(): Promise<Note[]> {
    return await this.noteRepository.find();
  }

  async findOne(id: string): Promise<Note> {
    return await this.noteRepository.findOne({ where: { id } });
  }

  async update(updateNoteInput: CreateOrUpdateNoteInput) {
    const { id } = updateNoteInput;
    await this.noteRepository.update(id, updateNoteInput);
    return await this.noteRepository.findOne({ where: { id } });
  }

  async remove(id: string) {
    await this.noteRepository.delete({ id });
    return id;
  }
}
