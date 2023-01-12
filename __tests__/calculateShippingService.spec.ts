import { calculateShippingService } from "../src/services/calculateShippingService";

describe("calculateShippingService", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    });
  
    test("it should return shipping price equal 0", () => {
      const priceWithDiscount = 101
      const region = "sudeste"
  
      const response = calculateShippingService(priceWithDiscount, region)
  
      expect(response).toBe(0)
  
    });

    test("it should return shipping price equal 10", () => {
      const priceWithDiscount = 99
      const region = "sudeste"
  
      const response = calculateShippingService(priceWithDiscount, region)
  
      expect(response).toBe(10)
  
    });

    test("it should return shipping price equal 25", () => {
      const priceWithDiscount = 99
      const region = "nordeste"
  
      const response = calculateShippingService(priceWithDiscount, region)
  
      expect(response).toBe(25)
  
    });
  });