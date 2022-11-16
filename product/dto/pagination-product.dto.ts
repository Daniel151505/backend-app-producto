import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationProductDto {
  @IsNumber()
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  offset: number;
}
