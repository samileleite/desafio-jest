import { DatabaseProductsInterface } from "./database-products-interface";

export interface DatabaseSaleInterface {
    client: string;
    cep: string;
    saleItem: DatabaseProductsInterface[]
}