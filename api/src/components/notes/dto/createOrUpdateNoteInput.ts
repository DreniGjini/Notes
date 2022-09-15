import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateOrUpdateNoteInput {
  @Field(() => ID, { nullable: true })
  readonly id: string;

  @Field(() => Int, { nullable: true })
  pagex?: number;

  @Field(() => Int, { nullable: true })
  pagey?: number;

  @Field({ nullable: true })
  body?: string;
}
