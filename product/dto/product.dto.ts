export class CreateProductDto {
  readonly name: string;
  readonly category: {
    readonly name: string;
    readonly slug: string;
  };
  readonly brand: {
    readonly name: string;
    readonly slug: string;
  };
  readonly slug: string;
  readonly description: string;
  readonly price: number;
}
