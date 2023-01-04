import { DatabaseProductsInterface } from "../interfaces/database-products-interface"

const ids = ['1', '2']
const databaseProducts = [
    {
        id: '1',
        name: 'product-1',
        price: 10.00,
        productStock: 34
    },
    {
        id: '2',
        name: 'product-2',
        price: 20.00,
        productStock: 68
    },
    {
        id: '3',
        name: 'product-3',
        price: 30.00,
        productStock: 102
    },
    {
        id: '4',
        name: 'product-4',
        price: 40.00,
        productStock: 136
    }
]


export class DatabaseMock
    implements DatabaseProductsInterface {
    id: string;
    name: string;
    price: number;
    productStock: number;

    //id: string, name: string, price: number, productStock: number
    constructor() {
        // this.id = id;
        // this.name = name;
        // this.price = price;
        // this.productStock = productStock;
    }

    getDatabaseProducts(ids: string[]): DatabaseProductsInterface[] {
        const products: DatabaseProductsInterface[] = []
        for (const id of ids) {
            const product = databaseProducts.find(item => item.id === id)
            product && products.push(product)
        }
        return products
    }

    addProduct() {
        databaseProducts.push({
            id: this.id,
            name: this.name,
            price: this.price,
            productStock: this.productStock

        })
    }

}

