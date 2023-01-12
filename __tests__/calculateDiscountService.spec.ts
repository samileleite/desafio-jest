import { calculateDiscountService } from "../src/services/calculateDiscountService";
import { products } from "../src/mocks/products";

describe("calculate discount", () => {
  test("it should calculate discount basing on quantity of products", () => {
    const listProducts = [products[0]]
    const sumPrice = calculateDiscountService(listProducts);
 
    expect(sumPrice).toBe(10);
    expect(listProducts.length).toBe(1)
  });

  test("it should give a 10% discount on purchases of two items", () => {
    const listProducts = [products[0], products[1]]
    const sumPrice = calculateDiscountService(listProducts);
 
    expect(sumPrice).toBe(27);
    expect(listProducts.length).toBe(2)
  });

  test("it should give a 20% discount on purchases over three items", () => {
    const listProducts = [products[0], products[1], products[2], products[3]]
    const sumPrice = calculateDiscountService(listProducts);
 
    expect(sumPrice).toBe(80);
    expect(listProducts.length).toBeGreaterThanOrEqual(3)
  })

  
});
