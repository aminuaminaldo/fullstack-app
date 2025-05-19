import { IsString, IsNumber, IsOptional, Length, IsPositive, IsInt } from 'class-validator';

export class CreatePropertyDto {
  @IsString({always: true})
  @Length(1, 10, { message: 'Make sure the name is 10 characters or less' })
  readonly name: string;

  @IsInt({always: true})
  @IsPositive()
  readonly area: number;

  @IsOptional()
  @IsString()
  @Length(0, 5, { groups: ['create'] })
  @Length(10, 50, { groups: ['update'] })
  readonly description?: string;
}
