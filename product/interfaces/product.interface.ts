import { Document } from 'mongoose';

export interface Product extends Document {
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
  readonly status: boolean;
  readonly description: string;
  readonly price: number;
  readonly createdAt: Date;
}
