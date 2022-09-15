import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotesService } from './notes.service';
import { Note } from './entities/note.entity';
import { CreateOrUpdateNoteInput } from './dto/createOrUpdateNoteInput';
type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};
describe('NotesService', () => {
  let service: NotesService;
  const noteRepositoryMock: MockType<Repository<Note>> = {
    save: jest.fn(),
    findOne: jest.fn(),
    find: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotesService,
        {
          provide: getRepositoryToken(Note),
          useValue: noteRepositoryMock,
        },
      ],
    }).compile();
    service = module.get<NotesService>(NotesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('create', () => {
    it('should create a new note', async () => {
      const notesDto = {
        body: 'i am a note',
        pagex: 1,
        pagey: 4,
      } as CreateOrUpdateNoteInput;
      noteRepositoryMock.save.mockReturnValue(notesDto);
      const newnote = await service.createOrUpdate(notesDto);
      expect(newnote).toMatchObject(notesDto);
      expect(noteRepositoryMock.save).toHaveBeenCalledWith(notesDto);
    });
  });
  describe('findAll', () => {
    it('should find all notes', async () => {
      const notes = [
        {
          body: 'i am a note',
          pagex: 1,
          pagey: 4,
        },
      ];
      noteRepositoryMock.find.mockReturnValue(notes);
      const foundNote = await service.findAll();
      expect(foundNote).toEqual([
        {
          body: 'i am a note',
          pagex: 1,
          pagey: 4,
        },
      ]);
      expect(noteRepositoryMock.find).toHaveBeenCalled();
    });
  });
  describe('findOne', () => {
    it('should find a note', async () => {
      const note = {
        id: '1',
        body: 'i am a note',
        pagex: 1,
        pagey: 4,
      };
      noteRepositoryMock.findOne.mockReturnValue(note);
      const foundNote = await service.findOne(note.id);
      expect(foundNote).toMatchObject(note);
      expect(noteRepositoryMock.findOne).toBeTruthy();
    });
  });
});
