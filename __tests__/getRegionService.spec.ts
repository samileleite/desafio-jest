import { getRegionService } from "../src/services/getRegionService";

describe("getRegionService", () => {
    beforeEach(() => {
      jest.clearAllMocks()
    });
  
    test("it should return region", () => {
        const uf = "MG"
  
        const response =  getRegionService(uf)
  
        expect(response).toBe("sudeste")
  
    });

    test("it should return undefined",  () => {
        const uf = ""
  
        const response =  getRegionService(uf)
  
        expect(response).toBeUndefined()
  
    });
});