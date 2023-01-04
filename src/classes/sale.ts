import { DatabaseProductsInterface } from "../interfaces/database-products-interface";
import { DatabaseSaleInterface } from "../interfaces/database-sale-interface";

export class Sale
    implements DatabaseSaleInterface {
    client: string;
    cep: string;
    saleItem: DatabaseProductsInterface[]

    constructor(client: string, cep: string, saleItem: DatabaseProductsInterface[]) {
        this.client = client;
        this.cep = cep;
        this.saleItem = saleItem
    }
}