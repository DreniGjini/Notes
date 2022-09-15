import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NotesService } from './notes.service';
import { Note } from './entities/note.entity';
import { CreateOrUpdateNoteInput } from './dto/createOrUpdateNoteInput';

@Resolver(() => Note)
export class NotesResolver {
  constructor(private readonly notesService: NotesService) {}

  @Mutation(() => Note, { name: 'saveNote' })
  async saveNote(
    @Args('createOrUpdateNoteInput')
    createOrUpdateNoteInput: CreateOrUpdateNoteInput,
  ) {
    if (!createOrUpdateNoteInput.id)
      return await this.notesService.createOrUpdate(createOrUpdateNoteInput);

    return await this.notesService.update({ ...createOrUpdateNoteInput });
  }

  @Mutation(() => [Note], { name: 'saveNotes' })
  saveNotes(
    @Args({ name: 'updateNoteInputs', type: () => [CreateOrUpdateNoteInput] })
    updateNoteInputs: CreateOrUpdateNoteInput[],
  ) {
    return updateNoteInputs.map(async (el: CreateOrUpdateNoteInput) => {
      {
        return await this.notesService.update({ ...el });
      }
    });
  }

  @Query(() => [Note], { name: 'getNotes' })
  async getNotes() {
    return await this.notesService.findAll();
  }

  @Query(() => Note, { name: 'getNote' })
  async findOne(@Args('id') id: string) {
    return await this.notesService.findOne(id);
  }

  @Mutation(() => String)
  async removeNote(@Args('id') id: string) {
    return await this.notesService.remove(id);
  }
}
