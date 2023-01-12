import { DatabaseProductsInterface } from "src/interfaces/database-products-interface"

export function calculateDiscountService(products: DatabaseProductsInterface[]): number {
    var sumPrice = products.reduce(function (accumulator, object) {
      return accumulator + object.price
    }, 0)
  
    if (products.length === 2) {
      return sumPrice * 0.9
  
    }
    if (products.length >= 3) {
      return sumPrice * 0.8
    } else {
      return sumPrice
    }
  }