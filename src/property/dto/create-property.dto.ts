import {
  IsString,
  IsNumber,
  IsOptional,
  Length,
  IsPositive,
  IsInt,
} from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @Length(1, 10, { message: 'Make sure the name is 10 characters or less' })
  readonly name: string;

  @IsInt()
  @IsPositive()
  readonly area: number;

  @IsOptional()
  @IsString()
  @Length(2, 10, { groups: ['create'] })
  @Length(1, 15, { groups: ['update'] })
  readonly description?: string;
}
