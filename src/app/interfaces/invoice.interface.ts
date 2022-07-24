import Product from "./product.interface";

export interface Invoice {
  total?: number,
  lines: {
    name: string,
    price: number,
    qty: number,
  }[]
}

export interface InvoiceLine {
  qty: number,
  product: Product
}

